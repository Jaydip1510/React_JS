import React from 'react'
import '../css/bootstrap.min.css'
import '../css/tiny-slider.css'
import '../css/style.css'
import ProductSession from './ProductSession'
import WhyChoose from './WhyChoose'
import WeHelpYou from './WeHelpYou'
import PopularProduct from './PopularProduct'
import Testimonials from './Testimonials'
import ResentBox from './RecentBox'
import Footer from './Footer'
import HeroSecssion from './HeroSecssion'
import Heder from './Heder'

export default function NavBar() {
     return (
          <div>
               <Heder/>
               <HeroSecssion/>
               <ProductSession/>
               <WhyChoose/>
               <WeHelpYou/>
               <PopularProduct/>
               <Testimonials/>
               <ResentBox/>
               <Footer/>
          </div>
     )
}
