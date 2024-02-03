import React from 'react'

function Button({ title, type, onClick }) {
  return (
    <div className={`text-base leading-none font-bold text-white text-center w-full p-2 box-border rounded-md ${type === 'remove' ? 'bg-red-500' : 'bg-amber-500'}`} onClick={onClick}>{title}</div>
  )
}

export default Button
