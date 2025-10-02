import React, { useState } from 'react';

const initialNotifications = [
  // ... نفس بياناتك الأولية مع الـ ID
  { "id": 1, "date": "10 يونيو", "update": "تحديث أداء: سامي فقيهي ارتفع الـ Score إلى 82/100." },
  { "id": 2, "date": "6 يونيو", "update": "حمد عريشي سجل هدفين في آخر مباراة." },
  { "id": 3, "date": "1 يونيو", "update": "3 لاعبين جدد ضمن توصيات الأسبوع." },
  { "id": 4, "date": "27 أبريل", "update": "اللاعب خالد حكمي أضاف 3 مساهمات هجومية هذا الأسبوع." },
  { "id": 5, "date": "22 أبريل", "update": "اللاعب خالد حكمي أضاف 3 مساهمات هجومية هذا الأسبوع." },
  { "id": 6, "date": "13 أبريل", "update": "دقة التمريرات للاعب محمد نمازي ارتفعت إلى 92%." }
];

function Notifications() {
  const [notifs, setNotifs] = useState(initialNotifications.map(n => ({ ...n, hiding: false })));

  const handleHide = (id) => {
    setNotifs(currentNotifs =>
      currentNotifs.map(notif =>
        notif.id === id ? { ...notif, hiding: true } : notif
      )
    );

    setTimeout(() => {
      setNotifs(currentNotifs => currentNotifs.filter(notif => notif.id !== id));
    }, 500);
  };

  return (
    <div className='min-h-screen max-w-md overflow-hidden mx-auto bg-[#e9edeb] px-2 pt-[76px] pb-[30px]'>
      <div className='flex flex-col'>
        {notifs.length > 0 ? (
          notifs.map((notif) => (
            <div
              key={notif.id}
              onClick={() => handleHide(notif.id)}
              className={`
                cursor-pointer bg-[#363636] rounded-2xl text-right 
                transition-all duration-500 ease-in-out        
                overflow-hidden                          
                ${
                  notif.hiding
                    ? 'max-h-0 opacity-0 p-0 my-0 mb-0' 
                    : 'max-h-[85px] h-[85px] py-1.5 px-3 mb-4' 
                }
              `}
            >
              <div>
                <p className='text-xs text-white/70 mb-3.5' dir='auto'>{notif.date}</p>
                <p className='text-white' dir='auto'>{notif.update}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 mt-20 p-4 bg-white/50 rounded-lg">
            <p>لا توجد إشعارات حالياً</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Notifications;