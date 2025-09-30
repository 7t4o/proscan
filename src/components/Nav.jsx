import React, { useState } from 'react'
import { FiHome } from "react-icons/fi";
import { GiBabyfootPlayers } from "react-icons/gi";
import { FaRegBell } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";

function Nav() {
    const location = useLocation(); 
    const [active, setActive] = useState(location.pathname);

    const navItems = [
        { to: "/home", icon: <FiHome className="w-8 h-8" />, label: "الرئيسية" },
        { to: "/players", icon: <GiBabyfootPlayers className="w-8 h-8" />, label: "اللاعبين" },
        { to: "/notifs", icon: <FaRegBell className="w-8 h-8" />, label: "التنبيهات" },
        { to: "/profile", icon: <CiUser className="w-8 h-8" />, label: "الحساب" },
    ];

    return (
        <div className="bg-[#242624] border-t border-neutral-800 fixed bottom-0 left-0 right-0">
            <div className="flex justify-around items-center py-6 px-4">
                {navItems.map((item) => (
                    <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setActive(item.to)}
                        className={`flex items-center gap-1 px-5 py-0.5 rounded-xl transition-all duration-300 ease-in-out
                        ${active === item.to
                            ? "bg-black shadow-md shadow-[#ffffff25] scale-105"
                            : " hover:scale-110"
                        }`}
                    >
                        <div className={`text-white transition-transform duration-300 ${
                            active === item.to ? "scale-100" : "scale-100 hover:scale-110"
                        }`}>
                            {item.icon}
                        </div>
                        <span className={`text-xs text-white font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out
                            ${active === item.to 
                                ? "max-w-[100px] opacity-100" 
                                : "max-w-0 opacity-0"
                            }`}>
                            {item.label}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Nav