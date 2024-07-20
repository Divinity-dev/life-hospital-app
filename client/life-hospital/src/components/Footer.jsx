import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex bg-black absolute bottom-0 p-4'>
      <div className='flex-1 text-white'>
        <h2 className='mb-2'>About</h2>
        <p className='font-sans'>
        Life Medical is a specialist missionary hospital, birthed under the inspiration of the Holy Spirit, to synergize excellent medical practice 
        with faith in the word of God to bring life, and wholesomeness to the sick and broken hearted.
        </p>
      </div>
      <div  className='flex-1 text-white text-center'>
        <h2 className='mb-2'>Links</h2>
        <Link to="">Admin</Link>
      </div>
      <div  className=' flex flex-col flex-1 text-white self-start justify-start '>
        <h2 className='mb-2'>Contact us</h2>
        <form action="" className='flex flex-col self-start justify-start w-full '>
            <input type="text" placeholder='Name'className='w-full mb-4 rounded-lg p-4' />
            <input type="text" placeholder='Email' className='w-full mb-4 rounded-lg p-4'/>
            <input type="text" placeholder='Meassage' className='w-full mb-4 h-20 rounded-lg p-4'/>
            <button>Send message</button>
        </form>
      </div>
      
    </div>
  )
}

export default Footer
