import React from 'react'
import { HomeService } from '../ServiceData'
import { Link } from 'react-router-dom'

const Homeservice = () => {
  return (
    <div className=' flex flex-col justify-center items-center'>
      <h1 className='flex font-bold justify-center items-center text-center text-2xl my-4'> Life Hospital Home care center</h1>
      <p className='text-center italic text-xl'>Welcome to the Home service center of life hospital. We at life hospital medical center have your generl 
        welfare at heart. Our range of services include the following;
      </p>
      {
         HomeService.map((service)=>(
           <div key={service.Title} className='flex flex-col md:flex-row gap-10 mb-10  p-10'>
            <img src={service.image} alt={service.Title} className='w-64 h-64 object-cover'/>
                 <div className='flex flex-col justify-start items-left'>
                  <h2 className='font-semibold text-2xl text-left mb-4'>{service.Title}</h2>
                  <p className='italic text-left m-4'>{service.Desc}</p>
                  <Link to={'/bookhomeservice'}><button className='bg-green-400 p-2 w-40 md:w-60 rounded-3xl mt-20'>{service.button}</button></Link>
                 </div>
           </div>
         ))
      }
    </div>
  )
}

export default Homeservice
