import { TopicNav } from './TopicNav';

export const Sidebar = () => {
    return (
        <section className='px-8 py-12'>
            <div>
                <p className='text-xs uppercase tracking-[0.2em] text-gray-500'>
                    Notion like blog
                </p>
                <h1 className='mb-4 mt-3 text-4xl  '>
                   <strong>Next</strong>  <br />&  <span className='font-serif italic text-gray-800'>Notion</span>
                </h1>
                <p className='text-sm text-gray-500'>
                    Thoughts on the future of work, from the people and teams
                    creating it.
                </p>
            </div>

            <div className='mt-10 border-t border-gray-200 pt-10'>
                <p className='mb-4 text-xs font-semibold uppercase tracking-widest '>
                    Topic bar
                </p>
                <TopicNav />
            </div>
        </section>
    );
};
