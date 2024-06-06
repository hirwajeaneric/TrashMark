import OverviewCards from "../../../components/admin/OverviewCards"
import { LineChart } from "../../../components/chart/LineChart"
import { PieChart } from "../../../components/chart/PieChart"
import FilterOptions from "./FilterOptions"

const Overview = () => {
  return (
    <div className="flex flex-col flex-1 w-full">
      <FilterOptions />
      <OverviewCards />
      <div className="flex w-full justify-between items-start flex-wrap mt-6">
        <div className="w-full md:w-[66%] rounded-md border border-gray-300 p-4">
          <h2 className="text-sm font-bold mb-2">Trash Pickups per Month</h2>
          <LineChart />
        </div>
        <div className="w-full md:w-[32%] rounded-md border border-gray-300 p-4">
          <h2 className="text-sm font-bold mb-2">Renewable vs non-renewable trash</h2>
          <PieChart />
        </div>
      </div>
    </div>
  )
}

export default Overview