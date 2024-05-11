import { useEffect, useState } from "react";
import UserPurchasesTable from "../../components/tables/UserPurchasesTable"
import { Helmet } from "react-helmet-async";
import { getAllClientOrdersRequest } from "../../api/order";

const Purchaces = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    getAllClientOrdersRequest()
    .then(response =>  {
      if (response.orders) {
        setPurchases(response.orders);
      }
    })
    .catch(error => {
      console.log(error);
    });
  },[]);

  return (
    <div className="w-full">
      <Helmet>
        <title>My Purchases - Trash Mark</title>
        <meta name='description' content='View list of purchases you made - TrashMark.' />
      </Helmet>
      <div className="mx-auto flex flex-col gap-4 max-w-screen-xl w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">My Purchases</h2>
        <UserPurchasesTable purchases={purchases} />
      </div>
    </div>
  )
}

export default Purchaces