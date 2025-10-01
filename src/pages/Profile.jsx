import { FaHeart } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-200" dir="rtl">
      <div className="max-w-md mx-auto bg-gray-200 min-h-screen">
        {/* Header Section */}
        <div className="bg-white pt-8 pb-6 text-center">
          <img 
            src="https://via.placeholder.com/120" 
            alt="Profile" 
            className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
          />
          <h1 className="text-2xl font-bold text-gray-900 mb-1">أحمد عبدالله</h1>
          <p className="text-gray-600 text-base">كشاف - نادي الجزيرة</p>
        </div>

        {/* Following Players Section */}
        <div className="px-4 py-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 text-right">
            اللاعبون الذي نتابعهم
          </h2>
          
          <div className="flex gap-3 overflow-x-auto pb-2">
            {/* Player Card 1 */}
            <div className="flex-shrink-0 w-40">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative">
                  <img 
                    src="https://via.placeholder.com/160x180" 
                    alt="Player" 
                    className="w-full h-44 object-cover"
                  />
                  <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <FaHeart className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
                <div className="bg-green-900 text-white py-3 px-2 text-center">
                  <p className="font-bold text-sm mb-0.5">أحمد حكمي</p>
                  <p className="text-xs opacity-90">الاتحاد والجماة</p>
                </div>
              </div>
            </div>

            {/* Player Card 2 - With Red Heart */}
            <div className="flex-shrink-0 w-40">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative">
                  <img 
                    src="https://via.placeholder.com/160x180" 
                    alt="Player" 
                    className="w-full h-44 object-cover bg-gray-100"
                  />
                  <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <FaHeart className="w-5 h-5 text-red-600 fill-red-600" />
                  </button>
                </div>
                <div className="bg-green-900 text-white py-3 px-2 text-center">
                  <p className="font-bold text-sm mb-0.5">أحمد حكمي</p>
                  <p className="text-xs opacity-90">النصر مثلان</p>
                </div>
              </div>
            </div>

            {/* Player Card 3 */}
            <div className="flex-shrink-0 w-40">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative">
                  <img 
                    src="https://via.placeholder.com/160x180" 
                    alt="Player" 
                    className="w-full h-44 object-cover bg-gray-100"
                  />
                  <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <FaHeart className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
                <div className="bg-green-900 text-white py-3 px-2 text-center">
                  <p className="font-bold text-sm mb-0.5">يحيا شهري</p>
                  <p className="text-xs opacity-90">المنتخب</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Matches Section */}
        <div className="px-4 py-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 text-right">
            الرحلات القادمة
          </h2>
          
          <div className="flex gap-3 overflow-x-auto pb-2">
            {/* Match Card 1 */}
            <div className="flex-shrink-0 w-32">
              <div className="bg-gray-400 rounded-lg p-4 text-center text-white h-32 flex flex-col justify-center">
                <p className="text-sm mb-2">مباراة استكشاف</p>
                <p className="text-xs mb-2">جازان</p>
                <p className="text-xs opacity-90">10 مايو 2025</p>
              </div>
            </div>

            {/* Match Card 2 */}
            <div className="flex-shrink-0 w-32">
              <div className="bg-gray-400 rounded-lg p-4 text-center text-white h-32 flex flex-col justify-center">
                <p className="text-sm mb-2">تجربة مواهب</p>
                <p className="text-xs mb-2">صبيا</p>
                <p className="text-xs opacity-90">12 مايو 2025</p>
              </div>
            </div>

            {/* Match Card 3 */}
            <div className="flex-shrink-0 w-32">
              <div className="bg-gray-400 rounded-lg p-4 text-center text-white h-32 flex flex-col justify-center">
                <p className="text-sm mb-2">مباراة استكشاف</p>
                <p className="text-xs mb-2">أبو عريش</p>
                <p className="text-xs opacity-90">15 مايو 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}