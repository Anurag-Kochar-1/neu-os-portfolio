"use client"

import { useRouter } from 'next/navigation';

export default function MyModal() {
    const router = useRouter();

    function handleCloseModal() {
        router.back();
    }

    return (
        <main className='w-[70%] h-[70vh] bg-blue-600 flex justify-center items-center md:border-0 md:border-black overflow-hidden'>
            <button onClick={handleCloseModal} className="text-4xl">Close Modal</button>
        </main>
    );
}