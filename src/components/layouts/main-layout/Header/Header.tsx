'use client'

import Link from 'next/link'
import styles from './Header.module.scss'
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'; // Импортируйте необходимые компоненты
import { SITE_NAME } from '@/constants/seo.constants';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Header() {

    const [isSticky, setIsSticky] = useState(false)
    const [scrollPercent, setScrollPercent] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrollY = window.scrollY
            const percent = (scrollY / totalHeight) * 100

            setIsSticky(scrollY > 0)
            setScrollPercent(percent)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
            <Link href=''>
                <Image
                    className='pointer-events-none'
                    src="/logo.svg"
                    alt="Argent Code"
                    width={150}
                    height={150}
                    priority
                />
            </Link>

            <div className={styles.navigation}>
                <div className="hidden md:flex">
                    <Button variant='ghost'>Главная</Button>
                    <Button variant='ghost'>О себе</Button>
                    <Button variant='ghost'>Мой стек</Button>
                    <Button variant='ghost'>Портфолио</Button>
                    <Button variant='ghost'>Отзывы</Button>
                </div>

                {/* Мобильное меню */}
                <div className="md:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant='ghost'>Меню</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem asChild>
                                <Link href="">Главная</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="">О себе</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="">Мой стек</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="">Портфолио</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="">Отзывы</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="https://vk.com/riffls?from=search">Равиль гей</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            <div
                className={styles.scrollBorder}
                style={{ width: `${scrollPercent}%` }}
            />
        </header>
    )
}