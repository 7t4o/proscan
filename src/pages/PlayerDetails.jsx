import React, { useState } from 'react';
// import { Play, ChevronLeft, User, Activity, FileText, Settings } from 'lucide-react';
import { FaPlay } from "react-icons/fa";
import Overview from './Overview';
import Stats from './Stats';

const PlayerProfileApp = () => {
    const [activeTab, setActiveTab] = useState('overview');

    return (    
        <div className="max-w-md mx-auto relative pb-[90px] bg-[linear-gradient(171deg,#2E7D32_42.06%,#000_83.43%)] p-[18px]">
            {/* Tabs */}
            <div className="flex gap-2 mb-6 bg-[#123214BF] max-w-[275px] mx-auto rounded-lg p-[1px] text-[#FFFFFF80]">
                <button
                    onClick={() => setActiveTab('stats')}
                    className={`flex-1 py-[7px] rounded-lg font-bold ${activeTab === 'stats' ? 'bg-[#D9D9D959] text-white' : ''}`}
                >
                    الإحصائيات
                </button>
                <button
                    onClick={() => setActiveTab('overview')}
                    className={`flex-1 py-[7px] rounded-lg font-bold ${activeTab === 'overview' ? 'bg-[#D9D9D959] text-white' : ''}`}
                >
                    نظرة عامة
                </button>
            </div>
            <h1 className='absolute text-[#60bf66] font-medium text-[350px] top-1/2 left-1/2 -translate-1/2'>5</h1>

            {activeTab === 'overview' ? <Overview /> : <Stats />}
        </div>
    );
};

export default PlayerProfileApp;