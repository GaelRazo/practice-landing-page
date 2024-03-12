import React from 'react';
import { companyLogo1, companyLogo2, companyLogo3, companyLogo4  } from '../assets';

const Companies = () => {
  return (
    <div className='w-full bg-white py-[50px]'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-1 md:px-0'>
            <h1 className='text-center text-3xl font-bold text-[#bababa]'>Marcas que confian en nuestro trabajo.</h1>
            <p className='text-center  text-[#bababa] text-2xl'>Usamos las mejores marcas para obtener los mejores resultados.</p>
            <div className='flex justify-center py-8 md:gap-8 '>
                <div className='grid md:grid-cols-4 grid-cols-2 gap-2'>
                  <img src={companyLogo1} className='max-w-[300px] p-4 my-4 mx-2'/>
                  <img src={companyLogo2} className='max-w-[250px] p-2 my-4 mx-6'/>
                  <img src={companyLogo3} className='max-w-[300px] p-4'/>
                  <img src={companyLogo4} className='max-w-[250px] p-2  mx-6'/>
                </div>
            </div>
        
        </div>

    </div>
  )
}

export default Companies