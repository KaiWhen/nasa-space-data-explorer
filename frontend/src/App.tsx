// import { useState } from "react";
import Starfield from 'react-starfield';
import Hero from './pages/Home/Hero';

function App() {
  return (
    <div className="relative">
      <div className='fixed inset-0 -z-10'>
        <Starfield
          starCount={1000}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
          backgroundColor="black"
        />
      </div>
      
      <div className="z-10 relative min-h-screen">
        <Hero/>
      </div>
    </div>
  );
}

export default App;
