import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')

  const validate = () =>{
    let errors = {};

    if(!email){
        errors.email = 'email is required'
    }else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Email is invalid.";
    }
    if(!password){
        errors.password = 'lastName is required'
    }else if(password.length < 6){
        errors.password = "password must be at least 6 characters."; 
    }
    return errors;
  }

  const submitHandler = (e)=>{
    e.preventDefault()

    const formValues = {
        email,
        password
    }

    const validateErrors = validate();
    setError(validateErrors)

    if(Object.keys(validateErrors).length === 0){
        console.log("Registration Successfull:", formValues);
    }
    console.log('some erros')

  }
  return (
    <div className='w-full flex items-center justify-center bg-zinc-300 py-10 md:py-20'>
         
         <div className="w-full mb-5 py-8 px-5 bg-white rounded-md md:w-96 md:mb-0">
            <form onSubmit={submitHandler}>

                <div className="mb-2"> {/* Email */}
                    <label className='text-sm font-semibold mb-1 block'>Email:</label>
                      <input 
                        type="email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        placeholder='Enter Email'
                        className={`w-full px-3 py-2 rounded cursor-pointer outline-none border ${ error.email && 'border-red-500' } bg-zinc-100`}
                      />
                    {error.email && <small className='text-red-600'>{ error.email }</small> }
                </div>
                <div className="mb-2"> {/* Password */}
                    <label className='text-sm font-semibold mb-1 block'>Password:</label>
                      <input 
                        type="text"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        placeholder='Enter Password'
                        className={`w-full px-3 py-2 rounded cursor-pointer outline-none border ${ error.password && 'border-red-500' } bg-zinc-100`}
                      />
                    {error.password && <small className='text-red-600'>{ error.password }</small> }
                </div>

                <button className='w-full py-2 bg-sky-500 text-white font-semibold rounded mt-3 mb-3'
                type='submit'> LogIn </button>

                <button className='w-full py-2 bg-green-500 text-white font-semibold rounded mt-3 '
                type='submit'><Link to={'/register'}> Create a new Account </Link></button>

            </form>
         </div>

    </div>
  )
}

export default UserLogIn