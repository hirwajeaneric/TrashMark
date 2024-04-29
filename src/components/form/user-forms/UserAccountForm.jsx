/* eslint-disable react/prop-types */
const UserAccountForm = ({updateProfile}) => {
    return (
        <form onSubmit={updateProfile} className="flex flex-col gap-4 bg-slate-100 px-12 py-12">
            <h2 className="text-3xl font-bold">My Account</h2>
            <p className="text-sm text-slate-700">View and update your profile here</p>
            <div>
                <label htmlFor="email" className="block font-medium text-gray-700"> Email </label>
                <input
                    type="email"
                    id="email"
                    placeholder="john@rhcp.com"
                    className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="fullName" className="block font-medium text-gray-700"> Full Name </label>
                <input
                    type="text"
                    id="fullName"
                    placeholder="John Doe"
                    className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
            </div>

            <div className="flex justify-start w-full items-start gap-4">
                <div className="w-full md:w-1/3">
                    <label htmlFor="addressLine1" className="block font-medium text-gray-700"> Address Line 1 </label>
                    <input
                        type="text"
                        id="addressLine1"
                        placeholder="KG 123 St"
                        className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                </div>
                <div className="w-full md:w-1/3">
                    <label htmlFor="city" className="block font-medium text-gray-700"> City </label>
                    <input
                        type="text"
                        id="city"
                        placeholder="Kigali"
                        className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                </div>
                <div className="w-full md:w-1/3">
                    <label htmlFor="country" className="block font-medium text-gray-700"> Country </label>
                    <input
                        type="text"
                        id="country"
                        placeholder="Rwanda"
                        className="mt-1 w-full py-2 px-3 rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                </div>
            </div>
            <button
                type="submit"
                className="inline-block w-min rounded border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500"
            >
                Update
            </button>
        </form>
    )
}

export default UserAccountForm