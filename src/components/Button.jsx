import './Button.css'

function Button({ 
  children, 
  variant = 'purple', 
  size = 'default',
  disabled = false,
  className = '',
  onClick,
  type = 'button',
  ...props 
}) {
  const buttonClasses = [
    'button',
    variant,
    size !== 'default' && size,
    disabled && 'disabled',
    className
  ].filter(Boolean).join(' ')

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      aria-disabled={disabled}
      {...props}
    >
      <span>{children}</span>
    </button>
  )
}

export default Button
