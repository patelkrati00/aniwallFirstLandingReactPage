import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

const HeroSection = () => {
  return (
    <div className="flex flex-col mt-6 lg:mt-20 items-center">
      <h1 className="tracking-wide text-4xl  sm:text-6xl lg:text-7xl text-center">VirtualR build tool 
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text"> for developers</span>
       </h1>

       <p className="mt-10 text-center text-neutral-500 text-lg max-w-4xl">Empower your creativity and bring your vr app ideas to life with intuitive development tools. Get started today and turn your imagination into reality</p>

       <div className="flex  mt-10">
        <a href="" className=" rounded-md bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4">Start for free</a>

        <a href="" className="border mx-6 rounded-md py-3 px-4 ">Documentation</a>
       </div>

       <div className="flex mt-10">
        <video autoPlay loop muted className='border border-orange-700 shadow-orange-400  rounded-lg w-1/2 '>
          <source src={video1} type="video/mp4"/>
        </video>
         <video autoPlay loop muted className='border border-orange-700 shadow-orange-400 mx-2  rounded-lg w-1/2 '>
          <source src={video2} type="video/mp4"/>
        </video>
       </div>
    </div>
  )
}

export default HeroSection
