import NavBar from '@/RAG/Components/Navbar';
import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <div className='flex dark:bg-black min-h-screen'>
                <Head title="Welcome" />
                <NavBar auth={auth} />
            </div>
        </>
    );
}
