import React, { useState, useEffect } from 'react';
import { doctors } from './Doctors';
import { Link } from 'react-router-dom';

const Landing = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < doctors.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div>
      <div
        className='flex flex-col xl:flex-row h-[100vh] xl:h-80vh p-6 xs:mb-40 md:mb-0'
        style={{ backgroundColor: `#${doctors[index].bg}` }}
        key={doctors[index].id}
      >
        <img
          src={doctors[index].image}
          alt=""
          className='flex-1 h-64 md:h-full mr-4 xs:mb-6 object-cover'
        />
        <div className='flex flex-1 flex-col justify-center xl:justify-start text-center xl:text-left'>
          <h1 className='mb-10 text-4xl md:text-5xl font-bold'>
            {doctors[index].title}
          </h1>
          <p className='mb-6 text-lg md:text-2xl'>
            {doctors[index].desc}
          </p>
          <Link to={'./booking'}>
            <button className='mx-auto md:mx-0 p-2 border-2 border-black w-40 text-lg md:text-xl mt-10'>
              Book now
            </button>
          </Link>
        </div>
      </div>
      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-1 flex-col justify-start p-6 bg-blue-700 text-white'>
          <h2 className='text-2xl md:text-3xl mb-4'>Loving and caring staff</h2>
          <p className='mb-4 italic text-sm md:text-lg'>
            We pride ourselves with nurses and doctors that truly care
            about your wellbeing. Find out more about our services.
            Book an appointment with us today.
          </p>
          <Link to={'./booking'}>
            <button className='bg-green-400 p-2 w-40 md:w-60 rounded-3xl'>
              Book an appointment
            </button>
          </Link>
        </div>
        <div className='flex flex-1 flex-col justify-start p-6 bg-blue-600 text-white'>
          <h2 className='text-2xl md:text-3xl mb-4'>Best price guarantee</h2>
          <p className='mb-4 italic text-sm md:text-lg'>
            With various payment options, life hospital makes sure you get the 
            best care at an affordable price. We prioritize your health.
          </p>
          <Link to={'./booking'}>
            <button className='bg-green-400 p-2 w-40 md:w-60 rounded-3xl'>
              Book an appointment
            </button>
          </Link>
        </div>
        <div className='flex flex-1 flex-col justify-start p-6 bg-blue-950 text-white'>
          <h2 className='text-2xl md:text-3xl mb-4'>Opening hours</h2>
          <p className='mb-6 italic text-sm md:text-lg'>
            Monday-Friday: 08:00am-06:00pm <br />
            Saturday: 08:00am-04:00pm <br />
            Sunday: 08:00am-04:00pm
          </p>
          <Link to={'./booking'}>
            <button className='bg-green-400 p-2 w-40 md:w-60 rounded-3xl'>
              Book an appointment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
