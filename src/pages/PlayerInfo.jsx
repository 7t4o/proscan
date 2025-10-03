import { useState } from 'react';
import { MdCloudUpload } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function PlayerInfo({setOpenTap, className=""}) {
    const [formData, setFormData] = useState({
        playerName: '',
        birthDate: '',
        height: '',
        weight: '',
        position: '',
        goals: '',
        matchCount: '',
        minutes: '',
        yellowCards: '',
        redCards: ''
    });

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        alert('تم حفظ البيانات بنجاح');
    };

    const handleCancel = () => {
        console.log('Form cancelled');
        alert('تم الإلغاء');
    };

    return (
        <div className={`bg-[#EBFFF6] min-h-screen px-2.5 py-5 absolute top-0 ${className} z-30 transition-all duration-300 `}>
            <div className="bg-white rounded-4xl overflow-hidden pt-[30px] pb-[52px] pr-6 pl-8" dir="rtl">
                {/* Header */}
                <div className="bg-white flex relative mb-4">
                    <h1 className="text-xl font-semibold text-[#28712C]">
                        إضافة/تعديل بيانات اللاعب
                    </h1>
                    <button className="absolute -left-8 -top-2" onClick={() => setOpenTap(false)}>
                        <MdKeyboardArrowLeft className="text-5xl text-gray-300" />
                    </button>
                </div>

                {/* Form Content */}
                <div className="space-y-[30px]">
                    {/* Basic Information Section */}
                    <div>
                        <h2 className="text-lg font-semibold text-[#0A2C0C] mb-4">
                            المعلومات الأساسية
                        </h2>
                        <div className="space-y-1.5">
                            <input
                                type="text"
                                placeholder="أدخل اسم اللاعب"
                                value={formData.playerName}
                                onChange={(e) => handleInputChange('playerName', e.target.value)}
                                className="w-full p-2.5 bg-white text-lg border border-gray-200 rounded-lg text-right placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />

                            <div className="grid grid-cols-2 gap-1">
                                <input
                                    type="text"
                                    placeholder="تاريخ الميلاد"
                                    value={formData.birthDate}
                                    onChange={(e) => handleInputChange('birthDate', e.target.value)}
                                    className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-right placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                <input
                                    type="text"
                                    placeholder="الطول (سم)"
                                    value={formData.height}
                                    onChange={(e) => handleInputChange('height', e.target.value)}
                                    className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-right placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-1">
                                <input
                                    type="text"
                                    placeholder="الوزن (كجم)"
                                    value={formData.weight}
                                    onChange={(e) => handleInputChange('weight', e.target.value)}
                                    className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-right placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                <div className="relative">
                                    <select
                                        value={formData.position}
                                        onChange={(e) => handleInputChange('position', e.target.value)}
                                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-right text-gray-400 appearance-none focus:outline-none focus:ring-2 focus:ring-green-500"
                                    >
                                        <option value="">المركز</option>
                                        <option value="forward">مهاجم</option>
                                        <option value="midfielder">وسط</option>
                                        <option value="defender">مدافع</option>
                                        <option value="goalkeeper">حارس مرمى</option>
                                    </select>
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Performance Data Section */}
                    <div>
                        <h2 className="text-lg font-semibold text-[#0A2C0C] mb-4">
                            بيانات الأداء
                        </h2>
                        <div className="grid grid-cols-2 gap-1">
                            <input
                                type="text"
                                placeholder="عدد المباريات"
                                value={formData.matchCount}
                                onChange={(e) => handleInputChange('matchCount', e.target.value)}
                                className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-right placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <input
                                type="text"
                                placeholder="الأهداف"
                                value={formData.goals}
                                onChange={(e) => handleInputChange('goals', e.target.value)}
                                className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-right placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <input
                                type="text"
                                placeholder="التمريرات الحاسمة"
                                value={formData.yellowCards}
                                onChange={(e) => handleInputChange('yellowCards', e.target.value)}
                                className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-right placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <input
                                type="text"
                                placeholder="دقائق لعب اللاعب"
                                value={formData.minutes}
                                onChange={(e) => handleInputChange('minutes', e.target.value)}
                                className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-right placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                    </div>

                    {/* Discipline Section */}
                    <div>
                        <h2 className="text-lg font-semibold text-[#0A2C0C] mb-4">
                            الانضباط
                        </h2>
                        <div className="grid grid-cols-2 gap-1">
                            <input
                                type="text"
                                placeholder="بطاقة صفراء"
                                value={formData.yellowCards}
                                onChange={(e) => handleInputChange('yellowCards', e.target.value)}
                                className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-right placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <input
                                type="text"
                                placeholder="بطاقة حمراء"
                                value={formData.redCards}
                                onChange={(e) => handleInputChange('redCards', e.target.value)}
                                className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-right placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                    </div>

                    {/* Media Upload Section */}
                    <div>
                        <h2 className="text-lg font-semibold text-[#0A2C0C] mb-4">
                            رفع الوسائط
                        </h2>
                        <div className="grid grid-cols-2 gap-1">
                            <button className="px-1.5 py-2.5 bg-white border border-gray-200 rounded-lg flex items-center justify-between text-gray-400 hover:bg-gray-50 transition-colors">
                                <span className="text-[13px]">رفع فيديو ملخص</span>
                                <MdCloudUpload className="w-5 h-5" />
                            </button>
                            <button className="px-1.5 py-2.5 bg-white border border-gray-200 rounded-lg flex items-center justify-between text-gray-400 hover:bg-gray-50 transition-colors">
                                <span className="text-[13px]">رفع صورة شخصية</span>
                                <MdCloudUpload className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center gap-2 mt-14">
                    <button
                        onClick={handleSubmit}
                        className="w-[170px] text-center py-4 bg-[#0A2C0C] rounded-xl text-white font-bold hover:bg-green-900 transition-colors"
                    >
                        حفظ البيانات
                    </button>
                    <button
                        onClick={handleCancel}
                        className="w-[110px] text-center py-4 bg-white border-2 border-[#A6A2A2] rounded-xl text-gray-700 font-bold hover:bg-gray-50 transition-colors"
                    >
                        إلغاء
                    </button>
                </div>
            </div>
        </div>
    );
}