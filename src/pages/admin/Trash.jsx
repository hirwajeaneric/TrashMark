import { useEffect, useState } from "react"
import TrashTable from "../../components/tables/TrashTable"

const Trash = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([]);
  }, []);

  return (
    <div className="w-full">
      <div className="flex mb-6 justify-between">
        <h1 className="text-2xl font-bold">Trash</h1>
      </div>
      <TrashTable data={data} />
    </div>
  )
}

export default Trash