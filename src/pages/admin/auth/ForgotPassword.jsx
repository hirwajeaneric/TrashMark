import { Link, useNavigate } from "react-router-dom"
import { ForgotPasswordRequest } from "../../../api/authentication";
import { useContext, useState } from "react";
import LoadingButton from "../../../components/other-components/LoadingButton";
import { Store } from "../../../context/StoreContext";
import { Helmet } from "react-helmet-async";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    email: ""
  });
  const { handleResponseMessage } = useContext(Store); // Correctly destructure handleResponseMessage
  const [loading, setLoading] = useState(false);

  const resetFields = () => {
    setUserInput({
      email: ""
    });
  };

  const handleFormInput = (e) => {
    setUserInput({ ...userInput, [e.target.id]: e.target.value });
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setLoading(true);

    ForgotPasswordRequest(userInput)
      .then((response) => {
        if (response) {
          handleResponseMessage('success', response.message);
          resetFields();
          navigate("/admin/sign-in");
        }
      })
      .catch(error => {
        handleResponseMessage('error', error.message); // Use 'error' type for error messages
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <Helmet>
        <title>Forgot password - Trash Mark</title>
        <meta name='description' content='Request for password reset on Trash Mark.' />
      </Helmet>
      <div className="mx-auto max-w-lg">
        <h1 className="text-green-800 text-4xl font-bold text-center mb-4">TrashMark</h1>
        <form onSubmit={handleForgotPassword} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-slate-100">
          <p className="text-center text-lg font-medium">Request password request</p>

          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <div className="relative">
              <input
                type="email"
                id="email"
                value={userInput.email || ''}
                onChange={handleFormInput}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
              />
            </div>
          </div>
          {!loading ?
            <button type="submit" className="block w-full rounded-lg bg-green-800 px-5 py-3 text-sm font-medium text-white">Send</button>
            :
            <LoadingButton />
          }

          <p className="text-center text-sm text-gray-500">
            Remember your password? &nbsp;
            <Link className="underline" to="/admin/sign-in">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword