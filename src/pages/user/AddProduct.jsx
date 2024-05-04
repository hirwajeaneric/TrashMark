import { useEffect, useState } from "react";
import AddProductForm from "../../components/form/user-forms/AddProductForm"
import UserProductsTable from "../../components/tables/UserProductTable"

const AddProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      {
        id: "23023z0ksdf08aj40sadfn0834034",
        name: "Bike",
        imageFile: "http://localhost:5173/3211-2_TOP-3_stitched-trial_P04_front-wheel.jpg",
        description: "Lorem ispum dolor sit amet, consectetur adipiscing el",
        quantity: 2,
        unitPrice: 50000,
        totalPrice: 100000,
        deliveryStatus: {
          client: "Recieved",
          seller: "Delivered"
        }
      }
    ]);
  }, []);

  const handleProduct = (e) => {
    e.preventDefault();


  }

  return (
    <div className="flex w-full">
      <div className="mx-auto flex flex-col gap-4 max-w-screen-xl w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">Manage Products</h2>
          <p className="text-sm text-slate-700">Add and manage your products</p>
        </div>
        {/* <h2 className="text-xl text-gray-600 font-bold">Add/Update product</h2> */}
        <AddProductForm handleProduct={handleProduct}/>
        <h2 className="text-xl text-gray-600 font-bold">My product</h2>
        <UserProductsTable products={products}/>
      </div>
    </div>
  )
}

export default AddProduct