import { FaStar } from "react-icons/fa";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handelAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Added to Cart",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105">
        <img
          
          className="w-full h-80 sm:h-48 object-cover mb-4"
          src={product.imgs[0].imgUrl}
          alt={product.title}
        />
        <h3 className="text-lg font-semibold overflow-ellipsis overflow-hidden whitespace-nowrap">
          {product.title}
        </h3>
        <p className="text-gray-500">${product.price}</p>
        <div className="flex items-center mt-2">
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
        </div>
        <div
          onClick={(e) => handelAddToCart(e, product)}
          className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all"
        >
          <span className="group-hover:hidden">+</span>
          <span className="hidden group-hover:block">Add to cart</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
