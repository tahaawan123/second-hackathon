import React from 'react'
import Hero from '@/Components/HeroSection/Hero'
import AboutUs from '@/app/About/page'
import FoodCategory from './FoodCategory/page'
import WhyChoseUs from './FoodCategory/ChoseUs/page'
import RestaurantDetail from './Restaurant/page'
import Menu from  './Restaurant/Menu/page'
function page() {
  return (
    <div>
      <Hero/>
      <AboutUs/>
      <FoodCategory/>
      <WhyChoseUs/>
      <RestaurantDetail/>
      <Menu/>
    </div>
  )
}

export default page
