import React from 'react'
import ProductFilter from '../ui/ProductFilter'
import product from "../../json/product.json"
import ProductCard from '../ui/ProductCard'

const Product = () => {
    return (
        <div className='flex gap-5 my-10'>
            <ProductFilter />
            <div className='grid grid-cols-4 gap-5 px-4'>
                {
                    product.map(item => {
                        return <ProductCard item={item} key={item.id} />
                    })
                }
            </div>
        </div>
    )
}

export default Product