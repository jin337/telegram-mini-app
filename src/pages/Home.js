import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setFoods } from '../store/reducer/common'

import Card from '../components/Card'

const tele = window.Telegram.WebApp
function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const foods = useSelector((state) => state.common.foods)

  useEffect(() => {
    tele.ready()
    tele.platform = 'Test App'
  }, [])

  useEffect(() => {
    const totalSum = foods.reduce((accumulator, food) => {
      return accumulator + food.price * food.quantity
    }, 0)

    if (totalSum) {
      tele.MainButton.text = 'VIEW ORDER'
      tele.MainButton.color = '#31b545'
      tele.MainButton.show()
      tele.MainButton.onClick(() => {
        navigate('/order')
      })
    } else {
      tele.MainButton.hide()
    }
  }, [foods])

  const onAdd = (item) => {
    const exist = foods.find((e) => e.id === item.id)
    if (exist) {
      let arr = foods.map((e) => (e.id === item.id ? { ...exist, quantity: exist.quantity + 1 } : e))
      dispatch(setFoods(arr))
    }
  }

  const onRemove = (item) => {
    const exist = foods.find((e) => e.id === item.id)
    let arr = null
    if (exist?.quantity === 1) {
      arr = foods.map((e) => (e.id === item.id ? { ...e, quantity: 0 } : e))
    } else {
      arr = foods.map((e) => (e.id === item.id ? { ...e, quantity: e.quantity - 1 } : e))
    }
    dispatch(setFoods(arr))
  }

  return (
    <main className='flex flex-wrap justify-evenly'>
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
