import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const data = useSelector((state) => state.cart.data);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(
      Math.floor(data.reduce((acc, curr) => acc + curr.price, 0) * 100) / 100
    );
  }, [cart, data]);

  return (
    <div className="max-w-6xl mx-auto">
      {data.length > 0 ? (
        <div className="flex flex-col lg:flex lg:flex-row md:flex-row gap-x-15 max-w-3xl md:max-w-6xl mx-auto">
          <div className="flex flex-col ">
            {data.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="flex flex-col justify-between mt-20 mb-20">
            <div className="flex-col ">
              <div className="text-green-600 font-bold uppercase text-xl">
                Your Cart
              </div>
              <div className="text-green-600 font-bold uppercase text-5xl">
                Summary
              </div>
              <p className="mt-4">
                <span className="font-bold text-lg">
                  Total Items: {data.length}
                </span>
              </p>
            </div>
            <div className="flex flex-col">
              <div className="font-semibold text-lg">
                Total Amount: <span className="font-bold">${totalAmount}</span>
              </div>
              <button className="mt-4 border bg-green-600 text-white font-bold py-3 px-16 rounded-lg w-[247px]">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[100vh]">
          <p className="font-semibold text-base lg:text-lg  ">Cart is Empty</p>
          <Link to={"/"}>
            <button className="mt-4 border bg-green-600 text-white font-bold py-2 px-12 xs:px-6 lg:py-3 lg:px-16 rounded-lg w-full">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
