
import Image from 'next/image'
import React from 'react'
import logo from "../../public/log.webp"
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from 'next/link';
function page() {
  return (
    <div className='flex  my-10 justify-around'>


      <div>
        <Image src={logo} alt='a'></Image>
      </div>




      <div>
        <ul className='flex space-x-6'>
          <Link href='/female'>
          <li>All Products </li>
          </Link>
       
       
         <Link href='/female'>
         <li>Female</li>
         </Link>

         <Link href='/male'>
         <li>Male</li>
         </Link>

         <Link href='/kids'>
         <li>Kids</li>         </Link>
       
        </ul>
      </div>


      <div className='flex items-center'>
        <BiSearchAlt />
        <input type='text' placeholder='what are you looking for' />
      </div>


      <div className='relative'>
        <span className=' absolute flex -top-2 -right-2 items-center justify-center bg-red-600 rounded-full h-4 w-4 text-white text-sm'>5</span>
        <AiOutlineShoppingCart  />
      </div>
    </div>







  )
}

export default page