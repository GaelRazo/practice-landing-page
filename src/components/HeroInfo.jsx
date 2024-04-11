import React from 'react';
import { heroImg } from '../assets';
import  {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const HeroInfo = () => {
  return (
    <div className='w-full bg-[#016AC2] py-20 md:py-48'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
            
            <div className='flex flex-col justify-start gap-4 text-white'>
                <p className='py-2 text-4xl text-[#59E54C] font-medium'>HIGUAR</p>
                
                <p className='py-2 text-3xl text-white'>Somos una empresa dedicada a ofrecer soluciones integrales en servicios de administración de personal 
                operativo, limpieza industrial, comercial, residencial y de oficinas, renta de maquinaria, jardinería industrial y residencial, así como 
                suministro, instalación y mantenimiento de sistemas de aire acondicionado. Nos enorgullece destacar por la eficiencia, calidad y versatilidad 
                de nuestros servicios, brindando a nuestros clientes la tranquilidad de contar con un aliado confiable para sus necesidades operativas.</p>
                
                    <Link to="prueba"><button className=' bg-[#59E54C]  max-w-[150px] p-4 input-box-shadow rounded-md flex justify-between items-center px-7'>
                        Contactanos
                    </button></Link>

            </div>
            
            <img  src={heroImg} className="order-first  md:h-[500px] md:mx-32 my-8 mx-40 h-[200px]" />



        </div>
        

    </div>
  )
}

export default HeroInfo
