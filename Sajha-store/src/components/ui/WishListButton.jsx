import { useWishList } from "../../context/WishListContext";
import { FaRegHeart } from "react-icons/fa";

const WishListButton = () => {
  const { totalWishListItem } = useWishList();
  const totalWishList = totalWishListItem();
  return (
    <div className="relative">
      <FaRegHeart size={21} className="text-gray-700" />
      {totalWishList >= 0 && (
        <span
          className="absolute -top-2 -right-2 bg-orange-600 text-white
            h-4 w-4 rounded-full flex items-center justify-center text-[10px] font-sans font-thin border border-white"
        >
          {totalWishList}
        </span>
      )}
    </div>
  );
};

export default WishListButton;
