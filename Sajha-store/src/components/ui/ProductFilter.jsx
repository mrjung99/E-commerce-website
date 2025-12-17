import React from 'react'

const ProductFilter = () => {
    return (
        <section className='border-r border-gray-200'>
            <div className='mb-3 px-2'>
                <h1 className='text-[12px]'>Category</h1>
                <ul className='text-[10px] '>
                    <li className='cursor-pointer py-1'>Mobile</li>
                    <li className='cursor-pointer py-1'>Laptop</li>
                    <li className='cursor-pointer py-1'>Computer</li>
                    <li className='cursor-pointer py-1'>Accessories</li>
                    <li className='cursor-pointer py-1'>Watch</li>
                </ul>
            </div>

            <hr className='text-gray-200' />

            <div className='mt-3 px-2'>
                <h1 className='text-[12px]'>Brand</h1>
                <ul className='text-[10px]  '>
                    <li className='cursor-pointer py-1'>Apple</li>
                    <li className='cursor-pointer py-1'>Acer</li>
                    <li className='cursor-pointer py-1'>Asus</li>
                    <li className='cursor-pointer py-1'>Lenovo</li>
                </ul>
            </div>

            <hr className='text-gray-200 mt-3' />

            <div className='mt-4 px-2'>
                <h1 className='text-[12px]'>Price</h1>
                <input type="range" />
            </div>
        </section>
    )
}

export default ProductFilter
