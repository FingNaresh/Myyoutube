import React from 'react'

const Button = ({ name, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-5 py-2 
        m-2 
        rounded-full 
        text-sm font-medium
        transition
        whitespace-nowrap
        ${isActive ? "bg-black text-white" : "bg-gray-200 hover:bg-gray-300"}
      `}
    >
      {name}
    </button>
  )
}

export default Button
