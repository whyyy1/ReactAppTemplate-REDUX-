import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import userData from './userData'
const initialState = {
  isLoggedIn: false,
  user: null,

};


const userState = localStorage.getItem("user");
// Check if userState is not null and is a valid JSON string
if (userState !== null && typeof userState === "string") {
  try {
    initialState.user = userState
    initialState.isLoggedIn = true

  } catch (error) {
    console.log(initialState)
    console.error("Error parsing user state from localStorage:", error);
  }
}


const UserInfo = createSlice({
  name: 'users',
  initialState,
  reducers: {
    logUser: (state, action) => {
      console.log(state, action)
    },
    handleLogin: (state, action) => {
      if(action.email !== null && action.password !== null){
        alert('found email')
        state.isLoggedIn = true
        
        state.user = {}
        for(let values of Object.keys(userData)){
         
          console.log({values:userData[values]})
        }
        console.log(state.isLoggedIn)
         // navigate(`/home/${user.id}`)
        
        return state.user.id;
      }
      


    },
    logOut: (state,action) => {
      state.isLoggedIn = false
      state.user = null
      console.log(state)
    }
  }
})


export default UserInfo.reducer

export const { logUser, handleLogin,logOut } = UserInfo.actions
