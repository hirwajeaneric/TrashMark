import { Helmet } from "react-helmet-async";
import CartItem from "./../components/other-components/CartItem";
import { useContext, useEffect, useState } from "react";
import { getClientOrderRequest, updateCartStatusRequest, updateOrderInfoRequest } from "../api/order";
import { Store } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

const FLUTTER_PUBLIC_KEY = import.meta.env.VITE_FLUTTER_PUBLIC_KEY;

const Cart = () => {
  const [order, setOrder] = useState({});
  const [product, setProduct] = useState({});
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(false);
  const { handleResponseMessage } = useContext(Store);
  const navigate = useNavigate();

  useEffect(() => {
    setClient(JSON.parse(localStorage.getItem('client')));

    setLoading(true);
    getClientOrderRequest()
      .then(response => {
        if (response.order) {
          setOrder(response.order);
          setProduct(response.order.products[0]);
          setLoading(false);
        } 
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  const config = {
    public_key: FLUTTER_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: order.totalPrice,
    currency: 'RWF',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: client.email,
      phone_number: client.phone,
      name: client.firstName + ' ' + client.lastName,
    },
    customizations: {
      title: 'Payment for ' + product.name,
      description: `Payment for ${product.name}`,
      logo: 'logo-big.png'
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const paymentProcess = async () => {
    await handleFlutterPayment({
      callback: (response) => {
        // console.log(response);
        if (response.status === 'successful') {
          updateCartStatusRequest({ paid: true }, order._id)
            .then(() => {
              navigate('/success');
            })
            .catch(error => {
              console.log(error);
            })
        }
        setLoading(false);
        closePaymentModal() // this will close the modal programmatically
      },
      onClose: () => { },
    });
  }

  const handleFormInput = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  }

  const handleCheckout = async (e) => {
    e.preventDefault();

    const updates = {
      addressLine1: order.addressLine1,
      addressLine2: order.addressLine2,
    }

    // console.log(updates);

    if (updates.addressLine1 && updates.addressLine2) {
      updateOrderInfoRequest(updates, order._id)
        .then(response => {
          handleResponseMessage(response.type, response.message);
          // Handle checkout
          paymentProcess();
        })
        .catch(error => {
          handleResponseMessage(error, error.message);
        })
    } else {
      paymentProcess();
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center w-full pt-20">
        <div className="flex justify-center items-center mx-auto px-2 gap-4 sm:px-6 lg:px-8 max-w-screen-xl w-full">
          <div className="lds-dual-ring"></div>
        </div>
      </div>
    )
  }

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

          {!order._id && <p className="text-center mt-5">You do not have items in your cart </p>}

          {order._id && <div className="mt-8">
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
                    required
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
                    required
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
                      type="button"
                      disabled={loading}
                      onClick={handleCheckout}
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