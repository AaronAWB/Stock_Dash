import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'
import { SyntheticEvent, useEffect, useState } from 'react';

interface FireBaseError {
  code: string;
  message: string;
}

const ERROR_MESSAGES = {
  'auth/invalid-email': 'No user with this email address. Please create an account to continue.',
  'auth/user-disabled': 'This user has been disabled.',
  'auth/user-not-found': 'No user found with this email address.',
  'auth/invalid-login-credentials': 'Invalid email or password.'
}

export default function Signin() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { signIn } = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    setError('')
    try {
      await signIn(email, password)
      navigate('/dashboard')
    } catch (error) {
      const errorCode = (error as FireBaseError).code as keyof typeof ERROR_MESSAGES
      const errorMessage = (error as FireBaseError).message
      setError(ERROR_MESSAGES[errorCode] || errorMessage)
    }
  }

  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <div>
        <h1 className='text-2xl font-bold py-2'>
          Sign in to your account.
        </h1>
        <p className='py-1'>
          Don't have an account yet? <Link to='/signup' className='underline'>Sign up.</Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Email Address</label>
          <input className='border p-3' type='email' onChange={(e) => {setEmail(e.target.value)}}></input>
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Password</label>
          <input className='border p-3' type='password' onChange={(e) => {setPassword(e.target.value)}}></input>
        </div>
        <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>Sign In</button>
      </form>
    </div>
  )
}