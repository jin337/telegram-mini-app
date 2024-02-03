import React, { useState } from 'react'
import Button from './Button';

function Card({ item, onAdd, onRemove }) {
  const [count, setCount] = useState(item.quantity||0)
  const handleDecrement = () => {
    setCount(count - 1);
    onRemove(item)
  }
  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(item)
  }

  return (
    <div className="relative w-28 text-center my-4 z-0">
      <div className={`text-xs leading-none font-bold text-white bg-amber-500 py-1 px-2 rounded-full absolute right-3 ${count !== 0 ? 'visible' : 'hidden'}`}>{count}</div>
      <div className='text-6xl'>{item.Image}</div>
      <div className='text-sm my-2 text-nowrap'>{item.title} · <span className="font-bold">$ {item.price}</span></div>
      <div className='flex gap-1.5 px-4'>
        {count !== 0 && <Button title={'-'} type={'remove'} onClick={handleDecrement} />}
        <Button title={count === 0 ? 'ADD' : '+'} type={'add'} onClick={handleIncrement} />
      </div>
    </div>
  )
}

export default Card
