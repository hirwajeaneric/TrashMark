import { useEffect, useState } from "react";
import UsersTable from "../../../components/tables/UsersTable";
import { FetchSellerRequest } from "../../../api/authentication";

const Sellers = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    FetchSellerRequest()
      .then((response) => {
        setData(response.users);
      })
      .catch((error) => {
        console.log(error);
      });
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