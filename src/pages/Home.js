import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setCartItems, setFoods } from '../store/reducer/common'

import Card from '../components/Card'

const tele = window.Telegram.WebApp
function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.common.cartItems)
  const foods = useSelector((state) => state.common.foods)

  useEffect(() => {
    tele.ready()
  }, [])

  useEffect(() => {
    if (cartItems.length > 0) {
      let arr = foods.map((element) => {
        const cartItem = cartItems.find((item) => item.id === element.id)
        return cartItem ? cartItem : element
      })
      dispatch(setFoods(arr))
      tele.MainButton.text = 'VIEW ORDER'
      tele.MainButton.color = '#31b545'
      tele.MainButton.show()
    }
  }, [cartItems])

  const onAdd = (item) => {
    const exist = cartItems.find((e) => e.id === item.id)

    if (exist) {
      let arr = cartItems.map((e) => (e.id === item.id ? { ...exist, quantity: exist.quantity + 1 } : e))
      dispatch(setCartItems(arr))
    } else {
      let arr = [...cartItems, { ...item, quantity: 1 }]
      dispatch(setCartItems(arr))
    }

    tele.MainButton.text = 'VIEW ORDER'
    tele.MainButton.color = '#31b545'
    tele.MainButton.show()
    tele.MainButton.onClick(() => {
      navigate('/order')
    })
  }

  const onRemove = (item) => {
    const exist = cartItems.find((e) => e.id === item.id)

    if (exist?.quantity === 1) {
      let arr = cartItems.filter((e) => e.id !== item.id)
      dispatch(setCartItems(arr))

      const totalSum = arr.reduce((arr, e) => {
        return arr + e.price * e.quantity
      }, 0)

      if (totalSum === 0) {
        tele.MainButton.hide()
      }
    } else {
      let arr = cartItems.map((e) => (e.id === item.id ? { ...e, quantity: e.quantity - 1 } : e))
      dispatch(setCartItems(arr))
    }
  }

  return (
    <main className='flex flex-wrap justify-evenly select-none mb-4'>
      {foods.map((item) => (
        <Card
          key={item.id}
          item={item}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
      {/* <button
        className='text-base'
        onClick={() => navigate('/order')}
      >
        页面跳转
      </button> */}
    </main>
  )
}

export default App
