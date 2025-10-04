import React from 'react'
import { MdOutlineSportsHandball } from "react-icons/md";
import { GrTasks } from "react-icons/gr";
import { IoDocumentText } from "react-icons/io5";
import { IoFitness } from "react-icons/io5";

function Note() {
  return (
    <div className='bg-[#EBFFF6] min-h-[812px]'>

        <div className='flex gap-3.5 overflow-x-auto px-6 pt-6 mb-[30px] scrollbar-hide flex-row-reverse'>
            <button className='rounded-lg border border-[#4FA652] bg-[#4D4D4D] text-white min-w-[90px] text-center font-semibold py-2 flex justify-center items-center gap-1 cursor-pointer hover:scale-95 transition-all duration-200 '>
                <MdOutlineSportsHandball />
                لاعب
            </button>
            <button className='rounded-lg border border-[#4FA652] bg-[#CEDACE] min-w-[90px] text-center font-semibold py-2 flex justify-center items-center gap-1 cursor-pointer hover:scale-95 transition-all duration-200 text-[#141414]'>
                <GrTasks />
                إحصائية
            </button>
            <button className='rounded-lg border border-[#4FA652] bg-[#CEDACE] min-w-[90px] text-center font-semibold py-2 flex justify-center items-center gap-1 cursor-pointer hover:scale-95 transition-all duration-200 text-[#141414]'>
                <IoDocumentText />
                عــامــة
            </button>
            <button className='rounded-lg border border-[#4FA652] bg-[#CEDACE] min-w-[90px] text-center font-semibold py-2 flex justify-center items-center gap-1 cursor-pointer hover:scale-95 transition-all duration-200 text-[#141414]'>
                <IoFitness />
                تدريب
            </button>
        </div>

        <div className='pt-[30px] px-6 mb-16'>
            <textarea name="" id="" placeholder='...اكتب ملاحظتك هنا' dir='auto'
                className='rounded-xl border border-black/30 font-semibold bg-white shadow-2xl shadow-black/25 text-right w-full min-h-[325px] py-6 px-3.5'
            ></textarea>
        </div>

        <div className='flex flex-col gap-4 max-w-[290px] mx-auto'>
            <button className='text-xl text-white py-[18px] font-semibold text-center bg-[#2E7D32] rounded-2xl'>
                حفظ الملاحظة
            </button>
            <button className='text-xl border-2 border-[#2E7D32] py-[18px] font-semibold text-center rounded-2xl'>
                إلغاء
            </button>
        </div>
    </div>
  )
}

export default Note