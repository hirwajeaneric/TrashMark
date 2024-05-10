import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AddOrderRequest, getClientOrderRequest, getClientOrdersRequest, updateCartRequest } from "../../api/order";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Store } from "../../context/StoreContext";
import { getProductByIdRequest } from "../../api/product";

export default function AddingItemToCart() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { handleResponseMessage } = useContext(Store);

  useEffect(() => {
    var product = {};
    var existingClientOrder = {};

    // Get user info
    var user = JSON.parse(localStorage.getItem("client"));

    // Find all product details
    getProductByIdRequest(searchParams.get("product"))
      .then((response) => {
        product = response.product;
      })
      .catch(error => handleResponseMessage('error', error.message));

    // Decide whether there is an existing order or not
    getClientOrderRequest()
      .then((response) => {
        if (response.order) {
          existingClientOrder = response.order;
        }
      })
      .catch(error => handleResponseMessage('error', error.message));

    if (existingClientOrder) {
      // Check the quantity of the existing order product
      let existingProductQuantity = existingClientOrder.products.find(p => p.id === product._id).quantity;
      
      // Add product to existing order
      updateCartRequest({ id: product._id, quantity: product.quantity, pricePerUnit: product.price})
      .then((response) => {})
      .catch(error => handleResponseMessage('error', error.message));
    } 

    // Add order
    AddOrderRequest({})
      .then((response) => {
        if (response) {
          navigate("/cart");
        }
      })
      .catch(error => {
        handleResponseMessage('error', error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <Helmet>
        <title>Sign In - Trash Mark</title>
        <meta name='description' content='Sign in to TrashMark.' />
      </Helmet>
      <div className="mx-auto max-w-lg text-center">
        <p>Adding item to cart!</p>
        <div className="lds-dual-ring"></div>
      </div>
    </div>
  )
}