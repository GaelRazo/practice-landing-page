import React from 'react';
import { heroImg } from '../assets';
import  {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom';



const Hero = () => {
  return (
    <div className='w-full bg-[#016AC2] py-20 md:py-48'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
            
            <div className='flex flex-col justify-start gap-4 text-white'>
                <p className='py-2 text-2xl text-[#59E54C] font-medium'>START TO SUCCESS</p>
                <h1 className='md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold'><span className='text-[#59E54C]'>Solución </span> 
                a tus <span  className='text-[#59E54C]'>  problemas </span> de
                limpieza y mantenimiento
                </h1>
                <p className='py-2 text-lg text-white'>Ofrecemos una amplia gama de suministros, servicios y la integración de todos ellos.</p>
                
                    <button onclick="window.location.href = 'https://www.ejemplo.com';" className=' bg-[#59E54C]  max-w-[150px] p-4 input-box-shadow rounded-md flex justify-between items-center px-7'>
                    <a href="https://api.whatsapp.com/send?phone=524641504886&text=Buenas%20tardes%20Guillermo,%20me%20gustaria%20preguntarte%20acerca%20de%20tus%20servicio%20:)" >Contactanos</a>
                    </button>

            </div>
            
            <img  src={heroImg} className="order-last  md:h-[500px] md:mx-32 my-8 mx-40 h-[200px]" />



        </div>
        

    </div>
  )
}

export default Hero