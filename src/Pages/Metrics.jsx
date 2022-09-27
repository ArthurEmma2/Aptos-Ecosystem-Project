import React from 'react'
import metrics from '../Assets/img/metrics-removebg-preview.png'

function Metrics() {
  return (
    <section className='mt-32'>
    <div className='sm:grid pt-20 grid-cols-1 md:flex container items-center justify-around'>
    
    <div className=''>
        <h2 className='text-4xl e-header font-bold tracking-[2px]'>Metrics</h2>
        <p className='text-[#90E6D1] opacity-70 text-5xl lg:text-5xl mt-6 font-extrabold tracking-[2px]'>Dapptos cares about<br /> delivering all the <br />ecosystem metrics</p>
        <p className='bg-[#D0C4D0] px-7 py-3 font-bold text-xl w-52 text-center rounded-md mt-6 text-black  animate-spin'>Stay Tuned......</p>
    </div>
    <div className='mt-10 md:mt-4 animate-pulse'>
      <img src={metrics}  alt=''/>
    </div>
    </div>
  </section>
  )
}

export default Metrics