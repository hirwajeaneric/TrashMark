import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

/* eslint-disable react/prop-types */
const FilterOptions = ({ reportPeriod, setReportPeriod }) => {
    const [searchParams, setSearchParams] = useSearchParams({});
    useEffect(() => {
        console.log(searchParams);
        setSearchParams({year: reportPeriod.value}); // Added a comma here
    }, [reportPeriod.value, searchParams, setSearchParams]);

    const handleYearChoice = (e) => {
        setReportPeriod({ type: 'Year', value: e.target.value });
        setSearchParams({ year: e.target.value });
    }
    
    const handleMonthChoice = (e) => {
        setReportPeriod({ type: 'Month', value: e.target.value });
        console.log(e.target.value,);
    }

    return (
        <div className="flex mb-6 bg-slate-200 w-fit rounded-md p-1 text-sm font-bold">
            {/* Year chooser  */}
            <button type="button" onClick={() => setReportPeriod({ type: 'Year', value: 2024 })} className={`${reportPeriod === 'Year' ? `bg-white py-1 rounded-md` : `rounded-sm`} px-2`}>Year</button>
            {reportPeriod.type === 'Year' && <select onChange={handleYearChoice} name="year" id="year" className="rounded-md mx-2 py-1 px-5">
                <option value={''}>Choose year</option>
                <option value={new Date().getFullYear()}>{new Date().getFullYear()}</option>
                <option value={new Date().getFullYear() - 1}>{new Date().getFullYear() - 1}</option>
                <option value={new Date().getFullYear() - 2}>{new Date().getFullYear() - 2}</option>
                <option value={new Date().getFullYear() - 3}>{new Date().getFullYear() - 3}</option>
                <option value={new Date().getFullYear() - 4}>{new Date().getFullYear() - 4}</option>
            </select>}
            
            {/* Month Chooser  */}
            <button type="button" onClick={() => setReportPeriod({ type: 'Month', value: 1 })} className={`${reportPeriod.type === 'Month' ? `bg-white py-1 rounded-md` : `rounded-sm`} px-2`}>Month</button>
            {reportPeriod.type === 'Month' && <select onChange={handleMonthChoice} name="month" id="month" className="rounded-md mx-2 py-1 px-5">
                <option value={""}>Choose month</option>
                <option value={1}>January</option>
                <option value={2}>February</option>
                <option value={3}>March</option>
                <option value={4}>April</option>
                <option value={5}>May</option>
                <option value={6}>June</option>
                <option value={7}>July</option>
                <option value={8}>August</option>
                <option value={9}>September</option>
                <option value={10}>October</option>
                <option value={11}>November</option>
                <option value={12}>December</option>
            </select>}

            {/* Custom duration filters */}

        </div>
    )
}

export default FilterOptions