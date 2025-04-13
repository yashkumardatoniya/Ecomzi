import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AiFillAlipayCircle } from "react-icons/ai";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);
  const data = useSelector((state) => state.cart.data);
  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto ">
        <NavLink to="/">
          <div className="ml-5">
            <AiFillAlipayCircle className="h-14 w-20 text-green-600 " />
          </div>
        </NavLink>

        <div className="flex items-center space-x-6 text-slate-100 font-medium mr-5 ">
          <NavLink to="/">
            <p className="text-lg">Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {data.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                  {data.length}
                </span>
              )}{" "}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
