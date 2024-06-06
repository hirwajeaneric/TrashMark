import { useEffect, useState } from "react"
import TrashTable from "../../../components/tables/TrashTable"
import { getAllProductsRequest } from "../../../api/product";

const Trash = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllProductsRequest()
      .then((response) => {
        console.log(response);
        setData(response.products);
      })
      .catch((error) => {
        console.log(error);
      });
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