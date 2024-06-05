import { useEffect, useState } from "react"
import TrashTable from "../../components/tables/TrashTable"

const SoldTrash = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([]);
  },[]);

  return (
    <div className="w-full">
    <div className="flex mb-6 justify-between">
      <h1 className="text-2xl font-bold">Sold Trash</h1>
    </div>
      <TrashTable data={data}/>
    </div>
  )
}

export default SoldTrash