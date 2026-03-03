import React from "react"

const Button = ({ children, type, onClick, classes }) => {
  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg bg-black text-white transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ${classes}`}
      >
        {children}
      </button>
    )
  }
  return (
    <button
      onClick={onClick}
      type="button"
      className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 tablet:first:ml-0 ${classes} link`}
    >
      {children}
    </button>
  )
}

export default Button
