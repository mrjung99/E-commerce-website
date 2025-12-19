import { useNavigate } from "react-router-dom"

const PopularProductCard = ({ item }) => {
    const navigate = useNavigate()


    const handleCardClick = () => {
        navigate(`/productDetails/${item.id}`)
    }

    return (
        <div key={item.id} className='min-w-[200px] h-full outline outline-gray-200
        hover:outline-gray-400 hover:bg-gray-100 hover:shadow-[0_0_2px_rgba(0,0,0,0.5)] p-2 rounded transition-all duration-300'

        >
            <img src={item.photo} alt="" className='h-[200px] w-full object-cover rounded cursor-pointer mb-1' onClick={handleCardClick} />
            <span className='text-[15px] hover:text-blue-500 cursor-pointer font-sans font-light'
                onClick={handleCardClick}
            >
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </span>
            <div className="flex justify-between font-sans font-light">
                <span className='text-[17px] text-orange-600'>Rs.{item.price}</span>
                <span className="text-[13px] text-gray-700">Brand:
                    <span className="text-blue-500">{item.brand.charAt(0).toUpperCase() + item.brand.slice(1)}</span>
                </span>
            </div>
        </div>
    )
}

export default PopularProductCard