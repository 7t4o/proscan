import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function Profile() {
    const [liked, setLiked] = useState([false, false]);
  
  const players = [
    {
      "img":'/proscan/Players/Ahmed.jpg',
      "name": 'أحمد حكمي',
      "position" : 'لاعب وسط'
    },
    {
      "img":'/proscan/Players/Ahmed.jpg',
      "name": 'أحمد حكمي',
      "position" : 'لاعب وسط'
    },
    {
      "img":'/proscan/Players/Ahmed.jpg',
      "name": 'أحمد حكمي',
      "position" : 'لاعب وسط'
    },
  ]

  return (
    <div className="min-h-screen bg-[#E9EDEB] pb-[85px]">
      <div className="max-w-md mx-auto min-h-screen">
        {/* Header Section */}
        <div className=" pt-8 pb-6 text-center">
          <img 
            src="/proscan/Profile/Ahmed.svg" 
            alt="Profile" 
            className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
          />
          <h1 className="text-2xl font-bold text-gray-900 mb-1">أحمد عبدالله</h1>
          <p className="text-gray-600 text-base">كشاف - نادي الجزيرة</p>
        </div>

        {/* Following Players Section */}
        <div className="px-4 py-6">
          <h2 className="text-xl font-bold text-gray-900 mb-8 text-right">
            اللاعبون الذي تتابعهم
          </h2>
          
          <div className="flex gap-3.5 overflow-x-auto scrollbar-hide pb-2">
            {players.map((player, idx) => (
              <div className="flex-shrink-0 w-40">
                <div className="bg-white rounded-t-[5px] overflow-hidden shadow-sm pt-1.5">
                  <div className="relative">
                    <img 
                      src={player.img}
                      alt="Player" 
                      className="w-20 h-[83px] object-cover mx-auto"
                    />
                    <button 
                      onClick={() => {
                        const newLiked = [...liked];
                        newLiked[idx] = !newLiked[idx];
                        setLiked(newLiked);
                      }}
                      className="absolute top-0 left-[11px] w-[17px] h-[17px] rounded-full flex items-center justify-center">
                      <FaHeart 
                        className={`w-5 h-5 ${liked[idx] ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                        />
                    </button>
                  </div>
                  <div className="bg-[#0A2C0C] rounded-t-xl text-white py-3 px-2 text-center">
                    <p className="font-bold text-xs mb-0.5">{player.name}</p>
                    <p className="font-bold text-[8px] opacity-50">{player.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Matches Section */}
        <div className="px-4 py-1">
          <h2 className="text-xl font-bold text-gray-900 mb-4 text-right">
            الرحلات القادمة
          </h2>
          
          <div className="flex gap-5 overflow-x-auto pb-2 scrollbar-hide text-right">
            {/* Match Card 1 */}
            <div className="flex-shrink-0 w-[115px]">
              <div className="bg-black/30 rounded-lg py-2 px-3 text-white flex flex-col justify-center">
                <p className="text-xs mb-3 font-bold">مباراة استكشاف</p>
                <p className="text-xs mb-3 font-bold">جازان</p>
                <p className="text-[8px] opacity-50 font-bold">10 مايو 2025</p>
              </div>
            </div>

            {/* Match Card 2 */}
            <div className="flex-shrink-0 w-32">
              <div className="bg-black/30 rounded-lg py-2 px-3 text-white flex flex-col justify-center">
                <p className="text-xs mb-3 font-bold">تجربة مواهب</p>
                <p className="text-xs mb-3 font-bold">صبيا</p>
                <p className="text-[8px] opacity-50 font-bold">12 مايو 2025</p>
              </div>
            </div>

            {/* Match Card 3 */}
            <div className="flex-shrink-0 w-32">
              <div className="bg-black/30 rounded-lg py-2 px-3 text-white flex flex-col justify-center">
                <p className="text-xs mb-3 font-bold">مباراة استكشاف</p>
                <p className="text-xs mb-3 font-bold">أبو عريش</p>
                <p className="text-[8px] opacity-50 font-bold">15 مايو 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}