import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username:"",
  password:""
}

export const counterSlice = createSlice({
  name: 'signin',
  initialState,
  reducers: {
    setUserCredentials: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUserCredentials } = counterSlice.actions

export default counterSlice.reducer