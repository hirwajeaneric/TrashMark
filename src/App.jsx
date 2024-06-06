import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import UserLayout from './pages/user/account/UserLayout';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import Account from './pages/user/account/Account';
import AddProduct from './pages/user/account/AddProduct';
import Products from './pages/user/account/Products';
import Purchaces from './pages/user/account/Purchaces';
import Orders from './pages/user/account/Orders';
import Success from './pages/user/account/Success';
import Signin from './pages/user/auth/Signin';
import Signup from './pages/user/auth/Signup';
import Cart from './pages/Cart';
import AccountHome from './pages/user/account/AccountHome';
import ForgotPassword from './pages/user/auth/ForgotPassword';
import ResetPassword from './pages/user/auth/ResetPassword';
import StoreContext from './context/StoreContext';
import ValidateOTP from './pages/user/auth/ValidateOTP';
import CheckOut from './pages/CheckOut';
import OrderDetails from './pages/user/account/OrderDetails';

import AdminLayout from './pages/admin/dashboard/AdminLayout';
import Overview from './pages/admin/dashboard/Overview';
import Trash from './pages/admin/dashboard/Trash';
import Profile from './pages/admin/dashboard/Profile';
import Sellers from './pages/admin/dashboard/Sellers';
import SoldTrash from './pages/admin/dashboard/SoldTrash';

const App = () => {
  return (
    <StoreContext>
      <Router>
        <Routes>
          {/* User routes  */}
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

          {/* Admin routes  */}
          <Route path='/admin/sign-in' element={<Signin />} />
          <Route path='/admin/sign-up' element={<Signup />} />
          <Route path='/admin/verify-account' element={<ValidateOTP />} />
          <Route path='/admin/forgot-password' element={<ForgotPassword />} />
          <Route path='/admin/reset-password' element={<ResetPassword />} />

          <Route path='/admin' element={<AdminLayout />}>
            <Route path='' element={<Overview />} />
            <Route path='overview' element={<Overview />} />
            <Route path='trash' element={<Trash />} />
            <Route path='sellers' element={<Sellers />} />
            <Route path='sold' element={<SoldTrash />} />
            <Route path='profile' element={<Profile />} />
          </Route>

          <Route path='*' element={<Navigate replace to='/not-found' />} />

        </Routes>
      </Router>
    </StoreContext>
  )
}

export default App