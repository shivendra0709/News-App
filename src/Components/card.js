import React, { useState, useEffect } from 'react'
import './index.css'

const Card = ({ articles, onCardClick }) => {
  const [imageErrors, setImageErrors] = useState({})
  const [retryCount, setRetryCount] = useState({})

  useEffect(() => {
    setImageErrors({})
    setRetryCount({})
  }, [articles])

  const handleImageError = (index) => {
    const currentRetry = retryCount[index] || 0
    const nextRetry = currentRetry + 1

    setRetryCount(prev => ({
      ...prev,
      [index]: nextRetry
    }))

    if (nextRetry >= 2) {
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
          // NewsData.io field mappings
          const rawImage =
            article.image_url || // NewsData.io
            article.image || 
            article.urlToImage // NewsAPI fallback

          const sourceName =
            article.source_id ||
            article.source?.name ||
            article.source ||
            "Unknown Source"

          const publishDate =
            article.pubDate ||
            article.publishedAt ||
            new Date().toISOString()

          const currentRetry = retryCount[index] || 0
          const seed = encodeURIComponent(article.title || index)

          // Smart image fallback system
          let imageSrc = ''
          if (rawImage && currentRetry === 0) {
            imageSrc = rawImage
          } else if (rawImage && currentRetry > 0) {
            imageSrc = `https://picsum.photos/seed/${seed}/500/300?retry=${currentRetry}`
          } else {
            imageSrc = `https://picsum.photos/seed/${seed}/500/300`
          }

          return (
            <div
              key={index}
              className='card'
              onClick={() => onCardClick(article)}
              role='button'
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') onCardClick(article)
              }}
            >
              {imageSrc && !imageErrors[index] ? (
                <img
                  src={imageSrc}
                  alt={article.title}
                  className='cardImage'
                  onError={() => handleImageError(index)}
                  loading='lazy'
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

                <button
                  type='button'
                  className='cardButton'
                  onClick={(e) => {
                    e.stopPropagation()
                    onCardClick(article)
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          )
        })
      ) : (
        <p className='noArticles'>No articles found. Try another category or search.</p>
      )}
    </div>
  )
}

export default Card
