import React from 'react'
import Hero from '@/components/HeroSection/Hero'
import AboutUs from '@/components/About/About'
import FoodCategory from '../components/FoodCategory/Food'
import WhyChoseUs from '../components/ChoseUs/Chose'
import RestaurantDetail from '../components/Restaurant/Restaurant'
import Menu from  '../components/Menu/Menu'
import ActiveProcess from '../components/ActiveProcess/Active'
import Client from '../components/Client/Client'
import Cheif from '../components/Chef/Chef'
import Blog from '../components/BlogPost/Blog'

function page() {
  return (
    <div>
      <Hero/>
      <AboutUs/>
      <FoodCategory/>
      <WhyChoseUs/>
      <RestaurantDetail/>
      <Menu/>
      <Cheif/>
      <Client/>
      <ActiveProcess/>
      <Blog/>
    </div>
  )
}

export default page
