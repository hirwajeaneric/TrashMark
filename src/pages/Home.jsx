import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { getAllAvailableProductsRequest } from "../api/product";
import ProductCard from "../components/other-components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllAvailableProductsRequest()
      .then(response => {
        if (response.products) {
           setProducts(response.products);
         }
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <div>
      <Helmet>
        <title>Welcome to Trash Mark</title>
        <meta name='description' content='Sell and buy used materials and scraps online.' />
      </Helmet>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src="Recycling-Winter-Web.png"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Sell and buy used materials and scraps online.</h2>
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
                quidem quam repellat.
              </p>
              <Link
                to="/search"
                className="mt-8 inline-block rounded bg-green-800 px-12 py-3 text-sm font-medium text-white transition hover:bg-green-600 focus:outline-none focus:ring"
              >
                Explore market place
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Collections */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Latest items on the market</h2>

            <p className="mx-auto mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
              dicta incidunt est ipsam, officia dolor fugit natus?
            </p>
          </header>

          <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} order={index}/>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Home