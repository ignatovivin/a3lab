import './Textarea.css'
import { useState } from 'react'

function Textarea({
  label,
  value,
  placeholder,
  rows = 4,
  error = false,
  errorMessage = '',
  disabled = false,
  className = '',
  onChange,
  onFocus,
  onBlur,
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false)
  const hasValue = !!value
  const isFloating = hasValue || isFocused

  const textareaClasses = [
    'textarea',
    error && 'error',
    disabled && 'disabled',
    hasValue && 'filled',
    isFocused && 'focused',
    className
  ].filter(Boolean).join(' ')

  const handleFocus = (e) => {
    setIsFocused(true)
    if (onFocus) {
      onFocus(e)
    }
  }

  const handleBlur = (e) => {
    setIsFocused(false)
    if (onBlur) {
      onBlur(e)
    }
  }

  return (
    <div className={textareaClasses}>
      <div className="textarea-wrapper">
        {label && (
          <span className={`textarea-label-inside ${isFloating ? 'floating' : ''}`}>
            {isFloating ? (
              <span className="text-style-caption">{label}</span>
            ) : (
              <span className="text-style-body-4">{label}</span>
            )}
          </span>
        )}
        <textarea
          value={value}
          placeholder={placeholder}
          rows={rows}
          disabled={disabled}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="textarea-field text-style-body-4"
          aria-invalid={error}
          aria-disabled={disabled}
          {...props}
        />
      </div>
      {error && errorMessage && (
        <span className="textarea-error-message text-style-caption" role="alert">
          {errorMessage}
        </span>
      )}
    </div>
  )
}

export default Textarea
