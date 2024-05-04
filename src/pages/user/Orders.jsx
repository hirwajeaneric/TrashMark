import { Helmet } from "react-helmet-async"
import UserOrdersTable from "../../components/tables/UserOrdersTable"

const Orders = () => {
  return (
    <div className="flex w-full">
      <Helmet>
        <title>Orders - Trash Mark</title>
        <meta name='description' content='View list of orders you made TrashMark.' />
      </Helmet>
      <div className="mx-auto flex flex-col gap-4 max-w-screen-xl w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Orders</h2>
        <UserOrdersTable />
      </div>
    </div>
  )
}

export default Orders