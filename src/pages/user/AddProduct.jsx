import AddProductForm from "../../components/form/user-forms/AddProductForm"
import UserProductsTable from "../../components/tables/UserProductsTable"

const AddProduct = () => {
  const handleProduct = (e) => {
    e.preventDefault();


  }

  return (
    <div className="flex w-full">
      <div className="mx-auto flex flex-col gap-4 max-w-screen-xl w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">Manage Products</h2>
          <p>Add and manage your products</p>
        </div>
        {/* <h2 className="text-xl text-gray-600 font-bold">Add/Update product</h2> */}
        <AddProductForm handleProduct={handleProduct}/>
        <h2 className="text-xl text-gray-600 font-bold">My product</h2>
        <UserProductsTable />
      </div>
    </div>
  )
}

export default AddProduct