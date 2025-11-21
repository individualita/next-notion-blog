'use client';

import Link from 'next/link';
import { headerLinks } from './navigation';

import { usePathname } from 'next/navigation';

type Orientation = 'horizontal' | 'vertical';

interface HeaderNavProps {
    orientation?: Orientation;
    className?: string;
    onNavigate?: () => void;
}

export const HeaderNav = ({
    orientation = 'horizontal',
    className = '',
    onNavigate,
}: HeaderNavProps) => {
    const pathname = usePathname();

    const baseClasses =
        orientation === 'horizontal'
            ? 'flex items-center gap-1 text-sm text-gray-600'
            : 'flex flex-col gap-4 text-base text-gray-900';

    return (
        <nav className={`${baseClasses} ${className}`.trim()}>
            {headerLinks.map(link => {
                const isActive = pathname === link.href;

                return (
                    <Link
                        key={link.label}
                        href={link.href}
                        onClick={onNavigate}
                        className={`rounded-md px-3 py-2 font-medium transition-colors ${
                            isActive
                                ? ' text-black  '
                                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                        }`}
                    >
                        {link.label}
                    </Link>
                );
            })}
        </nav>
    );
};
