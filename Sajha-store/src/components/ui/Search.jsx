import { useCallback, useEffect, useRef } from 'react'
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdClear } from "react-icons/md";
import product from "../../json/product.json"

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setselectedCategory] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestion, setShowSuggestion] = useState(false)
    const navigate = useNavigate()
    const searchRef = useRef(null)

    const handleClear = () => {
        setSearchTerm("")
        setSuggestions([])
        setShowSuggestion(false)
    }

    const getSuggestions = useCallback((query) => {
        if (!query || typeof query != "string" || !query.trim()) {
            return []
        }

        const filteredProduct = product.filter(item => {
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
        })

        return filteredProduct.slice(0, 5)
    }, [selectedCategory])


    useEffect(() => {
        const timer = setTimeout(() => {
            try {
                const currentSearchTerm = typeof searchTerm === "string" ? searchTerm : String(searchTerm)
                if (currentSearchTerm.trim()) {
                    const results = getSuggestions(currentSearchTerm)
                    setSuggestions(results)
                    setShowSuggestion(results.length > 0)
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

    //handle search method
    const handleSearch = useCallback((query = searchTerm, category = selectedCategory) => {
        try {
            const searchQuery = typeof query === "string" ? query : String(query)
            const trimmedQuery = searchQuery.trim()

            const params = new URLSearchParams()
            if (trimmedQuery) {
                params.set("q", trimmedQuery)
            }
            if (category !== "all") {
                params.set("category", category)
            }

            if (trimmedQuery || category !== "all") {
                navigate(`/search?${params.toString()}`)
            } else {
                console.log("No search term or category selected");
            }
        } catch (error) {
            console.log("Error in search: ", error);
        }

    }, [searchTerm, selectedCategory, navigate])

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
            handleSearch()
        }
    }

    const handleCategoryChanage = (e) => {
        const newCategory = e.target.value || "all"
        setselectedCategory(newCategory)
        setTimeout(() => {
            handleSearch(searchTerm, newCategory)
        }, 0);
        setSuggestions([])
        setShowSuggestion(false)
    }

    const handleSuggestionClick = (item) => {
        const query = item.name || item.category || ''
        handleSearch(query)
        setSearchTerm(query)
        handleClear()
    }

    useEffect(() => {
        const handleMouseClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setShowSuggestion(false)
            }
        }
        document.addEventListener("mousedown", handleMouseClickOutside)

        return () => document.removeEventListener("mousedown", handleMouseClickOutside)
    }, [])


    return (
        <div ref={searchRef} className='relative border border-green-400 py-1 px-3 flex items-center 
            justify-center gap-2 w-lvh'>
            <select name="category" id="" className='outline-0 bg-gray-100 rounded p-2 text-[11px] cursor-pointer'
                value={selectedCategory}
                onChange={handleCategoryChanage}
            >
                <option value="all">All Categories</option>
                <option value="mobile">Mobile</option>
                <option value="laptop">Laptop</option>
                <option value="sports">Sports</option>
                <option value="clothing">Clothing</option>
                <option value="healthandbeauty">Health and Beauty</option>
            </select>

            <div className="input-wrapper py-0.5">
                <input type="text" placeholder='Search for product' className=' text-[11px] 
                    text-gray-800 p-2 outline-0 w-full bg-gray-100 rounded'
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                        setShowSuggestion(true)
                    }}
                    onFocus={() => {
                        if (suggestions.length > 0) {
                            setShowSuggestion(true)
                        }
                    }}
                    onKeyDown={handleKeyDown}
                />
            </div>
            {
                searchTerm && <MdClear size={20} className='absolute right-11 cursor-pointer 
                    hover:bg-gray-800 hover:rounded-full hover:text-white' onClick={handleClear} />
            }
            <button className='absolute right-5 cursor-pointer z-50' onClick={() => handleSearch()}>
                <CiSearch size={20} />
            </button>

            {showSuggestion && suggestions.length > 0 && (
                <div className='absolute mt-1 top-full left-1/4 right-0 z-50 bg-white border-gray-100 shadow-lg rounded-md'>
                    {
                        suggestions.map(item => (
                            <div key={item.id} onClick={() => handleSuggestionClick(item)} className='p-2 hover:bg-gray-100 cursor-pointer border-b
                                border-gray-100 last:border-b-0'>
                                <p className='text-[11px] font-medium'>
                                    {item.name}
                                </p>
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
    )
}

export default Search