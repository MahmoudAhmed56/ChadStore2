import { useDispatch, useSelector } from "react-redux";
// @ts-ignore
import emptyCart from "../assets/images/brands/empty-cart.png";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Modal from "../components/Modal";
import ChangeAddress from "../components/ChangeAddress";
import {
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
} from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  console.log(cart.products);
  const [address, setAddress] = useState("main street, 0012");
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="uppercase text-2xl font-semibold mb-4">
            shopping cart
          </h3>
          <div className="flex flex-col md:flex-row justify-between md:space-x-10 space-x-0 mt-8">
            <div className="md:w-2/3">
              <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                <p className="uppercase">products</p>
                <div className="flex space-x-8">
                  <p className="uppercase">price</p>
                  <p className="uppercase">quantity</p>
                  <p className="uppercase">subtotal</p>
                  <p className="uppercase">remove</p>
                </div>
              </div>
              <div>
                {cart.products.map((product) => {
                  return (
                    <div
                      key={product.id}
                      className="flex items-center justify-between p-3 border-b flex-wrap"
                    >
                      <div className="md:flex items-center md:space-x-4 space-x-0 w-full md:w-72">
                        <img
                          className="w-16 h-16 object-cover rounded"
                          src={product.image[0].imgUrl}
                          alt={product.title}
                        />
                        <div className="flex-1 ml-0 md:ml-4">
                          <h3 className="text-lg font-semibold overflow-ellipsis overflow-hidden whitespace-nowrap md:overflow-auto md:whitespace-normal">
                            {product.title}
                          </h3>
                        </div>
                      </div>
                      <div className="flex space-x-12 items-center mt-4 md:mt-0">
                        <p>${product.price}</p>
                        <div className="flex items-center justify-center border">
                          <button
                            onClick={() => {
                              dispatch(decreaseQuantity(product.id));
                            }}
                            className="text-xl font-bold px-1.5 border-r"
                          >
                            -
                          </button>
                          <p className="text-xl px-2 ">{product.quantity}</p>
                          <button
                            onClick={() => {
                              dispatch(increaseQuantity(product.id));
                            }}
                            className="text-xl font-bold px-1 border-l"
                          >
                            +
                          </button>
                        </div>
                        <p>${(product.quantity * product.price).toFixed(2)}</p>
                        <button
                          onClick={() => {
                            dispatch(removeFromCart(product.id));
                          }}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTrashAlt />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
              <h3 className="uppercase text-sm font-semibold mb-5">
                cart total
              </h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="capitalize text-sm">total items:</span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div className="mb-4 border-b pb-2">
                <p>Shipping:</p>
                <p className="ml-2">
                  Shipping To:{" "}
                  <span className="text-xs font-bold">{address}</span>
                </p>

                <button
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                  className="text-blue-500 hover:underline capitalize mt-1 ml-2"
                >
                  change address
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total Price:</span>
                <span>{cart.totalPrice.toFixed(2)}</span>
              </div>
              <button
                onClick={() => {
                  navigate("/checkout")
                }}
                className="w-full bg-red-600 text-white py-2 hover:bg-red-800"
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <ChangeAddress
              setIsModalOpen={setIsModalOpen}
              address={address}
              setAddress={setAddress}
            />
          </Modal>
        </div>
      ) : (
        <div className="flex justify-center">
          <img className="h-96" src={emptyCart} alt="cart is empty" />
        </div>
      )}
    </div>
  );
};

export default Cart;
