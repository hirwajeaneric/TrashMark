import { useEffect, useState } from "react";
import UsersTable from "../../components/tables/UsersTable";

const Sellers = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([]);
  }, []);

  return (
    <div className="w-full">
      <div className="flex mb-6 justify-between">
        <h1 className="text-2xl font-bold">Sellers</h1>
      </div>
      <UsersTable data={data} />
    </div>
  )
}

export default Sellers