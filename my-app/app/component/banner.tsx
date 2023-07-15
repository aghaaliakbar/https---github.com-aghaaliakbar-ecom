
import Image from 'next/image'
import React from 'react'
import girl from '../../public/image-hackathon.webp'

import {FiShoppingCart} from 'react-icons/fi'

function Baner() {

  return (
    <>
    <div className='flex justify-around px-[100px] mt-[100px] mb-[20px] items-center'>

{/* // image right */}
        <div>
            <button className='text-purple-600 bg-green-200 rounded-lg   text-xl px-6 py-2 font-bold'>Sales 70%</button>
<br />
<h1 className="text-6xl font-bold my-[30px]">An Industrial Take on Streetwear</h1>


<p className='text-xl'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>

<button className= "bg-green-900   flex text-xl font-bold text-white px-6 py-6 my-[30px] gap-x-[8px] items-center"> 
        <FiShoppingCart />
          Start Shopping
        
          </button>
        </div>

        {/* // left side */}
        <div className='bg-green-200 rounded-full'>
            <Image src={girl} alt='girl' className='w-[600px]'></Image>
        </div>

        {/* // this is for the logos  which are undre the button */}

    </div>

   
    <div className='flex gap-10 my-[30px] '>
            <Image src={'https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured1.66abddd4.png&w=128&q=75'} width={100} height={68}  alt='boy'></Image>
            <Image src={'https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured2.247cd605.png&w=128&q=75'} width={100} height={68}  alt='boy'></Image>
            <Image src={'https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured3.6076521d.png&w=128&q=75'} width={100} height={68}  alt='boy'></Image>
            <Image src={'https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured4.0489f1fc.png&w=128&q=75'} width={100} height={68}  alt='boy'></Image>
        </div> 
    </>
  )
}

export default Baner