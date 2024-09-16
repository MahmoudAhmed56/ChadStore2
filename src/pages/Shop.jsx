import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import { setProducts } from "../redux/productSlice";
import data from "../data/data";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(setProducts(data))
  },[])
  const products = useSelector(state => state.product)
  return (
    <div className="py-12 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 cursor-pointer">
        {products.products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
