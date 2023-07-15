import React from 'react'
import fac from '../../../my-app/public/fb.png'
import twit from '../../../my-app/public/Twitter.png'
import lidn from '../../../my-app/public/linkdin2.png'
import Image from 'next/image'
function footer() {
  return (
    <>
    
    <div className="md:flex md:px-[100px] px-[30px] md:space-x-[100px]  my-[200px]">
<div>
<span className='text-3xl font-bold'>O</span> <span className='text-3xl font-bold'>Dine</span> <span className='text-3xl font-bold'>Market</span>
<p className="text-lg mt-[20px]">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>

<ul className="flex space-x-6 my-[30px]">
<li>
  <Image src={twit} alt='facebook' className='w-[40px]'/>
</li>
<li>
<Image src={fac} alt='facebook' className='w-[40px]'/>
</li>
<li>
<Image src={lidn} alt='facebook' className='w-[70px]' />
</li>

</ul>
</div>




<div>
<h1 className="text-2xl font-bold">Company</h1>
<ul className="space-y-3">
<li className="mt-[10px]">About</li>
<li>Terms of Use</li>
<li>Privacy Policy</li>
<li>How it Works</li>
<li>Contact Us</li>
</ul>
</div>




<div>
<h1 className="text-2xl font-bold">Company</h1>
<ul className="space-y-3">
<li className="mt-[10px]">About</li>
<li>Terms of Use</li>
<li>Privacy Policy</li>
<li>How it Works</li>
<li>Contact Us</li>
</ul>
</div>



<div>
<h1 className="text-2xl font-bold">Support</h1>
<ul className="space-y-3">
<li className="mt-[10px]">Support Carrer </li>
<li>24h Service</li>
<li>Quick Chat
</li>

</ul>
</div>


<div>
<h1 className="text-2xl font-bold">Contact</h1>
<ul className="space-y-3">
<li className="mt-[10px]">Whatsapp</li>
<li>Support 24h</li>


</ul>
</div>


</div> 


{/* // this is for the lats of footer */}



<hr className='h-1  w-full bg-black' />

<div className="md:flex justify-around md:px-[50px] px-[30px] my-[10px] md:space-y-[0px] space-y-[20px]">
    <div>

<h1>Copyright © 2022 Dine  <br />
  Market</h1>
    </div>
    <div>

<h1>Design by.<br/>
<span className="text-xl font-bold">Ali Akbar</span> </h1>
    </div>
    <div>

<h1>Code by. 
   <span className="text-xl font-bold">shabrina12 <br />on github</span></h1>
    </div>
    </div>

    
    </>
  )
}

export default footer