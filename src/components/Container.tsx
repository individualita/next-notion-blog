interface ContainerProps {
    children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <div className='mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-12'>
            {children}
        </div>
    );
};
