'use client';

import { HeaderNav } from './HeaderNav';

interface MobileMenuProps {
    onClose: () => void;
}

export const MobileMenu = ({ onClose }: MobileMenuProps) => {
    return (
        <div className='xl:hidden'>
            <button
                type='button'
                aria-label='Close menu'
                className='fixed inset-0 top-16 bg-black/30'
                onClick={onClose}
            />
            <div className='fixed inset-x-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto border-t border-gray-200 bg-white px-6 py-8 shadow-lg'>
                <HeaderNav
                    orientation='vertical'
                    className='gap-3 text-lg'
                    onNavigate={onClose}
                />


            </div>
        </div>
    );
};
