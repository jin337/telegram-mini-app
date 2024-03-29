import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Cart from '../components/Cart'

const tele = window.Telegram.WebApp
function Order() {
  const navigate = useNavigate()
  const foods = useSelector((state) => state.common.foods)
  const [cartItems, setCartItems] = useState([])
  const [price, setPrice] = useState(0)

  useEffect(() => {
    tele.BackButton.show()
    tele.BackButton.onClick(() => {
      handleBack()
    })
  }, [])

  useEffect(() => {
    const arr = foods.filter((e) => e.quantity !== 0)
    setCartItems(arr)
    if (arr.length) {
      const totalSum = arr.reduce((accumulator, food) => {
        return accumulator + food.price * food.quantity
      }, 0)
      setPrice(totalSum.toFixed(2))
    }
  }, [foods])

  useEffect(() => {
    tele.MainButton.text = 'PAY $' + price
    tele.MainButton.color = '#31b545'
    tele.MainButton.show()
  }, [price])

  const handleBack = () => {
    tele.BackButton.hide()
    navigate('/')
  }

  return (
    <main className='w-screen h-screen bg-neutral-100 overflow-x-hidden'>
      <div className='flex justify-between bg-white px-4 pt-5 pb-2'>
        <div className='text-xl font-bold'>YOUR ORDER</div>
        <div
          className='text-base text-green-500 cursor-pointer'
          onClick={handleBack}
        >
          Edit
        </div>
      </div>
      <div className='bg-white'>
        {cartItems.map((item) => (
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
