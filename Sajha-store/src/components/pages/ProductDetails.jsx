import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../../json/product.json'
import { IoIosAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";

const ProductDetails = () => {
    const { id } = useParams()
    const [quantity, setQuantity] = useState(1)

    const productDetails = Product.find(item => item.id === id)
    console.log(productDetails);

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value) || 1
        setQuantity(value < 1 ? 1 : value)
    }

    return (
        <section className='w-10/12 mx-auto my-8'>
            <div className='flex gap-8'>

                <div>
                    <img src={productDetails.photo} alt="" className='w-[75vh] h-[55vh] object-cover' />
                </div>

                <div className='flex-1 flex-col gap-2'>
                    <div>
                        <p className='text-2xl text-gray-800'>{productDetails.name.charAt(0).toUpperCase() + productDetails.name.slice(1)}</p>
                        <p className='text-blue-500 text-[14px]'>{productDetails.rating}</p>
                    </div>

                    <div className='my-3'>
                        <p className='text-lg text-gray-800 text-[14px] '>Description: </p>
                        <p className='text-gray-700 text-[12px]'>{productDetails.description}</p>
                    </div>

                    <p className='text-gray-600 text-[12px]'>Brand: <span className='text-blue-600'>{productDetails.brand.charAt(0).toUpperCase() + productDetails.brand.slice(1)}</span></p>
                    <p className='text-orange-600 text-2xl font-mono'>{productDetails.price}</p>

                    <div className='flex gap-5 items-center justify-center mt-7 text-[12px]'>
                        <p>Quantity: </p>
                        <div className='flex-1 flex gap-3'>
                            <button className={`flex items-center justify-center cursor-pointer 
                            px-1 ${quantity <= 1 ? "bg-gray-100" : "bg-gray-300"}`}
                                disabled={quantity <= 1}
                                onClick={() => setQuantity(prev => prev - 1)}>
                                <RiSubtractLine size={20} />
                            </button>

                            <input type="text" value={quantity} onChange={handleQuantityChange}
                                className='bg-gray-100  text-center w-10 outline-0 px-1' />

                            <button className='flex items-center justify-center cursor-pointer
                                bg-gray-300 px-1'
                                onClick={() => setQuantity(prev => prev + 1)}>
                                <IoIosAdd size={20} />
                            </button>
                        </div>
                    </div>

                    <div className='flex gap-4 text-[14px] mt-6'>
                        <button className='bg-blue-600 hover:bg-blue-700 cursor-pointer 
                        transition-colors text-white px-3 py-1'>
                            Buy Now
                        </button>
                        <button className='bg-orange-600 hover:bg-orange-700 cursor-pointer 
                        transition-colors text-white px-3 py-1'>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            <div className='bg-gray-100 p-3 mt-8'>
                <p className='text-2xl text-gray-800'>Product Details of {productDetails.name}</p>
                <p className='border border-gray-300 text-[12px] text-gray-700 p-2'>{productDetails.description}</p>
            </div>
        </section>
    )
}


export default ProductDetails