import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username:"",
  password:"",
  email:"",
  signedInAccountNumber:"",
  isSignedIn: false,
  userEmailVerified: false,
  userPasswordReset: false,
  userAccounts: []
}

export const signinSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.username = action.payload
    },
    setUserPassword: (state, action) => {
      state.password = action.payload
    },
    setSignedInAccountNumber: (state, action)=>{
      state.signedInAccountNumber = action.payload
    },
    setSignedInState: (state, action)=>{
      state.isSignedIn = action.payload
    },
    setUserEmailVerification: (state, action)=>{
      state.userEmailVerified = action.payload
    },
    setUserEmail: (state,action)=> {
      state.email = action.payload
    },
    setUserPasswordReset: (state,action)=>{
      state.userPasswordReset = action.payload
    },
    setUserAccounts: (state, action)=> {
      state.userAccounts = [
        ...action.payload
      ]
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUserName, setUserPassword, setSignedInState, setUserEmailVerification, setUserEmail, setUserResetPasswordSent, setUserPasswordReset, setUserAccounts, setSignedInAccountNumber } = signinSlice.actions

export default signinSlice.reducer