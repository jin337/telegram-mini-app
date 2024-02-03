import React, { useEffect } from 'react'
import Cart from '../components/Cart'

const tele = window.Telegram.WebApp
function Order({ list, handleEdit }) {
  useEffect(() => {
    tele.MainButton.text = 'PAY $123'
    tele.MainButton.color = '#31b545'
    tele.MainButton.show()
  }, [])

  return (
    <main className='w-screen h-screen bg-neutral-200'>
      <div className='flex justify-between bg-white pt-10 px-4'>
        <div className='text-base font-bold'>YOUR ORDER</div>
        <div
          className='text-sm text-green-500'
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
          className='text-xl w-full my-4 px-4 py-2'
        />
      </div>
      <div className='text-base text-neutral-400 px-4 bg-neutral-200 pb-10'>Any special requests,details,final wishes etc.</div>
    </main>
  )
}

export default Order
