
function Stats() {

    const radarData = [
        { label: 'المراوغات', value: 85, angle: 0 },
        { label: 'الهجوم', value: 90, angle: 51.4 },
        { label: 'القوة', value: 75, angle: 102.8 },
        { label: 'الدفاع', value: 70, angle: 154.2 },
        { label: 'التمريرات', value: 80, angle: 205.6 },
        { label: 'التسديدات', value: 88, angle: 257 },
        { label: 'الرؤية', value: 82, angle: 308.4 }
    ];

    const stats = [
        { label: 'التسديدات', value: 92 },
        { label: 'المراوغـــات', value: 85 },
        { label: 'التمريــرات', value: 78 },
        { label: 'القــــوة', value: 88 },
        { label: 'الهجــــوم', value: 90 },
        { label: 'الدفــــاع', value: 70 },
        { label: 'الرؤيـــة', value: 82 }
    ];

    const getRadarPoints = () => {
        const centerX = 80;
        const centerY = 80;
        const maxRadius = 60;

        return radarData.map(point => {
            const radius = (point.value / 100) * maxRadius;
            const angleRad = (point.angle * Math.PI) / 180;
            const x = centerX + radius * Math.cos(angleRad);
            const y = centerY + radius * Math.sin(angleRad);
            return `${x},${y}`;
        }).join(' ');
    };

    const getRadarOutline = () => {
        const centerX = 80;
        const centerY = 80;
        const maxRadius = 60;

        return radarData.map(point => {
            const angleRad = (point.angle * Math.PI) / 180;
            const x = centerX + maxRadius * Math.cos(angleRad);
            const y = centerY + maxRadius * Math.sin(angleRad);
            return `${x},${y}`;
        }).join(' ');
    };


    return (
        // Stats Card
        <div className="rounded-2xl border-2 border-gray-400 text-white bg-[rgba(13,13,13,0.30)] backdrop-blur-[7.5px] p-2 flex flex-col text-right">
            {/* Header with Radar Chart */}
            <div className="flex items-start justify-between mb-3">
                {/* Radar Chart */}
                <div className="relative">
                    <svg width="125" height="125" viewBox="0 0 160 160" className="transform rotate-90 ml-6">

                        {/* Radar outline */}
                        <polygon
                            points={getRadarOutline()}
                            fill="none"
                            stroke="rgba(255,255,255)"
                            strokeWidth="1"
                        />

                        {/* Radar filled area */}
                        <polygon
                            points={getRadarPoints()}
                            fill="#C4C894"
                            stroke="#F5FE00"
                            strokeWidth="2"
                        />
                    </svg>

                    {/* Labels */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 font-medium text-white">المراوغات</div>
                    <div className="absolute top-6 -right-5 translate-x-2 font-medium text-white">الهجوم</div>
                    <div className="absolute top-1/2 -right-3 translate-x-4 -translate-y-1/2 font-medium text-white">الرؤية</div>
                    <div className="absolute bottom-2 -right-6 translate-x-2 font-medium text-white">التسديدات</div>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 translate-y-4 font-medium text-white">التمريرات</div>
                    <div className="absolute bottom-6 left-6 -translate-x-4 font-medium text-white">الدفاع</div>
                    <div className="absolute top-1/2 left-6 -translate-x-6 -translate-y-1/2 font-medium text-white">القوة</div>
                </div>

                {/* Score Circle */}
                <div className="flex flex-col items-center py-[26px] px-2.5">
                    <div className="w-24 h-24 rounded-full border-3 border-[#46A44B] flex items-center justify-center bg-black/35">
                        <span className="text-4xl font-bold text-white">95</span>
                    </div>
                </div>
            </div>

            {/* Stats Bars */}
            <div className="space-y-3 mb-6">
                {stats.map((stat, index) => (
                    <div key={index} className="grid grid-cols-[1fr,max-content] items-center gap-x-2">
                    <div className="h-2 bg-green-950 rounded-full overflow-hidden border border-[#318735]">
                        <div
                            className="h-full bg-gradient-to-l from-green-400 to-green-500 rounded-full transition-all duration-500"
                            style={{ width: `${stat.value}%` }}
                        ></div>
                    </div>

                    <div className="flex justify-end mb-1">
                        <span className="text-white text-sm font-medium">{stat.label}</span>
                    </div>
                </div>
                ))}
            </div>

            {/* Match Statistics */}
            <div className="mb-6">
                <h3 className="text-white text-center font-bold text-lg mb-4">عدد المباريات السابقة</h3>

                <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-green-950/50 rounded-lg p-3 border border-green-700">
                        <div className="text-2xl font-bold text-white mb-1">38</div>
                        <div className="text-sm text-gray-300">مباراة</div>
                    </div>
                    <div className="bg-green-950/50 rounded-lg p-3 border border-green-700">
                        <div className="text-2xl font-bold text-white mb-1">59</div>
                        <div className="text-sm text-gray-300">مراوغة ناجحة</div>
                    </div>
                    <div className="bg-green-950/50 rounded-lg p-3 border border-green-700">
                        <div className="text-2xl font-bold text-white mb-1">146</div>
                        <div className="text-sm text-gray-300">تسديدة</div>
                    </div>
                    <div className="bg-green-950/50 rounded-lg p-3 border border-green-700">
                        <div className="text-2xl font-bold text-white mb-1">219</div>
                        <div className="text-sm text-gray-300">تدخل ناجح</div>
                    </div>
                    <div className="bg-green-950/50 rounded-lg p-3 border border-green-700">
                        <div className="text-2xl font-bold text-white mb-1">321</div>
                        <div className="text-sm text-gray-300">تمريرة</div>
                    </div>
                    <div className="bg-green-950/50 rounded-lg p-3 border border-green-700">
                        <div className="text-2xl font-bold text-white mb-1">15</div>
                        <div className="text-sm text-gray-300">خطأ</div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
                <button className="flex-1 bg-white text-black font-bold py-3 rounded-full hover:bg-gray-100 transition-colors">
                    تحميل
                </button>
                <button className="flex-1 bg-white text-black font-bold py-3 rounded-full hover:bg-gray-100 transition-colors">
                    مقارنة
                </button>
            </div>
        </div>
    )
}

export default Stats