import React from 'react'

function subscribe() {
  return (
    <div className="py-[50px] md:mx-[400px] mx-[70px]" >
    <div >
      <h1 className="text-3xl font-bold my-[30px]">Subscribe Our Newsletter</h1>

      <p className="text-lg my-[20px]">Get the latest information and promo offers directly</p>


    </div>

    <div className="md:flex space-x-6">
   
    <input type="email" placeholder="input your email" size={30}className="h-[35px]  border border-solid border-red-700 "></input>

<button className="bg-black  text-white px-2 py-2 md:mt-[0px]">Get Started</button>


    </div>
  </div>

  )
}

export default subscribe