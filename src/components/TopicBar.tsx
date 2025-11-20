import { TopicNav } from './TopicNav';

export const TopicBar = () => {
    return (
        <section className='border-b border-gray-200 bg-white  '>
            <div className='mx-auto flex flex-col gap-3 px-6 py-4'>
                <p className='text-xs font-semibold uppercase tracking-widest text-gray-500'>
                    Topic bar
                </p>
                <TopicNav orientation='horizontal' />
            </div>
        </section>
    );
};
