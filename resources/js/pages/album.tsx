import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
   

  
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Album',
        href: '/album',
    },
];

export default function User() {
          
    const { auth } = usePage().props


    // console.log(auth.props);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="album" />
            {/* return <div>{auth.user.role}</div> */}
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
              
<div>
  <div className='flex items-center gap-2'>
    <h1 className='text-2xl font-semibold my-6'>random photo</h1>
    <img className='h-[40px] rotate-180' src='076.png'></img>
  </div>


<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div>
            <img className="h-auto object-cover max-w-full rounded-lg" src="/img/10.jpeg" alt="img"/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/img/3.jpeg" alt="img"/>
        </div>
        
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/img/7.jpeg" alt="img"/>
        </div>
        
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/img/11.jpeg" alt="img"/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/img/8.jpeg" alt="img"/>
        </div>
       
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/img/12.jpeg" alt="img"/>
        </div>
       
    </div>
</div>
</div>
            </div>
        </AppLayout>
    );
}
