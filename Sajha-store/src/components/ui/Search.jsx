import { useCallback, useEffect, useRef } from 'react'
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MdClear } from "react-icons/md";
import product from "../../json/product.json"

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setselectedCategory] = useState("all")
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestion, setShowSuggestion] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const searchRef = useRef(null)

    const handleClear = () => {
        setSearchTerm("")
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSuggestion(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (location.pathname === '/search') {
            const queryParams = new URLSearchParams(location.search);
            const urlQuery = queryParams.get('q');

            // Ensure urlQuery is a string
            setSearchTerm(typeof urlQuery === 'string' ? urlQuery : '');
        }
    }, [location]);

    const getSuggestions = useCallback((query) => {

        if (!query || typeof query != "string" || !query.trim()) {
            return []
        }

        product.filter(item => {
            const itemName = item.name || "";
            const itemCategory = item.category || "";
            const itemTitle = item.title || "";
            const itemBrand = item.brand || "";

            const matchText = itemName.toLowerCase().includes(query.toLowerCase()) ||
                itemCategory.toLowerCase().includes(query.toLowerCase()) ||
                itemTitle.toLowerCase().includes(query.toLowerCase()) ||
                itemBrand.toLowerCase().includes(query.toLowerCase())

            const matchCategory = selectedCategory === "all" ||
                itemCategory.toLowerCase() === selectedCategory.toLowerCase()

            return matchText && matchCategory
        }).slice(0, 5)
    }, [selectedCategory])

    console.log("suggestions", suggestions);

    useEffect(() => {
        const timer = setTimeout(() => {
            try {
                const currentSearchTerm = typeof searchTerm === "string" ? searchTerm : String(searchTerm)
                if (currentSearchTerm.trim()) {
                    const results = getSuggestions(currentSearchTerm)
                    setSuggestions(results)
                    setShowSuggestion(true)
                } else {
                    setSuggestions([])
                    setShowSuggestion(false)
                }
            } catch (error) {
                console.log("Something went wrong: ", error);
                setSuggestions([])
                setShowSuggestion(false)
            }
            return () => clearTimeout(timer)
        }, 300)
    }, [getSuggestions, searchTerm])

    const handleSearch = useCallback((query = searchTerm) => {
        try {
            const searchQuery = typeof query === "string" ? query : String(query)
            const trimmedQuery = searchQuery.trim()

            if (trimmedQuery) {
                const params = new URLSearchParams()
                params.set("q", query)

                if (selectedCategory !== "all") {
                    params.set("category", selectedCategory)
                }
                navigate(`/search?${params.toString()}`)
                console.log(params.toString());

                handleClear()
            }

        } catch (error) {
            console.log("Error in search: ", error);
        }

    }, [searchTerm, selectedCategory, navigate])

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch()
        }
    }

    const handleCategoryChanage = (e) => {
        setselectedCategory(e.target.value || "all")
    }

    console.log(suggestions);


    return (
        <div ref={searchRef} className='relative border border-green-400 py-1 px-3 flex items-center 
        justify-center gap-2 w-lvh ml-3'>
            <select name="" id="" className='outline-0 text-[12px]'
                value={selectedCategory}
                onChange={handleCategoryChanage}
            >
                <option value="all">All Categories</option>
                <option value="homeandlifestyle">Home and lifestyle</option>
                <option value="electronic">Electronic Accessories</option>
                <option value="sports">Sports</option>
                <option value="clothing">Clothing</option>
                <option value="healthandbeauty">Health and Beauty</option>
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
            <button className='absolute right-5 cursor-pointer z-50' onClick={() => handleSearch()}>
                <CiSearch size={26} />
            </button>
            {/* {showSuggestion && <div className='absolute z-40'>
                {suggestions.map(item => {
                    console.log("suggestion item", item);

                    return <p key={item.id}>{item.title}</p>
                })}
            </div>} */}
        </div>
    )
}

export default Search