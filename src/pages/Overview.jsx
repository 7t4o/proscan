import { FaPlay } from "react-icons/fa";


function Overview() {

    // Player data
    const playerData = {
        name: 'فيصل مدخلي',
        club: 'نادي العاصفة',
        photo: '/proscan/Players/Faisl.jpg',
        tags: ['أبو عريش', 'نادي العاصفة', 'وسط دفاعي'],
        metrics: ['سعودي', '175 cm', '16 سنة'],
        rating: 95,
        radarStats: {
            القوة: 85,
            الهجوم: 78,
            الرؤية: 82,
            التمريرات: 88,
            التسديدات: 75
        },
        lastMatch: {
            home: { team: 'ضد الخليج', goals: 0, minutes: 74, date: '2025 يناير 15' },
            away: { team: 'ضد الوحدة', goals: 1, minutes: 90, date: '2025 يناير 13' }
        },
        seasonStats: {
            matches: 11,
            playTime: 742,
            yellowCards: 7,
            redCards: 1
        },
        detailedStats: {
            matches: 38,
            goals: 59,
            assists: 146,
            passes: 219,
            shots: 15,
            saves: 321
        }
    };
    
    return (
        <div className="">
            {/* Profile Card */}
            <div className="rounded-2xl border-2 border-gray-400 text-white bg-[rgba(217,217,217,0.10)] backdrop-blur-[7.5px] p-2 flex flex-col text-right">
                <div className="flex items-start justify-between gap-1">
                    <div className="w-[110px] h-[130px] rounded-lg overflow-hidden border border-white/50 shadow-xl shadow-black/25">
                        <img src={playerData.photo} alt="" className="w-full h-full" />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold mb-2">{playerData.name}</h1>
                        <p className="font-bold text-white/65 mb-3">{playerData.club}</p>
                        <div className="grid grid-cols-3 grid-rows-2 gap-2 mb-2">
                            {playerData.tags.map((tag, i) => (
                                <span key={i} className="bg-[#0B2B0D80] px-[6px] text-center py-1 rounded-lg border-[0.5px] border-white/45 text-[8px]">{tag}</span>
                            ))}
                            {playerData.metrics.map((metric, i) => (
                                <span key={i} className="bg-[#0B2B0D80] px-[6px] text-center py-1 rounded-lg border-[0.5px] border-white/45 text-[8px]" dir="auto">{metric}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Latest Matches */}
                <div className="mt-4">
                    <h2 className="text-xl font-bold mb-4 pr-1">آخر المباريات</h2>
                    <div className="grid grid-cols-2 gap-14">
                        <div className="bg-[#0000004D] rounded-lg px-1 py-2">
                            <div className="text-sm font-bold mb-[18px]">{playerData.lastMatch.home.team}</div>
                            <div className="flex justify-between">
                                <div className="text-sm font-bold">{playerData.lastMatch.home.goals} هدف</div>
                                <div className="text-sm font-bold">{playerData.lastMatch.home.minutes} دقيقة</div>
                            </div>
                            <div className="text-xs text-gray-400 mt-1.5">{playerData.lastMatch.home.date}</div>
                        </div>
                        <div className="bg-[#0000004D] rounded-lg px-1 py-2">
                            <div className="text-sm font-bold mb-[18px]">{playerData.lastMatch.away.team}</div>
                            <div className="flex justify-between">
                                <div className="text-sm font-bold">{playerData.lastMatch.away.goals} هدف</div>
                                <div className="text-sm font-bold">{playerData.lastMatch.away.minutes} دقيقة</div>
                            </div>
                            <div className="text-xs text-gray-400 mt-1.5">{playerData.lastMatch.away.date}</div>
                        </div>
                    </div>
                </div>

                {/* Season Stats */}
                <div className="mt-4">
                    <h2 className="text-xl font-bold mb-4 pr-1">إحصائيات الموسم</h2>
                    <div className="grid grid-cols-2 gap-4 bg-[#0000004D] rounded-lg py-2.5 px-1.5">
                        <div className="flex justify-center gap-4">
                            <div className="text-[15px] font-bold">{playerData.seasonStats.yellowCards}</div>
                            <div className="text-[15px] text-gray-300">البطاقات الصفراء</div>
                        </div>
                        <div className="flex justify-center gap-4">
                            <div className="text-[15px] font-bold">{playerData.seasonStats.matches}</div>
                            <div className="text-[15px] text-gray-300">عدد المباريات</div>
                        </div>
                        <div className="flex justify-center gap-4">
                            <div className="text-[15px] font-bold">{playerData.seasonStats.redCards}</div>
                            <div className="text-[15px] text-gray-300">البطاقات الحمراء</div>
                        </div>
                        <div className="flex justify-center gap-4">
                            <div className="text-[15px] font-bold">{playerData.seasonStats.playTime}</div>
                            <div className="text-[15px] text-gray-300">دقائق اللعب</div>
                        </div>
                    </div>
                </div>

                {/* Video Section */}
                <div className="mt-4">
                    <h2 className="text-xl font-bold mb-2">مشاهدة الفيديو</h2>
                    <div className="flex mb-4">
                        <div className="w-[160px] h-[90px] border border-white relative rounded-sm">
                            <img src={playerData.photo} className="w-full h-full " alt="" />
                            <div className=" p-3 bg-[#00000080] rounded-full absolute top-1/2 left-1/2 -translate-1/2">
                                <FaPlay className="text-white text-2xl "/>
                            </div>
                        </div>
                    </div>
                    <button className="bg-white rounded-lg px-3 py-1.5 text-black font-bold">دعوة للتجربة</button>
                </div>
            </div>
        </div>
    )
}
export default Overview