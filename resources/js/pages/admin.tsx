import { useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LoaderCircle } from 'lucide-react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface Props {
  users: User[];
}

const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Admin', href: '/admin' },
];

// Komponen Modal untuk Form
function RoleModal({ user, onClose }: { user: User | null; onClose: () => void }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    user_id: user?.id || 0,
    role: user?.role || 'user',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/admin/jadikan-guru', {
      preserveScroll: true,
      onSuccess: () => {
        reset();
        onClose();
      },
    });
  };

  if (!user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Ubah Role: {user.name}</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid gap-2">
            <Label htmlFor="role">Role</Label>
            <select
              id="role"
              value={data.role}
              onChange={(e) => setData('role', e.target.value)}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Pilih role untuk user"
            >
              <option value="user">User</option>
              <option value="guru">Guru</option>
              <option value="admin">Admin</option>
            </select>
            {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
          </div>
          <div className="flex gap-2 mt-4">
            <Button
              type="submit"
              className="flex-1 h-10"
              disabled={processing}
            >
              {processing && <LoaderCircle className="h-4 w-4 animate-spin mr-2" />}
              Simpan
            </Button>
            <Button
              type="button"
              className="flex-1 h-10 bg-gray-200 text-gray-800 hover:bg-gray-300"
              onClick={onClose}
              disabled={processing}
            >
              Batal
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function User() {
  const { users } = usePage<Props>().props;
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const openModal = (user: User) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="admin" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
        <Table>
          <TableCaption>Semua user</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Aksi</TableHead>
              <TableHead>Nama</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users && users.length > 0 ? (
              users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    {user.role !== 'admin' && (
                      <Button
                        onClick={() => openModal(user)}
                        className="h-8 text-sm"
                        aria-label={`Edit role untuk ${user.name}`}
                      >
                        Edit Role
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  Tidak ada user ditemukan.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {selectedUser && <RoleModal user={selectedUser} onClose={closeModal} />}
    </AppLayout>
  );
}