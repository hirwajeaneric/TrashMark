import { Outlet, useNavigate } from "react-router-dom"
import Footer from "../../components/userAccount/Footer"
import Header from "../../components/userAccount/Header"
import { useEffect } from "react";
import { ValidateAccessToken } from "../../api/authentication";
import Cookies from "js-cookie";

const UserLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    ValidateAccessToken()
      .then((response) => {
        if (response.message === "jwt expired") {
          navigate('/sign-in');
          localStorage.removeItem("client");
          Cookies.remove('access-token');
          window.location.replace("/");
        }
      })
      .catch(error => {
        if (error.status === 500) {
          navigate('/sign-in');
        }
      })
  }, [navigate])

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default UserLayout