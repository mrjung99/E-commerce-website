
const PopularProductCard = ({ item }) => {

    return (
        <div key={item.id} className='min-w-[200px] h-full outline outline-gray-200 hover:outline-gray-300
         hover:bg-gray-100 hover:shadow-md p-1 rounded transition-all'>
            <img src={item.photo} alt="" className='h-[200px] w-full object-cover rounded' />
            <span className='text-[13px] text-gray-800'>{item.name}</span>
            <p className='text-[13px] text-orange-500'>{item.price}</p>
        </div>
    )
}

export default PopularProductCard