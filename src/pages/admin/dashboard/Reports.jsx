import { useEffect, useState } from "react";
import { FetchSellerRequest } from "../../../api/authentication";

const Reports = () => {
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
        <h1 className="text-2xl font-bold">Reports</h1>
      </div>
      
    </div>
  )
}

export default Reports