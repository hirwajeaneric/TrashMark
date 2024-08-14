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
import OrderDetails from './pages/user/account/OrderDetails';

import AdminLayout from './pages/admin/dashboard/AdminLayout';
import Overview from './pages/admin/dashboard/Overview';
import Trash from './pages/admin/dashboard/Trash';
import Profile from './pages/admin/dashboard/Profile';
import Sellers from './pages/admin/dashboard/Sellers';
import SoldTrash from './pages/admin/dashboard/SoldTrash';

import AdminSignUp from './pages/admin/auth/Signup';
import AdminSignIn from './pages/admin/auth/Signin';
import AdminValidateOTP from './pages/admin/auth/ValidateOTP';
import AdminForgotPassword from './pages/admin/auth/ForgotPassword';
import AdminResetPassword from './pages/admin/auth/ResetPassword';
// import Reports from './pages/admin/dashboard/Reports';
import AddTrash from './pages/user/account/RecordTrash';
import StatsForKigali from './pages/admin/dashboard/StatsForKigali';
import StatsForNorth from './pages/admin/dashboard/StatsForNorth';
import StatsForSouth from './pages/admin/dashboard/StatsForSouth';
import StatsForEast from './pages/admin/dashboard/StatsForEast';
import StatsForWest from './pages/admin/dashboard/StatsForWest';

const App = () => {
  return (
    <StoreContext>
      <Router>
        <Routes>
          {/* User routes  --------------------------------------------------------------------------------------  */}
          {/* Authentication pages  */}
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
            <Route path='not-found' element={<NotFound />} />
            <Route path='account' element={localStorage.getItem('client') ? <Account /> : <Navigate replace to='/sign-in' />} >
              <Route path='' element={<AccountHome />} />
              <Route path='profile' element={<AccountHome />} />
              <Route path='manage-products' element={<AddProduct />} />
              <Route path='record-trash' element={<AddTrash />} />
              <Route path='my-products' element={<Products />} />
              <Route path='purchases' element={<Purchaces />} />
              <Route path='orders' element={<Orders />} />
              <Route path='order/:id' element={<OrderDetails />} />
            </Route>
            <Route path='success' element={<Success />} />
          </Route>

          {/* Admin routes  -------------------------------------------------------------------------------------- */}
          {/* Authentication pages  */}
          <Route path='/admin/sign-in' element={<AdminSignIn />} />
          <Route path='/admin/sign-up' element={<AdminSignUp />} />
          <Route path='/admin/verify-account' element={<AdminValidateOTP />} />
          <Route path='/admin/forgot-password' element={<AdminForgotPassword />} />
          <Route path='/admin/reset-password' element={<AdminResetPassword />} />

          <Route path='/admin' element={localStorage.getItem('admin') ? <AdminLayout /> : <Navigate replace to='/admin/sign-in' />}>
            <Route path='' element={<Overview />} >
              <Route path='' element={<StatsForKigali />} />
              <Route path='kigali' element={<StatsForKigali />} />
              <Route path='north' element={<StatsForNorth />} />
              <Route path='south' element={<StatsForSouth />} />
              <Route path='east' element={<StatsForEast />} />
              <Route path='west' element={<StatsForWest />} />
            </Route>

            <Route path='overview' element={<Overview />}>
              <Route path='' element={<StatsForKigali />} />
              <Route path='kigali' element={<StatsForKigali />} />
              <Route path='north' element={<StatsForNorth />} />
              <Route path='south' element={<StatsForSouth />} />
              <Route path='east' element={<StatsForEast />} />
              <Route path='west' element={<StatsForWest />} />
            </Route>

            <Route path='trash' element={<Trash />} />
            <Route path='sellers' element={<Sellers />} />
            <Route path='sold' element={<SoldTrash />} />
            {/* <Route path='reports' element={<Reports />} /> */}
            <Route path='profile' element={<Profile />} />
          </Route>

          <Route path='*' element={<Navigate replace to='/not-found' />} />

        </Routes>
      </Router>
    </StoreContext>
  )
}

export default App