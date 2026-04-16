'use client';
import { Gamepad2 } from 'lucide-react';
import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="fixed w-full z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-[#27272a] px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
                <div className="flex items-center space-x-2 cursor-pointer group">
                    <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                        <Gamepad2 className="h-6 w-6 text-primary" />
                    </div>
                    <span className="font-bold text-xl tracking-tighter">
                        GAMEDEV —{' '}
                        <span className="text-primary">ACADEMY</span>
                    </span>
                </div>
            </Link>
        </nav>
    );
}
