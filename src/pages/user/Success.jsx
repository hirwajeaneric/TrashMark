import { Helmet } from "react-helmet-async";
import { TiTick } from "react-icons/ti";

const Success = () => {
  return (
    <div>
      <Helmet>
        <title>Success</title>
      </Helmet>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl">Success</h1>
            <TiTick className="text-5xl text-green-600"/>
            <p className="text-2xl">Order successfully placed</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Success