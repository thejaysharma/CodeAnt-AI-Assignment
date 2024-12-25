import LOGO from '@assets/logo.svg';
import { DropdownMenu, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import DownArrow from '@assets/Icons/chevron-down.svg?react'
import { bottomMenuItems, menuItems } from '@/constants/sidebarData';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router';

export default function Sidebar() {

    const [selectedMenu, setSelectedMenu] = useState("/");

    const location = useLocation();

    useEffect(() => {
        setSelectedMenu(location.pathname);
    }, [location.pathname]);


    return (
        <div className="h-screen bg-white border-r border-[#E9EAEB] w-64 hidden md:flex flex-col justify-between shrink-0">
            <div className="flex flex-col gap-2 pt-6">
                <div className="flex flex-col gap-4 px-5">
                    <span className='flex gap-3 items-center text-[#181D27] text-2xl not-italic font-normal leading-[110%]'><img src={LOGO} alt="Logo" className='h-8' />CodeAnt AI</span>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild><Button variant="outline" className="px-3 py-2 gap-2 overflow-hidden text-[#181D27] text-ellipsis justify-between">Drop Down <DownArrow /></Button></DropdownMenuTrigger>
                    </DropdownMenu>
                </div>

                <div className='px-4 flex flex-col gap-1'>
                    {menuItems.map((item, index) => (
                        <NavLink to={item.link} onClick={() => setSelectedMenu(item.pathname)} key={index} className="text-[#414651] text-base not-italic font-semibold cursor-pointer px-3 py-2 flex gap-2 border border-white hover:border-[#D5D7DA] rounded-lg" style={
                            selectedMenu === item.link ? {
                                backgroundColor: "#1570EF",
                                border: "2px solid rgba(255, 255, 255, 0.12)",
                                color: "#fff",
                            } : {}
                        }>
                            <item.icon style={selectedMenu === item.link ? { fill: "#fff" } : { fill: "#414651" }} />

                            {item.title}</NavLink>
                    ))}
                </div>
            </div>

            <div className='px-4 pb-6 flex flex-col gap-1'>
                {bottomMenuItems.map((item, index) => (
                    <NavLink to={item.link} onClick={() => setSelectedMenu(item.pathname)} key={index} className="text-[#414651] text-base not-italic font-semibold cursor-pointer px-3 py-2 flex gap-2 border border-white hover:border-[#D5D7DA] rounded-lg" style={
                        selectedMenu === item.link ? {
                            backgroundColor: "#1570EF",
                            border: "2px solid rgba(255, 255, 255, 0.12)",
                            color: "#fff",
                        } : {}
                    }><item.icon style={selectedMenu === item.link ? {
                        fill: "#fff",
                    } : { fill: "#414651" }} />{item.title}</NavLink>
                ))}
            </div>
        </div>
    )
}
