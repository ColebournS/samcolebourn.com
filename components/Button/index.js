import React from "react"

const Button = ({ children, type, onClick, classes, ariaLabel }) => {
  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        type="button"
        aria-label={ariaLabel}
        className={`bg-accent text-white font-medium px-6 py-3 rounded-md min-h-[44px] transition-colors duration-200 hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent-ring focus:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed ${classes || ''}`}
      >
        {children}
      </button>
    )
  }
  if (type === "ghost") {
    return (
      <button
        onClick={onClick}
        type="button"
        aria-label={ariaLabel}
        className={`text-neutral-500 font-medium text-sm px-3 py-2 rounded min-h-[44px] transition-colors duration-150 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-accent-ring focus:ring-offset-1 ${classes || ''}`}
      >
        {children}
      </button>
    )
  }
  return (
    <button
      onClick={onClick}
      type="button"
      aria-label={ariaLabel}
      className={`border border-neutral-200 bg-white text-neutral-900 font-medium px-6 py-3 rounded-md min-h-[44px] transition-colors duration-200 hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-accent-ring focus:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed ${classes || ''}`}
    >
      {children}
    </button>
  )
}

export default Button
