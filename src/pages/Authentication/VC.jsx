import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Home from '../Home'


function VerifyCode({openVerify, setopenVerify ,className =""}) {
  const [otp, setOtp] = useState(Array(4).fill(""));
  const [loading, setLoading] = useState(false)

  const handleOtpComplete = (code) => {
    console.log("OTP:", code);
    alert("رمز OTP هو: " + code);
  };

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return; 
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // move to the next input
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }

    // when entering the full OTP code
    if (newOtp.every((val) => val !== "")) {
      handleOtpComplete(newOtp.join(""));
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)

  }
  return (
    <div className={`bg-[#EBFFF6] h-screen w-full flex justify-center items-center text-right flex-col overflow-hidden pb-24 z-10 absolute top-0 transition-all duration-300 ${className}`}>
      <button onClick={() => setopenVerify(!openVerify)} className='absolute top-16 left-8'>
        <MdOutlineKeyboardArrowLeft className='text-black text-[32px]'/>
      </button>

      <div>
        <h2 className='text-[22px] font-bold mb-3.5'>رمز التحقق</h2>
        <p className='text-[rgb(0,0,0,0.70)] font-medium'>تم إرسال رمز التحقق إلى بريدك الإلكتروني</p>
      </div>

      <div className='flex gap-2 mt-12 mb-10'>
        {otp.map((digit, i) => (
          <input
            key={i}
            id={`otp-${i}`}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e.target.value, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            className='w-[60px] h-[60px] text-2xl font-bold text-center outline-none text-[#757575] rounded-[20px] border-[1.6px] border-[#757575] focus:border-[#2E7D32]'
          />
        ))}
      </div>

      <p className='text-xs mb-9'>لم تستلم الرمز ؟<a className='text-[#2E7D32]'>إعادة إرسال</a></p>

      <Link to="/Layout" onClick={handleClick} disabled={loading} className='text-[22px] font-bold text-white py-4 px-[108px] bg-[#2E7D32] rounded-[16px] transition-all duration-100 active:scale-95'>
        {loading ? (
          "Loading"
        ):
        "تـحـقـق"
        }
      </Link>
    </div>
  )
}

export default VerifyCode