import { Navigate, Route, BrowserRouter as Router, Routes, } from 'react-router-dom';
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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-up' element={<Signup />} />

        <Route path='/' element={<UserLayout />}>
          <Route path='' element={<Home />} />
          <Route path='/product/:productId' element={<ProductDetails />} />
          <Route path='/search' element={<Search />} />
          <Route path='/not-found' element={<NotFound />} />
          <Route path='/account' element={<Account />} />
          <Route path='/manage-product' element={<AddProduct />} />
          <Route path='/my-products' element={<Products />} />
          <Route path='/purchases' element={<Purchaces />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/success' element={<Success />} />
        </Route>

      </Routes>
    </Router>
  )
}

export default App