import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'
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
        try {
            return await authService.register(user)
        } catch (error) {
            const message = (error.response && error.respnse.data
                && error.respnse.data.message) || error.message || error.toString()

                return thunkAPI.rejectWithValue(message)
        }
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
    reducers:{

        //no asyncThunk required so, reset added here.
        reset: (state =>{
            state.isLoading = false
            state.isSuccess = false
            state.isError =false
            state.message = ''
        })
    },
    extraReducers: (builder) =>{
        builder
            .addCase(register.pending, (state) =>{
                state.isLoading =true
         })
            .addCase(register.fulfilled, (state, action)=>{
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(register.rejected, (state, action)=>{
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })

    }
})

export const {reset} = authSlice.actions
export default authSlice.reducer
