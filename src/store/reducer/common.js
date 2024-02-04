import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  foods: [
    {
      id: 1,
      title: 'Burger',
      price: 4.99,
      Image: '🍔',
      quantity: 0,
      desc: 'this is burger',
    },
    {
      id: 2,
      title: 'Fries',
      price: 1.49,
      Image: '🍟',
      quantity: 0,
      desc: 'this is fries',
    },
    {
      id: 3,
      title: 'Hotdog',
      price: 3.49,
      Image: '🌭',
      quantity: 0,
      desc: 'this is hotdog',
    },
    {
      id: 4,
      title: 'Taco',
      price: 3.99,
      Image: '🌮',
      quantity: 0,
      desc: 'this is taco',
    },
    {
      id: 5,
      title: 'Pizza',
      price: 7.99,
      Image: '🍕',
      quantity: 0,
      desc: 'this is pizza',
    },
    {
      id: 6,
      title: 'Donut',
      price: 1.49,
      Image: '🍩',
      quantity: 0,
      desc: 'this is donut',
    },
    {
      id: 7,
      title: 'Popcorn',
      price: 1.99,
      Image: '🍿',
      quantity: 0,
      desc: 'this is popcorn',
    },
    {
      id: 8,
      title: 'Coke',
      price: 3.99,
      Image: '🥤',
      quantity: 0,
      desc: 'this is coke',
    },
    {
      id: 9,
      title: 'Cake',
      price: 10.99,
      Image: '🍰',
      quantity: 0,
      desc: 'this is cake',
    },
    {
      id: 10,
      title: 'Icecream',
      price: 3.99,
      Image: '🍦',
      quantity: 0,
      desc: 'this is icecream',
    },
    {
      id: 11,
      title: 'Cookie',
      price: 3.99,
      Image: '🍪',
      quantity: 0,
      desc: 'this is cookie',
    },
    {
      id: 12,
      title: 'Flan',
      price: 7.99,
      Image: '🍮',
      quantity: 0,
      desc: 'this is flan',
    },
  ],
}

export const common = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setFoods: (state, action) => {
      state.foods = action.payload
    },
  },
})

export const { setFoods } = common.actions

export default common.reducer
