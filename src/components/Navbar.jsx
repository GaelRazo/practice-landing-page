import React, { useState } from 'react';
import {logo,lock, hamburgerMenu, close} from '../assets'
import { Link } from 'react-router-dom';

const links=[
    {
        name: 'Home',
        href: '/home'
    },
    {
        name: 'Nosotros',
        href: '/nosotros'
    },
    {
        name: 'Servicios',
        href: '/servicios'
    },
    {
        name: 'Galeria',
        href: '/galeria'
    },
    {
        name: 'Contacto',
        href: '/contacto'
    },

]

const Navbar = () => {

    const [toggle,setToggle]=useState(false)
    const handleClick = ()=> setToggle(!toggle)

  return (

    
    <div className='w-full h-[80px] bg-[#016AC2] '>
        <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4'>
            
            <Link to="/"><button className='flex justify-between items-center  bg-transparent  px-6 gap-2'>
                <img src={logo} className="h-[45px]" />
            </button></Link>
            
            <div className='hidden md:flex items-center text-white'>
                <ul className='flex gap-4'>
                    <li>
                        <Link to="Nosotros"><button className='flex justify-between items-center  bg-transparent  px-6 gap-2'>
                            Nosotros
                        </button></Link>
                    </li>
                    <li>
                        <Link to="Servicios"><button className='flex justify-between items-center  bg-transparent  px-6 gap-2'>
                            Servicios
                        </button></Link>
                    </li>
                    <li>
                        <Link to="Galeria"><button className='flex justify-between items-center  bg-transparent  px-6 gap-2'>
                            Galeria
                        </button></Link>
                    </li>
                    <li>
                        <Link to="Servicios"><button className='flex justify-between items-center  bg-transparent  px-6 gap-2'>
                            Contacto
                        </button></Link>
                    </li>
                </ul>
            </div>


            <div className='md:hidden'  onClick={handleClick}>
                    <img src={toggle?close:hamburgerMenu} />
            </div>

        </div>

        <div className={toggle?'absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b':'hidden'}>
            <ul>
                    <li className='p-4 hover:bg-gray-100'>Home</li>
                    <li className='p-4 hover:bg-gray-100'>About</li>
                    <li className='p-4 hover:bg-gray-100'>Support</li>
                    <li className='p-4 hover:bg-gray-100'>Platform</li>
                    <li className='p-4 hover:bg-gray-100'>Pricing</li>
            </ul>
        </div>
        
        
    </div>

  )
}

export default Navbar