"use client"
import React, { useEffect } from 'react'
import classNames from "classnames"
import { FaRegCirclePlay } from "react-icons/fa6";
import { MdBlockFlipped } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";
type Props = {
    params: {
        status: STATUS,
        id: number,
        lockedPrice: number,
        prizePool: number,
        currentPrice?: number,
        changeInPrice?: number
    }
}


enum STATUS {
    LIVE = "LIVE",
    LATER = "Later",
    EXPIRED = "Expired",
    NEXT = "Next",

}




const CarouselCard = ({ params }: Props) => {
    const progress = 80


    return (
        <div className='rounded-2xl bg-white 
          border-violet-600 w-full min-w-[380px] max-w-[380px]  '>
            <div className={`${classNames({
                "bg-violet-600": params.status === STATUS.NEXT,
                "bg-gray-200": params.status !== STATUS.NEXT,
                "bg-white": params.status === STATUS.LIVE,
                "text-zinc-500": params.status === STATUS.EXPIRED,
                "text-violet-600": params.status === STATUS.LIVE,
                "text-violet-900": params.status === STATUS.LATER,


            })}  flex items-center justify-between  px-6 py-3 rounded-t-2xl`}>
                <p className={`${classNames({
                    "font-bold": params.status === STATUS.LIVE,
                    "font-medium": params.status !== STATUS.LIVE
                })} text-xl font-bold flex items-center  `}>
                    {params.status === STATUS.LIVE && <FaRegCirclePlay />}
                    {params.status === STATUS.NEXT && <FaRegCirclePlay />}
                    {params.status === STATUS.EXPIRED && <MdBlockFlipped />}
                    {params.status === STATUS.LATER && <MdOutlineWatchLater />}




                    <span className='ml-2'> {params.status}</span></p>
                <p className=''>#{params.id}</p>

            </div>
            {params.status === STATUS.LIVE && <div className="progress-bar-container bg-gray-200 w-full h-1">
                <div className="progress-bar bg-violet-600 h-1" style={{ width: `${progress}%`, backgroundColor: "#7c3aed" }}>
                </div>
            </div>}

            <div className=' px-6 py-3 w-full min-h-[420px] flex justify-center items-center relative'>
                <div className='absolute  bottom-28 w-full max-w-[140px] z-0 bg-gray-200 mask   mask-half-1 mask-hexagon-2 rotate-90 h-[400px] '>

                </div>
                {/* expired card  */}
                {params.status !== STATUS.NEXT && STATUS.LATER && <div className='border-pink-500 border-2 p-4  z-10 bg-white rounded-2xl text-zinc-400 max-w-[400] w-full'>
                    <p className='font-bold text-sm'>{params.status === STATUS.EXPIRED && "CLOSED PRICE"}</p>
                    <p className='font-bold text-sm'>{params.status === STATUS.LIVE && "LAST PRICE"}</p>

                    <div className='flex justify-between w-full my-4'>
                        <p className='font-bold text-xl text-pink-500 '>${params?.currentPrice}</p>
                        <div className='bg-pink-500 text-white font-semibold rounded-md p-1 flex items-center space-x-2'><FaArrowDown /> $-{params?.changeInPrice}</div>
                    </div>
                    <div className='w-full text-zinc-800'>
                        <div className='w-full text-sm flex justify-between mb-2'>
                            <p>Locked Price:</p>
                            <p>{params.lockedPrice}</p>

                        </div>
                        <div className='w-full flex justify-between font-semibold text-base'>
                            <p>Prize Pool:</p>
                            <p>{params.prizePool} BNB</p>

                        </div>
                    </div>

                </div>}

                {/* //next card  */}
                {params.status === STATUS.NEXT && <div className=' bg-gradient-to-b  from-teal-500 to-blue-600 p-[2px] z-10 bg-white rounded-2xl text-zinc-400 max-w-[400] w-full'>
                    <div className='bg-white rounded-2xl p-4'>


                        <div className='w-full text-zinc-800 flex flex-col'>

                            <div className='w-full flex justify-between mb-4 font-semibold text-xl'>
                                <p>Prize Pool:</p>
                                <p>{params.prizePool} BNB</p>

                            </div>
                            <button className='btn hover:bg-teal-600 font-bold text-xl bg-teal-500 border-none text-white mb-2 shadow-sm shadow-gray-700'>Enter UP</button>
                            <button className='btn hover:bg-pink-600 font-bold text-xl bg-pink-500 border-none text-white shadow-sm shadow-gray-700 '>Enter DOWN</button>

                        </div>
                    </div>

                </div>}
                {/* //later card  */}




                <div className='absolute  top-28 w-full max-w-[140px] z-0 bg-pink-500 mask   mask-half-1 mask-hexagon-2 -rotate-90 h-[400px] '>


                </div>
            </div>
        </div>
    )
}



export default CarouselCard