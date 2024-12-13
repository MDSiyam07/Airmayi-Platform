"use client";

import React from 'react';
import { HomeOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import LanguageChanger from './LanguageChanger';

const NavLinks = [
    { id: 1, name: 'Acceuil', path: '/' },
];

const Header = () => {
    const router = useRouter();
    const pathname = usePathname();

    const isActive = (path) => path === pathname;


    const handleClick = (locale) => {
        console.log(`Le lien pour la langue ${locale} a été cliqué.`);
    };

    return (
        // <header className="header">
        // <Link href="/">
        //     <HomeOutlined style={{ fontSize: '24px' }} />
        // </Link>
        // <h1>Airmayi Platform</h1>
        // </header>
        <nav className="w-full flex justify-between items-center h-32">
        <div className="logo">
            <Link href="/">
                <p className="text-2xl font-bold">
                    <HomeOutlined style={{ fontSize: '24px' }} />
                </p>
            </Link>
        </div>
        <ul className="flex space-x-10">
            {NavLinks.map((link) => {
                return (
                    <li key={link.id}>
                        <Link
                            href={link.path}
                            className={
                                isActive(link.path)
                                    ? 'underline decoration-blue-500 decoration-4'
                                    : ''
                            }
                        >
                            {link.name}
                        </Link>
                    </li>
                );
            })}
        </ul>

        <div className="flex space-x-10">
            <LanguageChanger />
        </div>
    </nav>
    );
};

export default Header;