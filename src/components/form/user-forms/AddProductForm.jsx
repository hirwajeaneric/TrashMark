/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Store } from "../../../context/StoreContext";
import { TiDelete } from "react-icons/ti";
import { AddProductRequest, deleteProductRequest, updateProductRequest } from "../../../api/product";
import LoadingButton from "../../../components/other-components/LoadingButton";
import { storage } from "../../../configs/firebase/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { productTypes } from "../../../utils/productTypes";

const AddProductForm = ({ selectedProduct, setSelectedProduct }) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    quantity: 0,
    unitPrice: 0.00,
    deliveryTime: 0,
    deliveryPrice: 0.00,
    addressLine1: "",
    addressLine2: "",
    perishable: true,
    sellerPhone: JSON.parse(localStorage.getItem('client')).Phone,
    sellerName: JSON.parse(localStorage.getItem('client')).firstName+" "+JSON.parse(localStorage.getItem('client')).lastName,
    imageFiles: null,
    type: "",
    category: ""
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('client'));
    if (selectedProduct) {
      setProduct({
        name: selectedProduct.name,
        description: selectedProduct.description,
        quantity: selectedProduct.quantity,
        unitPrice: selectedProduct.unitPrice,
        deliveryPrice: selectedProduct.deliveryPrice,
        deliveryTime: selectedProduct.deliveryTime,
        sellerPhone: user.phone || selectedProduct.sellerPhone,
        sellerName: user.firstName+" "+user.lastName || selectedProduct.sellerName,
        addressLine1: selectedProduct.addressLine1,
        addressLine2: selectedProduct.addressLine2,
        perishable: selectedProduct.perishable,
        type: selectedProduct.type,
        category: selectedProduct.category,
        imageFiles: selectedProduct.imageFiles
      });
    }
  }, [selectedProduct]);


  const { products, setProducts, handleResponseMessage } = useContext(Store);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [imageUploadProgress, setImageUploadProgress] = useState(0);

  const uploadToFirebase = (files) => {
    return Promise.all(files.map(async (file) => {
      if (!files) return;

      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      return new Promise((resolve, reject) => {
        uploadTask.on("state_changed", (snapshot) => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setImageUploadProgress(progress);
        },
          (error) => {
            reject(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref)
              .then((downloadURL) => {
                // console.log(downloadURL);
                resolve(downloadURL);
              })
              .catch((error) => {
                reject(error);
              });
          });
      });
    }));
  };

  const handleImageFiles = (e) => {
    e.preventDefault();

    const files = Object.values(e.target.files).filter((file) => file.type.startsWith("image/"));

    uploadToFirebase(files)
      .then((uploaded) => {
        if (product.imageFiles) {
          let updatedImages = uploaded.concat(product.imageFiles);
          setImages(updatedImages);
        } else {
          setImages(uploaded);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const resetFields = () => {
    setProduct({
      name: "",
      description: "",
      quantity: 0,
      unitPrice: 0.00,
      deliveryTime: 0,
      deliveryPrice: 0.00,
      addressLine1: "",
      addressLine2: "",
      perishable: false,
      imageFiles: null,
      type: "",
      category: ""
    });

    setSelectedProduct({});
  }

  const handleAddProductInfo = async (e) => {
    e.preventDefault();

    setLoading(true);

    product.imageFiles = images;
    console.log(product);

    AddProductRequest(product)
      .then((response) => {
        if (response) {
          handleResponseMessage('success', response.message);
          resetFields();

          let userProducts = products.userProducts;
          userProducts.push(response.product);

          setProducts({
            userProducts: userProducts,
            availableProducts: products.availableProducts,
          });
        }
      })
      .catch(error => {
        handleResponseMessage('error', error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDeleteImage = (image) => {
    const newImages = selectedProduct.imageFiles.filter(img => img !== image);
    setImages(newImages);

    setSelectedProduct({
      ...selectedProduct,
      imageFiles: newImages
    });
  };

  const handleUpdateProductInfo = async (e) => {
    e.preventDefault();

    setLoading(true);
    if (images) {
      product.imageFiles = images;
    } else {
      product.imageFiles = selectedProduct.imageFiles
    }

    updateProductRequest(product, selectedProduct._id)
      .then((response) => {
        if (response) {
          handleResponseMessage('success', response.message);
          resetFields();

          let userProducts = products.userProducts;
          userProducts.push(response.product);

          setProducts({
            userProducts: userProducts,
            availableProducts: products.availableProducts,
          });
        }
      })
      .catch(error => {
        handleResponseMessage('error', error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDeleteProduct = async (e) => {
    e.preventDefault();

    setLoading(true);

    deleteProductRequest(selectedProduct._id)
      .then((response) => {
        if (response) {
          handleResponseMessage('success', response.message);
          resetFields();

          let userProducts = products.userProducts.filter(element => element._id !== product._id);

          setProducts({
            userProducts: userProducts,
            availableProducts: products.availableProducts,
          });
        }
      })
      .catch(error => {
        handleResponseMessage('error', error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form
      onSubmit={!selectedProduct._id ? handleAddProductInfo : handleUpdateProductInfo}
      className="flex flex-col gap-4 bg-slate-100 px-5 md:px-12 pt-5 md:pt-8 pb-12"
    >
      <div className="flex flex-wrap justify-between w-full items-start">
        <div className="flex flex-col w-full md:w-[32%] mb-3 md:mb-0">
          <label htmlFor="name" className="block font-medium text-gray-700"> Product name </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={product.name || ""}
            onChange={handleFormInput}
            placeholder="Computer"
            className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
        <div className="flex flex-col w-full md:w-[32%] mb-3 md:mb-0">
          <label htmlFor="quantity" className="block font-medium text-gray-700"> Quantity </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            required
            min={1}
            value={product.quantity || ""}
            onChange={handleFormInput}
            placeholder="Quantity"
            className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
        <div className="flex flex-col w-full md:w-[32%] mb-3 md:mb-0">
          <label htmlFor="unitPrice" className="block font-medium text-gray-700"> Unit price (Rwf)</label>
          <input
            type="number"
            id="unitPrice"
            name="unitPrice"
            required
            min={500}
            value={product.unitPrice || ""}
            onChange={handleFormInput}
            placeholder="Unit price"
            className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-between w-full items-start">
        <div className="flex flex-col w-full md:w-[32%] mb-3 md:mb-0">
          <label htmlFor="deliveryPrice" className="block font-medium text-gray-700"> Delivery price (Rwf)</label>
          <input
            type="number"
            id="deliveryPrice"
            name="deliveryPrice"
            required
            min={500}
            value={product.deliveryPrice || ""}
            onChange={handleFormInput}
            placeholder="Unit price"
            className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
        <div className="flex flex-col w-full md:w-[32%] mb-3 md:mb-0">
          <label htmlFor="addressLine1" className="block font-medium text-gray-700"> Address Line 1 </label>
          <input
            type="text"
            id="addressLine1"
            required
            name="addressLine1"
            value={product.addressLine1 || ""}
            onChange={handleFormInput}
            placeholder="KG 123 St"
            className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
        <div className="flex flex-col w-full md:w-[32%] mb-3 md:mb-0">
          <label htmlFor="addressLine2" className="block font-medium text-gray-700"> Address Line 2 </label>
          <input
            type="text"
            id="addressLine2"
            name="addressLine2"
            value={product.addressLine2 || ""}
            onChange={handleFormInput}
            placeholder="Kigali"
            className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-between w-full items-start">
        <div className="flex flex-col w-full md:w-[32%] mb-3 md:mb-0">
          <label htmlFor="imageFile" className="block font-medium text-gray-700">
            Image file(s)&nbsp;
            {imageUploadProgress !== 0 &&
              <span className="text-sm text-green-600">
                Uploading {imageUploadProgress} %
              </span>}
          </label>
          <input
            type="file"
            multiple
            accept="png, gif, jpg, jpeg"
            id="imageFiles"
            name="imageFiles"
            onChange={handleImageFiles}
            className="mt-1 w-full py-2 px-3 rounded-md border-slate-600 shadow-sm sm:text-sm"
          />
        </div>
        <div className="flex flex-col w-full md:w-[32%] mb-3 md:mb-0">
          <label htmlFor="type" className="block font-medium text-gray-700"> Product type </label>
          <select
            id="type"
            name="type"
            required
            value={product.type || ""}
            onChange={handleFormInput}
            className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
          >
            <option value="">Select product type</option>
            {productTypes.map((product, index) => (
              <option key={index} value={product}>{product}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col w-full md:w-[32%] mb-3 md:mb-0">
          <p>Category</p>
          <div className="flex gap-4 py-2">
            <label htmlFor="renewable" className="font-medium text-gray-700 inline">
              Renewable &nbsp;
              <input
                type="radio"
                name="category"
                required
                id="renewable"
                checked={product.category == "Renewable"}
                value={"Renewable"}
                onChange={handleFormInput}
              />
            </label>
            <label htmlFor="non-renewable" className="font-medium text-gray-700 inline">
              Non-renewable &nbsp;
              <input
                type="radio"
                name="category"
                required
                id="non-renewable"
                checked={product.category == "Non-renewable"}
                value={"Non-renewable"}
                onChange={handleFormInput}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between w-full items-start">
        <div className="flex flex-col w-full md:w-[32%] mb-3 md:mb-0">
          <p>Perishable</p>
          <div className="flex gap-4 py-2">
            <label htmlFor="perishable" className="font-medium text-gray-700 inline">
              Yes &nbsp;
              <input
                type="radio"
                name="perishable"
                required
                id="perishable"
                checked={product.perishable || ""}
                onChange={() => setProduct({ ...product, perishable: true})}
              />
            </label>
            <label htmlFor="non-perishable" className="font-medium text-gray-700 inline">
              No &nbsp;
              <input
                type="radio"
                name="perishable"
                required
                id="non-perishable"
                checked={!product.perishable || ""}
                onChange={() => setProduct({ ...product, perishable: false})}
              />
            </label>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-[32%] mb-3 md:mb-0">
          <label htmlFor="deliveryTime" className="block font-medium text-gray-700"> Delivery time (minutes)</label>
          <input
            type="number"
            id="deliveryTime"
            required
            min={1}
            name="deliveryTime"
            value={product.deliveryTime || ""}
            onChange={handleFormInput}
            placeholder={20}
            className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
        <div className="flex flex-col w-full md:w-[32%] mb-3 md:mb-0">
          <label htmlFor="sellerPhone" className="block font-medium text-gray-700"> Your phone number </label>
          <input
            type="text"
            id="sellerPhone"
            minLength={10}
            required
            maxLength={10}
            name="sellerPhone"
            value={product.sellerPhone || ""}
            onChange={handleFormInput}
            placeholder="07xxxxxxxx"
            className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-between w-full items-start">
        <label htmlFor="description" className="block font-medium text-gray-700"> Description </label>
        <textarea
          type="text"
          id="description"
          required
          name="description"
          value={product.description || ""}
          onChange={handleFormInput}
          rows={4}
          placeholder="Product description ..."
          className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
        ></textarea>
      </div>


      {/* IMAGE DISPLAY  */}
      {(selectedProduct.imageFiles && selectedProduct.imageFiles.length !== 0) &&
        <div className="w-full flex gap-2 flex-wrap p-2 bg-slate-300 rounded">
          {selectedProduct.imageFiles.map((image, index) => (
            <div key={index} className="flex flex-col items-center relative">
              <button type="button" onClick={() => handleDeleteImage(image)} className="absolute top-2 text-2xl right-2">
                <TiDelete className="text-red-600" />
              </button>
              <img
                key={index}
                src={image}
                alt={""}
                className="w-48 h-48 object-cover"
              />
            </div>
          ))}
        </div>}


      {/* CONTROL BUTTONS  */}
      <div className="flex flex-wrap gap-2 justify-between">
        {!loading ?
          <button
            type="submit"
            className="inline-block w-[48%] sm:w-min rounded bg-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-green-400 focus:outline-none"
          >
            {!selectedProduct._id ? "Add" : "Update"}
          </button>
          :
          <LoadingButton size='min' />
        }
        <button
          type="button"
          onClick={resetFields}
          className="inline-block w-[48%] sm:w-min rounded border bg-black px-12 py-3 text-sm font-medium text-white hover:bg-slate-600 focus:outline-none focus:ring active:text-slate-500"
        >
          Clear
        </button>

        {selectedProduct._id && <button
          type="button"
          onClick={handleDeleteProduct}
          className="inline-block w-[48%] sm:w-min rounded border bg-red-500 px-12 py-3 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus:ring active:text-red-500"
        >
          Delete
        </button>}
      </div>
    </form>
  )
}

export default AddProductForm