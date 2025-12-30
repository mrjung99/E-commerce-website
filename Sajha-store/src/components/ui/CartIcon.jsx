import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../../context/CartContext";

const CartIcon = () => {
  const { getTotalCartItem } = useCart();
  const cartItem = getTotalCartItem();

  return (
    <div className="relative">
      <FiShoppingCart size={22} className="text-gray-700" />
      {cartItem >= 0 && (
        <span className="absolute -top-2 -right-2 bg-orange-600 text-[10px] outline outline-gray-50 text-white font-sans font-thin rounded-full w-4 h-4 flex items-center justify-center">
          {cartItem}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
