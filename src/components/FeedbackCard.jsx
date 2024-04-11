import React from 'react'
import { avatar, quotationMark } from '../assets'

const FeedbackCard = () => {
  return (
    <div className='bg-white p-8 rounded-3xl shadow-xl my-8 mx-2'>
      <div className='flex justify-between'>
        <div className='flex gap-4'>
                <img src={avatar} />
                <div>
                    <h1>Gael Razo</h1>
                    <p>UI-UX Designer</p>
                </div>
            
            </div>
            <img className='h-8' src={quotationMark} />
      </div>

      <div className='py-8'>
        <h3 className='text-lg'>Los servicios que Higuar ofrece me han ayudado a solucionar y corregir situaciones que se presentaron en momentos inoportunos, tales como problemas de fontaneria y mecanica automotriz, los cuales han necesitado una atencion rapida y con Hifuar lo pude encontrar, Gracias Higuar!.</h3>
      </div>
    </div>
  )
}

export default FeedbackCard