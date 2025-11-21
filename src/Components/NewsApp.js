// NewsApp.js
import React, { useState, useEffect } from 'react'
import Card from './card'
import ArticleModal from './ArticleModal'
import './index.css'

const NewsApp = () => {
    const [articles, setArticles] = useState([])
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('general')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [selectedArticle, setSelectedArticle] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)

    // GNEWS API KEY
    const API_KEY = '733f7a06d539dff9080f60c83a366b43'

    const SEARCH_BASE = 'https://gnews.io/api/v4/search'
    const TOP_BASE = 'https://gnews.io/api/v4/top-headlines'

    // Category → topic mapping
    const categoryQueries = {
        general: 'world',
        technology: 'technology',
        business: 'business',
        entertainment: 'entertainment',
        health: 'health',
        crime: 'nation',
        education: 'education'
    }

    // Build URL based on search OR category
    const buildUrl = (searchQuery = '', selectedCategory = 'general', pageNum = 1, pageSize = 20) => {
        const encodedSearch = encodeURIComponent(searchQuery)
        const topic = categoryQueries[selectedCategory] || 'world'

        const commonParams = `lang=en&max=${pageSize}&page=${pageNum}&apikey=${API_KEY}`

        if (searchQuery.trim()) {
            return `${SEARCH_BASE}?q=${encodedSearch}&${commonParams}`
        } else {
            return `${TOP_BASE}?topic=${topic}&${commonParams}`
        }
    }

    // Fetch news function
    const fetchNews = async (searchQuery = '', selectedCategory = 'general', pageNum = 1) => {
        setLoading(true)
        setError(null)

        try {
            const url = buildUrl(searchQuery, selectedCategory, pageNum)
            console.log("Fetching:", url)

            const res = await fetch(url)
            if (!res.ok) throw new Error(`HTTP ${res.status}`)

            const data = await res.json()
            const fetched = Array.isArray(data.articles) ? data.articles : []

            if (pageNum === 1) {
                setArticles(fetched)
            } else {
                const existing = new Set(articles.map(a => a.url))
                const uniqueNew = fetched.filter(a => a.url && !existing.has(a.url))
                setArticles(prev => [...prev, ...uniqueNew])
            }

            setHasMore(fetched.length >= 20)
        } catch (err) {
            console.log("Error:", err)
            setError("Failed to load articles.")
            setHasMore(false)
        } finally {
            setLoading(false)
        }
    }

    // Category change → reload
    useEffect(() => {
        setPage(1)
        fetchNews('', category, 1)
        // eslint-disable-next-line
    }, [category])

    const handleSearch = (e) => {
        e.preventDefault()
        if (!search.trim()) return
        setPage(1)
        fetchNews(search, "general", 1)
    }

    const loadMore = () => {
        const next = page + 1
        setPage(next)
        fetchNews(search, category, next)
    }

    const handleCategoryChange = (cat) => {
        setCategory(cat)
        setSearch('')
        setPage(1)
    }

    const handleCardClick = (article) => {
        setSelectedArticle(article)
        setShowModal(true)
    }

    return (
        <div className='newsAppContainer'>

            {/* NAVBAR */}
            <nav className='navbar'>
                <div className='navBrand'><h1>📰 News</h1></div>

                <ul className='navLinks'>
                    <li><a onClick={() => handleCategoryChange('general')}>All News</a></li>
                    <li><a onClick={() => handleCategoryChange('general')}>Trending</a></li>
                </ul>

                <form className='searchBar' onSubmit={handleSearch}>
                    <input
                        type='text'
                        placeholder='Search News...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type='submit'>Search</button>
                </form>
            </nav>

            {/* CATEGORY */}
            <div className="categorySection">
                <h2>Categories</h2>
                <div className="categoryBtn">
                    {[
                        ['general', '📰 General'],
                        ['technology', '💻 Technology'],
                        ['business', '💼 Business'],
                        ['entertainment', '🎬 Entertainment'],
                        ['health', '🏥 Health'],
                        ['crime', '🚨 Crime'],
                        ['education', '🎓 Education'],
                    ].map(([id, label]) => (
                        <button
                            key={id}
                            className={category === id ? 'active' : ''}
                            onClick={() => handleCategoryChange(id)}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            {loading && <div className="loading">Loading...</div>}
            {error && <div className="error">{error}</div>}

            <div className="mainContentWrapper">
                <div className="articlesMain">
                    {!loading && !error && (
                        <Card articles={articles} onCardClick={handleCardClick} />
                    )}

                    {!loading && hasMore && (
                        <div className="loadMoreContainer">
                            <button className="loadMoreBtn" onClick={loadMore}>
                                Load More
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {showModal && (
                <ArticleModal article={selectedArticle} onClose={() => setShowModal(false)} />
            )}
        </div>
    )
}

export default NewsApp
