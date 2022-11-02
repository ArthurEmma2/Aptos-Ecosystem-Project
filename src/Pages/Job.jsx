import React from 'react'
import apt from '../Assets/img/Copy of Aptos_mark_BLK (1).png'

function Job() {
  return (
    <>
    <section className='container mt-52'>
      <div className='text-center'>
        <p className='text-white text-3xl lg:text-7xl font-bold text-center'>Aptos! layer 1 for everyone</p>
        <button className='bg-white shadow-md shadow-slate-400 text-center mx-auto py-2 px-5 rounded-lg mt-8 text-xl hover:opacity-40'>Post a job</button>
        </div>
          <div className='bg-[#1DE9B6] rounded-md shadow-md shadow-slate-600 w-full mt-32 h-32 items-center px-4'>
            <div className='flex justify-between items-center'>
              <div className='flex'>
                <div>
                <img  className='mt-5' src={apt} width='70px' alt='logo'/>
                  </div>
                    <div className='m-7'>
                    <button className='text-black text-[12px] md:text-2xl  font-bold hover:underline hover:underline-offset-4 hover:transition-all'>Front End Engineer</button>
                    <p className='font-semibold  text-[10px] md:text-xl'>Aptos Labs</p>
                    <p className='opacity-80 text-[10px] md:text-xl'>Remote-Global</p>
                </div>
              </div>
              <div className='hidden md:flex'>
                <button className='text-black'>Apply now<i class="ri-arrow-right-fill"></i></button>
              </div>
            </div>
          </div>
          <div className='bg-[#1DE9B6] rounded-md shadow-md mt-12 shadow-slate-600 w-full h-32 items-center px-4'>
            <div className='flex justify-between items-center'>
              <div className='flex'>
                <div>
                <img  className='mt-5' src={apt} width='70px' alt='logo'/>
                  </div>
                    <div className='m-7'>
                    <button className='text-black text-[12px] md:text-2xl font-bold hover:underline hover:underline-offset-4 hover:transition-all'>Data Engineer</button>
                    <p className='font-semibold  text-[10px] md:text-xl'>Aptos Labs</p>
                    <p className='opacity-80 text-[10px] md:text-xl'>Remote-USA</p>
                </div>
              </div>
              <div className='hidden md:flex'>
                <button className='text-black'>Apply now<i class="ri-arrow-right-fill"></i></button>
              </div>
            </div>
          </div>
          <div className='bg-[#1DE9B6] rounded-md shadow-md mt-12 shadow-slate-600 w-full h-32 items-center px-4'>
            <div className='flex justify-between items-center'>
              <div className='flex'>
                <div>
                <img  className='mt-5' src={apt} width='70px' alt='logo'/>
                  </div>
                    <div className='m-7'>
                    <button className='text-black text-[12px] md:text-2xl font-bold hover:underline hover:underline-offset-4 hover:transition-all'>Backend web3 Engineer</button>
                    <p className='font-semibold  text-[10px] md:text-xl'>Aptos Labs</p>
                    <p className='opacity-80 text-[10px] md:text-xl'>Remote-Global</p>
                </div>
              </div>
              <div className='hidden md:flex'>
                <button className='text-black'>Apply now<i class="ri-arrow-right-fill"></i></button>
              </div>
            </div>
          </div>
          <div className='bg-[#1DE9B6] rounded-md shadow-md mt-12 shadow-slate-600 w-full h-32 items-center px-4'>
            <div className='flex justify-between items-center'>
              <div className='flex'>
                <div>
                <img  className='mt-5' src={apt} width='70px' alt='logo'/>
                  </div>
                    <div className='m-7'>
                    <button className='text-black text-[12px] md:text-2xl font-bold hover:underline hover:underline-offset-4 hover:transition-all'>Production Engineer</button>
                    <p className='font-semibold  text-[10px] md:text-xl'>Aptos Labs</p>
                    <p className='opacity-80 text-[10px] md:text-xl'>Remote-Global</p>
                </div>
              </div>
              <div className='hidden md:flex'>
                <button className='text-black'>Apply now<i class="ri-arrow-right-fill"></i></button>
              </div>
            </div>
          </div>

          <p className='mt-52'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, repellat?</p>

    </section>
    
    </>
   
  )
}

export default Job