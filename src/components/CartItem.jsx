import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import {toast} from "react-hot-toast";

const CartItem = ({item}) => {
  const dispatch = useDispatch();//for access function

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed");
  }

  return (
    <div className="flex gap-10 px-10 py-10 mt-10 ml-5 border border-b-black">
      <div className="h-[180px]">
        <img src={item.image} className="h-full w-full"/>
      </div>

      <div className="space-y-5">
        <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</h1>
        <h1 className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description}</h1>

        <div className="flex justify-between">
          <p className="text-green-600 font-semibold">${item.price}</p>
          <button onClick={removeFromCart} className="bg-red-200 text-red-900 p-2 rounded-full"><MdDelete /></button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
