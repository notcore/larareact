import { Head, useForm, usePage } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';
import { type BreadcrumbItem } from '@/types';
import AppLayout from '@/layouts/app-layout';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

type CatatanForm = {
    catatan: string;
};

export default function Dashboard() {
    const { auth,catatan } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm<Required<CatatanForm>>({
        catatan: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/catatan', {
            onFinish: () => reset('catatan'),
        });
    };

    const [wobbleId, setWobbleId] = useState(null);

    const handleTouch = (id) => {
      setWobbleId(id);
      setTimeout(() => setWobbleId(null), 500);
    };
    

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid gap-2">
                    <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        Selamat datang, {auth.user.name}
                    </h2>
                    <p className="text-muted-foreground text-sm">
                        Lampirkan catatan publikmu untuk meningalkan sejarah.
                    </p>
                </div>
                <form className="flex max-w-[400px] flex-col gap-6" onSubmit={submit}>
                    <div className="grid gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="catatan">Catatan</Label>
                            <Input
                                id="catatan"
                                type="text"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="off"
                                value={data.catatan}
                                onChange={(e) => setData('catatan', e.target.value)}
                                placeholder="Tulis catatan maksimal 27 karakter"
                            />
                            <InputError message={errors.catatan} />
                        </div>
                        <Button type="submit" className="mt-4 h-12 w-full" tabIndex={2} disabled={processing}>
                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                            Selesai
                        </Button>
                    </div>
                </form>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {catatan.map((invoice) => {
                    const warnaList = ['pink', 'biru', 'kuning'];
                    const warna = warnaList[invoice.id % warnaList.length];

                    return (
                        <div key={invoice.id} className="flex relative items-center group" onClick={() => handleTouch(invoice.id)}>
                            <img className="relative z-30 -mr-4" src="/paper/pin.png" alt="Pin" />
                            <div className={`absolute group-hover:animate-wobble w-auto z-10 inline-block ${wobbleId === invoice.id ? 'animate-wobble' : ''}`}>
                                <img className="w-auto" src={`/paper/${warna}.png`} alt={`${warna} Paper`} />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white z-20">
                                {invoice.catatan}
                                <p className='text-[10px]'>dari : {invoice.user.name}</p>
                                </div>
                                
                            </div>
                        </div>
                    );
                })}

                    
                    {/* <div className="flex relative items-center">
                        <img className="relative z-30 -mr-4" src="/paper/pin.png" alt="Pin" />
                        <div className="absolute w-auto z-10 inline-block">
                            <img className="w-auto" src="/paper/biru.png" alt="Pink Paper" />
                            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white z-20">
                                Bagaimana ini bisa terjadi?
                            </h1>
                        </div>
                    </div> */}
                </div>
            </div>
        </AppLayout>
    );
}