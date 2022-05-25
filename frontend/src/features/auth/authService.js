import axios from 'axios'


const API_URL_REGISTER = '/api/users'
const API_URL_LOGIN = '/api/users/login'


//register user 

const register = async (userData) => {
    const response = await axios.post(API_URL_REGISTER, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

//logOut
const logout = () => localStorage.removeItem('user')


//login

const login = async(userData) =>{
    const response = await axios.post(API_URL_LOGIN,userData)

    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}

const authService = {
    register,
    logout,
    login,
   
  }

export default authService