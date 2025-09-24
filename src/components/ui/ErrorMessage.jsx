import React from 'react'
import './ErrorMessage.css'

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="error-message">
      <div className="error-icon">⚠️</div>
      <p>{message}</p>
      {onRetry && (
        <button onClick={onRetry} className="retry-button">
          Thử lại
        </button>
      )}
    </div>
  )
}

export default ErrorMessage