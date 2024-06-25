import React from 'react'
import { AiOutlineWhatsApp  } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <section className='flex justify-between bg-black shadow-xl shadow-amber-300 h-[100px] mt-[50px] items-center'>
      <div>
        <h2 className='text-white'>Nutrición Integral</h2>
      </div>
      <div>
        <h2 className='text-white'>copyright 2024</h2>
      </div>
      <div className='flex justify-between text-white'>
        <AiOutlineWhatsApp className='h-[30px] w-[30px]'/>
        <AiFillInstagram className='h-[30px] w-[30px]' />
      </div>
    </section>
  )
}

export default Footer
