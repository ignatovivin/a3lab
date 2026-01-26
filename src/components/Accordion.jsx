import './Accordion.css'
import { useState } from 'react'

function PlusIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M14 5.1V22.9M5.1 14H22.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function MinusIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M5.1 14H22.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function Accordion({
  id,
  title,
  children,
  defaultOpen = false,
  className = '',
  onToggle
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const accordionId = `accordion-${id || title.replace(/\s+/g, '-').toLowerCase()}`

  const handleToggle = () => {
    const newState = !isOpen
    setIsOpen(newState)
    if (onToggle) {
      onToggle(newState)
    }
  }

  const accordionClasses = [
    'accordion',
    isOpen && 'accordion-open',
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={accordionClasses}>
      <button
        type="button"
        className="accordion-header"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls={`${accordionId}-content`}
      >
        <h3 className="accordion-title text-style-title-2">{title}</h3>
        <span className="accordion-icon" aria-hidden="true">
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </span>
      </button>
      {isOpen && (
        <div
          id={`${accordionId}-content`}
          className="accordion-content"
          role="region"
        >
          <div className="accordion-text text-style-body-4">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

export default Accordion
