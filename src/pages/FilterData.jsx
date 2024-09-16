import ProductCard from "../components/ProductCard";
// @ts-ignore
import noProduct from "../assets/images/brands/No_Product_Found.png";
import { useSelector } from "react-redux";

const FilterData = () => {
  const filterProducts = useSelector((state) => state.product.filterData);
  return (
    <div className="py-12 px-4 md:px-16 lg:px-24">
      {filterProducts.length > 0 ? (
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 cursor-pointer">
            {filterProducts.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <img src={noProduct} className="sm:w-1/3" />
        </div>
      )}
    </div>
  );
};

export default FilterData;
