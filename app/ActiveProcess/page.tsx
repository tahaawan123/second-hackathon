import React from 'react'
import Image from 'next/image'



import { Great_Vibes } from "next/font/google";
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});





const ActiveProcess = () => {
  return (
    <div >

         <div className='w-[1920px] relative'>
             <Image src={"/ActiveProcessImg/ActiveProcess.svg"} alt='Image' width={1918} height={558}/>
             <div className='text-white absolute top-[20%] right-[10%] w-[705px] text-right '>
            <p className={`${greatVibes.className} text-[32px] text-primary leading-10`}>Restaurant Active Process</p>
            <p className='font-bold text-5xl leading-[56px]'>
                <span className='text-primary'>We</span>Document Every Food
            Bean Process untile it is saved
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, 
            </p>

            <div className='flex gap-4  mt-9'>
                <button className='font-bold w-[190px] h-[60px] rounded-[30px] border border-primary'>Read More</button>
                {/* icon */}
                
                     <Image src={"/Play.svg"} alt='icon' width={80} height={60}/>
                
                <p className='font-bold mt-6'>
                Play Video
                </p>
            </div>
         </div>
         </div>
        
    </div>
  )
}

export default ActiveProcess;
