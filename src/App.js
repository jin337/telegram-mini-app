import React, { useEffect, useState } from 'react'
import Card from './components/Card'

const { getData } = require('./db/index')
const foods = getData()
const tele = window.Telegram.WebApp

function App() {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    tele.ready()
  }, [])

  const onAdd = (item) => {
    const exist = cartItems.find((e) => e.id === item.id)

    if (exist) {
      setCartItems(cartItems.map((e) => (e.id === item.id ? { ...exist, quantity: exist.quantity + 1 } : e)))
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }])
    }

    tele.MainButton.text = 'view order'
    tele.MainButton.show()
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

  return (
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
