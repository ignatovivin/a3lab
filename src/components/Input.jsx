import './Input.css'
import { useState, useId } from 'react'

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
  id: idProp,
  onChange,
  onFocus,
  onBlur,
  ...props
}) {
  const generatedId = useId()
  const inputId = idProp || `input-${generatedId.replace(/:/g, '')}`
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
          <label htmlFor={inputId} className={`input-label-inside ${isFloating ? 'floating' : ''}`}>
            {isFloating ? (
              <span className="text-style-caption">{label}</span>
            ) : (
              <span className="text-style-body-4">{label}</span>
            )}
          </label>
        )}
        <input
          id={inputId}
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
          aria-describedby={error && errorMessage ? `${inputId}-error` : undefined}
          {...props}
        />
      </div>
      {error && errorMessage && (
        <span id={`${inputId}-error`} className="input-error-message text-style-caption" role="alert">
          {errorMessage}
        </span>
      )}
    </div>
  )
}

export default Input
