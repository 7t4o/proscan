import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";

function League() {
    const baseUrl = import.meta.env.BASE_URL ?? '/';

  return (
    <div className='bg-[#EBFFF6] min-h-[812px] pt-6 px-6'>
        <h1 className='text-right text-[#28712C] text-[32px] font-bold' dir='auto'>
            كأس ProScan
        </h1>

        <div className='bg-white p-3 flex flex-col justify-end rounded-xl shadow-md shadow-black/25 mt-[18px]'>
            <h2 className='text-right font-bold '>اللاعبون المشاركون</h2>

            <div className='py-3 px-2 flex flex-col gap-4 mt-3'>
                <div className='w-full flex flex-row-reverse items-center gap-1'>
                    <img src={`${baseUrl}Players/Ahmed.jpg`} alt="" className='w-[50px] h-[50px] bg-gray-300 rounded-full'/>
                    <p className='font-semibold'>عادل زكري</p>
                </div>
                <div className='w-full flex flex-row-reverse justify-between items-center'>
                    <div className='flex flex-row-reverse items-center gap-1'>
                        <img src={`${baseUrl}Players/Faisl.jpg`} alt="" className='w-[50px] h-[50px] bg-gray-300 rounded-full'/>
                        <p className='font-semibold'>سامي فقيهي</p>
                    </div>
                    <button className='rounded-md border-2 border-[#28712C] h-7 px-2 font-semibold text-center text-sm'>طلب تذكرة</button>
                </div>
            </div>
        </div>

        <div className='bg-white p-3 flex flex-col justify-end rounded-xl shadow-md shadow-black/25 mt-[18px]'>
            <h2 className='text-right font-bold '>الفيديو التحليلي</h2>

            <iframe className='w-full rounded-sm my-[22px]' src="https://www.youtube.com/embed/uGLKewvAeM8?si=sVI0WsmYyghXQE3d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <ul className='text-[#28712C] text-right font-semibold text-sm list-disc list-inside mb-7' dir='rtl'>
                <li> حركة اللاعب</li>
                <li> تمريرة عرضية من الجهة اليمنى</li>
            </ul>
        </div>

        <button className='flex justify-center py-4 rounded-[10px] bg-[#28712C33] border border-[#28712C] shadow-md shadow-black/25 w-full text-xl font-bold items-center gap-1.5 mt-[22px]'>
            <FaCircleCheck className='text-3xl text-[#28712C]'/>
            أداء استثنائي
        </button>
    </div>
  )
}

export default League