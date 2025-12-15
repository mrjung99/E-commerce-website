
const PopularProductCard = ({ item }) => {

    return (
        <div key={item.id} className='min-w-[200px] h-full bg-gray-200 hover:bg-gray-300 shadow p-1 rounded transition-all'>
            <img src={item.photo} alt="" className='h-[130px] w-full object-cover rounded' />
            <span className='text-[12px]'>{item.title}</span>
            <p className='text-[12px]'>{item.price}</p>
        </div>
    )
}

export default PopularProductCard