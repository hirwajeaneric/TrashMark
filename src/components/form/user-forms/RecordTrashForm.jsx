/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Store } from "../../../context/StoreContext";
import { AddProductRequest, deleteProductRequest, updateProductRequest } from "../../../api/product";
import LoadingButton from "../../other-components/LoadingButton";
import { productTypes } from "../../../utils/productTypes";

const RecordTrashForm = ({ selectedProduct, setSelectedProduct }) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    quantity: 0,
    unitPrice: 0.00,
    deliveryTime: 0,
    deliveryPrice: 0.00,
    province: "",
    district: "",
    sellerPhone: "",
    sellerName: "",
    perishable: false,
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
        province: selectedProduct.province,
        district: selectedProduct.district,
        perishable: selectedProduct.perishable,
        type: selectedProduct.type,
        category: selectedProduct.category,
        imageFiles: selectedProduct.imageFiles
      });
    }
  }, [selectedProduct]);

  const { products, setProducts, handleResponseMessage } = useContext(Store);
  const [loading, setLoading] = useState(false);
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
      sellerPhone: "",
      sellerName: "",
      province: "",
      district: "",
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

  const handleUpdateProductInfo = async (e) => {
    e.preventDefault();

    setLoading(true);

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
          <label htmlFor="name" className="block font-medium text-gray-700"> Item name </label>
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
          <label htmlFor="quantity" className="block font-medium text-gray-700">Estimated Quantity <span className="text-sm text-zinc-600">(Kg)</span></label>
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
          <label htmlFor="province" className="block font-medium text-gray-700"> Province </label>
          <input
            type="text"
            id="province"
            required
            name="province"
            value={product.province || ""}
            onChange={handleFormInput}
            placeholder="KG 123 St"
            className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-between w-full items-start">
        <div className="flex flex-col w-full md:w-[32%] mb-3 md:mb-0">
          <label htmlFor="district" className="block font-medium text-gray-700"> District </label>
          <input
            type="text"
            id="district"
            name="district"
            value={product.district || ""}
            onChange={handleFormInput}
            placeholder="Kigali"
            className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
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

      <div className="flex flex-wrap justify-start md:gap-5 w-full items-start">
        <div className="flex flex-col w-full md:w-[32%] mb-3 md:mb-0">
          <p>Perishable</p>
          <div className="flex gap-4 py-2">
            <label htmlFor="perishable" className="font-medium text-gray-700 inline">
              Yes &nbsp;
              <input
                type="radio"
                name="perishable"
                required
                id="renewable"
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

export default RecordTrashForm      