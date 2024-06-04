import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import UserLayout from './pages/user/UserLayout';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import Account from './pages/user/Account';
import AddProduct from './pages/user/AddProduct';
import Products from './pages/user/Products';
import Purchaces from './pages/user/Purchaces';
import Orders from './pages/user/Orders';
import Success from './pages/user/Success';
import Signin from './pages/user/Signin';
import Signup from './pages/user/Signup';
import Cart from './pages/Cart';
import AccountHome from './pages/user/AccountHome';
import ForgotPassword from './pages/user/ForgotPassword';
import ResetPassword from './pages/user/ResetPassword';
import StoreContext from './context/StoreContext';
import ValidateOTP from './pages/user/ValidateOTP';
import CheckOut from './pages/CheckOut';
import OrderDetails from './pages/user/OrderDetails';

const App = () => {
  return (
    <StoreContext>
      <Router>
        <Routes>
          <Route path='/sign-in' element={<Signin />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/verify-account' element={<ValidateOTP />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />

          <Route path='/' element={<UserLayout />}>
            <Route path='' element={<Home />} />
            <Route path='product/:productId' element={<ProductDetails />} />
            <Route path='search' element={<Search />} />
            <Route path='cart' element={<Cart />} />
            <Route path='checkout' element={<CheckOut />} />
            <Route path='not-found' element={<NotFound />} />
            <Route path='account' element={localStorage.getItem('client') ? <Account />: <Navigate replace to='/sign-in' />} >
              <Route path='' element={<AccountHome />} />
              <Route path='profile' element={<AccountHome />} />
              <Route path='manage-products' element={<AddProduct />} />
              <Route path='my-products' element={<Products />} />
              <Route path='purchases' element={<Purchaces />} />
              <Route path='orders' element={<Orders />} />
              <Route path='order/:id' element={<OrderDetails />} />
            </Route>
            <Route path='success' element={<Success />} />
          </Route>

        </Routes>
      </Router>
    </StoreContext>
  )
}

export default App