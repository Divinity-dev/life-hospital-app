import React, { useState, useEffect } from 'react'
import { doctors } from './Doctors'


const Landing = () => {

  const [index, setIndex]= useState(0)
    useEffect(() => {
      const timer = setTimeout(() => {
        if(index<(doctors.length-1)){
          setIndex(index+1)
        }else{
          setIndex(0)
        };
      }, 3000);
  
      return () => clearTimeout(timer);
    }, [index, doctors.length]);
   
  


  return (
    <div>
      <div className='flex flex-col md:flex-row h-[80vh] p-6 relative xs:mb-40 md:mb-0'  style={{ backgroundColor: `#${doctors[index].bg}` }} key={doctors[index].id}>
        <img src={doctors[index].image} alt="" className='flex-1 h-full mr-4 xs:mb-6' />
        <div className='flex flex-1 flex-col self-center justify-left  xs:mb-40'>
          <h1 className='mb-16 text-50'>{doctors[index].title}</h1>
          <p className='mb-16 text-30'>
          {doctors[index].desc}
          </p>
          <button className='flex justify-left p-2 border-2 border-black w-30 text-xl mt-10'>Book now</button>
          
        </div>
      </div>
      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-1 flex-col justify-start p-4 bg-blue-700 text-white'>
          <h2 className='text-3xl mb-6'>Loving and caring staff</h2>
          <p className='mb-6 italic'>
            We pride ourselves with nurses and doctors that truly care
            about your wellbeing. Find out more about our services.
            Book an appointment with us today.
          </p>
          <button className='border-spacing-1 bg-green-400 p-2 w-60 rounded-3xl'>Book an appointment</button>
        </div>
        <div className='flex flex-1 flex-col justify-start p-4  bg-blue-600 text-white'>
          <h2 className='text-3xl mb-6'>Best price guarantee</h2>
          <p className='mb-6 italic'>
           With various payment options, life hospital makes sure you get the 
           best care at affordable price. We prioritize your health.
          </p>
          <button className='border-spacing-1 bg-green-400 p-2 w-60 rounded-3xl'>Book an appointment</button>
        </div>
        <div className='flex flex-1 flex-col justify-start p-4  bg-blue-950 text-white'>
          <h2 className='text-3xl mb-6'>Oppening hours</h2>
          <p className='mb-11 italic'>
            Monday-Friday: 08:00am-06:00pm
            Saturday: 08:00am-04:00pm
            Sunday: 08:00am-04:00pm
          </p>
          <button className='border-spacing-1 bg-green-400 p-2 w-60 rounded-3xl'>Book an appointment</button>
        </div>
      </div>
    </div>
  )
}


export default Landing
