
import { fetchPageBySlug, fetchPageBlocks } from '@/src/lib/notion';
import Link from 'next/link';
import { Container } from '@/src/components/Container';

import { renderer } from '@/src/lib/notionRenderer';

export default async function Post({ params }: { params: { slug: string } }) {
    const { slug } = await params;

    // 1. get page
    const page = await fetchPageBySlug(slug);

    if (!page) {
        return <div>Page not found. </div>;
    }

    // 2. get blocks
    const blocks = await fetchPageBlocks(page.id);
    //3. Render
    const html = await renderer.render(...blocks);

    return (
        <article className='prose prose-lg mx-auto py-20 relative text-gray-700 
            prose-pre:p-4 prose-pre:overflow-x-auto prose-pre:rounded-md prose-pre:text-sm prose-pre:max-w-full prose-pre:whitespace-pre-wrap prose-pre:wrap-break-word
            prose-img:mx-auto prose-img:max-w-full prose-img:h-auto
            prose-table:overflow-x-auto prose-table:block prose-table:max-w-full prose-table:text-sm
            prose-a:text-sm
            '>
            <Container>
                <Link
                    href='/'
                    className='inline-block  mb-8 px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-sm font-medium transition-colors'
                >
                    ← Back to all posts
                </Link>

                {/* Контент поста */}
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </Container>
        </article>
    );
}
