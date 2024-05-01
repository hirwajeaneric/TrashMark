import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { Store } from "../../context/StoreContext";
import LoadingButton from "../../components/LoadingButton";
import { ValidateOTPRequest } from "../../api/authentication";
import OtpInput from "../../components/OtpInput";

const ValidateOTP = () => {
  const navigate = useNavigate();
  const [otpValue, setOtpValue] = useState("");
  const { handleResponseMessage } = useContext(Store); // Correctly destructure handleResponseMessage
  const [loading, setLoading] = useState(false);

  const handleRegenerateOtp = (e) => {
    e.preventDefault();

    
  };

  const handleOTP = (e) => {
    e.preventDefault();
    setLoading(true);

    ValidateOTPRequest({ otp: otpValue })
      .then((response) => {
        if (response) {
          handleResponseMessage('success', response.message);
          navigate("/sign-in");
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
      <div className="mx-auto max-w-lg">
        <h1 className="text-green-800 text-4xl font-bold text-center mb-4">TrashMark</h1>
        <form onSubmit={handleOTP} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-slate-100">
          <p className="text-center text-lg font-medium">Verify your account</p>

          <OtpInput setOtpValue={setOtpValue} />

          {!loading ?
            <button type="submit" className="block w-full rounded-lg bg-green-800 px-5 py-3 text-sm font-medium text-white">Verify</button>
            :
            <LoadingButton />
          }

          <div className="flex items-center w-full justify-between">
            <p className="text-center text-sm text-gray-500">
              No account? &nbsp;
              <Link className="underline" to="/sign-up">Sign up</Link>
            </p>

            <p className="text-center text-sm text-gray-500">
              Get new OTP &nbsp;
              <button type="button" onClick={handleRegenerateOtp}  className="underline">Regenerate</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ValidateOTP