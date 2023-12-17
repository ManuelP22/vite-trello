import { useEffect } from 'react'
import { useMobileSidebar } from '@/hooks/use-mobile-sidebar'
import { useLocation } from 'react-router'
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent } from '../ui/sheet';
import { Sidebar } from './Sidebar';

export const MobileSidebar = () => {
    const location = useLocation();

    const onOpen = useMobileSidebar((state) => state.onOpen)
    const onClose = useMobileSidebar((state) => state.onClose)
    const isOpen = useMobileSidebar((state) => state.isOpen)

    useEffect(() => {
        onClose();
    }, [location.pathname, onClose])

    return (
        <>
            <Button
                onClick={onOpen}
                className='block md:hidden mr-2'
                variant='ghost'
                size='sm'
            >
                <Menu className='h-4 w-4' />
            </Button>
            <Sheet open={isOpen} onOpenChange={onClose}>
                <SheetContent
                    side='left'
                    className='p-2 pt-10'
                >
                    <Sidebar
                        storageKey='t-sidebar-mobile-state'
                    />
                </SheetContent>
            </Sheet>
        </>
    )
}