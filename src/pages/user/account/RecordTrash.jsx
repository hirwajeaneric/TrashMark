import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getUserProductsRequest } from "../../../api/product";
import { Store } from "../../../context/StoreContext";
import RecordTrashForm from "../../../components/form/user-forms/RecordTrashForm";
import UserTrashTable from "../../../components/tables/UserTrashTable";

const AddTrash = () => {
  const [selectedProduct, setSelectedProduct] = useState({});
  const { handleResponseMessage, products, setProducts } = useContext(Store);

  useEffect(() => {
    getUserProductsRequest()
    .then((response) => {
      if (response) {
        var products = [];
        response.products.forEach((product) => {
          console.log(product);
          if (!product.description || !product.unitPrice) {
            products.push(product);
          }
        })
        setProducts({
          userProducts: products,
        });
      }
    })
    .catch(error => {
      handleResponseMessage('error', error.message);
    })
  }, [handleResponseMessage, setProducts]);

  return (
    <div className="flex w-full">
      <Helmet>
        <title>Record Trash - Trash Mark</title>
        <meta name='description' content='Manage your products on TrashMark.' />
      </Helmet>
      
      <div className="mx-auto flex flex-col gap-4 max-w-screen-xl w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Record Trash</h2>
          <p className="text-sm text-slate-700">Record other trash you can not sell</p>
        </div>

        <RecordTrashForm 
          selectedProduct={selectedProduct} 
          setSelectedProduct={setSelectedProduct}
        />

        <h2 className="text-xl text-gray-600 font-bold">My trash records</h2>
        <UserTrashTable 
          products={products.userProducts} 
          setSelectedProduct={setSelectedProduct}
        />
      </div>
    </div>
  )
}

export default AddTrash