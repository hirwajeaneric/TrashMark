const SortComponent = () => {
  return (
    <div>
      <label htmlFor="SortBy" className="block text-xs font-medium text-gray-700"> Sort By </label>

      <select id="SortBy" className="mt-1 rounded border-gray-300 text-sm">
        <option>Sort By</option>
        <option value="Title, DESC">Title, DESC</option>
        <option value="Title, ASC">Title, ASC</option>
        <option value="Price, DESC">Price, DESC</option>
        <option value="Price, ASC">Price, ASC</option>
      </select>
    </div>
  )
}

export default SortComponent