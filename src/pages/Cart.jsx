import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state); //access Cart data
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly">
          {/* cart product */}
          <div className="space-y-6">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          {/* checkout box */}
          <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-lg space-y-6 mt-8 lg:mt-0">
            <div>
              <div className="uppercase text-green-800 font-semibold">
                Your Cart
              </div>
              <div className="uppercase text-4xl font-semibold text-green-800">
                Summary
              </div>
              <p className="mt-4">
                <span className="font-semibold">Total Item: {cart.length}</span>
              </p>
            </div>

            <div>
              <p>
                Total Amount: <span className="font-bold">${totalAmount}</span>
              </p>
              <button className="mt-4 font-semibold text-white bg-green-800 hover:bg-green-700 transition-all duration-300 px-16 py-2 rounded-md">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-gray-700 font-semibold">Your Cart is Empty!</h1>
          <Link to={"/"}>
            <button className="mt-4 font-semibold text-white bg-green-800 px-16 py-2 rounded-md">
              Shop now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
