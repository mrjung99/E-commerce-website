import { useRef } from "react";
import product from "../../json/product.json"
import PopularProductCard from '../PopularProductCard';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

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
        <section className='p-5 min-h-lvh'>
            <img src="/charles-gao-PfAFNYL-qXY-unsplash.jpg" alt="" className='h-[60vh] w-full object-cover' />
            <div className='mt-10'>
                <h2 className='text-xl my-1'>Popular product</h2>
                <div className='border border-gray-400 relative'>
                    <button className=' absolute top-1/2 -translate-y-1/2 left-0  flex justify-center 
                        items-center bg-[rgba(0,0,0,0.4)] hover:bg-[rgba(0,0,0,0.6)] p-1 rounded-full
                        text-white h-[42px] w-[42px] cursor-pointer'><GrPrevious size={23}
                            onClick={handlePrev}
                        />
                    </button>
                    <button className=' absolute top-1/2 -translate-y-1/2 right-0 flex justify-center 
                        items-center bg-[rgba(0,0,0,0.4)] hover:bg-[rgba(0,0,0,0.6)] p-1 rounded-full
                        text-white h-[42px] w-[42px] cursor-pointer'><GrNext size={23}
                            onClick={handleNext}
                        />
                    </button>

                    <div ref={boxRef} className='flex gap-3 overflow-x-hidden p-2 scroll-smooth'>
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