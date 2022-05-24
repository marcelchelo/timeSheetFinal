import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    user: 'null',
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


//a function to use async data 

export const register = createAsyncThunk('auth/register', 
    async(user, thunkAPI) =>{
        //thunkAPI to connect to backEnd 
         console.log(user)
})


//login User
export const login = createAsyncThunk('auth/login', 
    async(user, thunkAPI) =>{
        //thunkAPI to connect to backEnd 
         console.log(user)
})

export const authSlice  = createSlice ({
    name: 'auth',
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        
    }
})
export default authSlice.reducer