import React from 'react'

const ProductFilter = () => {

    const handleCategoryClick = (e) => {
        console.log(e.target.textContent);

    }
    return (
        <section className='border-r border-gray-200 bg-gray-50 '>
            <div className='mb-3 px-2'>
                <h1 className='text-sm text-gray-800'>Category</h1>
                <ul className='text-sm font-sans font-thin' onClick={handleCategoryClick}>
                    <li className='cursor-pointer py-0.5' value="mobile">Mobile</li>
                    <li className='cursor-pointer py-1'>Laptop</li>
                    <li className='cursor-pointer py-1'>Computer</li>
                    <li className='cursor-pointer py-0.5'>Accessories</li>
                    <li className='cursor-pointer py-0.5'>Watch</li>
                </ul>
            </div>

            <hr className='text-gray-200' />

            <div className='mt-3 px-2'>
                <h1 className='text-sm text-gray-800'>Brand</h1>
                <ul className='text-sm font-sans font-thin'>
                    <li className='cursor-pointer py-0.5'>Apple</li>
                    <li className='cursor-pointer py-0.5'>Acer</li>
                    <li className='cursor-pointer py-0.5'>Asus</li>
                    <li className='cursor-pointer py-0.5'>Lenovo</li>
                </ul>
            </div>

            <hr className='text-gray-200 mt-3' />

            <div className='mt-4 px-2'>
                <h1 className='text-[15px] text-gray-800'>Price</h1>
                <input type="range" className='h-1 bg-orange-600 w-full ' />
            </div>
        </section>
    )
}

export default ProductFilter
