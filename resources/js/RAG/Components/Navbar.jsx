import { Link } from '@inertiajs/react'

export default function NavBar({ auth }) {
    return (
        <nav className="flex justify-between min-w-full fixed z-50 p-4 bg-white dark:bg-black dark:text-white text-black font-medium">
            <div className="px-8 font-bold">
                <Link href={"/"}>
                    <div className="z-1 absolute">
                        <img
                            alt="Logo"
                            src={'/img/logo5.png'}
                            width={100}
                            height={60}
                        />
                    </div>
                    <div className="z-2 dark:hidden absolute">
                        <img
                            alt="Logo"
                            src={'/img/logo4.png'}
                            width={100}
                            height={60}
                        />
                    </div>
                </Link>
            </div>
            <div>
                <ul className='flex justify-end'>
                    <li className="mx-4 hover:text-sky-600">
                        <Link href="/">Home</Link>
                    </li>
                    <li className='mx-4 hover:text-sky-600'>
                        <Link href="/">About</Link>
                    </li>
                    <li className='mx-4 hover:text-sky-600'>
                        <Link href="/">Store</Link>
                    </li>
                    {auth.user ? (
                        <li className='mx-4 hover:text-sky-600'>
                            <li className='mx-4 hover:text-sky-600'>
                                <Link href={route('dashboard')}>Dashboard</Link>
                            </li>
                        </li>
                    ) : (
                        <>
                            <li className='mx-4 dark:text-sky-200 hover:text-sky-600'>
                                <Link href={route('login')}>Log in</Link>
                            </li>
                            <li className='mx-4 dark:text-sky-200 hover:text-sky-600'>
                                <Link href={route('register')}>Sig in</Link>
                            </li>
                        </>

                    )}
                </ul>
            </div>
        </nav>

    )
}
export function HeaderImg({ imagen }) {
    return (
        <div>
            <img
                alt="Background1"
                src={imagen}
                quality={100}
                fill
                sizes="100vw"
                style={{
                    objectFit: 'cover',
                    zIndex: '1',
                }}
            />
            <div className="min-w-full min-h-screen bg-black z-10 absolute opacity-80"></div>
        </div>
    )
}