import React from 'react'
import { useWishList } from '../../context/WishListContext'
import ProductCard from '../ui/ProductCard';

const Wishlist = () => {
    const { wishList } = useWishList()
    console.log(wishList);

    return (
        <div className='flex gap-5 my-10 w-11/12 mx-auto'>
            <div className='grid grid-cols-4 gap-4'>
                {
                    wishList.map(item => {
                        return <ProductCard item={item} />
                    })
                }
            </div>
        </div>
    )
}

export default Wishlist