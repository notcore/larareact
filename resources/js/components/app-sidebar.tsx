import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';

import { BookOpen,
     Code, 
     Folder, 
     Home,
     Users,
     GraduationCap,
        Shield,
        GalleryHorizontal
    } from 'lucide-react';
import AppLogo from './app-logo';
import { usePage } from '@inertiajs/react'


const footerNavItems: NavItem[] = [
    {
        title: 'Dibuat oleh...',
        href: 'https://hyuman.vercel.app',
        icon: Code,
    },
    // {
    //     title: 'Documentation',
    //     href: 'https://laravel.com/docs/starter-kits#react',
    //     icon: BookOpen,
    // },
];

export function AppSidebar() {
    const { auth } = usePage().props

const mainNavItems: NavItem[] = [
    {
        title: 'Home',
        href: '/dashboard',
        icon: Home,
    },
    {
        title: 'Users',
        href: '/users',
        icon: Users,
    },
    {
        title: 'Guru',
        href: '/guru',
        icon: GraduationCap,
    },
    {
        title: 'Album',
        href: '/album',
        icon: GalleryHorizontal,
    },
    // {
    //     title: 'Admin',
    //     href: '/admin',
    //     icon: Shield
    // },
];


if (auth.user.role === 'admin') {
    mainNavItems.push({
        title: 'Admin',
        href: '/admin',
        icon: Shield
    });
}


    return (
        <Sidebar collapsible="icon" variant="inset">
            {/* <p>{auth.user.role}</p> */}
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
