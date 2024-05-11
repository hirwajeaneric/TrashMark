/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Store } from "../../../context/StoreContext";
import { TiDelete } from "react-icons/ti";
import { AddProductRequest, deleteProductRequest, updateProductRequest } from "../../../api/product";
import LoadingButton from "../../LoadingButton";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const productTypes = ['Home Appliance', 'Clothing', 'Shoes', 'Furniture', 'Electronics', 'Phone', 'Computer', 'Part of house', 'Cereals', 'Other food items'];

const AddProductForm = ({ selectedProduct, setSelectedProduct }) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    quantity: 0,
    unitPrice: 0.00,
    deliveryPrice: 0.00,
    addressLine1: "",
    addressLine2: "",
    imageFiles: null,
    type: "",
    category: ""
  });

  useEffect(() => {
    if (selectedProduct) {
      setProduct({
        name: selectedProduct.name,
        description: selectedProduct.description,
        quantity: selectedProduct.quantity,
        unitPrice: selectedProduct.unitPrice,
        deliveryPrice: selectedProduct.unitPrice,
        addressLine1: selectedProduct.addressLine1,
        addressLine2: selectedProduct.addressLine2,
        type: selectedProduct.type,
        category: selectedProduct.category,
        imageFiles: selectedProduct.imageFiles
      });
    }
  }, [selectedProduct])

  const { products, setProducts, handleResponseMessage } = useContext(Store);
  const [loading, setLoading] = useState(false);

  const handleImageFiles = (e) => {
    setProduct({ ...product, imageFiles: e.target.files });
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
      deliveryPrice: 0.00,
      addressLine1: "",
      addressLine2: "",
      imageFiles: null,
      type: "",
      category: ""
    });

    setSelectedProduct({});
  }

  const handleAddProductInfo = async (e) => {
    e.preventDefault();

    setLoading(true);

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
    let newImages = selectedProduct.imageFiles.filter(img => img!== image);
    console.log(newImages);
    
    setProduct({
      ...product, 
      imageFiles: newImages 
    });
    setSelectedProduct({
      ...selectedProduct, 
      imageFiles: newImages 
    });
  };

  const handleUpdateProductInfo = async (e) => {
    e.preventDefault();

    setLoading(true);

    product.imageFiles = selectedProduct.imageFiles

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
            value={product.name}
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
            min={1}
            value={product.quantity}
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
            min={500}
            value={product.unitPrice}
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
            min={500}
            value={product.deliveryPrice}
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
            name="addressLine1"
            value={product.addressLine1}
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
            value={product.addressLine2}
            onChange={handleFormInput}
            placeholder="Kigali"
            className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-between w-full items-start">
        <div className="flex flex-col w-full md:w-[32%] mb-3 md:mb-0">
          <label htmlFor="imageFile" className="block font-medium text-gray-700"> Image file(s) </label>
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
            value={product.type}
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
        <label htmlFor="description" className="block font-medium text-gray-700"> Description </label>
        <textarea
          type="text"
          id="description"
          name="description"
          value={product.description}
          onChange={handleFormInput}
          rows={4}
          placeholder="Product description ..."
          className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
        ></textarea>
      </div>


      {/* IMAGE DISPLAY  */}
      {(selectedProduct.imageFiles && selectedProduct.imageFiles.length!==0) &&
        <div className="w-full flex gap-2 flex-wrap p-2 bg-slate-300 rounded">
          {selectedProduct.imageFiles.map((image, index) => (
            <div key={index} className="flex flex-col items-center relative">
              <button type="button" onClick={() => handleDeleteImage(image)} className="absolute top-2 text-2xl right-2">
                <TiDelete className="text-red-600" />
              </button>
              <img
                key={index}
                src={`${API_BASE_URL}/images/${image}`}
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