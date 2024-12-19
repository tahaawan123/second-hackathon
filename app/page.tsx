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
import Header from "@/components/Header/Header";


function page() {
  return (
    <div>
      <Header/>
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
