/* eslint-disable react/prop-types */
const FilterOptions = ({reportPeriod, setReportPeriod}) => {
    return (
        <div className="flex mb-6 bg-slate-200 w-fit rounded-md p-1 text-sm font-bold">
            <button type="button" onClick={() => setReportPeriod('Year')} className={`${reportPeriod === 'Year' ? `bg-white py-1 rounded-md` : `rounded-sm`} px-2`}>Year</button>
            <button type="button" onClick={() => setReportPeriod('Month')} className={`${reportPeriod === 'Month' ? `bg-white py-1 rounded-md` : `rounded-sm`} px-2`}>Month</button>
            {/* <button type="button" onClick={() => setReportPeriod('Week')} className={`${reportPeriod === 'Week' ? `bg-white py-1 rounded-md` : `rounded-sm`} px-2`}>Week</button> */}
        </div>
    )
}

export default FilterOptions