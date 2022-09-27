import React,{useEffect} from 'react'
 import "./HeroSection.css"
 import  Aos  from 'aos';



function HeroSection() {
  useEffect(() =>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className='mt-64'>
      <div className='container'>
        <h1 className=' text-left text-3xl leading-[45px] glowing_text md:text-left md:leading-[60px] md:text-5xl lg:text-6xl font-bold lg:text-center tracking-[2px]'>Welcome to Dapptos View, the community platform hub,
                place, center, ground of Aptos</h1>  
                <h3 className='text-left text-[17px] md:text-[25px] text-white opacity-70 mt-20 md:text-left lg:text-center tracking-[2px] leading-[30px]'>
                  
                <p data-aos='fade-up'> Dapptos view will be a place where you can explore everything about the Aptos</p>
                <p data-aos='fade-up'>ecosystem where everyone can contribute. The open-source platform will have 5 </p>
                <p data-aos='fade-down'> major features ( education, news, jobs offers, metrics and projects dashboard).</p> </h3>
      </div>
    </section>
  )
}

export default HeroSection