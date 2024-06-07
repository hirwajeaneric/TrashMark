import { useEffect, useState } from "react";
import { FetchSellerRequest } from "../../../api/authentication";
import FilterOptions from "./FilterOptions";
import { PDFDownloadLink } from "@react-pdf/renderer";
import TrashReport from "../../../components/reports/TrashReport";
import { HiOutlineDownload } from 'react-icons/hi';
import { getMonthName } from "../../../utils/helperFunctions";

const Reports = () => {
  const [data, setData] = useState([]);
  const [reportType, setReportType] = useState("");
  const [reportPeriod, setReportPeriod] = useState('Month');

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
      
      <p className="mb-2">Month: <span className="font-bold">{getMonthName(new Date().getMonth())}</span></p>

      <label htmlFor="quantity" className="block font-medium text-gray-700 mb-1">Period</label>
      
      <FilterOptions reportPeriod={reportPeriod} setReportPeriod={setReportPeriod} />

      <div className="flex flex-col w-full md:w-[32%] mb-3 md:mb-0">
        <label htmlFor="quantity" className="block font-medium text-gray-700">Choose report type</label>
        <select
          type="text"
          id="reportType"
          name="reportType"
          required
          min={1}
          value={reportType || ""}
          onChange={(e) => { setReportType(e.target.value) }}
          placeholder="Quantity"
          className="mt-1 w-full py-2 px-3 rounded-md border border-slate-300 sm:text-sm"
        >
          <option value="">Select</option>
          <option value="Trash">Trash</option>
          <option value="Users">Users</option>
        </select>
      </div>
      {/* <button type="submit" className="py-1 px-2 bg-black text-white rounded mt-5">Print</button> */}
      <PDFDownloadLink document={<TrashReport reportPeriod={reportPeriod} reportType={reportType} />} fileName='trash.pdf'>
        <div className="flex items-center gap-2 mt-10 p-2 w-fit rounded-1xl bg-black text-white">
          <HiOutlineDownload size={14} />
          <span>Download</span>
        </div>
      </PDFDownloadLink>
    </div>
  )
}

export default Reports