import { configureStore } from '@reduxjs/toolkit'
import commonReducer from './reducer/common'

export const store = configureStore({
  reducer: {
    common: commonReducer,
  },
})
