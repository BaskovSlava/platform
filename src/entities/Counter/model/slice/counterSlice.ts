import { createSlice } from '@reduxjs/toolkit'
import { CounterSchema } from '../types/counterSchema'


export interface CounterState {
  value: number
}

const initialState: CounterSchema = {
    value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { actions: counterActions } = counterSlice
export const { reducer: counterReducer } = counterSlice

export default counterSlice.reducer