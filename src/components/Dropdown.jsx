import './Dropdown.css'
import { useState, useRef, useEffect } from 'react'

function ArrowDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ArrowUpIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 10L8 6L4 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function Dropdown({
  label,
  value,
  placeholder = 'Выберите значение',
  options = [],
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
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen)
    }
  }

  const handleSelect = (option) => {
    if (onChange) {
      onChange(option)
    }
    setIsOpen(false)
  }

  const handleFocus = () => {
    setIsFocused(true)
    if (onFocus) {
      onFocus()
    }
  }

  const handleBlur = () => {
    setIsFocused(false)
    if (onBlur) {
      onBlur()
    }
  }

  const dropdownClasses = [
    'dropdown',
    size,
    error && 'error',
    disabled && 'disabled',
    value && 'filled',
    isOpen && 'open',
    isHovered && 'hover',
    isFocused && 'focused',
    className
  ].filter(Boolean).join(' ')

  const displayValue = value ? (typeof value === 'string' ? value : value.label || value.value) : ''
  const hasValue = !!displayValue
  const isFloating = hasValue || isFocused || isOpen

  return (
    <div 
      className={dropdownClasses} 
      ref={dropdownRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="dropdown-wrapper">
        {label && (
          <span className={`dropdown-label-inside ${isFloating ? 'floating' : ''}`}>
            {isFloating ? (
              <span className="text-style-caption">{label}</span>
            ) : (
              <span className="text-style-body-4">{label}</span>
            )}
          </span>
        )}
        <button
          type="button"
          className="dropdown-button"
          disabled={disabled}
          onClick={handleToggle}
          onFocus={handleFocus}
          onBlur={handleBlur}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-invalid={error}
          aria-disabled={disabled}
          {...props}
        >
          {hasValue ? (
            <span className="dropdown-value text-style-body-4">
              {displayValue}
            </span>
          ) : (
            <span className="dropdown-value text-style-body-4">
              {placeholder}
            </span>
          )}
          <span className="dropdown-icon" aria-hidden="true">
            {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </span>
        </button>
      </div>
      {isOpen && options.length > 0 && (
        <div className="dropdown-menu" role="listbox">
          {options.map((option, index) => {
            const optionValue = typeof option === 'string' ? option : option.value || option.label
            const optionLabel = typeof option === 'string' ? option : option.label || option.value
            const isSelected = displayValue === optionValue || (value && typeof value === 'object' && value.value === optionValue)
            
            return (
              <button
                key={index}
                type="button"
                className={`dropdown-item ${isSelected ? 'selected' : ''}`}
                onClick={() => handleSelect(option)}
                role="option"
                aria-selected={isSelected}
              >
                <span className="dropdown-item-text text-style-body-4">
                  {optionLabel}
                </span>
              </button>
            )
          })}
        </div>
      )}
      {error && errorMessage && (
        <span className="dropdown-error-message text-style-caption" role="alert">
          {errorMessage}
        </span>
      )}
    </div>
  )
}

export default Dropdown
