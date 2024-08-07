import { useEffect, useState } from "react"
import FilterOptions from "../../../components/admin/FilterOptions"
import OverviewCards from "../../../components/admin/OverviewCards"
import { LineChart } from "../../../components/chart/LineChart"
import { PieChart } from "../../../components/chart/PieChart"
import { BiCalendarEdit } from "react-icons/bi"
import { getAllProductsRequest } from "../../../api/product"
import { getAllUsersRequest } from "../../../api/authentication"
import { countProductTypes, filterReportsPerMonth, filterReportsPerYear, generateMonthlyProductsStats } from "../../../utils/helperFunctions"
import ProvinceStats from "../../../components/admin/ProvinceStats"
import { productTypes } from "../../../utils/productTypes"
import { useRef } from "react"
import { useReactToPrint } from "react-to-print"
import { ReportToPrint } from "../../../components/models/ReportToPrint"

const Overview = () => {
  // Initial States *********************************************************************************
  const [stats, setStats] = useState([
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
  const [productTypeCount, setProductTypeCount] = useState([]);
  const [renewableStats, setRenewableStats] = useState([0, 0]);
  const [reportPeriod, setReportPeriod] = useState({ type: 'Year', value: 2024 });
  const [monthlyTrashRecords, setMonthlyTrashRecords] = useState([]);
  const [monthlyRenewableTrashRecords, setMonthlyRenewableTrashRecords] = useState([]);
  const [monthlyNonRenewableTrashRecords, setMonthlyNonRenewableTrashRecords] = useState([]);
  const [productsPerProvince, setProductsPerProvince] = useState({ kigali: 0, north: 0, south: 0, west: 0, east: 0 });

  /** 
   * Fetching data and executing calculations that happend on component render.
   */
  useEffect(() => {
    const fetchData = async () => {
      // Fetching systemUsers******************************************************************************************
      const { users } = await getAllUsersRequest()
      var filteredUsers = [];
      if (reportPeriod.type === 'Month') {
        filteredUsers = users.filter((client) => {
          var date = new Date(client.createdAt);
          return date.getMonth() === new Date().getMonth();
        });
      } else if (reportPeriod.type === 'Year') {
        filteredUsers = users.filter((client) => {
          var date = new Date(client.createdAt);
          return date.getFullYear() === new Date().getFullYear();
        });
      }

      // let productsFilteredByReportPeriod = [];
      // Fetching products 
      const { products } = await getAllProductsRequest();

      // Filtering by status  ******************************************************************************************
      const renewableItems = products.filter((product) => product.category === 'Renewable' && new Date(product.createdAt).getFullYear() === Number(reportPeriod.value));
      const nonRenewableItems = products.filter((product) => product.category === 'Non-renewable' && new Date(product.createdAt).getFullYear() === Number(reportPeriod.value));

      setRenewableStats([nonRenewableItems.length, renewableItems.length]);

      // Filtering by report period *************************************************************************************
      if (reportPeriod.type === 'Month') {
        let month = reportPeriod.value
        const { dataOfFilteredProducts, filteredProducts, filteredSoldTrash, productInEast, productInNorth, productInKigali, productInSouth, productInWest } = filterReportsPerMonth(products, month);

        setStats([
          {
            size: '[24%]',
            title: "Total Recorded Trash",
            value: filteredProducts,
          },
          {
            size: '[24%]',
            title: "Total Exchanged Trash",
            value: filteredSoldTrash,
          },
          {
            size: '[24%]',
            title: "Renewable Trash",
            value: renewableItems.length,
          },
          {
            size: '[24%]',
            title: "Total System Users",
            value: filteredUsers.length,
          }
        ]);

        setProductTypeCount(countProductTypes(productTypes, dataOfFilteredProducts));

        setProductsPerProvince({ kigali: productInKigali, north: productInNorth, south: productInSouth, west: productInWest, east: productInEast });
      } else if (reportPeriod.type === 'Year') {
        const { dataOfFilteredProducts, filteredProducts, filteredSoldTrash, productInEast, productInNorth, productInKigali, productInSouth, productInWest } = filterReportsPerYear(products, Number(reportPeriod.value));
        // productsFilteredByReportPeriod = filteredProducts;
        setStats([
          {
            size: '[24%]',
            title: "Total Recorded Trash",
            value: filteredProducts,
          },
          {
            size: '[24%]',
            title: "Total Exchanged Trash",
            value: filteredSoldTrash,
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

        setProductTypeCount(countProductTypes(productTypes, dataOfFilteredProducts));

        setProductsPerProvince({ kigali: productInKigali, north: productInNorth, south: productInSouth, west: productInWest, east: productInEast });
      }

      // Set monthly product statistics ********************************************************************************
      var totalProductsPerMonth = [];
      var monthlyRenewableTrash = [];
      var monthlyNonRenewableTrash = [];

      if (reportPeriod.type === 'Year') {
        totalProductsPerMonth = products.filter((product) => new Date(product.createdAt).getFullYear() === Number(reportPeriod.value));
        monthlyRenewableTrash = products.filter((product) => product.category === "Renewable" && new Date(product.createdAt).getFullYear() === Number(reportPeriod.value));
        monthlyNonRenewableTrash = products.filter((product) => product.category === "Non-renewable" && new Date(product.createdAt).getFullYear() === Number(reportPeriod.value));
      } else if (reportPeriod.type === 'Month') {
        totalProductsPerMonth = products.filter((product) => new Date(product.createdAt).getFullYear() === 2024);
        monthlyRenewableTrash = products.filter((product) => product.category === "Renewable" && new Date(product.createdAt).getFullYear() === 2024);
        monthlyNonRenewableTrash = products.filter((product) => product.category === "Non-renewable" && new Date(product.createdAt).getFullYear() === 2024);
      }

      setMonthlyTrashRecords(generateMonthlyProductsStats(totalProductsPerMonth));
      setMonthlyRenewableTrashRecords(generateMonthlyProductsStats(monthlyRenewableTrash));
      setMonthlyNonRenewableTrashRecords(generateMonthlyProductsStats(monthlyNonRenewableTrash));
    }

    fetchData();
  }, [reportPeriod]);

  // Configuration of report printing
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="flex justify-between items-center flex-wrap mb-6 gap-3">
        <FilterOptions reportPeriod={reportPeriod} setReportPeriod={setReportPeriod} />
        <div className="flex justify-center items-center gap-3 relative">

          <button
            type="button"
            onClick={handlePrint}
            className="border-black border rounded-xl px-2 cursor-pointer hover:text-gray-700 hover:bg-gray-100">
            Print Report
          </button>

          <div className="hidden">
            <ReportToPrint
              ref={componentRef}
              reportPeriod={reportPeriod}
              stats={stats}
              productTypeCount={productTypeCount}
            />
          </div>

          <span className="flex items-center gap-2">
            <BiCalendarEdit className="font-bold text-xl" />
            {new Date().toDateString()}
          </span>

        </div>
      </div>

      {/* Overview cards */}
      <OverviewCards reportPeriod={reportPeriod} stats={stats} />

      {/* Charts  */}
      <div className="flex w-full justify-between items-start flex-wrap mt-6">
        <div className="w-full md:w-[66%] rounded-md bproduct bproduct-gray-300 p-4">
          {reportPeriod.type === 'Year' && <h2 className="text-sm font-bold mb-2">All recorded trash in {reportPeriod.value} in each month.</h2>}
          {reportPeriod.type !== 'Year' && <h2 className="text-sm font-bold mb-2">All recorded trash in {new Date().getFullYear()} in each month.</h2>}
          <LineChart
            monthlyTrashRecords={monthlyTrashRecords}
            monthlyRenewableTrashRecords={monthlyRenewableTrashRecords}
            monthlyNonRenewableTrashRecords={monthlyNonRenewableTrashRecords}
          />
        </div>
        <div className="w-full md:w-[32%] rounded-md bproduct bproduct-gray-300 p-4">
          <h2 className="text-sm font-bold mb-2">Renewable vs Non-renewable</h2>
          <PieChart renewableStats={renewableStats} />
        </div>
      </div>
      <ProvinceStats
        reportPeriod={reportPeriod}
        productsPerProvince={productsPerProvince}
      />
    </div>
  )
}

export default Overview