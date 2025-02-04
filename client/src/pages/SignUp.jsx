import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto iste facilis, quas aut mollitia omnis eius accusamus 
        </p>
        </div>

        {/* right */}
        <div className='flex-1'>
          <form>
            <div className="">
              <Label value='Your username' />
              <TextInput 
                type='text'
                placeholder='Username'
                id='username' />
            </div>
            <div className="">
              <Label value='Your email' />
              <TextInput 
                type='email'
                placeholder='Email'
                id='email' />
            </div>
            <div className="">
              <Label value='Your password' />
              <TextInput 
                type='text'
                placeholder='Password'
                id='password' />
            </div>
            <Button gradientDuoTone='purpleToPink' className='w-100 mt-3' type='submit'> Sign Up </Button>
          </form>

          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
