import React,{useEffect} from 'react'
import heroImage from '../Assets/img/ec2.png'
import img1 from '../Assets/img/ed3-removebg-preview.png'
import img2 from '../Assets/img/Ec1.png'
import img from '../Assets/img/Work_cooperation_2.png'
import acad from '../Assets/img/docs.svg'
import docs from '../Assets/img/docs2.svg'
import move from '../Assets/img/move-1-removebg-preview.png'
import speed from '../Assets/img/rocket-removebg-preview.png'
import  Aos  from 'aos';

function Education() {
  useEffect(() =>{
    Aos.init({duration:2000})
  },[])
  return (
  <section className='container mt-48'>
    <div className='sm:grid pt-20 grid-cols-1 md:grid-cols-1 grid lg:flex container items-center'>
      <div className=''>
          <h4  className='text-[#90E6D1] e-header text-3xl tracking-[2px] '>Learn how to</h4>
         <h1 className=' text-2xl leading-9 md:text-5xl text-blue-400 md:leading-[60px] font-bold'>
              build Web3 dApps on Aptos Blockchain with fun
              and<br /> free interactive courses
          </h1> 
        <p className='py-4 text-[#90E6D1] opacity-80 mt-4 tracking-[2px]'>
        Aptos is building an interactive course for web developers <br></br>
        looking to explore blockchain integration with their Apps.</p>
      </div>

     

      <div>
      <img src={heroImage}  className='sm:w-full shadow-md shadow-slate-300 border-none py-3' alt='' />
      </div>
    </div>
        <h1 className='e-header text-4xl text-center md:text-5xl lg:text-6xl font-bold my-32'>Why learn blockchain & Aptos?</h1>

        <div className='grid grid-cols-1 md:flex items-center gap-20 justify-center overflow-x-hidden'>
            <div className=''data-aos='fade-left'>
            <img src={img2} width='200px' alt='edu' />
              <p className='text-[#90E6D1] items-center tracking-[2px] leading-7'>
              <h1 className='e-header text-xl opacity-70 font-bold'> Decentralize.</h1><br />
              Decentralized: In a blockchain context, decentralization means that
               the network operates independently from the control of a centralized 
               intermediary, usually evidenced by a
               widely distributed global network of nodes that furnish the network’s operation.
                   </p> <br />
            </div>
            <div className=''data-aos='fade-right'>
            <img className='e-header' src={move} width='200px' alt='edu' />
              <p className='text-[#90E6D1] items-center tracking-[2px] leading-7'>
              <h1 className='e-header text-xl opacity-70 font-bold'>Move</h1><br />
                The Move programming laungauage largely emphasizes delivering a safe and programmable foundation.it was developed by Facebook for developing customizable transaction logic and smart contracts for the Libra digital currency
                   </p> <br />
            </div>
        </div>
        <div className='grid grid-cols-1 md:flex items-center gap-20 justify-center overflow-x-hidden'>
            <div className=''data-aos='fade-left'>
            <img src={speed} width='200px' alt='edu' />
              <p className='text-[#90E6D1] items-center tracking-[2px] leading-7'>
              <h1 className='e-header text-xl opacity-70 font-bold'>Speed.</h1><br />
              Aptos blockchains are incredibly powerful, fast and scalable. Aptos
               can process 130,000 tps (transactions per second): this result was 
               achieved during a speed test. Block-STM, plays
               a major part in this and can increase this to 160,000 tps
                   </p> <br />
            </div>
            <div className=''data-aos='fade-right'>
            <img src={img} width='200px' alt='edu' />
              <p className='text-[#90E6D1] items-center tracking-[2px] leading-7'>
              <h1 className='e-header text-xl opacity-70 font-bold'> Curious minds gets the vast opportunities</h1><br />
              The new skills that you will learn by finishing this course will open 
              new doors and new career opportunities 
              in the ever growing blockchain
               and smart contract industry!
                   </p> <br />
            </div>
        </div>

        <div className='my-32'>
        <h1 className='e-header text-4xl text-left md:text-3xl lg:text-3xl font-bold mt-48 mb-32'>How would you like to get started?</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 '>
          <div className='font-bold text-[#90E6D1] border w-full md:w-[400px] p-5 border-zinc-200 shadow-md  shadow-slate-400 hover:scale-95 duration-500'>
            <img src={img1} width='80px' alt=''/>
            <h2 className='font-bold tracking-[2px]'>Learn Aptos development on Github</h2>
            <p className='opacity-70 tracking-[2px] text-sm leading-6'>Read up on core concepts and the <br/>
            Aptos stack on Github</p>
            <a target='_blank' rel="noreferrer" href='https://github.com/aptos-labs/aptos-core/'>
            <button className='text-blue-400 mt-2'>Learn More<i class="ri-arrow-right-up-line"></i></button>
            </a>
          </div>
          <div className='font-bold text-[#90E6D1] border w-full lg:w-[400px] p-5 border-zinc-200 shadow-md  shadow-slate-400 hover:scale-95 duration-500'>
            <img src={acad} width='40px' alt=''/>
            <h2 className='font-bold tracking-[2px]'>Aptos Academy</h2>
            <p className='opacity-70 tracking-[2px] text-sm leading-6'>Aptos Academy in providing targeted educational materials for different stakeholder groups in the ecosystem,<br/></p>
            <button className='text-blue-400 mt-2'>Coming Soon...</button>
          </div>
          <div className='font-bold text-[#90E6D1] border w-full md:w-[400px] p-5 border-zinc-200 shadow-md  shadow-slate-400 hover:scale-95 duration-500'>
            <img src={docs} width='40px' alt=''/>
            <h2 className='font-bold tracking-[2px]'>Learn Aptos development with docs</h2>
            <p className='opacity-70 tracking-[2px] text-sm leading-6'><br/>Learn about the core infrastructure including Runtime, State, P2P connections, routing, and more.</p>
            <a target='_blank' rel="noreferrer" href='https://aptos.dev/'>
            <button className='text-blue-400 mt-2'>Learn More<i class="ri-arrow-right-up-line"></i></button>
            </a>
            
          </div>
        </div>
        </div>
  </section>
   
  )
}

export default Education