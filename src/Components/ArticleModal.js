import React, { useState } from 'react'
import './modal.css'

const ArticleModal = ({ article, onClose }) => {
  // --- Hooks MUST be first ---
  const [imageError, setImageError] = useState(false)

  if (!article) return null

  // ---- NEWS DATA.IO FIELD SUPPORT ----
  const imageUrl =
    article.image_url ||
    article.image ||
    article.urlToImage

  const url =
    article.link ||
    article.url ||
    '#'

  const sourceName =
    article.source_id ||
    article.source?.name ||
    article.source ||
    'Unknown Source'

  const author =
    (Array.isArray(article.creator) ? article.creator?.[0] : article.creator) ||
    article.author ||
    'Unknown Author'

  const publishDate =
    article.pubDate ||
    article.publishedAt ||
    new Date().toISOString()

  const description =
    article.description ||
    article.content ||
    'No description available.'

  const fullContent =
    article.content ||
    article.full_description ||
    article.description ||
    'Full article content unavailable. Open original website.'

  const fallbackImage =
    `https://picsum.photos/seed/${encodeURIComponent(article.title)}/600/350`

  return (
    <div className='modalOverlay' onClick={onClose}>
      <div className='modalContent' onClick={(e) => e.stopPropagation()}>

        <button className='closeBtn' onClick={onClose}>✕</button>

        {!imageError && imageUrl ? (
          <img
            src={imageUrl}
            alt={article.title}
            className='modalImage'
            onError={() => setImageError(true)}
          />
        ) : (
          <img
            src={fallbackImage}
            alt="Fallback"
            className='modalImage'
          />
        )}

        <div className='modalBody'>
          <h1 className='modalTitle'>{article.title}</h1>

          <div className='modalMeta'>
            <span className='source'>📰 {sourceName}</span>
            <span className='date'>📅 {new Date(publishDate).toLocaleDateString()}</span>
            {author && <span className='author'>✍️ {author}</span>}
          </div>

          <div className='modalDescription'>
            <p>{description}</p>
          </div>

          {fullContent && (
            <div className='modalFullContent'>
              <p>{fullContent}</p>
            </div>
          )}

          <div className='modalFooter'>
            <a
              href={url !== '#' ? url : undefined}
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
