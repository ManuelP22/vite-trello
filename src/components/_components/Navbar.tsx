import Logo from '../Logo'
import MenuDashboard from './MenuDashboard'

import { Button } from '../ui/button'
import { Plus } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='fixed z-50 top-0 w-full h-14 border-b shadow-sm bg-white flex items-center'>
        {/* Mobile Sidebar */}
        <div className='flex items-center gap-x-4 ml-2'>
            <div className='hidden md:flex'>
                <Logo />
            </div>
            <Button size='sm' variant='primary' className='rounded-sm hidden md:block h-auto py-1.5 px-2'>
                Manage
            </Button>

            <Button size="sm" variant='primary' className='rounded-sm block md:hidden'>
                <Plus className='h-4 w-4'/>
            </Button>
        </div>
        <div className="ml-auto flex items-center gap-x-4 mr-2">
            <h1 className='scroll-m-20 text-xl font-md tracking-tight'>
                administrator@pkmds.com
            </h1>

            <MenuDashboard />

        </div>
    </nav>
  )
}

export default Navbar