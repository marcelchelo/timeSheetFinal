import {useState} from 'react'

function Login (){
    //defaults
    const [formData, setFormData] = useState({
        email:'',
        password:'',
    }) 

    const {email, password} = formData

    const onChange = (e) =>{
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]:e.target.value,
        }) )
    }

    const onSubmit = (e)=>{
        e.preventDefault()
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