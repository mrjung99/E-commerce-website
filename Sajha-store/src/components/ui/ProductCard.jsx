import { useNavigate } from "react-router-dom"

const PopularProductCard = ({ item }) => {
    const navigate = useNavigate()

    const handleCardClick = () => {
        navigate(`/productDetails/${item.id}`)
    }

    return (
        <div key={item.id} className='min-w-[200px] h-full outline outline-gray-200 cursor-pointer
         hover:outline-gray-400 hover:bg-gray-100 hover:shadow-lg p-1 rounded transition-all'
            onClick={handleCardClick}
        >
            <img src={item.photo} alt="" className='h-[200px] w-full object-cover rounded' />
            <span className='text-[13px] text-gray-800 hover:text-blue-500'>{item.name}</span>
            <p className='text-[13px] text-orange-500'>{item.price}</p>
        </div>
    )
}

export default PopularProductCard