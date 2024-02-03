import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Order from './Order'

const { getData } = require('../db/index')
const data = getData()
const tele = window.Telegram.WebApp

function App() {
  const [foods, setFoods] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [edit, setEdit] = useState(false)

  useEffect(() => {
    setFoods(data)
    tele.ready()
  }, [])

  const onAdd = (item) => {
    const exist = cartItems.find((e) => e.id === item.id)

    if (exist) {
      setCartItems(cartItems.map((e) => (e.id === item.id ? { ...exist, quantity: exist.quantity + 1 } : e)))
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }])
    }

    tele.MainButton.text = 'VIEW ORDER'
    tele.MainButton.color = '#31b545'
    tele.MainButton.show()
    tele.MainButton.onClick(() => {
      setEdit(true)
    })
  }

  const onRemove = (item) => {
    const exist = cartItems.find((e) => e.id === item.id)

    if (exist?.quantity === 1) {
      setCartItems(cartItems.filter((e) => e.id !== item.id))
      tele.MainButton.hide()
    } else {
      setCartItems(cartItems.map((e) => (e.id === item.id ? { ...e, quantity: e.quantity - 1 } : e)))
    }
  }

  const handleEdit = () => {
    let newFood = foods.map((element) => {
      const cartItem = cartItems.find((item) => item.id === element.id)
      return cartItem ? cartItem : element
    })

    setFoods(newFood)
    setEdit(false)

    tele.MainButton.text = 'VIEW ORDER'
    tele.MainButton.color = '#31b545'
    tele.MainButton.show()
    tele.MainButton.onClick(() => {
      setEdit(true)
    })
  }

  return edit ? (
    <Order
      list={cartItems}
      handleEdit={handleEdit}
    />
  ) : (
    <main className='flex flex-wrap justify-evenly select-none'>
      {foods.map((item) => (
        <Card
          key={item.id}
          item={item}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
    </main>
  )
}

export default App
