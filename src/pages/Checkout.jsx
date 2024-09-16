import CheckoutChild from "../components/CheckoutChild";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = ({ setOrder }) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shipping, setShipping] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    zip: "",
  });
  const cart = useSelector((state) => state.cart);

  const navigate = useNavigate()
  const handelOrder = ()=>{
    const newOrder = {
      products: cart.products,
      orderNumber: "1234",
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice
    }
    setOrder(newOrder)
    navigate("/order-confirmation")
  }
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="uppercase text-2xl font-semibold mb-4">checkout</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
          <div className="border p-2 mb-6">
            <div
              onClick={() => {
                setBillingToggle(!billingToggle);
              }}
              className="flex items-center justify-between cursor-pointer"
            >
              <h3 className="text-lg font-semibold mb-2">
                Billing Information
              </h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div
              className={`space-y-4  ${
                billingToggle ? "" : "h-0 overflow-hidden"
              }`}
            >
              <div>
                <label className="block text-gray-700" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-3 py-2 border"
                  placeholder="Enter Name"
                  type="text"
                  id="name"
                />
              </div>

              <div>
                <label className="block text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 border"
                  placeholder="Enter Email"
                  type="email"
                  id="email"
                />
              </div>

              <div>
                <label className="block text-gray-700" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full px-3 py-2 border"
                  placeholder="Enter Phone"
                  type="text"
                  id="phone"
                />
              </div>
            </div>
          </div>
          <div className="border p-2 mb-6">
            <div
              onClick={() => {
                setShipping(!shipping);
              }}
              className="flex items-center justify-between cursor-pointer"
            >
              <h3 className="text-lg font-semibold mb-2">
                Shipping Information
              </h3>
              {shipping ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div
              className={`space-y-4  ${shipping ? "" : "h-0 overflow-hidden"}`}
            >
              <div>
                <label className="block text-gray-700" htmlFor="Address">
                  Address
                </label>
                <input
                  className="w-full px-3 py-2 border"
                  placeholder="Enter Address"
                  type="text"
                  id="Address"
                  onChange={(e) => {
                    setShippingInfo({
                      ...shippingInfo,
                      address: e.target.value,
                    });
                  }}
                />
              </div>

              <div>
                <label className="block text-gray-700" htmlFor="City">
                  City
                </label>
                <input
                  className="w-full px-3 py-2 border"
                  placeholder="Enter City"
                  type="text"
                  id="City"
                  onChange={(e) => {
                    setShippingInfo({ ...shippingInfo, city: e.target.value });
                  }}
                />
              </div>

              <div>
                <label className="block text-gray-700" htmlFor="Zip">
                  Zip Code
                </label>
                <input
                  className="w-full px-3 py-2 border"
                  placeholder="Enter Zip Code"
                  type="text"
                  id="Zip"
                  onChange={(e) => {
                    setShippingInfo({ ...shippingInfo, zip: e.target.value });
                  }}
                />
              </div>
            </div>
          </div>
          <div className="border p-2 mb-6">
            <div
              onClick={() => {
                setPaymentToggle(!paymentToggle);
              }}
              className="flex items-center justify-between cursor-pointer"
            >
              <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div
              className={`space-y-4  ${
                paymentToggle ? "" : "h-0 overflow-hidden"
              }`}
            >
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  id="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <label className="block text-gray-700 ml-2" htmlFor="payment">
                  Cash on Delivery
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="Debit"
                  id="Debit"
                  checked={paymentMethod === "dc"}
                  onChange={() => setPaymentMethod("dc")}
                />
                <label className="block text-gray-700 ml-2" htmlFor="Debit">
                  Debit Card
                </label>
              </div>
              {paymentMethod === "dc" && (
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <h3 className="text-xl font-semibold mb-4">
                    Debit Card Information
                  </h3>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-semibold mb-2"
                      htmlFor="Cards"
                    >
                      Card Number
                    </label>
                    <input
                      className="border p-2 w-full rounded"
                      type="text"
                      id="Cards"
                      placeholder="Enter Card Number"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-semibold mb-2"
                      htmlFor="Holder"
                    >
                      Card Holder Number
                    </label>
                    <input
                      className="border p-2 w-full rounded"
                      type="text"
                      id="Holder"
                    />
                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="w-1/2 mr-2">
                      <label
                        className="block text-gray-700 font-semibold mb-2"
                        htmlFor="Expire"
                      >
                        Expire Date
                      </label>
                      <input
                        placeholder="MM/YY"
                        className="border p-2 w-full rounded"
                        type="text"
                        id="Expire"
                      />
                    </div>
                    <div className="w-1/2 mr-2">
                      <label
                        className="block text-gray-700 font-semibold mb-2"
                        htmlFor="CVV"
                      >
                        CVV Number
                      </label>
                      <input
                        className="border p-2 w-full rounded"
                        type="text"
                        id="CVV"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="space-y-4">
            {cart.products.map((product) => {
              return <CheckoutChild product={product} />;
              console.log(product);
            })}
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
              <span>total price:</span>
              <span>${cart.totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <button
            onClick={handelOrder}
            className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
