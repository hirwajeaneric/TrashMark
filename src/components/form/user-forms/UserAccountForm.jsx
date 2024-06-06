import { useContext, useEffect, useState } from "react"
import { Store } from "../../../context/StoreContext";
import LoadingButton from "../../other-components/LoadingButton";
import { UpdateUserInfoRequest } from "../../../api/authentication";

/* eslint-disable react/prop-types */
const UserAccountForm = () => {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("client"));
        setUserInfo(user);
    }, []);

    const { handleResponseMessage } = useContext(Store); // Correctly destructure handleResponseMessage
    const [loading, setLoading] = useState(false);

    const handleFormInput = (e) => {
        setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
    };

    const handleUpdateAccountInfo = (e) => {
        e.preventDefault();
        setLoading(true);

        UpdateUserInfoRequest(userInfo)
            .then((response) => {
                if (response) {
                    handleResponseMessage('success', response.message);
                    localStorage.setItem("client", JSON.stringify(response.user));
                    window.location.reload();
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
        <form onSubmit={handleUpdateAccountInfo} className="flex flex-col gap-4 bg-slate-100 w-full px-5 md:px-12 pt-5 md:pt-8 pb-12">
            <div className="flex flex-wrap justify-between w-full items-start">
                <div className="flex flex-col w-full md:w-[49%] mb-3 md:mb-0">
                    <label htmlFor="firstName" className="block font-medium text-gray-700"> First name </label>
                    <input
                        type="text"
                        id="firstName"
                        value={userInfo.firstName || ""}
                        onChange={handleFormInput}
                        placeholder="John"
                        className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                </div>
                <div className="flex flex-col w-full md:w-[49%] mb-3 md:mb-0">
                    <label htmlFor="lastName" className="block font-medium text-gray-700"> Last Name </label>
                    <input
                        type="text"
                        id="lastName"
                        value={userInfo.lastName || ""}
                        onChange={handleFormInput}
                        placeholder="Doe"
                        className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                </div>
            </div>

            <div className="flex flex-wrap justify-between w-full items-start">
                <div className="flex flex-col w-full md:w-[32%] mb-3 md:mb-0">
                    <label htmlFor="email" className="block font-medium text-gray-700"> Email </label>
                    <input
                        type="email"
                        id="email"
                        value={userInfo.email || ""}
                        onChange={handleFormInput}
                        placeholder="myemail@example.com"
                        className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                </div>
                <div className="flex flex-col w-full md:w-[32%] mb-3 md:mb-0">
                    <label htmlFor="phone" className="block font-medium text-gray-700"> Phone </label>
                    <input
                        type="text"
                        id="phone"
                        maxLength={10}
                        minLength={10}
                        value={userInfo.phone || ""}
                        onChange={handleFormInput}
                        placeholder="07xxxxxxxx"
                        className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                </div>
                <div className="flex flex-col w-full md:w-[32%] mb-3 md:mb-0">
                    <label htmlFor="code" className="block font-medium text-gray-700"> Payment Code (MoMo/Airtel) </label>
                    <input
                        type="text"
                        id="code"
                        minLength={6}
                        maxLength={6}
                        value={userInfo.code || ""}
                        onChange={handleFormInput}
                        placeholder="XXXXXX"
                        className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                </div>
            </div>

            <div className="flex flex-wrap justify-between w-full items-start">
                <div className="flex flex-col w-full md:w-[32%] mb-3 md:mb-0">
                    <label htmlFor="addressLine1" className="block font-medium text-gray-700"> Address Line 1 </label>
                    <input
                        type="text"
                        id="addressLine1"
                        value={userInfo.addressLine1 || ""}
                        onChange={handleFormInput}
                        placeholder="KG 123 St"
                        className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                </div>
                <div className="flex flex-col w-full md:w-[32%] mb-3 md:mb-0">
                    <label htmlFor="addressLine2" className="block font-medium text-gray-700"> Address Line 2 </label>
                    <input
                        type="text"
                        id="addressLine2"
                        value={userInfo.addressLine2 || ""}
                        onChange={handleFormInput}
                        placeholder="Nyarugenge"
                        className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                </div>
                <div className="flex flex-col w-full md:w-[32%] mb-3 md:mb-0">
                    <label htmlFor="city" className="block font-medium text-gray-700"> City </label>
                    <input
                        type="text"
                        id="city"
                        value={userInfo.city || ""}
                        onChange={handleFormInput}
                        placeholder="Kigali"
                        className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                </div>
            </div>
            {!loading ?
                <button
                    type="submit"
                    className="inline-block w-min rounded border bg-green-800 px-12 py-3 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring active:text-green-500"
                >Update</button>
                :
                <LoadingButton size='min' />
            }
        </form>
    )
}

export default UserAccountForm