import React, { useEffect, useState } from 'react'
import Cart from '../components/Cart'

const tele = window.Telegram.WebApp
function Order({ list, handleEdit }) {
  const [price, setPrice] = useState(0)

  useEffect(() => {
    const totalSum = list.reduce((accumulator, food) => {
      return accumulator + food.price * food.quantity
    }, 0)
    setPrice(totalSum.toFixed(2))
  }, [list])

  useEffect(() => {
    tele.MainButton.text = 'PAY $' + price
    tele.MainButton.color = '#31b545'
    tele.MainButton.show()
  }, [price])

  return (
    <main className='w-screen h-screen bg-neutral-200'>
      <div className='flex justify-between bg-white pt-10 px-4'>
        <div className='text-base font-bold'>YOUR ORDER</div>
        <div
          className='text-sm text-green-500 cursor-pointer'
          onClick={handleEdit}
        >
          Edit
        </div>
      </div>
      <div className='bg-white'>
        {list.map((item) => (
          <Cart
            item={item}
            key={item.id}
          />
        ))}
      </div>
      <div className='bg-neutral-200'>
        <input
          type='text'
          placeholder='Add comment'
          className='text-xl w-full my-4 px-4 py-2 focus:border-none'
        />
      </div>
      <div className='text-base text-neutral-400 px-4 bg-neutral-200 pb-10'>Any special requests,details,final wishes etc.</div>
    </main>
  )
}

export default Order
