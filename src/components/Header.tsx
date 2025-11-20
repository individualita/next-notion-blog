'use client';

import { useState } from 'react';
import Link from 'next/link';

import { HeaderNav } from './HeaderNav';
import { BurgerBtn } from './BurgerBtn';
import { MobileMenu } from './MobileMenu';
import { Container } from './Container';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white'>
            <Container>

                {/* wrapper  */}
                <div className='flex py-3 items-center justify-between gap-6 '>

                    {/* logo */}
                    <Link
                        href='/'
                        className='text-4xl font-serif font-extrabold tracking-tight'
                    >
                        N 
                    </Link>

                    {/* navigation */}
                    <HeaderNav className='hidden xl:flex' />

                    {/* buttons */}
                    <div className='flex items-center gap-2'>
                        <button className='cursor-pointer rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900'>
                            Log in
                        </button>
                        <button className='cursor-pointer rounded-md bg-black px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-800'>
                            Get Notion free
                        </button>
                        <BurgerBtn
                            isOpen={isMenuOpen}
                            toggle={() => setIsMenuOpen(prev => !prev)}
                        />
                    </div>
                </div>

                {isMenuOpen && (
                    <MobileMenu onClose={() => setIsMenuOpen(false)} />
                )}
            </Container>
        </header>
    );
};
