/* eslint-disable react/prop-types */
const FilterOptions = ({ reportPeriod, setReportPeriod }) => {
    const handleYearChoice = (e) => {
        setReportPeriod({ type: 'Year', value: e.target.value });
    }

    return (
        <div className="flex mb-6 bg-slate-200 w-fit rounded-md p-1 text-sm font-bold">
            <button type="button" onClick={() => setReportPeriod({ type: 'Year', value: '2024'})} className={`${reportPeriod === 'Year' ? `bg-white py-1 rounded-md` : `rounded-sm`} px-2`}>Year</button>

            {reportPeriod.type === 'Year' && <select onChange={handleYearChoice} name="year" id="year" className="rounded-md mx-2 py-1 px-5">
                <option value={''}>Choose year</option>
                <option value={new Date().getFullYear()}>{new Date().getFullYear()}</option>
                <option value={new Date().getFullYear() - 1}>{new Date().getFullYear() - 1}</option>
                <option value={new Date().getFullYear() - 2}>{new Date().getFullYear() - 2}</option>
                <option value={new Date().getFullYear() - 3}>{new Date().getFullYear() - 3}</option>
                <option value={new Date().getFullYear() - 4}>{new Date().getFullYear() - 4}</option>
            </select>}
            <button type="button" onClick={() => setReportPeriod({ type: 'Month' })} className={`${reportPeriod.type === 'Month' ? `bg-white py-1 rounded-md` : `rounded-sm`} px-2`}>Month</button>
            {/* <button type="button" onClick={() => setReportPeriod('Week')} className={`${reportPeriod === 'Week' ? `bg-white py-1 rounded-md` : `rounded-sm`} px-2`}>Week</button> */}
        </div>
    )
}

export default FilterOptions