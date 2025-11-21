'use client';
import { usePosts } from '../context/PostsContext';

type Orientation = 'vertical' | 'horizontal';

interface TopicNavProps {
    orientation?: Orientation;
}

export const TopicNav = ({ orientation = 'vertical' }: TopicNavProps) => {
    const isHorizontal = orientation === 'horizontal';
    const { topics, setSelectedTopic, selectedTopic } = usePosts();

    const baseClassesHorizontal =
        'whitespace-nowrap px-4 py-2 transition-colors hover:text-black cursor-pointer';
    const baseClassesVertical = 'text-left transition-colors hover:text-black cursor-pointer';

    return (
        <nav
            className={
                isHorizontal
                    ? 'flex flex-wrap gap-x-3 gap-y-1 overflow-x-auto text-sm text-gray-600 '
                    : 'flex flex-col gap-2 text-sm text-gray-600 '
            }
        >
            {/* All topics button */}
            <button
                onClick={() => setSelectedTopic(null)}
                className={
                    (isHorizontal
                        ? baseClassesHorizontal
                        : baseClassesVertical) +
                    (selectedTopic === null
                        ? ' text-black font-semibold underline'
                        : ' text-gray-600')
                }
            >
                All topics
            </button>

            {/* Topics */}
            {topics.map(topic => (
                <button
                    key={topic}
                    onClick={() => setSelectedTopic(topic)}
                    className={
                        (isHorizontal
                            ? baseClassesHorizontal
                            : baseClassesVertical) +
                        (selectedTopic === topic
                            ? ' text-black font-semibold underline'
                            : ' text-gray-600')
                    }
                >
                    {topic}
                </button>
            ))}
        </nav>
    );
};
