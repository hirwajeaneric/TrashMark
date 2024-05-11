import { Helmet } from "react-helmet-async";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import { getClientOrderRequest } from "../api/order";

const Cart = () => {
  const [order, setOrder] = useState({});
  const [product, setProduct] = useState({});
  
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
              {order && <CartItem order={order} product={product} />}
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5  text-gray-700">
                  <div className="flex justify-between">
                    <dt>Delivery fee</dt>
                    <dd>{order.totalPrice} Rwf</dd>
                  </div>

                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>{order.totalPrice} Rwf</dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  <a
                    href="#"
                    className="block rounded bg-gray-700 px-5 py-3  text-gray-100 transition hover:bg-gray-600"
                  >
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </section>
  )
}

export default Cart