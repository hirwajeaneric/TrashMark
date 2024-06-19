import { useEffect, useState } from "react"
import FilterOptions from "../../../components/admin/FilterOptions"
import OverviewCards from "../../../components/admin/OverviewCards"
import { LineChart } from "../../../components/chart/LineChart"
import { PieChart } from "../../../components/chart/PieChart"
import { BiCalendarEdit } from "react-icons/bi"
import { getAllProductsRequest } from "../../../api/product"
import { getAllUsersRequest } from "../../../api/authentication"
import { generateMonthlyProductsStats } from "../../../utils/helperFunctions"

const Overview = () => {
  const [stats, setStats] = useState([]);
  const [renewableStats, setRenewableStats] = useState([]);
  const [reportPeriod, setReportPeriod] = useState('Month');
  const [users, setUsers] = useState([]);
  const [monthlyTrashRecords, setMonthlyTrashRecords] = useState([]);
  const [monthlyRenewableTrashRecords, setMonthlyRenewableTrashRecords] = useState([]);
  const [monthlyNonRenewableTrashRecords, setMonthlyNonRenewableTrashRecords] = useState([]);

  useEffect(() => {
    // Fetching products 
    getAllProductsRequest()
      .then((response) => {
        if (response.products) {
          var products = [];
          var soldTrash = [];
          // Filtering by report period 
          if (reportPeriod === 'Month') {
            products = response.products.filter((product) => {
              var date = new Date(product.createdAt);
              return date.getMonth() === new Date().getMonth();
            });
            soldTrash = response.products.filter((product) => {
              var date = new Date(product.createdAt);
              return date.getMonth() === new Date().getMonth() && product.paid;
            })
          } else if (reportPeriod === 'Year') {
            products = response.products.filter((product) => {
              var date = new Date(product.createdAt);
              return date.getFullYear() === new Date().getFullYear();
            });
            soldTrash = response.products.filter((product) => {
              var date = new Date(product.createdAt);
              return date.getFullYear() === new Date().getFullYear() && product.paid;
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
              title: "Total Recorded Trash",
              value: products.length,
            },
            {
              title: "Total Exchanged Trash",
              value: soldTrash.length,
            },
            {
              title: "Renewable Trash",
              value: renewableItems.length,
            },
            {
              title: "Total System Users",
              value: users.length,
            }
          ]);
        } else {
          setRenewableStats([0, 0]);
          setStats([
            {
              title: "Total Recorded Trash",
              value: 0,
            },
            {
              title: "Total Exchanged Trash",
              value: 0,
            },
            {
              title: "Renewable Trash",
              value: 0,
            },
            {
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
          <h2 className="text-sm font-bold mb-2">All recorded trash in {new Date().getFullYear()} in each month.</h2>
          <LineChart 
            monthlyTrashRecords={monthlyTrashRecords} 
            monthlyRenewableTrashRecords={monthlyRenewableTrashRecords}  
            monthlyNonRenewableTrashRecords={monthlyNonRenewableTrashRecords}
          />
        </div>
        <div className="w-full md:w-[32%] rounded-md bproduct bproduct-gray-300 p-4">
          <h2 className="text-sm font-bold mb-2">Renewable vs Non-renewable</h2>
          <PieChart data={renewableStats}/>
        </div>
      </div>
    </div>
  )
}

export default Overview