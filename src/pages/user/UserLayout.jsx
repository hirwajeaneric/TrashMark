import { Outlet } from "react-router-dom"
import Footer from "../../components/userAccount/Footer"
import Header from "../../components/userAccount/Header"

const UserLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default UserLayout