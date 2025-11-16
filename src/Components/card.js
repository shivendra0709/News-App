import React, { useState, useEffect } from 'react'
import './index.css'

const Card = ({ articles, onCardClick }) => {
  const [imageErrors, setImageErrors] = useState({})
  const [retryCount, setRetryCount] = useState({})

  // Reset image errors when articles change
  useEffect(() => {
    setImageErrors({})
    setRetryCount({})
  }, [articles])

  const handleImageError = (index) => {
    const currentRetry = retryCount[index] || 0
    
    if (currentRetry < 2) {
      // Retry with alternative URL format
      setRetryCount(prev => ({
        ...prev,
        [index]: currentRetry + 1
      }))
    } else {
      // Give up after 2 retries, show placeholder
      setImageErrors(prev => ({
        ...prev,
        [index]: true
      }))
    }
  }

  return (
    <div className='cardContainer'>
      {articles && articles.length > 0 ? (
        articles.map((article, index) => {
          // Handle both NewsAPI and NewsData.io formats
          const imageUrl = article.urlToImage || article.image_url || article.image
          const sourceName = article.source?.name || article.source || 'Unknown Source'
          const publishDate = article.publishedAt || article.pubDate || new Date().toISOString()
          
          return (
            <div 
              key={index} 
              className='card'
              onClick={() => onCardClick(article)}
              role='button'
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onCardClick(article)
                }
              }}
            >
              {imageUrl && !imageErrors[index] ? (
                <img 
                  key={`${index}-${retryCount[index] || 0}`}
                  src={imageUrl} 
                  alt={article.title} 
                  className='cardImage'
                  onError={() => handleImageError(index)}
                  loading='lazy'
                  crossOrigin='anonymous'
                />
              ) : (
                <div className='cardImagePlaceholder'>
                  <div className='placeholderText'>📰</div>
                </div>
              )}
              <div className='cardContent'>
                <h3 className='cardTitle'>{article.title}</h3>
                <p className='cardDescription'>
                  {article.description || 'No description available'}
                </p>
                <div className='cardMeta'>
                  <small>Source: {sourceName}</small>
                  <small>{new Date(publishDate).toLocaleDateString()}</small>
                </div>
                <button className='cardButton'>
                  Read More
                </button>
              </div>
            </div>
          )
        })
      ) : (
        <p className='noArticles'>No articles found. Try a different search or category.</p>
      )}
    </div>
  )
}

export default Card
