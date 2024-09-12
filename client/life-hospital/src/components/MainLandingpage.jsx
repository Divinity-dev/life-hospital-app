import { backgroungImages } from '../ServiceData'
import { useEffect, useState } from 'react';

const MainLandingpage = () => {

    const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < backgroungImages.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [index]);
  return (
    <div className='flex h-[100vh] justify-center items-center p-6' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroungImages[index].image})`,
    backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className='text-center mb-32'>
      <h1 className='text-white text-5xl text-center font-bold mb-4'>Welcome to <span className='text-blue-900 italic'>Life Hospital</span>,
      <br /></h1>
      <h2 className='text-white text-3xl font-bold'>Let's give you the best medicare you deserve</h2>
      </div>
    </div>
  )
}

export default MainLandingpage
