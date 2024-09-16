import { useEffect, useState } from "react";
import { FaCarSide, FaQuestion } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import Swal from 'sweetalert2'



const ProductDetails = () => {
  const handelAddToCart =(e, product)=>{
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart(product))
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Added to Cart",
      showConfirmButton: false,
      timer: 1500
    });
  }
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.products);
  const products = useSelector((state) => state.product.products);
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [cartId, setCartId] = useState(0);

  useEffect(() => {
    const newProduct = products.find((product) => product.id == id);
    const newCartQuantity = cart.find((cart) => cart.id == id);
    setProduct(newProduct);
    setCartId(newCartQuantity);
  }, [id, products, cart]);
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  topFunction()
  const [cartQuantity, setCartQuantity] = useState(1);
  console.log(cartQuantity);

  if (product.length == 0) {
    return <div>loading...</div>;
  } else {
    return (
      <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row gap-x-16">
          <div className="md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center">
            <img
              src={product.imgs[0].imgUrl}
              alt={product.title}
              className="h-full"
            />
          </div>
          <div className="md:w-1/2 p-4 shadow-md md:p-16 flex flex-col items-center gap-y-2">
            <h2 className="text-3xl font-semibold mb-2">{product.title}</h2>
            <p className="text-xl font-semibold text-gray-800 mb-4">
              {product.price}
            </p>
            <div className="flex items-center mb-4 gap-x-2">
              <label htmlFor="quantity">Quantity: {}</label>
              <input
                value={cartQuantity}
                type="number"
                name="quantity"
                id="quantity"
                className="border p-1 w-16"
                onChange={(e) => {
                  setCartQuantity(Number(e.target.value));
                }}
              />
              <button
                onClick={(e)=>handelAddToCart(e,product)}
                className="bg-red-600 text-white py-1.5 px-4 hover:bg-red-800"
              >
                Add to Cart
              </button>
            </div>
            <div className="flex flex-col gap-y-4 mt-4">
              <p className="flex items-center">
                <FaCarSide className="mr-1" />
                Delivery and Return
              </p>
              <p className="flex items-center">
                <FaQuestion className="mr-1" />
                Ask a Question
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-2">Product Description</h3>
          <p>{product.details}</p>
        </div>
      </div>
    );
  }
};

export default ProductDetails;
