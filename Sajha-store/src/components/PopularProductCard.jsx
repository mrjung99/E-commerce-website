import { useNavigate } from "react-router-dom"
import HeartIcon from "./ui/HeartIcon"

const PopularProductCard = ({ item }) => {
    const navigate = useNavigate()

    const handleCardClick = () => {
        navigate(`/productDetails/${item.id}`)
    }

    return (
        <div key={item.id} className='min-w-[200px] h-full outline outline-gray-200
        hover:outline-gray-400 hover:bg-gray-100 hover:shadow-[0_0_2px_rgba(0,0,0,0.5)] p-2 
        rounded transition-all duration-300 relative'>
            <div className="absolute right-3 top-2 z-10">
                <HeartIcon item={item} />
            </div>
            <div className="relative group overflow-hidden">
                <img src={item.photo} alt="" className='h-[200px] w-full object-cover rounded cursor-pointer mb-1 transition-transform duration-300' />
                <div className="absolute rounded mb-1 inset-0 bg-black opacity-0 group-hover:opacity-30 cursor-pointer transition-transform duration-300" onClick={handleCardClick}></div>
            </div>
            <span className='text-[15px] text-gray-700 hover:text-blue-500 cursor-pointer font-sans'
                onClick={handleCardClick}>
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </span>
            <div className="flex justify-between font-sans font-light">
                <span className='text-[17px] text-orange-600 font-normal'>Rs.{item.price}</span>
                <span className="text-[13px] text-gray-700">Brand: <span className="text-blue-500">{item.brand.charAt(0).toUpperCase() + item.brand.slice(1)}</span>
                </span>
            </div>
        </div>
    )
}

export default PopularProductCard