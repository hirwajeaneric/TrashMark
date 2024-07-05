import { useEffect, useState } from "react"
import { LineChart } from "../../../components/chart/LineChart"
import { getAllProductsRequest } from "../../../api/product";
import { generateMonthlyProductsStats } from "../../../utils/helperFunctions";

const StatsForEast = () => {
  const [monthlyTrashRecords, setMonthlyTrashRecords] = useState([]);
  const [monthlyRenewableTrashRecords, setMonthlyRenewableTrashRecords] = useState([]);
  const [monthlyNonRenewableTrashRecords, setMonthlyNonRenewableTrashRecords] = useState([]);

  useEffect(() => {
    getAllProductsRequest()
      .then((response) => {
        // Set monthly product statistics
        const monthlyRenewableTrash = response.products.filter((product) =>  product.category === "Renewable" && product.province === 'East');
        const monthlyNonRenewableTrash = response.products.filter((product) =>  product.category === "Non-renewable" && product.province === 'East');

        setMonthlyTrashRecords(generateMonthlyProductsStats(response.products));
        setMonthlyRenewableTrashRecords(generateMonthlyProductsStats(monthlyRenewableTrash));
        setMonthlyNonRenewableTrashRecords(generateMonthlyProductsStats(monthlyNonRenewableTrash));
      })
      .catch((error) => console.log('Error :', error.message));
  }, []);

  return (
    <div className="w-full rounded-md bproduct bproduct-gray-300 p-4 pt-0">
      <h2 className="text-sm font-bold mb-2">All recorded trash in Eastern province for {new Date().getFullYear()} in each month.</h2>
      <LineChart
        monthlyTrashRecords={monthlyTrashRecords}
        monthlyRenewableTrashRecords={monthlyRenewableTrashRecords}
        monthlyNonRenewableTrashRecords={monthlyNonRenewableTrashRecords}
      />
    </div>
  )
}

export default StatsForEast