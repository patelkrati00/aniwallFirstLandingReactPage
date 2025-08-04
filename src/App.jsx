import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'


const App = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <HeroSection />
      </div>
    </div>
  )
}

export default App
