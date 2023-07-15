import Image from 'next/image'
import React from 'react'

function PromotionPortion() {
  return (
    <div className='py-16 px-2'>

<div className='text-center my-10'>
  <div> <p className='text-blue-800 text-sm space-x-3 font-bold my-4'>PROMOTIONS</p>       </div>

  <div>  <h3 className='text-3xl font-bold'>Our Promotions Events</h3>            </div>
</div>




{/* gird of three images */}


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-gray-800 mx-auto">

{/* // first grid  */}
      <div className='bg-gray-200 w-full flex flex-col items-center justify-between sm:flex-row col-span-1 md:col-span-2 px-12'>

        <div className='max-w-[30rem] py-4'>
          <h4 className='text-3xl font-extrabold'>GET UP TO 60%</h4>
          <p className='text-lg'>For the summer season</p>
        </div>


        <div className='w-60'>
          <Image src={'https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent1.6f776995.png&w=384&q=75'} alt='image' width={1000} height={1000}></Image>
        </div>
      </div>



{/* // second gird  */}
      <div className='bg-green-100 "w-full row-span-1 md:row-span-2 flex flex-col items-center h-full '>

        <div className='px-4 py-4'>
          <p>Flex Sweatshirt</p>
       
          
          <p className='text-lg'> <del>$100.00$</del>
          &nbsp;
          &nbsp;
       
         <ins className='font-bold'>$75.00</ins></p>
        </div>


        <div className='w-64'>
        <Image src={'https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent2.b5f201ac.png&w=384&q=75'} alt='image' width={1000} height={1000}></Image>

        </div>
      </div>
  
  
{/* // third gird  */}
<div className='bg-gray-200 "w-full row-span-1 md:row-span-2 flex flex-col items-center h-full'>

<div className='px-4 py-4'>
  <p>Flex Sweatshirt</p>

  
  <p className='text-lg'> <del>$100.00$</del>
  &nbsp;
  &nbsp;

 <ins className='font-bold'>$75.00</ins></p>
</div>


<div className='w-64'>
<Image src={'https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent3.798fa92b.png&w=384&q=75'} alt='image' width={1000} height={1000}></Image>

</div>
</div>


{/* // fourth grid  */}


<div className='bg-black w-100 col-span-2  flex flex-col justify-center items-center space-y-3  '>
  <h3 className='text-white font-bold text-3xl'>GET 30% Off</h3>
  <p className='text-white mt-3'>USE PROMO CODE</p>

  <button className='py-1 px-8 text-lg bg-slate-400 rounded-lg mt-3'>DINEWEEKENDSALE</button>
</div>

        </div>







    </div>
  )
}

export default PromotionPortion