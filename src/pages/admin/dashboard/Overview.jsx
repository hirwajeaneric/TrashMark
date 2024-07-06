import { useEffect, useState } from "react"
import FilterOptions from "../../../components/admin/FilterOptions"
import OverviewCards from "../../../components/admin/OverviewCards"
import { LineChart } from "../../../components/chart/LineChart"
import { PieChart } from "../../../components/chart/PieChart"
import { BiCalendarEdit } from "react-icons/bi"
import { getAllProductsRequest } from "../../../api/product"
import { getAllUsersRequest } from "../../../api/authentication"
import { generateMonthlyProductsStats } from "../../../utils/helperFunctions"
import ProvinceStats from "../../../components/admin/ProvinceStats"

const Overview = () => {
  const [stats, setStats] = useState([]);
  const [renewableStats, setRenewableStats] = useState([]);
  const [reportPeriod, setReportPeriod] = useState({type: 'Year', value: 2024});
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
          if (reportPeriod.type === 'Month') {
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

          } else if (reportPeriod.type === 'Year') {
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
          const totalProductsPerMonth = response.products.filter((product) => new Date(product.createdAt).getFullYear() === Number(reportPeriod.value));
          const monthlyRenewableTrash = response.products.filter((product) => product.category === "Renewable" && new Date(product.createdAt).getFullYear() === Number(reportPeriod.value));
          const monthlyNonRenewableTrash = response.products.filter((product) => product.category === "Non-renewable" && new Date(product.createdAt).getFullYear() === Number(reportPeriod.value));

          setMonthlyTrashRecords(generateMonthlyProductsStats(totalProductsPerMonth));
          setMonthlyRenewableTrashRecords(generateMonthlyProductsStats(monthlyRenewableTrash));
          setMonthlyNonRenewableTrashRecords(generateMonthlyProductsStats(monthlyNonRenewableTrash));

          // Fetching systemUsers 
          getAllUsersRequest()
            .then((response) => {
              if (response.users) {
                var systemUsers = [];
                if (reportPeriod.type === 'Month') {
                  systemUsers = response.users.filter((client) => {
                    var date = new Date(client.createdAt);
                    return date.getMonth() === new Date().getMonth();
                  });
                } else if (reportPeriod.type === 'Year') {
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
          const renewableItems = response.products.filter((product) => product.category === 'Renewable' && new Date(product.createdAt).getFullYear() === Number(reportPeriod.value));
          const nonRenewableItems = response.products.filter((product) => product.category === 'Non-renewable' && new Date(product.createdAt).getFullYear() === Number(reportPeriod.value));

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
    <div className="flex flex-col flex-1 w-full">
      <div className="flex justify-between">
        <FilterOptions reportPeriod={reportPeriod} setReportPeriod={setReportPeriod} />
        
        <span className="flex items-center gap-2">
          <BiCalendarEdit className="font-bold text-xl" />
          {new Date().toDateString()}
        </span>
      </div>
      <OverviewCards reportPeriod={reportPeriod} stats={stats} />
      <div className="flex w-full justify-between items-start flex-wrap mt-6">
        <div className="w-full md:w-[66%] rounded-md bproduct bproduct-gray-300 p-4">
          <h2 className="text-sm font-bold mb-2">All recorded trash in {reportPeriod.value} in each month.</h2>
          <LineChart 
            monthlyTrashRecords={monthlyTrashRecords} 
            monthlyRenewableTrashRecords={monthlyRenewableTrashRecords}  
            monthlyNonRenewableTrashRecords={monthlyNonRenewableTrashRecords}
          />
        </div>
        <div className="w-full md:w-[32%] rounded-md bproduct bproduct-gray-300 p-4">
          <h2 className="text-sm font-bold mb-2">Renewable vs Non-renewable</h2>
          <PieChart renewableStats={renewableStats}/>
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