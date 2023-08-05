
import React from 'react'
// import Header from '../app/component/header'
import Banner from '../app/component/banner'

import Promotions from '../app/component/promotions'
import Slider from '../app/component/slider'
import Authentic from '../app/component/authentic'
import Subscribe from '../app/component/subscribe'
import Catagories from './component/catagories'
// import Footer from '../app/component/footer'
function page() {
  return (
    <>
          <Banner/>
      <Promotions/>
      <Slider/>
      <Authentic/>
      <Subscribe/>
      <Catagories/>
      
      {/* <Footer/> */}

    </>

  

   
  )
}

export default page