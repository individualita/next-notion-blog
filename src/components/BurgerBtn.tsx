interface BurgerBtnProps {
    isOpen: boolean;
    toggle: () => void;
}

export const BurgerBtn = ({ isOpen, toggle }: BurgerBtnProps) => {
    return (
        <button
            type='button'
            className='cursor-pointer inline-flex h-10 w-10 items-center justify-center rounded-md  text-gray-900 transition-colors hover:border-gray-500 xl:hidden'
            aria-expanded={isOpen}
            aria-label='Toggle navigation menu'
            onClick={toggle}
        >
            <span className='sr-only'>
                {isOpen ? 'Close menu' : 'Open menu'}
            </span>
            <span className='flex flex-col gap-1.5'>
                <span
                    className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${
                        isOpen ? 'translate-y-1.5 rotate-45' : ''
                    }`}
                />
                <span
                    className={`block h-0.5 w-5 rounded-full bg-current transition-opacity ${
                        isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                />
                <span
                    className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${
                        isOpen ? '-translate-y-1.5 -rotate-45' : ''
                    }`}
                />
            </span>
        </button>
    );
};
