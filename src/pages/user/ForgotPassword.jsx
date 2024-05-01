import { Link } from "react-router-dom"

const ForgotPassword = () => {
  
  return (
    <div className="mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-green-800 text-4xl font-bold text-center mb-4">TrashMark</h1>
        <form action="#" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-slate-100">
          <p className="text-center text-lg font-medium">Request password request</p>

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
          <button
            type="submit"
            className="block w-full rounded-lg bg-green-800 px-5 py-3 text-sm font-medium text-white"
          >
            Send
          </button>

          <p className="text-center text-sm text-gray-500">
            Remember your password? &nbsp;
            <Link className="underline" to="/sign-in">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword