import React from 'react'
import Image from 'next/image'






function RestaurantDetail() {
  return (
    <div className='w-[1920px] h-[469px] bg-[#0D0D0DD9] text-white '>
       <div className='w-[1319px] h-[247px]  ml-[299px] pt-[100px] flex space-x-24'>
          {/* icons */}
          <div className='w-[230px] h-[247px]'>
             <Image src={"/Restaurant/Group.svg"} alt='juice' width={120} height={120} className='ml-8'/>
             <p className='font-bold text-[24px] '>Professional Chefs</p>
             <p className='font-bold text-[40px] ml-11'>420</p>
          </div>

       {/* 2nd icon */}

      
         
          <div className='w-[170px] h-[247px]'>
             <Image src={"/Restaurant/Juice.svg"} alt='group' width={120} height={120} className='ml-8'/>
             <p className='font-bold text-[24px] '>Items Of Food</p>
             <p className='font-bold text-[40px] ml-11'>320</p>
          </div>
    


       {/* 3rd icon */}


      
          {/* icons */}
          <div className='w-[270px] h-[247px]'>
             <Image src={"/Restaurant/spoon.svg"} alt='group' width={120} height={120} className='ml-8'/>
             <p className='font-bold text-[24px] '>Years Of Experienced</p>
             <p className='font-bold text-[40px] ml-11'>30+</p>
          </div>
   



     
          <div className='w-[230px] h-[247px]'>
             <Image src={"/Restaurant/pizza.svg"} alt='group' width={120} height={120} className='ml-8'/>
             <p className='font-bold text-[24px] '>Happy Customers</p>
             <p className='font-bold text-[40px] ml-11'>220</p>
          </div>
     

    </div>
    </div>

  )
}

export default RestaurantDetail
