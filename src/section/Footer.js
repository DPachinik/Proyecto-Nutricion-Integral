import React from 'react';
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <section className='flex justify-around bg-black shadow-xl shadow-amber-300 h-[100px] mt-[50px] items-center'>
      <div>
        <h2 className='text-amber-300'>Nutrición Integral</h2>
      </div>
      <div>
        <h2 className='text-gray-400'>copyright 2024</h2>
      </div>
      <div className='flex items-center text-gray-400 hover:text-fuchsia-500'>
        <a 
          href='https://www.instagram.com/nutricionintegral1' 
          target='_blank' 
          rel='noopener noreferrer' 
          className='flex items-center space-x-2'
        >
          <AiFillInstagram className='h-[30px] w-[30px]' />
          <span>Instagram</span>
        </a>
      </div>
    </section>
  );
};

export default Footer;
