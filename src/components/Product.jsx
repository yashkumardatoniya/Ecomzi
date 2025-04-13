import React from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { add, remove } from "../redux/slices/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state.cart);
  const data = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  };

  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] gap-3 p-4 mt-10 ml-5 ">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40">
          {post.title}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left ">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px] ">
        <img className="h-full w-full " src={post.image} alt="post_image" />
      </div>
      <div className="flex justify-between w-full items-center mt-5">
        <div>
          <p className="text-green-600 font-semibold ">${post.price} </p>
        </div>
        <div>
          {data.some((p) => p.id == post.id) ? (
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white duration-300 ease-in "
              onClick={removeFromCart}
            >
              Remove Item
            </button>
          ) : (
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white duration-300 ease-in "
              onClick={addToCart}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
