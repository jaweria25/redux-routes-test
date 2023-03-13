import {createSlice} from "@reduxjs/toolkit";
export const userSlice=createSlice({
name : "user",
initialState:{

isUserAuthenticated: false,
userToken: '',
},
reducers:{
   Login:(state,action)=>{
    state.isUserAuthenticated = true;
   } ,
   Dashboard:(state)=>{
    state.isUserAuthenticated=false;
   },
   setUserToken: (state, action) => {
    state.userToken = action.payload;
    state.isUserAuthenticated = true;
    sessionStorage.setItem('token', state.userToken);
  },
}

})
export const  {Login , Dashboard , setUserToken}=userSlice.actions;
// export const selectUser = (state)=>state.user.isAuth;
export const token = (state) => state.app.userToken;
export default userSlice.reducer;