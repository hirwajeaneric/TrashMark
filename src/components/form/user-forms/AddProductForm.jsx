import { useContext, useState } from "react";
import { Store } from "../../../context/StoreContext";
import { AddProductRequest } from "../../../api/product";
import LoadingButton from "../../LoadingButton";

const productTypes = ['Home Appliance', 'Clothing', 'Shoes', 'Furniture', 'Electronics', 'Phone', 'Computer', 'Part of house', 'Cereals', 'Other food items'];

const AddProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    quantity: 0,
    unitPrice: 0.00,
    addressLine1: "",
    addressLine2: "",
    imageFiles: null,
    type: "",
    category: ""
  });

  const { handleResponseMessage } = useContext(Store);
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
      addressLine1: "",
      addressLine2: "",
      imageFiles: null,
      type: "",
      category: ""
    });
  }

  const handleAddProductInfo = async (e) => {
    e.preventDefault();

    setLoading(true);

    AddProductRequest(product)
      .then((response) => {
        if (response) {
          handleResponseMessage('success', response.message);
          resetFields();
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
    <form onSubmit={handleAddProductInfo} className="flex flex-col gap-4 bg-slate-100 px-5 md:px-12 pt-5 md:pt-8 pb-12">
      <div className="flex flex-wrap justify-between w-full items-start">
        <div className="flex flex-col w-full md:w-[32%] mb-3 md:mb-0">
          <label htmlFor="productDetails" className="block font-medium text-gray-700"> Product name </label>
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
          <label htmlFor="" className="block font-medium text-gray-700"> Unit price (Rwf)</label>
          <input
            type="number"
            id="unitPrice"
            name="unitPrice"
            min={1}
            value={product.unitPrice}
            onChange={handleFormInput}
            placeholder="Unit price"
            className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-between w-full items-start">
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
          <label htmlFor="city" className="block font-medium text-gray-700"> Address Line 2 </label>
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
      </div>

      <div className="flex flex-wrap justify-between w-full items-start">
        <div className="flex flex-col w-full md:w-[32%] mb-3 md:mb-0">
          <label htmlFor="city" className="block font-medium text-gray-700"> Address Line 2 </label>
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

      {!loading ?
        <button
          type="submit"
          className="inline-block w-min rounded border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500"
        >Add</button>
        :
        <LoadingButton size='min' />
      }
    </form>
  )
}

export default AddProductForm