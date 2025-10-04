import React, {useState} from 'react'
import { HiLink } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import { AiOutlineCheck } from "react-icons/ai";
import PlayerInfo from "./PlayerInfo"

function Coach() {
    const [openTap, setOpenTap] = useState(false);

    return (
        <div className='overflow-hidden relative'>
            <div className=" bg-[#EBFFF6] pb-[35px]">
                <div className="max-w-md mx-auto min-h-[812px]">
                    {/* Header Section */}
                    <div className="pt-16 pb-[42px] text-center relative">
                        <img src="/proscan/Profile/background.svg" alt="" className="z-1 absolute object-cover top-0 left-0 right-0 w-full" />
                        <div className="relative z-10">
                            <img
                                src="/proscan/Profile/Mohammed.svg"
                                alt="Profile"
                                className="w-28 h-28 z-20 rounded-full mx-auto mb-4 object-cover"
                            />
                            <h1 className="text-xl font-bold mb-1">كابتن محمد سهلي</h1>
                            <p className='font-medium'>المدرب الرئيسي</p>
                        </div>
                    </div>

                    <div className='px-9 flex flex-col gap-[18px]'>
                        <div className='text-right px-5 py-1.5 bg-white shadow-md rounded-xl' dir='auto'>
                            <p className='font-semibold text-[15px]'>الرخصة التدريبية: <span className='font-light text-[#555]'>A</span></p>
                            <p className='font-semibold text-[15px]'>تاريخ آخر تحديث: <span className='font-light text-[#555]'>10/04/2025</span></p>
                            <p className='font-semibold text-[15px]'>عدد المباريات: <span className='font-light text-[#555]'>25</span></p>
                            <p className='font-semibold text-[15px]'>النتائج: <span className='font-light text-[#555]'>15 فوز – 5 تعادل – 5 خسارة</span></p>
                        </div>

                        <div className='flex gap-2.5 justify-center'>
                            <div className='flex-1 rounded-xl p-2.5 bg-white text-right shadow-md'>
                                <h4 className='flex gap-1 text-sm flex-row-reverse items-start font-semibold'>
                                    <IoIosPeople className='text-2xl'/>الفرق السابقه
                                </h4>
                                <p className='text-[8px] font-light text-[#555] mt-1.5 mx-5' dir='auto'>• فريق صبيا – 2020 <br/> • فريق جازان – 2021</p>
                            </div>
                            <div className='flex-1 rounded-xl p-2.5 bg-white text-right shadow-md'>
                                <h4 className='flex gap-1 text-sm flex-row-reverse items-start font-semibold'>
                                    <IoIosPeople className='text-2xl'/>الفرق السابقه
                                </h4>
                                <p className='text-[8px] font-light text-[#555] mt-1.5 mx-5' dir='auto'>• فريق صبيا – 2020 <br/> • فريق جازان – 2021</p>
                            </div>
                        </div>

                        <div className='text-center bg-white rounded-xl shadow-md p-3'>
                            <input type="file" name="attachment" id="file-upload" className='hidden'/>

                            <label for="file-upload" className='flex flex-col gap-3 mb-5 cursor-pointer'>
                                <h4 className='font-semibold'>المرفقات</h4>
                                <p className='font-light text-[#555] flex justify-center items-start'>
                                    رفع الملف<HiLink className='text-black text-2xl'/>
                                </p>
                            </label>
                        </div>

                        <button className='flex bg-[#0A2C0C] text-white text-xs shadow-md font-semibold p-4 rounded-xl justify-center'
                            onClick={() => alert("تم حفظ الملف بنجاح")}>
                            <AiOutlineCheck className='text-xl mx-1'/>تم حفظ الملف بنجاح
                        </button>

                        <div className='flex justify-between'>
                            <button className='w-20 py-3 text-center rounded-[5px] shadow-md text-xs font-bold bg-white'
                                onClick={() => alert("تم حفظ الملف بنجاح")}
                            >حفظ</button>
                            <button className='w-20 py-3 text-center rounded-[5px] shadow-md text-xs font-bold bg-[#D9F8FF]'
                                for="file-upload"
                            >إرفاق ملف</button>
                            <button className='w-20 py-3 text-center rounded-[5px] shadow-md text-xs font-bold bg-[#0A2C0C] text-white'
                                onClick={() => setOpenTap(true)}
                            >تعديل البيانات</button>
                        </div>
                    </div>
                </div>
            </div>
            <PlayerInfo 
                className={`${openTap ? "left-0": "left-full"}`}
                setOpenTap={setOpenTap}
            />
        </div>
    );
}
export default Coach