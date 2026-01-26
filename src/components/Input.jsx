import './Input.css'
import { useState } from 'react'

function Input({
  label,
  value,
  placeholder,
  type = 'text',
  size = 'big',
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

  const inputClasses = [
    'input',
    size,
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
    <div className={inputClasses}>
      <div className="input-wrapper">
        {label && (
          <span className={`input-label-inside ${isFloating ? 'floating' : ''}`}>
            {isFloating ? (
              <span className="text-style-caption">{label}</span>
            ) : (
              <span className="text-style-body-4">{label}</span>
            )}
          </span>
        )}
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="input-field text-style-body-4"
          aria-invalid={error}
          aria-disabled={disabled}
          {...props}
        />
      </div>
      {error && errorMessage && (
        <span className="input-error-message text-style-caption" role="alert">
          {errorMessage}
        </span>
      )}
    </div>
  )
}

export default Input
