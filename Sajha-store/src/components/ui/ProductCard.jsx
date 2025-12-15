import React from 'react'

const ProductCard = ({ item }) => {
    return (
        <ul className=''>
            <li className='bg-gray-100 hover:bg-gray-200 transition-all p-2 text-gray-800 text-[13px] 
                rounded shadow hover:shadow-md cursor-pointer'>
                <img src={item.photo} alt="" className='max-h-[150px] w-full object-cover' />
                <p className=' mt-2 font-extralight'>{item.title}</p>
                <p>{item.price}</p>
            </li>
        </ul>

    )
}

export default ProductCard