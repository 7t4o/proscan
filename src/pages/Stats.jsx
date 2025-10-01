
function Stats() {

    // Player data
    const playerData = {
        name: 'فيصل مدخلي',
        club: 'نادي الصافية',
        photo: '/api/placeholder/100/100',
        tags: ['أم عريك', 'رأى الملعب', 'وسط دفاعي'],
        metrics: ['سيدوري', '175 cm', '16 سنة'],
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
        <div className="min-h-screen bg-gradient-to-b from-green-800 to-green-950 text-white p-4 font-['Tajawal']" dir="rtl">
            

            {/* Stats Card */}
            <div className="bg-green-700/30 backdrop-blur rounded-3xl p-6 mb-20">
                {/* Radar Chart Area */}
                <div className="mb-6">
                    <h2 className="text-center text-sm text-gray-300 mb-4">المهارات</h2>
                    <div className="relative w-48 h-48 mx-auto mb-4">
                        {/* Rating Circle */}
                        <div className="absolute top-0 right-0 w-20 h-20 rounded-full border-4 border-green-500 flex items-center justify-center bg-green-900/50">
                            <span className="text-3xl font-bold">{playerData.rating}</span>
                        </div>

                        {/* Pentagon radar placeholder */}
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                            {/* Background pentagons */}
                            <polygon points="100,20 180,80 160,170 40,170 20,80" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                            <polygon points="100,50 160,90 145,155 55,155 40,90" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

                            {/* Data polygon */}
                            <polygon points="100,35 165,85 150,160 50,160 35,85" fill="rgba(74,222,128,0.3)" stroke="rgb(74,222,128)" strokeWidth="2" />

                            {/* Center lines */}
                            <line x1="100" y1="100" x2="100" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                            <line x1="100" y1="100" x2="180" y2="80" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                            <line x1="100" y1="100" x2="160" y2="170" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                            <line x1="100" y1="100" x2="40" y2="170" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                            <line x1="100" y1="100" x2="20" y2="80" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                        </svg>

                        {/* Labels */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-xs">القوة</div>
                        <div className="absolute top-16 right-0 text-xs">الهجوم</div>
                        <div className="absolute bottom-8 right-4 text-xs">الرؤية</div>
                        <div className="absolute bottom-8 left-4 text-xs">التمريرات</div>
                        <div className="absolute top-16 left-0 text-xs">التسديدات</div>
                    </div>
                </div>

                {/* Skill Bars */}
                <div className="space-y-3 mb-6">
                    {[
                        { label: 'التسديدات', value: 85 },
                        { label: 'المراوغات', value: 78 },
                        { label: 'التمريرات', value: 92 },
                        { label: 'السرعة', value: 88 },
                        { label: 'الهجـــوم', value: 75 },
                        { label: 'الدفــــاع', value: 82 },
                        { label: 'الرؤيــــة', value: 90 }
                    ].map((skill, i) => (
                        <div key={i}>
                            <div className="flex justify-between mb-1 text-sm">
                                <span>{skill.label}</span>
                            </div>
                            <div className="h-2 bg-green-900/50 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-500"
                                    style={{ width: `${skill.value}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Detailed Stats */}
                <div className="border-t border-green-700 pt-4">
                    <h3 className="text-center font-bold mb-4">عدد المباريات السابقة</h3>
                    <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                            <div className="text-2xl font-bold">{playerData.detailedStats.matches}</div>
                            <div className="text-sm text-gray-300">مباراة</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold">{playerData.detailedStats.goals}</div>
                            <div className="text-sm text-gray-300">مراوغة ناجحة</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold">{playerData.detailedStats.assists}</div>
                            <div className="text-sm text-gray-300">تسديدة</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold">{playerData.detailedStats.passes}</div>
                            <div className="text-sm text-gray-300">تدخل ناجح</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold">{playerData.detailedStats.shots}</div>
                            <div className="text-sm text-gray-300">خطأ</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold">{playerData.detailedStats.saves}</div>
                            <div className="text-sm text-gray-300">تمريرة</div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                    <button className="flex-1 bg-white text-green-900 py-3 rounded-xl font-bold">
                        تحميل
                    </button>
                    <button className="flex-1 bg-green-800/50 py-3 rounded-xl font-bold">
                        مقارنة
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Stats