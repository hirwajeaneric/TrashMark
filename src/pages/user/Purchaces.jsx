import { useEffect, useState } from "react";
import UserPurchasesTable from "../../components/tables/UserPurchasesTable"
import { Helmet } from "react-helmet-async";

const Purchaces = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    setPurchases([
      {
        name: "Bike",
        imageFile: "http://localhost:5173/3211-2_TOP-3_stitched-trial_P04_front-wheel.jpg",
        description: "Lorem ispum dolor sit amet, consectetur adipiscing el",
        quantity: 2,
        unitPrice: 50000,
        totalPrice: 50000,
        deliveryStatus: {
          client: "Recieved",
          seller: "Delivered"
        }
      }
    ]);
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