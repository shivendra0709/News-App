import React, { useState, useEffect } from 'react'
import Card from './card'
import ArticleModal from './ArticleModal'
import { mockArticles, mockArticlesArray } from './mockData'
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

    // NewsData.io API key - Using your provided API key
    const API_KEY = 'pub_5769276e8c2e4482a51773413149c5a4'
    const BASE_URL = 'https://newsdata.io/api/1/latest'

    // Simplified category to query mapping for NewsData.io
    const categoryQueries = {
        general: '',
        technology: 'technology OR AI OR software',
        business: 'business OR finance OR economy',
        entertainment: 'entertainment OR movies OR celebrities'
    }

    // Fetch news articles
    const fetchNews = async (searchQuery = '', selectedCategory = 'general', pageNum = 1) => {
        setLoading(true)
        setError(null)
        try {
            let url = ''
            const categoryQuery = categoryQueries[selectedCategory] || categoryQueries.general
            
            if (searchQuery) {
                url = `${BASE_URL}?apikey=${API_KEY}&q=${encodeURIComponent(searchQuery)}&pageSize=100&page=${pageNum}`
            } else {
                if (categoryQuery) {
                    url = `${BASE_URL}?apikey=${API_KEY}&q=${categoryQuery}&pageSize=100&page=${pageNum}`
                } else {
                    url = `${BASE_URL}?apikey=${API_KEY}&pageSize=100&page=${pageNum}`
                }
            }
            
            console.log('Fetching from:', url)
            const response = await fetch(url)
            const data = await response.json()
            
            console.log('API Response:', data)
            
            if (data.status === 'error' || !data.results) {
                throw new Error(data.message || 'Failed to fetch articles')
            }
            
            if (data.results && data.results.length > 0) {
                // On first page, set articles; on load more, append articles
                if (pageNum === 1) {
                    setArticles(data.results)
                } else {
                    setArticles(prev => [...prev, ...data.results])
                }
            } else {
                if (pageNum === 1) {
                    setError('No articles found for this search. Try a different category or search term.')
                    // Use mock data as fallback
                    const categoryMock = mockArticles[selectedCategory] || mockArticles.general
                    setArticles(categoryMock)
                }
            }
        } catch (err) {
            console.error('Fetch error:', err)
            console.log('Using mock data due to API error')
            
            // Filter mock data based on search or category
            let filteredMock = []
            
            if (searchQuery) {
                // Search across all categories
                filteredMock = mockArticlesArray.filter(article => 
                    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    article.content.toLowerCase().includes(searchQuery.toLowerCase())
                )
            } else {
                // Get articles for selected category
                filteredMock = mockArticles[selectedCategory] || mockArticles.general
            }
            
            setArticles(filteredMock)
            setError(null) // Clear error when using mock data
        } finally {
            setLoading(false)
        }
    }

    // Fetch news on component mount and when category changes
    useEffect(() => {
        setPage(1)
        fetchNews('', category, 1)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category])

    // Handle search
    const handleSearch = (e) => {
        e.preventDefault()
        if (search.trim()) {
            setPage(1)
            fetchNews(search, 'general', 1)
        }
    }

    // Handle load more
    const handleLoadMore = () => {
        const nextPage = page + 1
        setPage(nextPage)
        fetchNews(search, category, nextPage)
    }

    // Handle category change
    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory)
        setSearch('')
    }

    // Handle card click to show modal
    const handleCardClick = (article) => {
        setSelectedArticle(article)
        setShowModal(true)
    }

    // Handle modal close
    const handleCloseModal = () => {
        setShowModal(false)
        setSelectedArticle(null)
    }

    return (
        <div className='newsAppContainer'>
            {/* Navigation Bar */}
            <nav className='navbar'>
                <div className='navBrand'>
                    <h1>📰 News</h1>
                </div>
                <ul className='navLinks'>
                    <li><a href='#top' onClick={() => handleCategoryChange('general')}>All News</a></li>
                    <li><a href='#top' onClick={() => handleCategoryChange('general')}>Trending</a></li>
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

            {/* Category Buttons */}
            <div className='categorySection'>
                <h2>Categories</h2>
                <div className='categoryBtn'>
                    <button
                        className={category === 'general' ? 'active' : ''}
                        onClick={() => handleCategoryChange('general')}
                    >
                        📰 General
                    </button>
                    <button
                        className={category === 'technology' ? 'active' : ''}
                        onClick={() => handleCategoryChange('technology')}
                    >
                        💻 Technology
                    </button>
                    <button
                        className={category === 'business' ? 'active' : ''}
                        onClick={() => handleCategoryChange('business')}
                    >
                        💼 Business
                    </button>
                    <button
                        className={category === 'entertainment' ? 'active' : ''}
                        onClick={() => handleCategoryChange('entertainment')}
                    >
                        🎬 Entertainment
                    </button>
                </div>
            </div>

            {/* Loading and Error States */}
            {loading && <div className='loading'>Loading news articles...</div>}
            {error && <div className='error'>{error}</div>}

            {/* Main Content with Sidebar */}
            <div className='mainContentWrapper'>
                {/* Trending Sidebar */}
                <aside className='trendingSidebar'>
                    <div className='trendingHeader'>
                        <h3>🔥 Trending</h3>
                    </div>
                    <div className='trendingList'>
                        {articles.slice(0, 5).map((article, index) => (
                            <div 
                                key={index}
                                className='trendingItem'
                                onClick={() => handleCardClick(article)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className='trendingNumber'>{index + 1}</div>
                                <div className='trendingContent'>
                                    <h4>{article.title}</h4>
                                    <small>{new Date(article.publishedAt || article.pubDate).toLocaleDateString()}</small>
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Articles Cards */}
                <div className='articlesMain'>
                    {!loading && !error && <Card articles={articles} onCardClick={handleCardClick} />}

                    {/* Load More Button */}
                    {!loading && articles.length > 0 && (
                        <div className='loadMoreContainer'>
                            <button className='loadMoreBtn' onClick={handleLoadMore}>
                                Load More Articles
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Article Modal */}
            {showModal && <ArticleModal article={selectedArticle} onClose={handleCloseModal} />}
        </div>
    )
}

export default NewsApp
