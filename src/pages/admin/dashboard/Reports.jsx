import { useEffect, useState } from "react";
import { getAllUsersRequest } from "../../../api/authentication";
import FilterOptions from "./FilterOptions";
import { PDFDownloadLink } from "@react-pdf/renderer";
import TrashReport from "../../../components/reports/TrashReport";
import { HiOutlineDownload } from 'react-icons/hi';
import { generateMonthlyProductsStats, getMonthName } from "../../../utils/helperFunctions";
import { getAllProductsRequest } from "../../../api/product";

const Reports = () => {
  const [reportType, setReportType] = useState("");
  const [reportPeriod, setReportPeriod] = useState({type: 'Month', value: 0});
  const [stats, setStats] = useState([]);
  const [renewableStats, setRenewableStats] = useState([]);
  const [users, setUsers] = useState([]);
  const [monthlyTrashRecords, setMonthlyTrashRecords] = useState([]);
  const [monthlyRenewableTrashRecords, setMonthlyRenewableTrashRecords] = useState([]);
  const [monthlyNonRenewableTrashRecords, setMonthlyNonRenewableTrashRecords] = useState([]);
  const [productsPerProvince, setProductsPerProvince] = useState({ kigali: 0, north: 0, south: 0, west: 0, east: 0 });

  useEffect(() => {
    // Fetching products 
    getAllProductsRequest()
      .then((response) => {
        if (response.products) {
          var products = [];
          var soldTrash = [];
          var productInKigali = [];
          var productInNorth = [];
          var productInSouth = [];
          var productInWest = [];
          var productInEast = [];

          // Filtering by report period 
          if (reportPeriod === 'Month') {
            products = response.products.filter((product) => {
              var date = new Date(product.createdAt);
              return date.getMonth() === new Date().getMonth();
            });
            soldTrash = response.products.filter((product) => {
              var date = new Date(product.createdAt);
              return date.getMonth() === new Date().getMonth() && product.paid === true;
            });
            productInKigali = products.filter((product) => { 
              var date = new Date(product.createdAt);
              return date.getMonth() === new Date().getMonth() && product.province === 'Kigali City'; 
            });
            productInNorth = products.filter((product) => { 
              var date = new Date(product.createdAt);
              return date.getMonth() === new Date().getMonth() && product.province === 'North'; 
            });
            productInSouth = products.filter((product) => { 
              var date = new Date(product.createdAt);
              return date.getMonth() === new Date().getMonth() && product.province === 'South'; 
            });
            productInWest = products.filter((product) => { 
              var date = new Date(product.createdAt);
              return date.getMonth() === new Date().getMonth() && product.province === 'West'; 
            });
            productInEast = products.filter((product) => { 
              var date = new Date(product.createdAt);
              return date.getMonth() === new Date().getMonth() && product.province === 'East'; 
            });

            setProductsPerProvince({
              kigali: productInKigali.length,
              north: productInNorth.length,
              south: productInSouth.length,
              west: productInWest.length,
              east: productInEast.length
            });

          } else if (reportPeriod === 'Year') {
            products = response.products.filter((product) => {
              var date = new Date(product.createdAt);
              return date.getFullYear() === Number(reportPeriod.value);
            });
            soldTrash = response.products.filter((product) => {
              var date = new Date(product.createdAt);
              return date.getFullYear() === Number(reportPeriod.value) && product.paid;
            });
            productInKigali = products.filter((product) => { 
              var date = new Date(product.createdAt);
              return date.getFullYear() === Number(reportPeriod.value) && product.province === 'Kigali City'; 
            });
            productInNorth = products.filter((product) => { 
              var date = new Date(product.createdAt);
              return date.getFullYear() === Number(reportPeriod.value) && product.province === 'North'; 
            });
            productInSouth = products.filter((product) => { 
              var date = new Date(product.createdAt);
              return date.getFullYear() === Number(reportPeriod.value) && product.province === 'South'; 
            });
            productInWest = products.filter((product) => {
              var date = new Date(product.createdAt);
              return date.getFullYear() === Number(reportPeriod.value) && product.province === 'West';
            });
            productInEast = products.filter((product) => {
              var date = new Date(product.createdAt);
              return date.getFullYear() === Number(reportPeriod.value) && product.province === 'East';
            });

            setProductsPerProvince({
              kigali: productInKigali.length,
              north: productInNorth.length,
              south: productInSouth.length,
              west: productInWest.length,
              east: productInEast.length
            });
          }

          // Set monthly product statistics
          const monthlyRenewableTrash = response.products.filter((product) =>  product.category === "Renewable" );
          const monthlyNonRenewableTrash = response.products.filter((product) =>  product.category === "Non-renewable" );

          setMonthlyTrashRecords(generateMonthlyProductsStats(response.products));
          setMonthlyRenewableTrashRecords(generateMonthlyProductsStats(monthlyRenewableTrash));
          setMonthlyNonRenewableTrashRecords(generateMonthlyProductsStats(monthlyNonRenewableTrash));

          // Fetching systemUsers 
          getAllUsersRequest()
            .then((response) => {
              if (response.users) {
                var systemUsers = [];
                if (reportPeriod === 'Month') {
                  systemUsers = response.users.filter((client) => {
                    var date = new Date(client.createdAt);
                    return date.getMonth() === new Date().getMonth();
                  });
                } else if (reportPeriod === 'Year') {
                  systemUsers = response.users.filter((client) => {
                    var date = new Date(client.createdAt);
                    return date.getFullYear() === new Date().getFullYear();
                  });
                }
                setUsers(systemUsers);
              }
            })
            .catch((error) => console.log(error));

          // Filtering by status
          const renewableItems = response.products.filter((product) => product.category === 'Renewable');
          const nonRenewableItems = response.products.filter((product) => product.category === 'Non-renewable');

          setRenewableStats([nonRenewableItems.length, renewableItems.length]);
          setStats([
            {
              size: '[24%]',
              title: "Total Recorded Trash",
              value: products.length,
            },
            {
              size: '[24%]',
              title: "Total Exchanged Trash",
              value: soldTrash.length,
            },
            {
              size: '[24%]',
              title: "Renewable Trash",
              value: renewableItems.length,
            },
            {
              size: '[24%]',
              title: "Total System Users",
              value: users.length,
            }
          ]);
        } else {
          setRenewableStats([0, 0]);
          setStats([
            {
              size: '[24%]',
              title: "Total Recorded Trash",
              value: 0,
            },
            {
              size: '[24%]',
              title: "Total Exchanged Trash",
              value: 0,
            },
            {
              size: '[24%]',
              title: "Renewable Trash",
              value: 0,
            },
            {
              size: '[24%]',
              title: "Total System Users",
              value: 0,
            }
          ]);
        }
      })
      .catch((error) => console.log('Error :', error.message));

  }, [users.length, reportPeriod]);

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
