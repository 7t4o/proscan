import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import VerifyCode from './VC';

function Login() {
    const container = useRef(null);
    const [openVerify, setopenVerify] = useState(false)

    useGSAP(() => {
        gsap.set(".logo-img", { xPercent: -50, yPercent: -50 });

        const tl = gsap.timeline();

        tl.from(".logo-img", { 
            scale: 0.1, 
            duration: 1, 
            delay: 0.5,
            ease: "power2.out"
        });

        tl.to(".logo-img", { 
            y: -200,
            scale: 0.6, 
            duration: 1,
            ease: "power2.inOut"
        });
        
        tl.from(".form-element", {
            opacity: 0,
            y: -20,
            duration: 0.5,
            stagger: 0.2,
            ease: "power2.out"
        }, "-=0.5");

    }, { scope: container });

    return (
        <div className='relative'>
        <div ref={container} className='bg-[#EBFFF6] h-screen flex justify-end items-center flex-col relative overflow-hidden pb-24'>
            
            <img src="./Logo/Logo.svg" className='logo-img object-cover w-[260px] absolute top-1/2 left-1/2'/>

            <div className='flex flex-col items-center'>
                <h2 className="form-element text-2xl font-bold mb-[55px]">
                    تـسجيل الدخـول
                </h2>

                <div className="relative w-80 form-element mb-8">
                    <label 
                        htmlFor="email" 
                        className="absolute -top-3 right-6 bg-[#EBFFF6] font-bold px-2 text-black peer-focus:text-green-600 transition-all duration-200"
                    >
                        البريد الإلكتروني
                    </label>
                    <input 
                        id="email" 
                        type="email"
                        placeholder='proscan@gmail.com'
                        className="peer w-full p-4 px-7 border-[3px] border-[rgba(0,0,0,0.87)] rounded-full bg-transparent text-lg outline-none font-semibold focus:border-green-500"
                    />
                </div>

                <div className="relative w-80 form-element mb-[85px]">
                    <label 
                        htmlFor="mobile" 
                        className="absolute -top-3 right-6 bg-[#EBFFF6] font-bold px-2 text-black peer-focus:text-green-600 transition-all duration-200"
                    >
                        رقم الهاتف
                    </label>
                    <input 
                        id="mobile" 
                        type="number"
                        placeholder='+966 50 555 4444'
                        className="peer w-full p-4 px-7 border-[3px] border-[rgba(0,0,0,0.87)] rounded-full bg-transparent text-lg outline-none font-semibold focus:border-green-500"
                    />
                </div>
                
                <button 
                onClick={() => setopenVerify(!openVerify)}
                className="form-element bg-[#2E7D32] text-white rounded-2xl py-5 px-[75px] text-2xl font-bold leading-[21px] hover:bg-green-600">
                    تسجيل الدخول
                </button>
            </div>
        </div>
        <VerifyCode 
            className={`${openVerify ? "left-0": "left-full"}`}
            openVerify={openVerify}
            setopenVerify={setopenVerify}
        />
        </div>
    );
}

export default Login;