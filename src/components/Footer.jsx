import React from 'react'
import { logo } from '../assets'
import {FaFacebookF,FaWhatsapp,FaInstagram,FaBehance} from 'react-icons/fa'
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px]  px-4 md:px-0'>
            
            <div className='col-span-2'>
                <img src={logo} className="h-[25px]" />
                <h3 className='text-2xl font-bold mt-10'>Contactanos</h3>
                <h3 className='py-2 text-[#6D737A]'>Llama : +52 464 1504886</h3>
                <h3 className='py-2 text-[#6D737A]'>Contactanos via llamada  <br></br> o por nuestras redes sociales.</h3>
                <h3 className='py-2 text-[#363A3D]'>Email: example@mail.com</h3>
                <div className='flex gap-4 py-4'>
                <button><div className='p-4 bg-[#016AC2] rounded-xl'><FaFacebookF size={25} style={{color:'#ffffff'}} /></div></button>
                <button><div className='p-4 bg-[#016AC2] rounded-xl'><FaWhatsapp size={25} style={{color:'#ffffff'}} /></div></button>
                <button><div className='p-4 bg-[#016AC2] rounded-xl'><HiOutlineMail size={25} style={{color:'#ffffff'}} /></div></button>
                <button><div className='p-4 bg-[#016AC2] rounded-xl'><FaInstagram size={25} style={{color:'#ffffff'}} /></div></button>
                <button><div className='p-4 bg-[#016AC2] rounded-xl'><FaBehance size={25} style={{color:'#ffffff'}} /></div></button>

                </div>

            </div>

            <div>
                <h3 className='text-2xl font-bold'>Explora</h3>
                <ul className='py-6 text-[#6D737A]'>
                    <li className='py-2'>Nosotros</li>
                    <li className='py-2'>Galeria</li>
                    <li className='py-2'>Servicios</li>
                    <li className='py-2'>Contacto</li>

                </ul>
            </div>

            <div>
                <h3 className='text-2xl font-bold'>Categorias</h3>
                <ul className='py-6 text-[#6D737A]'>
                    <li className='py-2'>Plomeria</li>
                    <li className='py-2'>Albañileria</li>
                    <li className='py-2'>Electrico</li>
                    <li className='py-2'>Jardineria</li>
                    <li className='py-2'>Mecanica</li>
                    <li className='py-2'>Herreria</li>
                    <li className='py-2'>Hojalateria</li>

                </ul>
            </div>

            <div className='max-[780px]:col-span-2'>
                <h3 className='text-2xl font-bold'>Escribenos</h3>
                <h3 className='py-2 text-[#6D737A]'>Contactanos via whatsapp <br></br> para cotizar nuestros servicios.</h3>
                <form className='py-4'>

                    <button className='max-[780px]:w-full my-4 px-5 py-3 rounded-md bg-[#016AC2] text-white font-medium'>Escribenos</button>

                </form>


            </div>
        
        </div>
    </div>
  )
}

export default Footer