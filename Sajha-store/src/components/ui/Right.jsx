import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

const Right = () => {
    return (
        <div className='flex items-center justify-center gap-5'>
            <span className='flex gap-1 items-center justify-center cursor-pointer'>
                <FaRegHeart /><span className='text-[11px]'>Wishlist</span>
            </span>
            <span className='flex gap-1 items-center justify-center cursor-pointer'>
                <IoCartOutline size={20} /><span className='text-[11px]'>Cart</span>
            </span>
            <span className='flex gap-1 items-center justify-center cursor-pointer'>
                <VscAccount /><span className='text-[11px]'>Account</span>
            </span>
        </div>
    )
}

export default Right