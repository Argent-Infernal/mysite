'use client'

import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

export default function MainSection() {
    return (
        <div className="flex items-center justify-center h-screen">
            <Image
                className='pointer-events-none transform -translate-y-20'
                src="/logo_main.svg"
                alt="Argent Code"
                width={450}
                height={450}
                priority
            />

            <div className="absolute bottom-10 animate-bounce"> {/* Позиционируем стрелку внизу */}
                <ArrowDown />
            </div>
        </div>
    );
}