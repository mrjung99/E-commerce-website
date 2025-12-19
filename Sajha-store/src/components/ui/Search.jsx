import { useCallback, useEffect, useRef } from 'react'
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdClear } from "react-icons/md";
import product from "../../json/product.json"

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("")
    // const [selectedCategory, setselectedCategory] = useState("all")
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

            // const matchCategory = selectedCategory === "all" ||
            //     itemCategory.toLowerCase() === selectedCategory.toLowerCase()

            // return matchText && matchCategory
            return matchText
        })

        return filteredProduct.slice(0, 5)
    }, [])


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
    const handleSearch = useCallback((query = searchTerm, category = "") => {
        try {
            const searchQuery = typeof query === "string" ? query : String(query)
            const trimmedQuery = searchQuery.trim()

            const params = new URLSearchParams()
            if (trimmedQuery) {
                params.set("q", trimmedQuery)
            }
            if (category) {
                params.set("category", category)
            }
            navigate(`/search?${params.toString()}`)
            setShowSuggestion(false)
            handleClear()
        } catch (error) {
            console.log("Error in search: ", error);
        }
    }, [searchTerm, navigate])

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
            handleSearch()
        }
    }

    // const handleCategoryChanage = (e) => {
    //     const newCategory = e.target.value || "all"
    //     setselectedCategory(newCategory)
    //     setTimeout(() => {
    //         handleSearch(searchTerm, newCategory)
    //     }, 0);
    //     setSuggestions([])
    //     setShowSuggestion(false)
    // }

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
        <div ref={searchRef} className='relative font-sans font-thin py-2 flex items-center 
            justify-center w-lvh'>
            {/* <select name="category" id="" className='outline-0 bg-gray-white rounded p-2 text-[13px]  cursor-pointer'
                value={selectedCategory}
                onChange={handleCategoryChanage}
            >
                <option value="all">All Categories</option>
                <option value="mobile">Mobile</option>
                <option value="laptop">Laptop</option>
                <option value="sports">Sports</option>
                <option value="clothing">Clothing</option>
                <option value="healthandbeauty">Health and Beauty</option>
            </select> */}

            <div className="w-10/12 flex items-stretch">
                <input type="text" placeholder='Search for product...'
                    className='text-[15px] py-2 px-4  w-full bg-white outline-0 border border-orange-600 rounded-l-full 
                    focus:shadow-[inset_0_0_5px_rgba(249,115,22,0.4)]'
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
                <button className='cursor-pointer text-[14px] text-white border border-orange-600 bg-orange-600 
                rounded-r-full px-4 py-1'
                    onClick={() => handleSearch()}>
                    <CiSearch size={25} />
                </button>
            </div>
            {
                searchTerm && <MdClear size={25} className='absolute text-gray-800 right-28 cursor-pointer 
                                hover:bg-[rgba(0,0,0,0.2)] hover:rounded-full'
                    onClick={handleClear} />
            }

            {showSuggestion && suggestions.length > 0 && (
                <div className='absolute w-10/12 mx-auto mt-1 top-[90%] left-0 right-0 z-50 bg-white border-gray-100 shadow-lg rounded-md '>
                    {
                        suggestions.map(item => (
                            <div key={item.id} onClick={() => handleSuggestionClick(item)} className='p-2 hover:bg-gray-100 cursor-pointer border-b
                                border-gray-100 last:border-b-0 font-sans font-thin'>
                                <p className='text-[14px]'>
                                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
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