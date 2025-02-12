import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignIn() {
  const [formData,setFormData] = useState({})
  const [errorMessage,setErrorMessage] = useState(null)
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value.trim()})
    console.log(formData)
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(!formData.email || !formData.password){
      return setErrorMessage('Please fill all the fields')
    }
    try{
      setLoading(true)
      setErrorMessage(null)
      const res = await fetch('/api/auth/signIn',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData)
      });
      const data = await res.json()
      if(data.success===false){
        setErrorMessage(data.message)
      }
      setLoading(false)
      if(res.ok){
        navigate('/')
      }
    }catch (error){
      setErrorMessage(error.message)
      setLoading(false)
    }
  }
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:item-center gap-5'>
        {/* left */}
        <div className='flex-1'>
        <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300 text-white rounded-lg'>Mag</span>
            Z
        </Link>
        <p>
          SIN Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto iste facilis, quas aut mollitia omnis eius accusamus 
        </p>
        </div>

        {/* right */}
        <div className='flex-1'>
          <form onSubmit={handleSubmit}>
            <div className="">
              <Label value='Your email' />
              <TextInput 
                type='email'
                placeholder='Email'
                id='email'  onChange={handleChange} />
            </div>
            <div className="">
              <Label value='Your password' />
              <TextInput 
                type='password'
                placeholder='*********'
                id='password'  onChange={handleChange} />
            </div>
            <Button gradientDuoTone='purpleToPink' className='w-100 mt-3' type='submit' disabled={loading}> 
                {
                  loading? <><Spinner size='sm' /> <span className='pl-3'> Loading... </span> </>: 'Sign Up'
                }
               </Button>
          </form>

          <div className='flex gap-2 text-sm mt-5'>
            <span>Create an account?</span>
            <Link to='/sign-up' className='text-purple-500'>
              Sign Up
            </Link>
          </div>
          {
            errorMessage && (
              <Alert className='mt-5' color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default SignIn
