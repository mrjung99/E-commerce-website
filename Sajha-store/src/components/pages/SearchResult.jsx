import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import product from "../../json/product.json"
import ProductFilter from "../ui/ProductFilter"
import ProductCard from "../ui/ProductCard"

const SearchResult = () => {
    const location = useLocation()
    // const navigate = useNavigate()
    const [searchResult, setSearchResult] = useState([])
    const [loading, setLoading] = useState(false)

    const searchParams = new URLSearchParams(location.search)
    const searchQuery = searchParams.get("q")?.toLowerCase() || ""
    const searchCategory = searchParams.get("category")?.toLowerCase() || ""

    useEffect(() => {
        const performSearch = () => {
            setLoading(true)
            setTimeout(() => {
                let result = product
                const hasSearchQuery = searchQuery && searchQuery.trim() !== ""
                const hasSearchCategory = searchCategory && searchCategory !== "all" && searchCategory !== ""
                if (hasSearchQuery || hasSearchCategory) {
                    result = product.filter(item => {
                        const name = (item.name || "").toLowerCase()
                        const brand = (item.brand || "").toLowerCase()
                        const title = (item.title || "").toLowerCase()
                        const category = (item.category || "").toLowerCase()

                        const matchQuery = !hasSearchQuery || name.includes(searchQuery)
                            || brand.includes(searchQuery) || title.includes(searchQuery)
                            || category.includes(searchQuery)

                        const matchCategory = !hasSearchCategory || category === searchCategory

                        return matchQuery && matchCategory
                    })
                }

                setSearchResult(result)
                setLoading(false)
            }, 500);
        }
        performSearch()
    }, [searchQuery, searchCategory, location.search])

    return (
        <div className='flex gap-3 w-11/12 min-h-screen mx-auto my-5'>
            <ProductFilter />
            <div className='flex-1 justify-center items-center'>
                {loading ? (
                    <div className='flex justify-center items-center h-full w-full '>
                        <span className="loader"></span>
                    </div>) :
                    searchResult.length === 0 ? (
                        <div className='text-center py-10'>
                            <p className='text-gray-500 text-2xl'>No such product found!!</p>
                        </div>) : (
                        <div className='grid grid-cols-4 gap-4'>
                            {searchResult.map(item => <ProductCard key={item.id} item={item} />)}
                        </div>)
                }
            </div>
        </div>
    )
}

export default SearchResult