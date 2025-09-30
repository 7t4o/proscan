import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { HiOutlineMapPin } from "react-icons/hi2";
import { FaRegCalendar } from "react-icons/fa";
import { IoFootballOutline } from "react-icons/io5";
import data from '../data/playersOverView.json'


export default function PlayersPage() {
  const [players] = useState(data);

  const getRatingColorClass = (color) => {
    if (color === 'green') return 'border-[#46A44B]';
    if (color === 'yellow') return 'border-yellow-400';
    if (color === 'red') return 'border-red-500';
    return 'border-gray-400';
  };

  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto pb-20 pt-2" dir="rtl">
      {/* Header */}
      <div className="bg-gray-100 px-5 pt-4 pb-5">
        {/* Search Bar */}
        <div className="relative mb-3.5 mx-auto max-w-[280px] border-2 border-black rounded-xl bg-white py-2 px-3 flex items-center justify-between">
          <input
            type="text"
            placeholder="ابحث عن لاعبك هنا"
            className="  text-xs text-right bg-white"
          />
          <CiSearch className="w-4 h-4 text-black" />
        </div>

        {/* Add Player Button */}
        <div className="flex justify-start">
          <button className="bg-green-800 hover:bg-green-900 text-white rounded-lg py-1 px-2 flex items-center text-xs font-semibold">
            التصفية حسب
            <CiFilter className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Players Grid */}
      <div className="px-5 pb-4 grid grid-cols-2 gap-11">
        {players.map((player) => (
          <div key={player.id} className="bg-white rounded-md shadow-sm overflow-hidden">
            {/* Player Card Content */}
            <div className="p-1 pb-5 grid grid-cols-[auto_58px]  auto-rows-2 gap-y-5">
              {/* Player Details */}
              <div className="flex-1 text-right min-w-0">
                <h3 className="font-semibold text-sm mb-0.5 truncate">{player.name}</h3>
                <p className="text-[10px] text-gray-500 mb-[18px]">{player.position}</p>
                <div className="flex items-center gap-1 text-[8px] text-gray-400">
                  <IoFootballOutline className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate">{player.team}</span>
                </div>
              </div>

              {/* Player Image */}
              <img
                src={player.image}
                alt={player.name}
                className="w-full rounded-lg object-cover flex-shrink-0"
              />
              
              {/* Rating Circle */}
              <div className={`w-11 h-11 rounded-full border-[3px] ${getRatingColorClass(player.ratingColor)} flex items-center justify-center font-bold text-base text-black`}>
                {player.rating}
              </div>

              {/* Player Name and info */}
              <div>
                <div className="flex items-center gap-1.5 text-[8px] font-semibold mb-3.5">
                  <HiOutlineMapPin className="w-3.5 h-3.5" />
                  <span>{player.location}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[8px] font-semibold">
                  <FaRegCalendar className="w-3.5 h-3.5" />
                  <span>{player.age}</span>
                </div>
              </div>
            </div>

            {/* View Details Button */}
            <button className="w-full bg-[#0A2C0C] hover:bg-green-950 text-white pt-2.5 pb-2 text-xs font-semibold transition-colors">
              عرض التفاصيل
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}