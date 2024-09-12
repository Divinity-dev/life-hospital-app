import React from 'react'
import Landing from '../components/Landing';
import Services from '../components/Services';
import Staff from '../components/Staff';
import MainLandingpage from '../components/MainLandingpage';

const Home = () => {
  return (
    <div>
      <MainLandingpage/>
       <Landing/>
     <Services/>
     <Staff/>
    </div>
  )
}

export default Home
