'use client';
import { usePosts } from '../context/PostsContext';


type Orientation = 'vertical' | 'horizontal';

interface TopicNavProps {
    orientation?: Orientation;
}

export const TopicNav = ({
    orientation = 'vertical',
}: TopicNavProps) => {
    const isHorizontal = orientation === 'horizontal';
    const { topics, setSelectedTopic } = usePosts();

    return (
        <nav
            className={
                isHorizontal
                    ? 'flex flex-wrap gap-x-3 gap-y-1 overflow-x-auto text-sm text-gray-600'
                    : 'flex flex-col gap-2 text-sm text-gray-600'
            }
        >
            <button
                onClick={() => setSelectedTopic(null)}
                className={
                    isHorizontal
                        ? ' font-semibold whitespace-nowrap px-4 py-2  transition-colors hover:text-black'
                        : ' font-semibold text-left transition-colors hover:text-black '
                }
            >
                {'All topics'}
            </button>
            {topics.map(topic => (

                <button
                    key={topic}
                    onClick={() => setSelectedTopic(topic)}
                    className={
                        isHorizontal
                            ? ' text-left whitespace-nowrap px-4 py-2 font-medium transition-colors hover:text-black'
                            : 'text-left transition-colors hover:text-black'
                    }
                >
                    {topic}
                </button>
            ))}
        </nav>
    );
};
