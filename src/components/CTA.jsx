import React from 'react'
import { cta } from '../assets'

const CTA = () => {
  return (
    <div className='w-full bg-[#1788f160] py-24'>
    <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center  px-4 md:px-0'>
                
        <img src={cta} className="w-[650px] mx-auto" />

        
        <div>
            <h1 className='py-2  text-3xl font-semibold'>Comuniate con <span className='text-[#016AC2]'>HIGUAR</span> y le daremos solucion a tus problemas. </h1>
            <p className='py-2 text-lg text-gray-600'>Contactanos via WhatsApp o al 4641504886</p>
            <button className='max-[780px]:w-full my-4 px-8 py-5 rounded-md bg-[#016AC2] text-white font-bold'><a href="https://api.whatsapp.com/send?phone=524641504886&text=Buenas%20tardes%20Guillermo,%20me%20gustaria%20preguntarte%20acerca%20de%20tus%20servicio%20:)" >
              Contactar</a>
              </button>

             
        </div>
        



    </div>
    

</div>
  )
}

export default CTA