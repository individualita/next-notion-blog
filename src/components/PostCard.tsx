import Image from 'next/image';
import Link from 'next/link';

interface PostCardProps {
    id: string;
    title: string;
    description?: string;
    slug: string;
    tags: { id: string; name: string }[];
    date: string;
    imageUrl?: string;
    topic?: string;
}

export default function PostCard({
    id,
    title,
    description,
    slug,
    tags,
    date,
    imageUrl,
    topic,
}: PostCardProps) {
    return (
        <article key={id} className='group cursor-pointer'>
            <Link href={`/posts/${slug}`} className='block'>
                {/* Image */}
                <div className='relative mb-6 w-full overflow-hidden rounded-lg bg-gray-100 aspect-video'>
                    {imageUrl ? (
                        <>
                            <Image
                                src={imageUrl}
                                alt={title}
                                fill
                                sizes='(min-width: 1024px) 50vw, 100vw'
                                className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                            />
                            <span className='absolute right-2 bottom-2 px-2 py-0.5 text-xs bg-gray-600 text-gray-300'>
                                {topic}
                            </span>
                        </>
                    ) : (
                        <div className='flex h-full w-full items-center justify-center text-sm text-gray-500'>
                            Image coming soon
                        </div>
                    )}
                </div>

                {/* Category Tag */}
                <div className='mb-3 flex gap-2'>
                    {tags.map(tag => (
                        <span
                            key={tag.id}
                            className='text-xs font-medium text-gray-500 uppercase tracking-wide'
                        >
                            #{tag.name}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h2 className='text-2xl font-bold mb-4 leading-tight group-hover:text-blue-600 transition-colors'>
                    {title}
                </h2>

                {/* Excerpt */}
                {description && (
                    <p className='text-gray-600 mb-4 line-clamp-2'>
                        {description}
                    </p>
                )}

                {/* Meta Info */}
                <div className='flex items-center gap-3 text-sm text-gray-500'>
                    <span className='font-bold'>romaw3b</span>
                    <span>
                        <span>
                            published:{' '}
                            {new Date(date).toISOString().split('T')[0]}
                        </span>
                    </span>
                </div>
            </Link>
        </article>
    );
}
