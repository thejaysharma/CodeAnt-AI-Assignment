import Sidebar from '@/components/sidebar/sidebar'
import Topbar from '@/components/sidebar/topbar'
import { Outlet } from 'react-router'

export default function Layout() {
    return (
        <div className="h-screen bg-[#FAFAFA] md:flex">
            <Sidebar />
            <Topbar />
            <Outlet />
        </div>
    )
}
