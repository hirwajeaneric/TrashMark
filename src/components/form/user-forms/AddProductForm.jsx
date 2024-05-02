/* eslint-disable react/prop-types */
const AddProductForm = ({ handleProduct }) => {
  return (
    <form onSubmit={handleProduct} className="flex flex-col gap-4 bg-slate-100 px-12 pt-8 pb-12">
      <div className="flex justify-start w-full items-start gap-4">
        <div className="w-1/3">
          <label htmlFor="productDetails" className="block font-medium text-gray-700 w-1/3"> Product name </label>
          <input
            type="text"
            id="productDetails"
            placeholder="Computer"
            className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
        <div className="w-1/3">
          <label htmlFor="" className="block font-medium text-gray-700 w-1/3"> Quantity </label>
          <input
            type="number"
            id="quantity"
            placeholder="Quantity"
            className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
        <div className="w-1/3">
          <label htmlFor="" className="block font-medium text-gray-700"> Unit price (Rwf)</label>
          <input
            type="number"
            id="price"
            placeholder="Unit price"
            className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
      </div>

      <div className="flex justify-start w-full items-start gap-4">
        <div className="w-full md:w-1/3">
          <label htmlFor="addressLine1" className="block font-medium text-gray-700"> Address Line 1 </label>
          <input
            type="text"
            id="addressLine1"
            placeholder="KG 123 St"
            className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
        <div className="w-full md:w-1/3">
          <label htmlFor="city" className="block font-medium text-gray-700"> City </label>
          <input
            type="text"
            id="city"
            placeholder="Kigali"
            className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
        <div className="w-full md:w-1/3">
          <label htmlFor="imageFile" className="block font-medium text-gray-700"> Image file(s) </label>
          <input
            type="file"
            multiple
            accept="png, gif, jpg, jpeg"
            id="imageFile"
            className="mt-1 w-full py-2 px-3 rounded-md border-slate-600 shadow-sm sm:text-sm"
          />
        </div>
      </div>
      <div className="w-full md:w-full">
        <label htmlFor="description" className="block font-medium text-gray-700"> Description </label>
        <textarea
          type="text"
          id="description"
          rows={4}
          placeholder="Product description ..."
          className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
        ></textarea>
      </div>
      <button
        type="submit"
        className="inline-block w-min rounded border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500"
      >
        Add
      </button>
    </form>
  )
}

export default AddProductForm