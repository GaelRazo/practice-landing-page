import React from 'react'
import CategoryCard from './CategoryCard'
import {BsVectorPen} from 'react-icons/bs'
import {TiHtml5} from 'react-icons/ti'
import {TbMicrophone2,TbMusic} from 'react-icons/tb'
import {HiOutlineBriefcase} from 'react-icons/hi'
import {WiSunrise} from 'react-icons/wi'
import {AiOutlineCamera} from 'react-icons/ai'
import {BiData} from 'react-icons/bi'
import {MdAttachMoney} from 'react-icons/md'
import {FaUniversity} from 'react-icons/fa'

const Categories = () => {
  return (
    <div className='w-full bg-[#1788f160] py-24'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
                <h1 className='md:leading-[72px] text-3xl font-bold'>Servicios <span className='text-[#016AC2]'>Populares en HIGUAR</span></h1>
                <p className='text-lg text-gray-600'>Algunos de los servicios que la gente solicita con mas frecuencia.</p>
                
                <div className='grid lg:grid-cols-4 grid-cols-2 py-12 md:gap-4 gap-1'>
                    <CategoryCard  icons={<BsVectorPen size={30} />} title={'Plomeria'} />
                    <CategoryCard icons={<TiHtml5 size={30} />} title={'Albañileria'} />
                    <CategoryCard icons={<TbMicrophone2 size={30} />} title={'Electrico'} />
                    <CategoryCard icons={<HiOutlineBriefcase size={30} />} title={'Jardineria'} />

                    <CategoryCard icons={<WiSunrise size={30} />} title={'Mecanica'} />
                    <CategoryCard icons={<AiOutlineCamera size={30} />} title={'Herreria'} />
                    <CategoryCard icons={<TbMusic size={30} />} title={'Carpinteria'} />
                    <CategoryCard icons={<BiData size={30} />} title={'Hojalateria'} />

                    <CategoryCard icons={<TiHtml5 size={30} />} title={'Soldadura'} />
                    <CategoryCard icons={<TiHtml5 size={30} />} title={'Cerrajeria'} />
                    <CategoryCard icons={<MdAttachMoney size={30} />} title={'Arquitectura'} />
                    <CategoryCard icons={<FaUniversity size={30} />} title={'Conductor'} />


                    

                </div>
        
        
        </div>
    </div>
  )
}

export default Categories