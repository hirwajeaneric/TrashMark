import { useEffect, useState } from "react";
import { FetchSellerRequest } from "../../../api/authentication";
import FilterOptions from "./FilterOptions";

const Reports = () => {
  const [data, setData] = useState([]);
  const [reportType, setReportType] = useState("");
  useEffect(() => {
    FetchSellerRequest()
      .then((response) => {
        setData(response.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full">
      <div className="flex mb-6 justify-between">
        <h1 className="text-2xl font-bold">Report</h1>
      </div>
      <h2>Time frame</h2>
      <FilterOptions />
      <div className="flex flex-col w-full md:w-[32%] mb-3 md:mb-0">
          <label htmlFor="quantity" className="block font-medium text-gray-700">Choose report type</label>
          <select
            type="text"
            id="reportType"
            name="reportType"
            required
            min={1}
            value={reportType || ""}
            onChange={(e) => { setReportType(e.target.value)}}
            placeholder="Quantity"
            className="mt-1 w-full py-2 px-3 rounded-md border border-slate-300 sm:text-sm"
          >
            <option value="">Select</option>
            <option value="trash">Trash</option>
            <option value="users">Users</option>
          </select>
        </div>
        <button type="submit" className="py-1 px-2 bg-black text-white rounded mt-5">Print</button>
    </div>
  )
}

export default Reports