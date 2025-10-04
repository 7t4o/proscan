import { CiSearch } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { LuClock3 } from "react-icons/lu";

export default function ProScanApp() {
  const baseUrl = import.meta.env.BASE_URL ?? '/';
  const [liked, setLiked] = useState([false, false]);
  const [menuOpen, setMenuOpen] = useState(false);

  const players = [
    { name: 'أحمد حكمي', team: 'الاتحد جدة', image: `${baseUrl}Players/Ahmed.jpg` },
    { name: 'أحمد حكمي', team: 'الاتحد جدة', image: `${baseUrl}Players/Ahmed.jpg` },
    { name: 'أحمد حكمي', team: 'قدامى (٢٠٢٤)', image: `${baseUrl}Players/Ahmed.jpg` }
  ];

  const clubs = [
    { club1: 'الجزيرة', img1: `${baseUrl}Clubs/5.png`, club2: 'النمور', img2: `${baseUrl}Clubs/4.png` },
    { club1: 'الشعلة', img1: `${baseUrl}Clubs/3.png`, club2: 'الصقور', img2: `${baseUrl}Clubs/2.png` },
    { club1: 'شباب الوطن', img1: `${baseUrl}Clubs/1.png`, club2: 'النمور', img2: `${baseUrl}Clubs/4.png` }
  ];

  const menuItems = [
    { label: 'اللاعبين', img: `${baseUrl}SideBar/side1.png`, to:"/playerHome"},
    { label: 'المدربين', img: `${baseUrl}SideBar/side3.png`, to:"/coach"},
    { label: 'الكشافين', img: `${baseUrl}SideBar/side2.png`, to:"/home"},
  ];

  return (
    <div className="min-h-[812px] bg-[#E9EDEB] flex justify-center">
      {/* Mobile Container */}
      <div className="w-full max-w-sm flex flex-col relative overflow-hidden">
        
        {/* Header Navigation */}
        <div className="bg-[#318735] px-5 relative z-20">
          <div className="flex items-center justify-between py-2">
            <button>
              <CiSearch className="w-7 h-7 text-white" />
            </button>
            <div className="flex items-center gap-1.5">
              <img src={`${baseUrl}Logo/Logo-White.svg`} alt="" />
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <IoIosMenu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Sidebar Menu */}
        <div 
          className={`fixed inset-0 bg-[rgb(0,0,0,0.5)] z-30 transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setMenuOpen(false)}
        >
          <div 
            className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ${
              menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sidebar Header */}
            <div className="bg-[#318735] px-5 py-6">
              <div className="flex items-center justify-between mb-3 flex-row-reverse">
                <div className="flex items-center gap-2">
                  <img src={`${baseUrl}Logo/Logo-White.svg`} alt="" />
                </div>
                <button onClick={() => setMenuOpen(false)}>
                  <AiOutlineClose className="w-6 h-6 text-white" />
                </button>
              </div>
              
              {/* User Profile */}
              <div className="flex items-center gap-3 flex-row-reverse">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                  <CiUser className="w-8 h-8 text-[#318735]" />
                </div>
                <div className="text-right">
                  <h3 className="text-white font-bold text-base">مرحباً بك</h3>
                  <p className="text-green-100 text-sm" dir="auto">مستخدم Pro Scan</p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <nav className="py-4">
              {menuItems.map((item, idx) => (
                <Link
                  to={item.to}
                  key={idx}
                  className="w-full flex items-center flex-row-reverse gap-4 px-6 py-4 hover:bg-gray-50 transition-colors text-right"
                  onClick={() => setMenuOpen(false)}
                >
                  <img src={item.img} className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-800 font-medium">{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Sidebar Footer */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 p-6">
              <button className="w-full bg-[#318735] text-white py-3 rounded-lg font-bold hover:bg-green-700 transition">
                تسجيل الخروج
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Hero Section */}
          <div className="relative h-44">
            <img 
              src={`${baseUrl}Home/Hero.jpg`}
              alt="Stadium"
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center px-8">
              <h1 className="text-white text-lg font-bold text-center leading-snug">
                "اكتشف أفضل المواهب<br />المحلية لتطوير فريقك!"
              </h1>
            </div>
          </div>

          {/* White Content Card */}
          <div className="bg-[#E9EDEB] pt-4 pb-8">
            {/* CTA Button */}
            <div className="px-6 mb-4">
              <Link to="/league" className="w-full inline-block bg-[#318735] text-[#E9EDEB] py-3.5 rounded-lg font-semibold text-base text-center shadow-sm" dir="auto">
                اعرض دوري Pro Scan للنخبة
              </Link>
            </div>
            

            {/* Featured Players */}
            <h3 className="text-right mr-6 font-bold mb-5">اللاعبون المميزون هذا الأسبوع</h3>
            <div className="flex gap-3.5 overflow-x-auto scrollbar-hide px-2.5 py-1">
              {players.map((player, idx) => (
                <div key={idx} className="min-w-[144px] flex-shrink-0 rounded-md border border-gray-200 relative shadow-md shadow-black/25">
                  <div className="p-3 pb-0">
                    <button 
                      onClick={() => {
                        const newLiked = [...liked];
                        newLiked[idx] = !newLiked[idx];
                        setLiked(newLiked);
                      }}
                      className="absolute top-2 left-0 z-10 rounded-full p-1.5 "
                    >
                      <FaHeart 
                        className={`w-4 h-4 ${liked[idx] ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                      />
                    </button>
                    <div className="w-20 rounded-sm mx-auto">
                      <img 
                        src={player.image}
                        alt={player.name}
                        className="w-full max-w-[144px] h-[84px] object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="p-2">
                    <h4 className="font-bold text-xs text-center mb-0.5">{player.name}</h4>
                    <p className="text-[9px] text-gray-500 font-bold text-center">{player.team}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Matches */}
            <h3 className="text-right mr-6 font-bold mb-1.5 mt-[18px]">مـباريات هـذا الإسبوع</h3>
            <div className="flex gap-3.5 overflow-x-auto scrollbar-hide px-2.5 py-1">
              {clubs.map((player, idx) => (
                <div key={idx} className="min-w-[144px] flex-shrink-0 rounded-lg bg-white border border-gray-200 relative shadow-md shadow-black/25">
                  <div className="flex items-center">
                    <div className="">
                      <img src={player.img1} alt="" className="h-[60px] w-[60px] object-cover"/>
                      <h4 className="text-[10px] font-bold text-center">{player.club1}</h4>
                    </div>
                    <p className="font-bold">َضد</p>
                    <div className="">
                      <img src={player.img2} alt="" className="h-[60px] w-[60px] object-cover"/>
                      <h4 className="text-[10px] font-bold text-center">{player.club2}</h4>
                    </div>
                  </div>
                  <div className="p-2 mt-2.5 bg-[#E9EDEB]">
                    <p className="flex text-[8px] font-light items-center justify-between">
                      <p className="flex items-center">
                        <CiCalendar className="text-sm"/>2025/12/08 
                      </p>
                      <p className="flex items-center">
                        <LuClock3 className="text-sm"/> م9:30 
                      </p>
                      <p className="flex items-center">
                        <CiLocationOn className="text-sm"/>صبيا
                      </p>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        
      </div>
    </div>
  );
}