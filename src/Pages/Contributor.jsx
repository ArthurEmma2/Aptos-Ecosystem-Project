// import React from 'react'
// import  {CONTRIBUTORS__DATA}  from '../Assets/data/data'
// import '../Styles/contributrors.css'

// function Contributor() {
//   return (
//     <>
//     <section className='Container mt-52'>
//       <div>
//         <h2 className='e-header text-center text-7xl font-bold'>Contributors</h2>

//         <div className='grid grid-cols-1  md:grid-cols-2 gap-20 lg:grid-cols-3 items-center lg:w-auto mt-52'>
//           {
//             CONTRIBUTORS__DATA.map((item) =>{
//               const {avatar, name, role} = item
//               return(
//                 <div className='image-area'>
//                 <img className='w-full' src={avatar}  alt=''/>
//                 <div className='img_content'>
//                   <p className='text-5xl font-bold'>{name}</p>
//                   <p className='text-xl font-medium'>{role}</p>

//                 </div>
//                 </div>
//               )

//             })
//           }
//         </div>
//       </div>
//     </section>
//     </>
//   )
// }

// export default Contributor