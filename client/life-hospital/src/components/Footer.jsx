
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex bg-black  p-4'>
      <div className='flex-1 text-white'>
        <h2 className='mb-2'>About</h2>
        <p className='italic'>
        Life Medical is a specialist missionary hospital, birthed under the inspiration of the Holy Spirit, to synergize excellent medical practice 
        with faith in the word of God to bring life, and wholesomeness to the sick and broken hearted.
        </p>
      </div>
      <div  className='flex-1 text-white text-center'>
        <h2 className='mb-2'>Links</h2> 
        <Link to="" className='flex justify-center align-middle text-15 italic'><img src='https://cdn4.iconfinder.com/data/icons/various-icons-2/476/Facebook.png ' className='w-4 h-4 text-center mt-1'/> facebook</Link>
        <Link to="" className='flex justify-center align-middle mr-5 text-15 italic'><img src='data:image/png;base64,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 ' className='w-4 h-4 text-center mt-1 rounded-full'/> twitter</Link>
        <Link to="" className='flex justify-center align-middle text-15 italic'><img src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-1024.png' className='w-4 h-4 text-center mt-1'/> facebook</Link>  
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
