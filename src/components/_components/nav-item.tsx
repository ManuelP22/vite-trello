import { cn } from '@/lib/utils';

import { AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import {
    Activity,
    CreditCard,
    Layout,
    Settings
} from "lucide-react"
import { useLocation, useNavigate } from 'react-router';
import { Button } from '../ui/button';
import { Skeleton } from '../ui/skeleton';

export type NavOption = {
    id: string;
    slug: string;
    imageUrl: string;
    name: string;
}

interface NavItemProps {
    isExpanded: boolean;
    isActive: boolean;
    options: NavOption;
    onExpand: (id: string) => void;
}

export const NavItem = ({
    isExpanded,
    isActive,
    options,
    onExpand
}: NavItemProps) => {

    const router = useNavigate()
    const location = useLocation()
    const routes = [
        {
            label: "Application",
            icon: <Layout className='h-4 w-4 mr-2' />,
            href: `/home`
        },
        {
            label: "Fields",
            icon: <Activity className='h-4 w-4 mr-2' />,
            href: `/fields`
        },
        {
            label: "Settings",
            icon: <Settings className='h-4 w-4 mr-2' />,
            href: `/settings`
        },
        {
            label: "Billing",
            icon: <CreditCard className='h-4 w-4 mr-2' />,
            href: `/billing`
        },
    ]

    const onClick = (href: string) => {
        router(href)
    };

  return (
    <AccordionItem
    value={options.id}
    className='border-none'
    >
        <AccordionTrigger
        onClick={() => onExpand(options.id)}
        className={cn(
            "flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
            isActive && !isExpanded && "bg-emerald-500/10 text-emerald-700"
        )}
        >
            <div className="flex items-center gap-x-2">
                <div className="w-7 h-7 relative">
                    <img 
                        src={options.imageUrl}
                        alt='option'
                        className='rounded-sm objec-cover fill-current'
                    />
                </div>
                <span className='font-medium text-sm'>
                    {options.name}
                </span>
            </div>
        </AccordionTrigger>
        <AccordionContent className="pt-1 text-neutral-700">
            {routes.map(route => (
                <Button
                    key={route.href}
                    size="sm"
                    onClick={() => onClick(route.href)}
                    className={cn(
                        "w-full font-lg justify-start pl-10 mb-1",
                        location.pathname === route.href && "bg-emerald-500/10 text-emerald-700"
                        )}
                    variant="ghost"
                >
                    {route.icon}
                    {route.label}
                </Button>
            ))}
        </AccordionContent>
    </AccordionItem>
  );
};

NavItem.Skeleton = function SkeletonNavItem() {
    <div className="flex items-center gap-x-2">
        <div className='w-10 h-10 relative shrink-0'>
            <Skeleton className="h-full w-full absolute" />
        </div>
        <Skeleton className='h-10 w-full' />
    </div>
}
