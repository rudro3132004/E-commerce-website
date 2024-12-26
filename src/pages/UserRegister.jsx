import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserRegister = () => {
  const [fristName, setFristName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phonNumber, setPhonNumber] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')

  const validate = () =>{
    let errors = {};

    if(!fristName){
       errors.fristName = 'fristName is required'
    }else if(fristName.length < 3){
        errors.fristName = "fristName must be 3 characters."; 
    }
    if(!lastName){
        errors.lastName = 'lastName is required'
    }else if(lastName.length < 3){
        errors.lastName = "lastName must be 3 characters."; 
    }
    if(!email){
        errors.email = 'email is required'
    }else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Email is invalid.";
    }
    if(!phonNumber){
        errors.phonNumber = 'phonNumber is required'
    }else if(phonNumber.length < 11){
        errors.phonNumber = "phonNumber must be at least 11 characters."; 
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
        fristName,
        lastName,
        email,
        phonNumber,
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

                <div className="flex gap-3 items-start justify-center mb-2">
                        <div className="w-1/2"> {/* FristName */}
                            <label className='text-sm font-semibold mb-1 block'>FristName:</label>
                            <input 
                                type="text"
                                value={fristName}
                                onChange={(e)=> setFristName(e.target.value)}
                                placeholder='Enter FristName'
                                className={`w-full px-3 py-2 rounded cursor-pointer outline-none border ${ error.fristName && 'border-red-500' } bg-zinc-100`}
                            />
                           {error.fristName && <small className='text-red-600'>{ error.fristName }</small> } 
                        </div>
                        <div className="w-1/2"> {/* LastName */}
                            <label className='text-sm font-semibold mb-1 block'>LastName:</label>
                            <input 
                                type="text"
                                value={lastName}
                                onChange={(e)=> setLastName(e.target.value)}
                                placeholder='Enter LastName'
                                className={`w-full px-3 py-2 rounded cursor-pointer outline-none border ${ error.lastName && 'border-red-500' } bg-zinc-100`}
                            />
                            {error.lastName && <small className='text-red-600'>{ error.lastName }</small> }
                        </div>
                </div>
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
                <div className="mb-2"> {/* PhonNumber */}
                    <label className='text-sm font-semibold mb-1 block'>PhonNumber:</label>
                      <input 
                        type="text"
                        value={phonNumber}
                        onChange={(e)=> setPhonNumber(e.target.value)}
                        placeholder='Enter PhonNumber'
                        className={`w-full px-3 py-2 rounded cursor-pointer outline-none border ${ error.phonNumber && 'border-red-500' } bg-zinc-100`}
                      />
                    {error.phonNumber && <small className='text-red-600'>{ error.phonNumber }</small> }
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

                <button className='w-full py-2 bg-sky-500 text-white font-semibold rounded mt-3 mb-1'
                type='submit'> Submit </button>

                <p className='text-[12px]'>If you already have an account with us, please login at the
                  <br />  <Link to={'/login'} className='text-orange-600'> login page </Link></p>

            </form>
         </div>

    </div>
  )
}

export default UserRegister