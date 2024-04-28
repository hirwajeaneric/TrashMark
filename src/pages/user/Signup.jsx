import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <div className="mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-green-800 text-4xl font-bold text-center mb-4">TrashMark</h1>
        {/* <h1 className="text-center text-xl font-bold text-slate-600 sm:text-xl">Get started today</h1> */}

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Do you need used materials to renovate? Do you want to sell tools you no longer use or need? You are in the right place.
        </p>

        <form action="#" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-slate-100">
          <p className="text-center text-lg font-medium">Create an account</p>

          <div>
            <label htmlFor="fullName" className="sr-only">Full Name</label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter full name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">Phone</label>

            <div className="relative">
              <input
                type="tel"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter phone number"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">Password</label>

            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-green-800 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>

          <p className="text-center text-sm text-gray-500">
            Already have an account? &nbsp;
            <Link className="underline" to="/sign-in">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup