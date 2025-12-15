import React from 'react'

const ProductFilter = () => {
    return (
        <section className='p-3 ml-3 border-r border-gray-300 w-[200px]'>
            <div className='mb-3'>
                <h1 className=''>Category</h1>
                <ul className='text-[12px] '>
                    <li className='cursor-pointer py-1'>Mobile</li>
                    <li className='cursor-pointer py-1'>Laptop</li>
                    <li className='cursor-pointer py-1'>Computer</li>
                    <li className='cursor-pointer py-1'>Accessories</li>
                    <li className='cursor-pointer py-1'>Watch</li>
                </ul>
            </div>

            <hr className='text-gray-300' />

            <div className='mt-3'>
                <h1>Brand</h1>
                <ul className='text-[12px]  '>
                    <li className='cursor-pointer py-1'>Apple</li>
                    <li className='cursor-pointer py-1'>Acer</li>
                    <li className='cursor-pointer py-1'>Asus</li>
                    <li className='cursor-pointer py-1'>Lenovo</li>
                </ul>
            </div>

            <hr className='text-gray-300 mt-3' />

            <div className='mt-4'>
                <h1>Price</h1>
                <input type="range" />
            </div>
        </section>
    )
}

export default ProductFilter
