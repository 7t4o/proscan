import React, { useState } from 'react';

const initialNotifications = [
  // ... نفس بياناتك الأولية مع الـ ID
  { "id": 1, "date": "10 يونيو", "update": "تحديث أداء: سامي فقيهي ارتفع الـ Score إلى 82/100." },
  { "id": 2, "date": "6 يونيو", "update": "حمد عريشي سجل هدفين في آخر مباراة." },
  { "id": 3, "date": "1 يونيو", "update": "3 لاعبين جدد ضمن توصيات الأسبوع." },
  { "id": 4, "date": "27 أبريل", "update": "اللاعب خالد حكمي أضاف 3 مساهمات هجومية هذا الأسبوع." },
  { "id": 5, "date": "22 أبريل", "update": "اللاعب خالد حكمي أضاف 3 مساهمات هجومية هذا الأسبوع." },
  { "id": 6, "date": "13 أبريل", "update": "دقة التمريرات للاعب محمد نمازي ارتفعت إلى 92%." },
  { "id": 7, "date": "27 أبريل", "update": "اللاعب خالد حكمي أضاف 3 مساهمات هجومية هذا الأسبوع." },
  { "id": 8, "date": "22 أبريل", "update": "اللاعب خالد حكمي أضاف 3 مساهمات هجومية هذا الأسبوع." },
  { "id": 9, "date": "13 أبريل", "update": "دقة التمريرات للاعب محمد نمازي ارتفعت إلى 92%." }
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
    <div className='min-h-screen max-w-md overflow-hidden mx-auto bg-[#e9edeb] pb-[30px]'>
      <div className='bg-[#3F8743] px-7 py-3 fixed top-0 left-0 right-0'>
        <h2 className='text-white font-bold text-2xl text-right'>الإشـعـارات</h2>
      </div>
      <div className='flex flex-col overflow-y-auto px-2.5 mt-16'>
        {notifs.length > 0 ? (
          notifs.map((notif) => (
            <div
              key={notif.id}
              onClick={() => handleHide(notif.id)}
              className={`
                cursor-pointer text-right bg-white
                transition-all duration-500 ease-in-out        
                overflow-hidden border shadow                  
                ${
                  notif.hiding
                    ? 'max-h-0 opacity-0 p-0 my-0 mb-0' 
                    : 'max-h-[100px] py-3.5 px-4 mb-3' 
                }
              `}
            >
              <div>
                <p className='text-xs text-[#A9A3A3] mb-3.5' dir='auto'>{notif.date}</p>
                <p className='text-[#0A2C0C]' dir='auto'>{notif.update}</p>
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