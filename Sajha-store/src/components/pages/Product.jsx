import React from 'react'
import ProductFilter from '../ui/ProductFilter'
import product from "../../json/product.json"
import ProductCard from '../ui/ProductCard'

const Product = () => {
    return (
        <div className='flex gap-5 my-10 w-11/12 mx-auto'>
            <ProductFilter />
            <div className='grid grid-cols-4 gap-4'>
                {
                    product.map(item => {
                        return <ProductCard key={item.id} item={item} />
                    })
                }
            </div>
        </div>
    )
}

export default Product