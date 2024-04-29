import { useEffect, useState } from "react";
import UserPurchasesTable from "../../components/tables/UserPurchasesTable"

const Purchaces = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    setPurchases([
      {
        name: "Bike",
        imageFile: "http://localhost:5173/3211-2_TOP-3_stitched-trial_P04_front-wheel.jpg",
        description: "Lorem ispum dolor sit amet, consectetur adipiscing el",
        quantity: 2,
        amount: 50000,
        deliveryStatus: {
          client: "Recieved",
          seller: "Delivered"
        }
      }
    ]);
  },[]);

  return (
    <div className="w-full">
      <div className="mx-auto flex flex-col gap-4 max-w-screen-xl w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h2 className="text-3xl font-bold">My Purchases</h2>
        <UserPurchasesTable purchases={purchases} />
      </div>
    </div>
  )
}

export default Purchaces