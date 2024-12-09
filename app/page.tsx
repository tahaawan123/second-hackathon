import React from 'react'
import Hero from '@/Components/HeroSection/Hero'
import AboutUs from '@/app/About/page'
import FoodCategory from './FoodCategory/page'
import WhyChoseUs from './FoodCategory/ChoseUs/page'
import RestaurantDetail from './Restaurant/page'
import Menu from  './Restaurant/Menu/page'
import ActiveProcess from './ActiveProcess/page'
import Client from './Client/page'
import Chef from './Chef/page'
import BlogPost from './BlogPost/page'

function page() {
  return (
    <div>
      <Hero/>
      <AboutUs/>
      <FoodCategory/>
      <WhyChoseUs/>
      <RestaurantDetail/>
      <Menu/>
      <Chef/>
      <Client/>
      <ActiveProcess/>
      <BlogPost/>
    </div>
  )
}

export default page
