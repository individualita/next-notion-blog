'use client';

import { usePosts } from '../context/PostsContext';
import PostCard from './PostCard';

export default function PostsList() {
    const { filteredPosts } = usePosts();

    return (
        <div className='grid gap-20 md:gap-12 md:grid-cols-2'>
            {filteredPosts.map((page: any) => {
                const title =
                    page.properties.title?.title[0]?.plain_text ??
                    'No title';
                const description =
                    page.properties.description?.rich_text[0]?.plain_text;
                const slug =
                    page.properties.slug?.rich_text[0]?.plain_text ??
                    'No slug';
                const tags = page.properties.tags?.multi_select ?? [];
                const date = page.properties.date?.created_time ?? '';
                const imageUrl =
                    page.properties.image?.files?.[0]?.file?.url ?? '';
                const topic =
                    page.properties.topic?.rich_text[0]?.plain_text ??
                    'no topic';

                
                return (
                    <PostCard
                        key={page.id}
                        id={page.id}
                        title={title}
                        description={description}
                        slug={slug}
                        tags={tags}
                        date={date}
                        imageUrl={imageUrl}
                        topic={topic}
                    />
                );
            })}
        </div>
    );
}
