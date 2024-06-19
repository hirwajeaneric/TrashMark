/* eslint-disable react/prop-types */
const SortComponent = ({ handleSortOptions}) => {
  return (
    <div>
      <label htmlFor="SortBy" className="block text-xs font-medium text-gray-700"> Sort By </label>
      <select name="sortOptions" onChange={handleSortOptions} id="SortBy" className="mt-1 rounded border-gray-300 text-sm">
        <option value="">Sort By</option>
        <option value="Name_DESC">Name, DESC</option>
        <option value="Name_ASC">Name, ASC</option>
        <option value="Price_DESC">Price, DESC</option>
        <option value="Price_ASC">Price, ASC</option>
      </select>
    </div>
  )
}

export default SortComponent