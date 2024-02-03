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
    <main className='w-screen h-screen bg-neutral-100'>
      <div className='flex justify-between bg-white p-4 pb-2'>
        <div className='text-base font-bold'>YOUR ORDER</div>
        <div
          className='text-base text-green-500 cursor-pointer'
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
      <div className='bg-neutral-100'>
        <input
          type='text'
          placeholder='Add comment…'
          className='text-base w-full my-3 px-4 py-3 focus-visible:outline-none'
        />
      </div>
      <div className='text-sm text-neutral-500 px-4 bg-neutral-100 pb-10'>Any special requests,details,final wishes etc.</div>
    </main>
  )
}

export default Order
