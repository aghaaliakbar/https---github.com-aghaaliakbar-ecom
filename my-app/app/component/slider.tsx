"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

import SliderHeading from './sliderHeading';
import Link from 'next/link';
import Image from 'next/image';
import img1 from '../../public/female-model3.webp'
import img2 from '../../public/Female-model2.webp'
import img3 from '../../public/Female-model2.webp'



// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>

    <SliderHeading/>
    <div className='my-[100px] flex mx-10'>


    <Swiper
    slidesPerView={3}
    spaceBetween={10}
    
    modules={[Pagination]}
    className="mySwiper"
  >
    
    <SwiperSlide>

<Link href={'/'}>
<Image src={img1} alt='abc'></Image>
    <h1 className='font-bold mt-[6px]'>Brushed Raglan Sweatshirt</h1>
    <h2 className='font-bold'>$195.00</h2>
</Link>
    

    </SwiperSlide>

    <SwiperSlide>
    <Link href={'/'}>
    <Image src={img2} alt='abc' className='w-[400px] h-[400px]'></Image>
    <h1 className='font-bold mt-[6px] '>Brushed Raglan Sweatshirt</h1>
    <h2 className='font-bold'>$195.00</h2>
    </Link>
    </SwiperSlide>
  

    <SwiperSlide>
    <Link href={'/'}>
    <Image src={img3} alt='abc'></Image>
    <h1 className='font-bold mt-[6px]'>Brushed Raglan Sweatshirt</h1>
    <h2 className='font-bold'>$195.00</h2>
    </Link>
    </SwiperSlide>





    <SwiperSlide>

<Link href={'/'}>
<Image src={img1} alt='abc'></Image>
    <h1 className='font-bold mt-[6px]'>Brushed Raglan Sweatshirt</h1>
    <h2 className='font-bold'>$195.00</h2>
</Link>
    

    </SwiperSlide>

    <SwiperSlide>
    <Link href={'/'}>
    <Image src={img2} alt='abc' className='w-[400px] h-[400px]'></Image>
    <h1 className='font-bold mt-[6px] '>Brushed Raglan Sweatshirt</h1>
    <h2 className='font-bold'>$195.00</h2>
    </Link>
    </SwiperSlide>
  

    <SwiperSlide>
    <Link href={'/'}>
    <Image src={img3} alt='abc'></Image>
    <h1 className='font-bold mt-[6px]'>Brushed Raglan Sweatshirt</h1>
    <h2 className='font-bold'>$195.00</h2>
    </Link>
    </SwiperSlide>









    <SwiperSlide>

<Link href={'/'}>
<Image src={img1} alt='abc'></Image>
    <h1 className='font-bold mt-[6px]'>Brushed Raglan Sweatshirt</h1>
    <h2 className='font-bold'>$195.00</h2>
</Link>
    

    </SwiperSlide>

    <SwiperSlide>
    <Link href={'/'}>
    <Image src={img2} alt='abc' className='w-[400px] h-[400px]'></Image>
    <h1 className='font-bold mt-[6px] '>Brushed Raglan Sweatshirt</h1>
    <h2 className='font-bold'>$195.00</h2>
    </Link>
    </SwiperSlide>
  

    <SwiperSlide>
    <Link href={'/'}>
    <Image src={img3} alt='abc'></Image>
    <h1 className='font-bold mt-[6px]'>Brushed Raglan Sweatshirt</h1>
    <h2 className='font-bold'>$195.00</h2>
    </Link>
    </SwiperSlide>

</Swiper >
   
   

  </div>
  </>
  );
}
