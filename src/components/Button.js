import React from 'react'

function Button({ title, type, onClick }) {
  return (
    <div className={`transition-all duration-300 text-sm leading-none font-bold text-white text-center w-full p-2 box-border rounded-md cursor-pointer ${type === 'remove' ? 'bg-red-500 active:bg-red-600' : 'bg-amber-500 active:bg-amber-600'} `} onClick={onClick}>{title}</div>
  )
}

export default Button
