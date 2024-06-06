import { Helmet } from "react-helmet-async"
import { MdError } from "react-icons/md"

const NotFound = () => {
  return (
    <div>
      <Helmet>
        <title>Success</title>
      </Helmet>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="text-6xl font-bold">404</h1>
            <MdError className="text-5xl text-black-600"/>
            <p className="text-2xl">Page not found</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFound