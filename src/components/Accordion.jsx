import './Accordion.css'
import { useState } from 'react'

function PlusIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M13.998 15.0996C14.4949 15.0998 14.8984 15.5031 14.8984 16V22C14.8982 22.4967 14.4948 22.9002 13.998 22.9004C13.5011 22.9004 13.0979 22.4969 13.0977 22V16C13.0977 15.5029 13.501 15.0996 13.998 15.0996ZM12 13.0996C12.4969 13.0998 12.9004 13.5031 12.9004 14C12.9002 14.4967 12.4967 14.9002 12 14.9004H6C5.50307 14.9004 5.09982 14.4969 5.09961 14C5.09961 13.5029 5.50294 13.0996 6 13.0996H12ZM21.998 13.0996C22.4949 13.0998 22.8984 13.5031 22.8984 14C22.8982 14.4967 22.4948 14.9002 21.998 14.9004H15.998C15.5011 14.9004 15.0979 14.4969 15.0977 14C15.0977 13.5029 15.501 13.0996 15.998 13.0996H21.998ZM13.998 5.09961C14.4949 5.09982 14.8984 5.50307 14.8984 6V12C14.8982 12.4967 14.4948 12.9002 13.998 12.9004C13.5011 12.9004 13.0979 12.4969 13.0977 12V6C13.0977 5.50294 13.501 5.09961 13.998 5.09961Z" fill="currentColor"/>
    </svg>
  )
}

function MinusIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 13.0996C12.4969 13.0998 12.9004 13.5031 12.9004 14C12.9002 14.4967 12.4967 14.9002 12 14.9004H6C5.50307 14.9004 5.09982 14.4969 5.09961 14C5.09961 13.5029 5.50294 13.0996 6 13.0996H12ZM21.998 13.0996C22.4949 13.0998 22.8984 13.5031 22.8984 14C22.8982 14.4967 22.4948 14.9002 21.998 14.9004H15.998C15.5011 14.9004 15.0979 14.4969 15.0977 14C15.0977 13.5029 15.501 13.0996 15.998 13.0996H21.998Z" fill="currentColor"/>
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
      <div className="accordion-heading">
        <button
          type="button"
          id={`${accordionId}-header`}
          className="accordion-header"
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-controls={`${accordionId}-content`}
        >
          <span className="accordion-title text-style-title-2">{title}</span>
          <span className="accordion-icon" aria-hidden="true">
            {isOpen ? <MinusIcon /> : <PlusIcon />}
          </span>
        </button>
      </div>
      <div
        id={`${accordionId}-content`}
        className="accordion-content"
        role="region"
        aria-labelledby={`${accordionId}-header`}
        hidden={!isOpen}
      >
        <div className="accordion-text text-style-body-4">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Accordion
