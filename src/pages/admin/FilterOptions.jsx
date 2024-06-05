const FilterOptions = () => {
    return (
        <div className="flex mb-6 bg-slate-200 w-fit rounded-md p-1 text-sm font-bold">
            <button className="px-2 rounded-sm">Year</button>
            <button className="bg-white px-2 py-1 rounded-md">Month</button>
            <button className="px-2 rounded-sm">Week</button>
        </div>
    )
}

export default FilterOptions