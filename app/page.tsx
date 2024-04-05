"use client"
import Image from 'next/image'
import Link from 'next/link'
import CarouselCard from './components/CarouselCard'
import { BiTrophy } from "react-icons/bi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import React,{ useState } from 'react';
import Countdown from 'react-countdown';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";


enum STATUS {
  LIVE = "LIVE",
  LATER = "Later",
  EXPIRED = "Expired",
  NEXT = "Next",

}
var userAmount = 228.5332;

const DUMMYDATA = [
  {
    status: STATUS.EXPIRED,
    id: 218484,
    lockedPrice: 228.9473,
    prizePool: 8.5143,
    currentPrice:228.9473,
    changeInPrice:0.1066
  },
  {
    status: STATUS.EXPIRED,
    id: 218485,
    lockedPrice: 228.9473,
    prizePool: 8.5143,
    currentPrice:228.9473,
    changeInPrice:0.5791

  },
  {
    status: STATUS.LIVE,
    id: 218486,
    lockedPrice: 228.9473,
    prizePool: 8.5143,
    currentPrice:228.5332,
    changeInPrice:0.4141

  },
  {
    status: STATUS.NEXT,
    id: 218487,
    lockedPrice: 228.9473,
    prizePool: 8.5143,
    currentPrice:228.9473
    
  },
  {
    status: STATUS.LATER,
    id: 218488,
    lockedPrice: 228.9473,
    prizePool: 8.5143
  },



]
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};




export default function Home() {
const [counter, setCounter] = useState(5)

  return (
    <main className="min-h-[100vh] bg-violet-200 ">
      <nav className='w-full min-h-[15vh] flex items-center px-20 justify-between '>
        <Link href={"/"} ><div className='max-w-[340px] relative '>
          <div className='absolute -top-2 -left-6 '>
          <Image src={"/images/logo.png"} alt='logo' width={72} height={72}/>

          </div>
          <div className='w-full rounded-full py-3 pl-8 pr-3  bg-white shadow-md'>
            <p className='font-extrabold text-xl text-blue-950 flex items-center'>BNBUSD <span className='ml-2 text-sm'>${userAmount}</span></p>
          </div>
        </div></Link>

        <Link href={"/"} ><div className='max-w-[210px]'>

          <div className='w-full rounded-full p-3 flex bg-white items-center shadow-md'>
            <button className='btn btn-circle bg-white border-none hover:bg-gray-200 '>
              <FaArrowLeft className='text-teal-500' fontSize={28} />
            </button>
            <Image  src={"/images/carousel1.png"} alt='carousel' width={64} height={64  }/>
            <button className='btn btn-circle bg-white border-none hover:bg-gray-200 '>
              <FaArrowRight className='text-teal-500' fontSize={28} />
            </button>
          </div>
        </div></Link>

        <div className='flex justify-between  max-w-[480px]  items-center  space-x-2 w-full'>

        <div className='w-full flex  rounded-full p-3 relative  bg-white shadow-md'>
            <p className='font-extrabold text-xl text-violet-600  flex items-center'>  00:39  <span className='ml-2  text-violet-950 text-sm'>5m</span>
            </p>
<div className='absolute -top-4 -right-8'>
<Image src={"/images/clock.png"} alt='clock' width={136} height={136}/>

</div>
          </div>
          <button className="btn  shadow-sm shadow-purple-500 btn-lg btn-square hover:bg-purple-800 border-none text-white rounded-2xl bg-purple-900 00">
            <IoMdHelpCircleOutline fontSize={28} />
          </button>
          <button className="btn  shadow-sm shadow-purple-500 btn-lg btn-square hover:bg-purple-800 border-none text-white rounded-2xl bg-purple-900 00">
            <BiTrophy fontSize={24} />
          </button>
          <button className="btn shadow-sm shadow-purple-500 btn-lg  btn-square hover:bg-gray-400 border-none text-white rounded-2xl bg-gray-200 00">
            <FaHistory fontSize={24} />
          </button>
          
        </div>
      </nav>
     
      <div className='w-full  mt-6 h-full  '>
      <Carousel infinite   autoPlay={true} responsive={responsive} itemClass="px-4">
      {DUMMYDATA.map((e, index) => <CarouselCard key={e.id} params={e} />
        )}
      </Carousel>
      </div>
    </main>

  )
}
