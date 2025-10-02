import React from 'react';
import { FaStar } from 'react-icons/fa';

// البيانات يمكن أن تأتي من API أو props
const playersData = {
    player1: {
        name: "أحمد حكمي",
        position: "لاعب وسط",
        image: "https://i.postimg.cc/k47g21f7/hakami.png", // رابط صورة اللاعب الأول
        rating: 5,
        stats: {
            shooting: 80,
            passing: 90,
            dribbling: 75,
            speed: 65,
            attack: 70,
            vision: 85,
            strength: 60,
            defense: 50,
        },
    },
    player2: {
        name: "موسى حدادي",
        position: "لاعب دفاع",
        image: "https://i.postimg.cc/50t0Vb2N/hadadi.png", // رابط صورة اللاعب الثاني
        rating: 4,
        stats: {
            shooting: 60,
            passing: 70,
            dribbling: 40,
            speed: 75,
            attack: 35,
            vision: 65,
            strength: 80,
            defense: 95,
        },
    },
};

const statsOrder = [
    { key: 'shooting', label: 'التسديدات' },
    { key: 'passing', label: 'التمريرات' },
    { key: 'dribbling', label: 'المراوغات' },
    { key: 'speed', label: 'السرعة' },
    { key: 'attack', label: 'الهجوم' },
    { key: 'vision', label: 'الرؤية' },
    { key: 'strength', label: 'القوة' },
    { key: 'defense', label: 'الدفاع' },
];

// Component فرعي لشريط المهارات لعدم تكرار الكود
const StatBar = ({ value, direction = 'ltr' }) => (
    <div dir={direction} className="w-40 bg-gray-600 rounded-full h-3.5 overflow-hidden">
        <div
            className="bg-green-500 h-full rounded-full"
            style={{ width: `${value}%` }}
        />
    </div>
);

// Component فرعي لتقييم النجوم
const StarRating = ({ rating }) => (
    <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
            <FaStar
                key={index}
                className={index < rating ? 'text-yellow-400' : 'text-gray-600'}
            />
        ))}
    </div>
);


// Component الرئيسي
function PlayerComparisonCard() {
    const { player1, player2 } = playersData;

    return (
        <div className="bg-zinc-900 text-white font-sans max-w-lg mx-auto rounded-3xl p-6 border border-gray-700/50 shadow-2xl shadow-black/30">
            {/* قسم معلومات اللاعبين */}
            <header className="flex justify-between items-center mb-8">
                <div className="text-right flex flex-col items-end">
                    <div className="w-20 h-20 rounded-full ring-4 ring-green-500 mb-2 overflow-hidden">
                        <img src={player1.image} alt={player1.name} className="w-full h-full object-cover" />
                    </div>
                    <h2 className="text-xl font-bold">{player1.name}</h2>
                    <p className="text-gray-400 text-sm">{player1.position}</p>
                </div>

                <div className="text-left flex flex-col items-start">
                    <div className="w-20 h-20 rounded-full ring-4 ring-green-500 mb-2 overflow-hidden">
                        <img src={player2.image} alt={player2.name} className="w-full h-full object-cover" />
                    </div>
                    <h2 className="text-xl font-bold">{player2.name}</h2>
                    <p className="text-gray-400 text-sm">{player2.position}</p>
                </div>
            </header>

            {/* قسم مقارنة المهارات */}
            <main className="flex flex-col gap-4">
                {statsOrder.map(({ key, label }) => (
                    <div key={key} className="flex justify-between items-center">
                        <StatBar value={player1.stats[key]} direction="rtl" />
                        <span className="text-sm font-semibold text-gray-300 w-24 text-center">{label}</span>
                        <StatBar value={player2.stats[key]} direction="ltr" />
                    </div>
                ))}
            </main>

            {/* قسم التقييم النهائي */}
            <footer className="flex justify-between items-center mt-8">
                <StarRating rating={player1.rating} />
                <StarRating rating={player2.rating} />
            </footer>
        </div>
    );
}

export default PlayerComparisonCard;