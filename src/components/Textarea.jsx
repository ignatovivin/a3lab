import './Textarea.css'
import { useState, useId } from 'react'

function Textarea({
  label,
  value,
  placeholder,
  rows = 4,
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
  const textareaId = idProp || `textarea-${generatedId.replace(/:/g, '')}`
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
          <label htmlFor={textareaId} className={`textarea-label-inside ${isFloating ? 'floating' : ''}`}>
            {isFloating ? (
              <span className="text-style-caption">{label}</span>
            ) : (
              <span className="text-style-body-4">{label}</span>
            )}
          </label>
        )}
        <textarea
          id={textareaId}
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
          aria-describedby={error && errorMessage ? `${textareaId}-error` : undefined}
          {...props}
        />
      </div>
      {error && errorMessage && (
        <span id={`${textareaId}-error`} className="textarea-error-message text-style-caption" role="alert">
          {errorMessage}
        </span>
      )}
    </div>
  )
}

export default Textarea
