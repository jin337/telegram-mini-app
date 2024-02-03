import React from 'react'

function Cart({ item }) {
  return (
    <div className='px-4 py-3 flex justify-between'>
      <div className='flex'>
        <div className='text-4xl'>{item.Image}</div>
        <div className='ml-2'>
          <div className='font-bold text-sm'>
            {item.title}
            <span className=' text-amber-500 ml-1'>{item.quantity}x</span>
          </div>
          <div className='text-sm text-neutral-400'>{item.desc}</div>
        </div>
      </div>
      <div className='text-sm font-bold'>${item.price}</div>
    </div>
  )
}

export default Cart
