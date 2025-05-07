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
        title: 'daftar Guru',
        href: '/guru',
    },
];

export default function User() {
          
    const { auth,guru } = usePage().props


    // console.log(auth.props);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="guru" />
            {/* return <div>{auth.user.role}</div> */}
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
            <Table>
      <TableCaption>semua guru</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          {/* <TableHead className="text-right">Amount</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {guru.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.name}</TableCell>
            <TableCell className="font-medium">{invoice.email}</TableCell>
            <TableCell>{invoice.role}</TableCell>
            {/* <TableCell className="text-right">{invoice.totalAmount}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>

    </Table>
            </div>
        </AppLayout>
    );
}
