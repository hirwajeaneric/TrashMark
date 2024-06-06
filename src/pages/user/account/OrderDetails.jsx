/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async"
import { useEffect, useState } from "react"
import { getOrderByIdRequest } from "../../../api/order";
import { useParams } from "react-router-dom";

const OrderDetails = () => {
  const params = useParams();
  const [order, setOrder] = useState([]);
  const [product, setProduct] = useState({});
  const [client, setClient] = useState({});
  const [deliveryStatus, setDeliveryStatus] = useState({});
  const [loading, setLoading] = useState(true);
  const [productImage, setProductImage] = useState([]);

  useEffect(() => {
    getOrderByIdRequest(params.id)
      .then(response => {
        if (response.order._id) {
          setOrder(response.order);
          setProduct(response.order.products[0]);
          setClient(response.order.client);
          setDeliveryStatus(response.order.deliveryStatus);
          setProductImage(response.order.products[0].image);
          // console.log(response.order);
          setLoading(false);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex w-full">
        <div className="mx-auto flex flex-col justify-center items-center max-w-screen-xl w-full px-4 py-8 sm:px-6 sm:py-20 lg:px-8">
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex w-full">
      <Helmet>
        <title>{`Order - ${product.name} - Trash Mark`}</title>
        <meta name='description' content='View list of orders you made TrashMark.' />
      </Helmet>
      <div className="mx-auto flex flex-col gap-4 max-w-screen-xl w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Order {order._id}</h2>
        <div className="flex justify-between flex-wrap w-full gap-2">
          <div className="flex flex-col gap-2 w-full md:w-[49%] rounded-md bg-slate-100 p-5">
            <div className="flex flex-col justify-start items-start gap-1">
              <img src={productImage} alt='' className='w-auto bg-black rounded-md' />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full md:w-[49%] rounded-md bg-slate-100 p-5">
            <h3 className="text-lg font-bold">Product</h3>
            <div className="flex flex-col justify-start items-start gap-1">
              <ListItem title={'Product name'} value={product.name} position={"odd"}/>
              <ListItem title={'Delivery time'} value={`${order.deliveryTime} minutes`} position={"even"}/>
              <ListItem title={'Delivery price'} value={`${order.deliveryPrice} Rwf`} position={"odd"} />
              <ListItem title={'Paid amount'} value={`${order.totalPrice} Rwf`} position={"even"} />
              <ListItem title={'Number of items'} value={product.quantity} position={"odd"} />
              <ListItem title={'Delivery Status'} value={deliveryStatus.seller} position={"even"} />
            </div>
            <h3 className="text-lg font-bold mt-4">Client</h3>
            <div className="flex flex-col justify-start items-start gap-1">
              <ListItem title={'Name'} value={client.firstName + " " + client.lastName} position={"odd"} />
              <ListItem title={'Email'} value={client.email} position={"even"} />
              <ListItem title={'Phone'} value={client.phone} position={"odd"} />
              <ListItem title={'Address Line 1'} value={order.addressLine1} position={"even"} />
              <ListItem title={'Address Line 2'} value={order.addressLine2} position={"odd"} />
            </div>
          </div>
        </div>
        <div className="flex gap-2">
        <button type='button' className='text-sm py-2 px-4 bg-black hover:bg-slate-700 rounded-md text-white w-fit'>Mark as delivered</button>
        <button type='button' className='text-sm py-2 px-4 bg-red-600 hover:bg-red-500 rounded-md text-white w-fit'>Cancel delivery</button>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails

const ListItem = ({ title, value, position }) => {
  return (
    <div className={`flex w-full justify-between bg-${position==="even" && "white"} rounded-md p-2 text-sm`}>
      <p className="w-1/2">{title}</p>
      <p className="w-1/2">{value}</p>
    </div>
  )
}