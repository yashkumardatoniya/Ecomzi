import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/slices/CartSlice";

const CartItem = ({ item }) => {
  const data = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  };
  return (
    <div className="max-w-3xl">
      <div className="flex items-center max-w-[600px] border-b py-5  ">
        <div className="w-md max-w-[200px]">
          <img
            className="w-[150px] h-[170px]"
            src={item.image}
            alt="cart_image"
          />
        </div>
        <div className="flex flex-col ">
          <h1 className="text-gray-700 font-semibold text-lg text-left">
            {item.title}
          </h1>
          <h1 className="text-gray-600 font-normal text-left ">
            {item.description.split(" ").slice(0, 15).join(" ") + "..."}
          </h1>
          <div className="flex justify-between items-center mt-5">
            <p className="text-green-600 font-bold text-lg">${item.price}</p>
            <div
              className="w-10 h-10 rounded-full bg-red-300 shadow-[0_3px_10px_rgb(239,154,154,0.2)] hover:shadow-[0_35px_60px_-15px_rgba(239,80,80,0.3)]  cursor-pointer relative"
              onClick={removeFromCart}
            >
              {<MdDelete className="text-red-500 absolute top-3 left-3" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
