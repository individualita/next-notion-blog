import { Sidebar } from './Sidebar';
import { TopicBar } from './TopicBar';
import PostsList from './PostsList';
import { Container } from './Container';

export default function HomeContent() {
    return (
        <>
            <aside className='sticky top-16 hidden h-[calc(100vh-4rem)] w-76 overflow-y-auto border-r border-gray-200 bg-white lg:block'>
                <Sidebar />
            </aside>

            <div className='flex flex-1 flex-col'>
                {/* lg hidden */}
                <TopicBar />

                {/* content  */}
                <section className='flex-1 py-10'>
                    <Container>
                        <PostsList />
                    </Container>
                </section>
            </div>
        </>
    );
}
