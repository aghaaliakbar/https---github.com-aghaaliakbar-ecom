'use client'
import React from 'react'
// import boy from '../../../my-app/public/boyq.png'
import girl from '../../public/Female3.webp'
import Image from 'next/image'
function authentic() {
  return (
    <>
    <div>

<div>
 <h1 className="md:text-5xl text-3xl flex md:justify-end md:ml-[700px] font-bold mt-[150px] md:px-[0px] px-[30px]  ">Unique and Authentic Vintage Designer Jewellery</h1>

</div>
<div className='grid md:grid-cols-4 grid-cols-2 md:px-[150px] px-[30px]  my-[100px] md:gap-x-[50px] gap-x-[50px]'>
<div>
  <h1 className="text-xl mb-[20px] font-bold">Using Good Quality Materials</h1>
  <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
</div>
<div>
  <h1 className="text-xl mb-[20px] font-bold">Using Good Quality Materials</h1>
  <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
</div>


<div className='md:my-[10px] my-[50px]'>
  <Image src={girl} alt="boy" className="md:w-[250px] bg-slate-200"></Image>
</div>
<div>
  <p className="md:text-lg md:ml-[15px] my-[50px]">This piece is ethically crafted in our small family-owned workshop 
    in Peru with unmatched attention to detail and care. The Natural color 
    is the actual natural color of the fiber,
     undyed and 100% traceable.</p>

<div className='md:-mt-[40px] -mt-[30px]'>
<button className="bg-black text-white md:px-2 md:py-6 px-3 py-3 font-bold md:mt-[10px] mb-[30px] ">See All products</button>
     </div>
</div>
<div className="md:-mt-[250px] -mt-[0px]">
  <h1 className="text-xl mb-[20px] font-bold">Using Good Quality Materials</h1>
  <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
</div>
<div className="md:-mt-[250px] -mt-[0px]">
  <h1 className="text-xl mb-[20px] font-bold">Using Good Quality Materials</h1>
  <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
</div>

</div>

    </div>
    </>
  )
}

export default authentic