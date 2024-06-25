import React from 'react';
import ContenedorImagen from '../componentes/ContenedorImagen';
import ContenedorTextoIntro from '../componentes/ContenedorTextoIntro';

const Home = () => {
  return (
    <section className='container mx-auto p-12 pt-[90px] '>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-14 mx-4'>
        <div className='flex items-center text-white'>
          <ContenedorTextoIntro />
        </div>
        <div className='flex items-center ml-8'>
          <ContenedorImagen className=' p-4' imagen='jessy1' />
        </div>
      </div>
    </section>
  );
};
export default Home;
