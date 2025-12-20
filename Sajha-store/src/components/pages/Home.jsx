import { useRef } from "react";
import product from "../../json/product.json"
import PopularProductCard from '../PopularProductCard';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const Home = () => {
    const boxRef = useRef(null)
    const handlePrev = () => {
        if (boxRef.current) {
            boxRef.current.scrollLeft -= boxRef.current.clientWidth
        }
    }

    const handleNext = () => {
        if (boxRef.current) {
            boxRef.current.scrollLeft += boxRef.current.clientWidth
        }
    }

    return (
        <section className='py-5 min-h-lvh w-11/12 mx-auto mb-12'>
            <div className=" h-[60vh] flex items-center justify-center bg-gray-100">
                <div className="relative flex items-center gap-15 w-9/12">
                    <div>
                        <p className="text-[15px] text-blue-800 font-sans leading-0">Welcome to</p>
                        <h1 className="text-5xl text-gray-800 font-bold leading-15 font-sans">Sajha Store</h1>
                        <p className="text-[16px] font-light font-sans">Quality products for every corner of your life, with prices that make sense.
                        </p>
                        <NavLink to="/product">
                            <button className="bg-orange-600 text-[13px] hover:bg-orange-700 mt-5 
                        text-gray-100 px-3 py-1 cursor-pointer transition-colors rounded">
                                Shop Now
                            </button>
                        </NavLink>
                    </div>
                    <div className="absolute -right-5 -top-5 bg-blue-100 h-[40vh] w-[61vh] max-h"></div>
                    <div className="z-1">
                        <img className="w-[70vh] object-cover" src="https://plus.unsplash.com/premium_photo-1661479824677-19535ce314fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFtaWx5JTIwc2hvcHBpbmd8ZW58MHx8MHx8fDA%3D" alt="" />
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <h2 className='text-xl my-1 font-sans text-gray-800 mb-2'>Popular product</h2>
                <div className='border border-gray-300 relative'>
                    <button className=' absolute z-60 top-1/2 -translate-y-1/2 left-0  flex justify-center 
                        items-center bg-[rgba(0,0,0,0.4)] hover:bg-[rgba(0,0,0,0.6)] p-1 rounded-full
                        text-white h-[42px] w-[42px] cursor-pointer'
                        onClick={handlePrev}>
                        <GrPrevious size={23} />
                    </button>
                    <button className=' absolute z-60 top-1/2 -translate-y-1/2 right-0 flex justify-center 
                        items-center bg-[rgba(0,0,0,0.4)] hover:bg-[rgba(0,0,0,0.6)] p-1 rounded-full
                        text-white h-[42px] w-[42px] cursor-pointer'
                        onClick={handleNext}>
                        <GrNext size={23} />
                    </button>

                    <div ref={boxRef} className='flex gap-3 overflow-x-hidden p-3 scroll-smooth bg-white'>
                        {product.filter(product => product.rating >= 3).map(item => {
                            return <PopularProductCard key={item.id} item={item} />
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home