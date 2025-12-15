import { useCallback } from 'react'
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdClear } from "react-icons/md";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const navigate = useNavigate()

    const handleClear = () => {
        setSearchTerm("")
    }

    const handleSearch = useCallback((query = searchTerm) => {
        if (query.trim()) {
            const params = new URLSearchParams()
            params.set("q", query)
            navigate(`/search?${params.toString()}`)
            handleClear()
        }
    }, [searchTerm, navigate])

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch()
        }
    }

    return (
        <div className='relative border border-green-400 py-1 px-3 flex items-center 
        justify-center gap-2 w-lvh ml-3'>
            <select name="" id="" className='outline-0 text-[12px]'>
                <option value="allcategories">All Categories</option>
                <option value="homeandlifestyle">Home and lifestyle</option>
                <option value="">Electronic Accessories</option>
                <option value="">Sports</option>
                <option value="">Clothing</option>
                <option value="">Health and Beauty</option>
            </select>

            <div className="input-wrapper ">
                <input type="text" placeholder='Search for product' className=' text-[13px] 
                text-gray-800 p-3 outline-0 w-full bg-gray-100 rounded'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onClick={handleSearch}
                    onKeyDown={handleKeyDown}
                />
            </div>
            {
                searchTerm && <MdClear size={24} className='absolute right-12 cursor-pointer 
                hover:bg-gray-500 hover:rounded-full hover:text-white' onClick={handleClear} />
            }
            <CiSearch size={26} className='absolute right-5 cursor-pointer' onClick={handleSearch} />
        </div>
    )
}

export default Search