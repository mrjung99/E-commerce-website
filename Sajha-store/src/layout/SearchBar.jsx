import { useEffect, useState } from 'react'
import Search from '../components/ui/Search'
import Right from '../components/ui/Right'
import { NavLink } from 'react-router-dom'

const SearchBar = () => {
    const [isScrolled, setIsScrolled] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            return setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [isScrolled])

    return (
        <div className={`flex justify-around items-center w-full py-3 sticky top-0  bg-white
        ${isScrolled ? "shadow-md " : "shadow-none"}`}>
            <div>
                <NavLink to="/">
                    <h1 className='text-lg font-semibold'>SAJHA STORE</h1>
                </NavLink>
            </div>
            <Search />
            <Right />
        </div>
    )
}

export default SearchBar