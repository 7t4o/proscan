import { CiSearch } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import Logo from '/Logo/Logo-White.svg'
import Hero from '/Home/Hero.jpg'
import { useState } from 'react';

export default function ProScanApp() {
  const [liked, setLiked] = useState([false, false]);
  const [menuOpen, setMenuOpen] = useState(false);

  const players = [
    { name: 'أحمد حكمي', team: 'الاتحد جدة', image: '/Players/Ahmed.jpg' },
    { name: 'أحمد حكمي', team: 'الاتحد جدة', image: '/Players/Ahmed.jpg' },
    { name: 'أحمد حكمي', team: 'قدامى (٢٠٢٤)', image: '/Players/Ahmed.jpg' }
  ];

  const menuItems = [
    { label: 'اللاعبين', img: '/SideBar/side1.png' },
    { label: 'الكشافين', img: '/SideBar/side2.png' },
    { label: 'المدربين', img: '/SideBar/side3.png' },
    { label: 'تواصل معنا', img: '/SideBar/side4.png' },
  ];

  return (
    <div className="min-h-screen bg-[#EBFFF6] flex justify-center">
      {/* Mobile Container */}
      <div className="w-full max-w-sm bg-white flex flex-col relative overflow-hidden">
        
        {/* Status Bar */}
        <div className="bg-[#318735] px-5 relative z-20">
          {/* Header Navigation */}
          <div className="flex items-center justify-between py-2">
            <button>
              <CiSearch className="w-7 h-7 text-white" />
            </button>
            <div className="flex items-center gap-1.5">
              <img src={Logo} alt="" />
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
                  <img src={Logo} alt="" />
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
                <button
                  key={idx}
                  className="w-full flex items-center flex-row-reverse gap-4 px-6 py-4 hover:bg-gray-50 transition-colors text-right"
                  onClick={() => setMenuOpen(false)}
                >
                  <img src={item.img} className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-800 font-medium">{item.label}</span>
                </button>
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
              src={Hero}
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
          <div className="bg-white pt-5 pb-8">
            {/* CTA Button */}
            <div className="px-6">
              <button className="w-full bg-[#318735] text-white py-3.5 rounded-lg font-bold text-base mb-6 shadow-sm">
                استعرض اللاعبين
              </button>

              {/* Info Section */}
              <div className="mb-8 text-right">
                <h2 className="text-xl font-bold px-2" dir="auto">لماذا Pro Scan</h2>
                <p className="text-[#555555] text-sm">
                  منصة ذكية تساعد Pro Scan الكشافين والمدربين على
                  اكتشاف المواهب المحلية ومتابعة أداء اللاعبين بسهولة
                </p>
              </div>
            </div>
            

            {/* Featured Players */}
            <h3 className="text-right mr-6 font-bold mb-5">اللاعبون المميزون هذا الأسبوع</h3>
            
            <div className="flex gap-3.5 overflow-x-auto px-2.5">
              {players.map((player, idx) => (
                <div key={idx} className="min-w-[144px] flex-shrink-0 bg-white rounded-xl border border-gray-200 relative shadow-sm">
                  <div className="p-3 pb-0">
                    <button 
                      onClick={() => {
                        const newLiked = [...liked];
                        newLiked[idx] = !newLiked[idx];
                        setLiked(newLiked);
                      }}
                      className="absolute top-2 left-2 z-10 bg-white rounded-full p-1.5 "
                    >
                      <FaHeart 
                        className={`w-4 h-4 ${liked[idx] ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                      />
                    </button>
                    <div className="">
                      <img 
                        src={player.image}
                        alt={player.name}
                        className="w-full max-w-[144px] h-28 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="rounded-t-[12px] bg-[#E7F5EC] p-2">
                    <h4 className="font-bold text-xs text-center mb-0.5">{player.name}</h4>
                    <p className="text-[10px] text-gray-500 font-bold text-center">{player.team}</p>
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