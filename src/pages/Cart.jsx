import { Helmet } from "react-helmet-async";
import CartItem from "../components/CartItem";
import { useContext, useEffect, useState } from "react";
import { getClientOrderRequest, updateOrderInfoRequest } from "../api/order";
import { Store } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [order, setOrder] = useState({});
  const [product, setProduct] = useState({});
  const { handleResponseMessage } = useContext(Store);
  const navigate = useNavigate();

  useEffect(() => {
    getClientOrderRequest()
      .then(response => {
        setOrder(response.order);
        setProduct(response.order.products[0]);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  const handleFormInput = (e) => {
    setOrder({ ...order, [e.target.name] : e.target.value });
  }

  const handleCheckout = (e) => {
    e.preventDefault();

    const updates = { 
      addressLine1: order.addressLine1, 
      addressLine2: order.addressLine2, 
    }
    // Update order first
    updateOrderInfoRequest(updates, order._id)
    .then(response => {
      handleResponseMessage(response.type, response.message);
      setTimeout(() =>{
        navigate('/success?order='+order._id);
      },2000)
      // Handle checkout
    })
    .catch(error => {
      handleResponseMessage(error, error.message);
     })
  };

  return (
    <section>
      <Helmet>
        <title>My Cart</title>
        <meta name='description' content='My cart on TrashMark.' />
      </Helmet>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
          </header>

          {!order && <p className="text-center mt-5">You do not have items in your cart </p>}

          {order && <div className="mt-8">
            <ul className="space-y-4">
              {order &&
                <CartItem
                  order={order}
                  product={product}
                  setProduct={setProduct}
                />
              }
            </ul>

            <h1 className="mt-7 text-xl font-bold">Your delivery address</h1>
            <form onSubmit={handleCheckout} className="mt-5 w-full flex flex-col">
              <div className="flex flex-wrap justify-between w-full items-start">
                <div className="flex flex-col w-full md:w-[49%] mb-3 md:mb-0">
                  <label htmlFor="addressLine1" className="block font-medium text-gray-700"> Address Line 1 (Street address)</label>
                  <input
                    type="text"
                    id="addressLine1"
                    name="addressLine1"
                    value={order.addressLine1 || ""}
                    onChange={handleFormInput}
                    placeholder="KG 123 St"
                    className="mt-1 w-full py-2 px-3 rounded-md border-2 border-gray-400 shadow-sm sm:text-sm"
                  />
                </div>
                <div className="flex flex-col w-full md:w-[49%] mb-3 md:mb-0">
                  <label htmlFor="addressLine2" className="block font-medium text-gray-700"> Address Line 2 (District/Sector)</label>
                  <input
                    type="text"
                    id="addressLine2"
                    name="addressLine2"
                    value={order.addressLine2 || ""}
                    onChange={handleFormInput}
                    placeholder="Kigali"
                    className="mt-1 w-full py-2 px-3 rounded-md border-2 border-gray-400 shadow-sm sm:text-sm"
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="space-y-0.5  text-gray-700">
                    <div className="flex justify-between">
                      <dt>Delivery fee</dt>
                      <dd>{order.deliveryPrice} Rwf</dd>
                    </div>

                    <div className="flex justify-between !text-base font-medium">
                      <dt>Total</dt>
                      <dd>{order.totalPrice} Rwf</dd>
                    </div>
                  </dl>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="block rounded bg-gray-700 px-5 py-3  text-gray-100 transition hover:bg-gray-600"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>}
        </div>
      </div>
    </section>
  )
}

export default Cart