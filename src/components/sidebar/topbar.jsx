import LOGO from '@assets/logo.svg'
import HamburgerIMG from '@assets/Icons/hamburger.svg?react'
import CloseIMG from '@assets/Icons/close.svg?react'
import DownArrow from '@assets/Icons/chevron-down.svg?react'
import { menuItems, bottomMenuItems } from '@/constants/sidebarData'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '../ui/sheet'
import { DropdownMenu, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { NavLink, useLocation } from 'react-router'
import { useEffect, useState } from 'react'

export default function Topbar() {
    const [selectedMenu, setSelectedMenu] = useState("/");

    const location = useLocation();

    useEffect(() => {
        setSelectedMenu(location.pathname);
    }, [location.pathname]);


    return (
        <div className="p-4 bg-white border-b border-[#E9EAEB] md:hidden z-20">
            <div className='flex justify-between items-center'>
                <span className='flex gap-3 items-center text-[#181D27] text-2xl not-italic font-normal leading-[110%]'><img src={LOGO} alt="Logo" className='h-8' />CodeAnt AI</span>
                <Sheet>
                    <SheetTrigger asChild>
                        <HamburgerIMG className='size-6 fill-[#181D27]' />
                    </SheetTrigger>
                    <SheetContent side="top">
                        <div className='grid gap-6'>

                            <div className='flex justify-between items-center'>
                                <span className='flex gap-3 items-center text-[#181D27] text-2xl not-italic font-normal leading-[110%]'><img src={LOGO} alt="Logo" className='h-8' />CodeAnt AI</span>
                                <SheetClose asChild>
                                    <CloseIMG className='fill-[#181D27]' />
                                </SheetClose>
                            </div>

                            <div className='grid gap-3'>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild><Button variant="outline" className="px-3 py-2 gap-2 overflow-hidden text-[#181D27] text-ellipsis justify-between">Drop Down <DownArrow /></Button></DropdownMenuTrigger>
                                </DropdownMenu>
                                <div>
                                    {menuItems.concat(bottomMenuItems).map((item, index) => (
                                        <NavLink to={item.link} onClick={() => setSelectedMenu(item.pathname)} key={index} className="text-[#414651] text-base not-italic font-semibold cursor-pointer px-3 py-2 flex gap-1 border border-white hover:border-[#D5D7DA] rounded-lg" style={
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

                        </div>
                    </SheetContent>
                </Sheet>

            </div>
        </div>
    )
}
