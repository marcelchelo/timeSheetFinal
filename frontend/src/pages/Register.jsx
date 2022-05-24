import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {FaUser} from 'react-icons/fa'
import {toast} from 'react-toastify'
//select anything from global state
import {useSelector} from 'react-redux'
//dispatch our action
import {useDispatch} from 'react-redux'
import {register, reset} from '../features/auth/authSlice'


function Register (){
    const [formData, setFormData] = useState({
        companyName:'',
        name:'',
        email:'',
        password:'',
        password2:''
    }) 

    const {companyName, name, email, password, password2} = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    //get current values from global state

    const {user, isError, isSuccess, isLoading, message} = useSelector(state => state.auth)

     useEffect(()=>{
        if(isError){
            
            toast.error(message)
        }
        if(isSuccess || user){
             
            console.log('it was a sccess user created')
            navigate('/')
            
             
        }

        dispatch(reset())

    },[isError,isSuccess,user,message,navigate,dispatch])

    const onChange =(e) =>{
        setFormData( (prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }) )
    } 

    const onSubmit = (e) =>{
        e.preventDefault()

        if(password !== password2){
            toast.error("passowords do not match")
        }else{
            const userData = {
                name,
                email,
                password,
                companyName,
            }

            dispatch(register(userData))

        }



    }



    return(
    <>
    <section className='heading'>
        <h1>
            <FaUser/> Welcome! 
        </h1>
        <p>Register an account below</p>
    </section>

    <section className='form'>
        <form onSubmit={onSubmit}>

            <div className='form-group'>
                <input className='form-control'
                type='text' id='companyName' name='companyName' value={companyName} onChange={onChange} placeholder='Business Name' required>
                </input>

            </div>

            <div className='form-group'>
                <input className='form-control'
                type='text' id='name' name='name' value={name} onChange={onChange} placeholder='Enter Your name' required>
                </input>

            </div>

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
                <input className='form-control'
                type='password' id='password2' name='password2' value={password2} onChange={onChange} placeholder='Confirm Password' required>
                </input>

            </div>

            <div className='form-group'>
                <button className='btn btn-block'> Submit</button>

            </div>
        </form>
    </section>
   
   
    
        
  
        
           
    </>
    
    )
  }


  export default Register