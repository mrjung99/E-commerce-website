import { useNavigate } from "react-router-dom"
import HeartIcon from "./HeartIcon"

const ProductCard = ({ item }) => {
    const navigate = useNavigate()
    const handleCardClick = () => {
        navigate(`/productDetails/${item.id}`)
    }

    const truncatProductName = (productName) => {
        if (productName.length > 60) {
            return `${productName.slice(0, 60)}...`
        } else {
            return productName
        }
    }

    const name = item.name.charAt(0).toUpperCase() + item.name.slice(1)

    return (
        <div key={item.id} className='min-w-[200px] h-full bg-white hover:outline-gray-400 
        hover:bg-gray-100 hover:scale-102 shadow-[0_0_1px_rgba(0,0,0,0.5)] 
        hover:shadow-[0_0_5px_rgba(0,0,0,0.3)] p-2 rounded transition-all duration-300 
        ease relative'>
            <div className="absolute right-3 top-2 z-10">
                <HeartIcon item={item} />
            </div>
            <img src={item.photo} alt={name} className='h-[200px] w-full object-cover rounded cursor-pointer mb-1' onClick={handleCardClick} />
            <p className='font-sans text-sm leading-4.5 text-gray-800 hover:text-blue-500 cursor-pointer '
                onClick={handleCardClick}>
                {truncatProductName(name)}
            </p>
            <div className="flex justify-between font-sans font-light mt-1.5">
                <span className='text-[17px] text-orange-600 font-normal'>Rs.{item.price}</span>
                <span className="text-[13px] text-gray-700">Brand: <span className="text-blue-500">{item.brand.charAt(0).toUpperCase() + item.brand.slice(1)}</span>
                </span>
            </div>
        </div>
    )
}

export default ProductCard