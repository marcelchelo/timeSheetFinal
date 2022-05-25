import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {login, reset} from '../features/auth/authSlice'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import Spinner from '../components/Spinner' 
function Login (){
    //defaults
    const [formData, setFormData] = useState({
        email:'',
        password:'',
    }) 

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {email, password} = formData

    const onChange = (e) =>{
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]:e.target.value,
        }) )
    }


    const {user, isError, isSuccess, isLoading, message} = useSelector(state => state.auth)

    useEffect(()=>{
        if(isError){
            
            toast.error(message)
        }
        if(isSuccess || user){
             
            navigate('/')
            
        }

        dispatch(reset())

    },[isError,isSuccess,user,message,navigate,dispatch])


    const onSubmit = (e)=>{
        e.preventDefault()

        const userData = {
            //comes from form data Ln 17
            email,
           password,
        }
        dispatch(login(userData))
    }

  
    if(isLoading){
        return <Spinner/>
    }
    return(
        <>
        <section className="heading" >
            <div>
                <h1>
                    Welcome back!
                </h1>
            </div>
        </section>

        <section className='form'>
        <form onSubmit={onSubmit}>

            <div className='form-group'>
                <input className='form-control'
                type='email' id='email' name='email' value={email} onChange={onChange} placeholder='Enter Your email' required>
                </input>

            </div>
            <div className='form-group'>
                <input className='form-control'
                type='password' id='password' name='password' value={password} onChange={onChange} placeholder='Enter Your Password' required>
                </input>

            </div>
            
            <div className='form-group'>
                <button className='btn btn-block'> Log In</button>

            </div>
        </form>
    </section>


            
        </>
    )
}

export default Login