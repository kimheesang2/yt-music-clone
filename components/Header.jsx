import React from 'react'
import { Image } from 'next/image';

const Header = ({children}) => {
  return (
    <header>
      <section>
        <div className='relative h-[400px] w-full'>
          <Image
          fill
          src="https://unsplash.com/photos/a-truck-driving-down-a-dirt-road-in-front-of-a-mountain-OiF439J1UmA" />
        </div>
      </section>
      <section>{children}</section>
    </header>
  );
};

export default Header
