/* eslint-disable  @typescript-eslint/no-explicit-any */

import React from 'react'

import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useLocalStorage } from 'usehooks-ts'

import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Skeleton } from '../ui/skeleton';
import { Accordion } from '../ui/accordion';
import { NavItem, NavOption } from './nav-item';
import { SidebarIcons } from '@/lib/constants';

interface SidebarProps {
    storageKey?: string;
}

export const Sidebar = ({
    storageKey = "t-sidebar-state",
}: SidebarProps) => {

    const activeItems = {
        uniqueId1: false,
        uniqueId2: false,
    };

    const navOptions: NavOption[] = [
        {
            id: "uniqueId1",
            slug: "item-slug1",
            imageUrl: SidebarIcons.application,
            name: "Item Name 1",
        },
        {
            id: "uniqueId2",
            slug: "item-slug2",
            imageUrl: SidebarIcons.digital,
            name: "Item Name 2",
        },
    ];

    const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(storageKey, activeItems)

    const defaultAccordionValue: string[] = Object.keys(expanded).reduce((acc: string[], key: string) => {
        if (expanded[key]) {
            acc.push(key);
        }
        return acc;
    }, []);

    const onExpand = (id: string) => {
        setExpanded((curr) => ({
            ...curr,
            [id]: !expanded[id],
        }));
    };


    // if (!isLoadedItem || !isLoadedItemList || userItems.isLoading) {
    //     return (
    //         <>
    //             <div className='flex items-center justify-between mb-2'>
    //                 <Skeleton className='h-10 w-[50%]'/>
    //                 <Skeleton className='h-10 w-10'/>
    //             </div>
    //             <div className='space-y-2'>
    //                 <NavItem.Skeleton />
    //                 <NavItem.Skeleton />
    //                 <NavItem.Skeleton />
    //             </div>
    //         </>
    //     );
    // }

    return (
        <>
            <div className="font-medium text-xs flex items-center mb-1">
                <span className='pl-4 text-sm'>
                    Espacios de trabajo
                </span>
                <Button
                    asChild
                    type='button'
                    size='icon'
                    variant='ghost'
                    className='ml-auto'
                >
                    <Link to="/home">
                        <Plus
                            className='h-4 w-4'
                        />
                    </Link>
                </Button>
            </div>

            <Accordion
                type="multiple"
                defaultValue={defaultAccordionValue}
                className="space-y-2"
            >
                {navOptions
                    .map((item) => (
                        <NavItem
                            key={item.id}
                            isActive={activeItems[item.id]}
                            isExpanded={expanded[item.id]}
                            options={item}
                            onExpand={onExpand}
                        />
                    ))}
            </Accordion>
        </>
    )
}
