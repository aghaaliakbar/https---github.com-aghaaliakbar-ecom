"use client";
import App from 'next/app';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link'; // Import the Link component

const Categories = () => {
  return (
    <div className='py-16 px-2'>

      <div className='text-center my-10'>
        <div><p className='text-blue-800 text-sm space-x-3 font-bold my-4'>PROMOTIONAL</p></div>
        <div><h3 className='text-3xl font-bold'>Categories</h3></div>
      </div>

      {/* {Categories start from here} */}
      <div className='flex gap-4'>
        {/* Use Link component from next/link */}
        <Link href='/Tops'>
          <div className='flex flex-col items-center'>
            <Image
              src={require('../../public/female img 1.webp')}
              alt='Pants'
              width={450}
              height={100}
              className='rounded-xl duration-200 group-hover:scale-110'
            />
            <div className='absolute bottom-2'>
              <h1 className='uppercase'>TOPS</h1>
            </div>
          </div>
        </Link>

        {/* Use Link component from next/link */}
        <Link href='/Pants'>
          <div className='flex flex-col items-center'>
            <Image
              src={require('../../public/Female image 34.jpg')}
              alt='tops'
              width={450}
              height={100}
              className='rounded-xl duration-200 group-hover:scale-110'
            />
            <div className='absolute bottom-2'>
              <h1 className='uppercase'>PANTS</h1>
            </div>
          </div>
        </Link>

        {/* Use Link component from next/link */}
        <Link href='/Accessories'>
          <div className='flex flex-col items-center'>
            <Image
              src={require('../../public/Female-model2.webp')}
              alt='Accessories'
              width={450}
              height={100}
              className='rounded-xl duration-200 group-hover:scale-110'
            />
            <div className='absolute bottom-2'>
              <h1 className='uppercase'>Accessories</h1>
            </div>
          </div>
        </Link>
        {/* Use Link component from next/link */}
        <Link href='/Towels'>
          <div className='flex flex-col items-center'>
            <Image
              src={require('../../public/female image44.jpg')}
              alt='Towels'
              width={450}
              height={100}
              className='rounded-xl duration-200 group-hover:scale-110'
            />
            <div className='absolute bottom-2'>
              <h1 className='uppercase'>Towels</h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
