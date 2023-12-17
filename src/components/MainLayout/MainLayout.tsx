import { Outlet } from 'react-router'
import Navbar from '../_components/Navbar'
import { Sidebar } from '../_components/Sidebar'

const MainLayout = () => {
  return (
    <div className='h-screen'>
        <Navbar />
        <main className='pt-20 md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl'>
            <div className='flex gap-x-7'>
                <div className='w-64 shrink-0 hidden md:block'>
                    <Sidebar />
                </div>
                <Outlet />
            </div>
        </main>
    </div>
  )
}

export default MainLayout