import { useNavigate } from "react-router-dom"

const PopularProductCard = ({ item }) => {
    const navigate = useNavigate()


    const handleCardClick = () => {
        navigate(`/productDetails/${item.id}`)
    }

    return (
        <div key={item.id} className='min-w-[200px] h-full outline outline-gray-200
        hover:outline-gray-400 hover:bg-gray-100 hover:shadow-lg p-1 rounded transition-all'

        >
            <img src={item.photo} alt="" className='h-[200px] w-full object-cover rounded cursor-pointer' onClick={handleCardClick} />
            <span className='text-[13px] text-gray-800 hover:text-blue-500 cursor-pointer'
                onClick={handleCardClick}
            >
                {item.name}
            </span>
            <div className="flex justify-between">
                <span className='text-[14px] text-orange-600'>{item.price}</span>
                <span className="text-[12px] text-gray-700">Brand:
                    <span className="text-blue-500">{item.brand}</span>
                </span>
            </div>
        </div>
    )
}

export default PopularProductCard