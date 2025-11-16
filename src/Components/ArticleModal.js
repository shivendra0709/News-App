import React from 'react'
import './modal.css'

const ArticleModal = ({ article, onClose }) => {
  if (!article) return null

  // Handle both NewsAPI and NewsData.io formats
  const imageUrl = article.urlToImage || article.image_url || article.image
  const sourceName = article.source?.name || article.source || 'Unknown Source'
  const publishDate = article.publishedAt || article.pubDate || new Date().toISOString()
  const author = article.author || 'Unknown Author'
  const url = article.url || article.link || '#'

  return (
    <div className='modalOverlay' onClick={onClose}>
      <div className='modalContent' onClick={(e) => e.stopPropagation()}>
        <button className='closeBtn' onClick={onClose}>✕</button>
        
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt={article.title}
            className='modalImage'
          />
        )}
        
        <div className='modalBody'>
          <h1 className='modalTitle'>{article.title}</h1>
          
          <div className='modalMeta'>
            <span className='source'>📰 {sourceName}</span>
            <span className='date'>📅 {new Date(publishDate).toLocaleDateString()}</span>
            <span className='author'>{author ? `✍️ ${author}` : ''}</span>
          </div>

          <div className='modalDescription'>
            <p>{article.description}</p>
          </div>

          <div className='modalFullContent'>
            <p>{article.content}</p>
          </div>

          <div className='modalFooter'>
            <a 
              href={url} 
              target='_blank' 
              rel='noopener noreferrer'
              className='fullArticleLink'
            >
              Read Full Article on Original Website →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleModal
