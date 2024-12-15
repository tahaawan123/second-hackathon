import React from 'react'
import Hero from '@/Components/HeroSection/Hero'
import AboutUs from '@/Components/About/page'
import FoodCategory from '../Components/FoodCategory/page'
import WhyChoseUs from '../Components/ChoseUs/page'
import RestaurantDetail from '../Components/Restaurant/page'
import Menu from  '../Components/Menu/page'
import ActiveProcess from '../Components/ActiveProcess/page'
import Client from '../Components/Client/page'
import Chef from '../Components/Chef/page'
import BlogPost from '../Components/BlogPost/page'

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
