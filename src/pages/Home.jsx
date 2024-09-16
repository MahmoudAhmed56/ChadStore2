import { categories } from "../assets/mockData";
// @ts-ignore
import HeroImage from "../assets/images/slider/slider2.jpg";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import { setProducts } from "../redux/productSlice";
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import { useEffect } from "react";
import data from "../data/data";
import ProductCard from "../components/ProductCard";
import Shop from "./Shop";
const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product)
  useEffect(()=>{
    dispatch(setProducts(data))
  },[])
  return (
    <div>
      <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
        <div className="container mx-auto py-4 flex flex-col md:flex-row md:space-x-2 space-x-0">
          <div className="w-full md:w-3/12">
      
              <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">Shop by categories</div>
              <ul className="space-y-4 bg-gray-100 p-3 border">
                {categories.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center text-sm font-medium">
                      <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                      {item}
                    </li>
                  );
                })}
              </ul>
              </div>
            <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
              <img className="h-full w-full object-cover" src={HeroImage} alt="" />
              <div className="absolute top-16 left-8">
                <p className="text-gray-900 mb-4">Chad Store</p>
                <h2 className="text-3xl font-bold text-red-500">Welcome To E-Shop</h2>
                <p className="text-xl mt-2.5 font-bold text-gray-900">Millions+ Products</p>
                <button className="uppercase bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">shop now</button>
              </div>
            </div>
          </div>
          <InfoSection />
          <CategorySection />
          <div className="py-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 cursor-pointer">
              {products.products.slice(0,5).map((product)=>{
              return(
                <ProductCard key={product.id} product={product} />
              )
              })}
            </div>
          </div>
        </div>
          <Shop/>
    </div>

  );
};

export default Home;
