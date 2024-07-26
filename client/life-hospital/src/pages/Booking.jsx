import React from 'react'

const Booking = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full px-40'>
      <h2 className='text-2xl font-bold mb-4'>Book an Appointment</h2>
      <form action="" className='flex flex-col justify-center items-start w-full'>
        <input type="text" placeholder='First name' className='border-2 w-full mb-4 p-2'/>
        <input type="text" placeholder='Last name' className='border-2 w-full mb-4 p-2'/>
        <select name="" id="" className='border-2 w-96 mb-4 p-2'>
        <option value="" >
                Gender
            </option>
            <option value="">
                Male
            </option>
            <option value="">
                Female
            </option>
        </select>
        <input type="date" className='border-1 w-96 mb-4'/>
        <input type="time" />
        <input type="text" placeholder='Email' className='border-2 w-full mb-4 p-2'/>
        <input type="text" placeholder='Phone No.' className='border-2 w-full mb-4 p-2'/>
        <select className='border-2 w-full mb-4 p-2'>
        <option value="" >
            Purpose for visit
            </option>
            <option value="">
            Gynacology
            </option>
            <option value="">
            General treatment
            </option>
            <option value="">
            Ante-natal
            </option>
            <option value="">
            eye care
            </option>
            <option value="">
            others
            </option>
        </select>
        <input type="text" placeholder='Please enter details here' className='border-2 w-full mb-4 p-2 h-28'/>
      </form>
    </div>
  )
}
export default Booking
