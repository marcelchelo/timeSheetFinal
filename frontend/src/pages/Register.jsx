import {useState} from 'react'
import {FaUser} from 'react-icons/fa'
import {toast} from 'react-toastify'

function Register (){
    const [formData, setFormData] = useState({
        companyName:'',
        name:'',
        email:'',
        password:'',
        password2:''
    }) 

    const {companyName, name, email, password, password2} = formData

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
                type='text' id='companyName' name='companyName' value={companyName} onChange={onChange} placeholder='Business Name'>
                </input>

            </div>

            <div className='form-group'>
                <input className='form-control'
                type='text' id='name' name='name' value={name} onChange={onChange} placeholder='Enter Your name'>
                </input>

            </div>

            <div className='form-group'>
                <input className='form-control'
                type='email' id='email' name='email' value={email} onChange={onChange} placeholder='Enter Your email'>
                </input>

            </div>
            <div className='form-group'>
                <input className='form-control'
                type='password' id='password' name='password' value={password} onChange={onChange} placeholder='Enter Your Password'>
                </input>

            </div>

            <div className='form-group'>
                <input className='form-control'
                type='password' id='password2' name='password2' value={password2} onChange={onChange} placeholder='Confirm Password'>
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