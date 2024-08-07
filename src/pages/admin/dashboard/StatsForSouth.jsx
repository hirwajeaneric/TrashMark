import { useEffect, useState } from "react"
import { LineChart } from "../../../components/chart/LineChart"
import { getAllProductsRequest } from "../../../api/product";
import { generateMonthlyProductsStats } from "../../../utils/helperFunctions";
import { useSearchParams } from "react-router-dom";

const StatsForSouth = () => {
  const [year, setYear] = useState("");
  const [searchParams, setSearchParams] = useSearchParams({});

  const [monthlyTrashRecords, setMonthlyTrashRecords] = useState([]);
  const [monthlyRenewableTrashRecords, setMonthlyRenewableTrashRecords] = useState([]);
  const [monthlyNonRenewableTrashRecords, setMonthlyNonRenewableTrashRecords] = useState([]);

  useEffect(() => {
    setYear(searchParams.get('year'));
    console.log(setSearchParams);

    getAllProductsRequest()
      .then((response) => {
        // Filter products by year
        const productsByYear = response.products.filter((product) => product.createdAt.includes(year) && product.province === 'South');

        // Set monthly product statistics
        const monthlyRenewableTrash = productsByYear.filter((product) =>  product.category === "Renewable");
        const monthlyNonRenewableTrash = productsByYear.filter((product) =>  product.category === "Non-renewable");

        setMonthlyTrashRecords(generateMonthlyProductsStats(productsByYear));
        setMonthlyRenewableTrashRecords(generateMonthlyProductsStats(monthlyRenewableTrash));
        setMonthlyNonRenewableTrashRecords(generateMonthlyProductsStats(monthlyNonRenewableTrash));
      })
      .catch((error) => console.log('Error :', error.message));
  }, [searchParams, setSearchParams, year]);

  return (
    <div className="w-full rounded-md bproduct bproduct-gray-300 p-4 pt-0">
      {year > 2000 && <h2 className="text-sm font-bold mb-2">All recorded trash in South for {year} in each month.</h2>}
      {year <= 12 && <h2 className="text-sm font-bold mb-2">All recorded trash in South for {new Date().getFullYear()} in each month.</h2>}

      <LineChart
        monthlyTrashRecords={monthlyTrashRecords}
        monthlyRenewableTrashRecords={monthlyRenewableTrashRecords}
        monthlyNonRenewableTrashRecords={monthlyNonRenewableTrashRecords}
      />
    </div>
  )
}

export default StatsForSouth