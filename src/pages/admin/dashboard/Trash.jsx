import { useEffect, useState } from "react";
import TrashTable from "../../../components/tables/TrashTable";
import { getAllProductsRequest } from "../../../api/product";
import { useSearchParams } from "react-router-dom";

const Trash = () => {
  const [data, setData] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllProductsRequest();
        let filteredProducts = [];
        setData(response.products);

        const category = searchParams.get("category");

        if (category === "all") {
          filteredProducts = response.products;
          setCategoryName("All");
        } else if (category === "renewable") {
          filteredProducts = response.products.filter((product) => product.category === "Renewable");
          setCategoryName("Renewable");
        } else if (category === "non-renewable") {
          filteredProducts = response.products.filter((product) => product.category === "Non-renewable");
          setCategoryName("Non-renewable");
        }
        
        setData(filteredProducts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [searchParams]);

  return (
    <div className="w-full">
      <div className="flex mb-6 justify-between">
        <h1 className="text-2xl font-bold">{categoryName} Trash</h1>
      </div>
      <TrashTable data={data} />
    </div>
  );
};

export default Trash;
