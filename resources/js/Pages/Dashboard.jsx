import Navbar from '@/Components/Navbar';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Main from '@/Layouts/Main';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <Main user={auth.user} title={'Dashboard'}>
            <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>
        </Main>
    );
}
