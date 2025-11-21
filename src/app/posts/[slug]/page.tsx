export const revalidate = 300; // обновлять кеш раз в 60 секунд

import { fetchPageBySlug, fetchPageBlocks } from '@/src/lib/notion';
import Link from 'next/link';
import { Container } from '@/src/components/Container';

import { renderer } from '@/src/lib/notionRenderer';



export default async function Post({ params }: { params: { slug: string } }) {
    const { slug } = await params;

      // 1. Получаем страницу

    const page = await fetchPageBySlug(slug);

    if (!page) {
        return <div>Page not found. </div>;
    }

  // 2. Получаем блоки 
    const blocks = await fetchPageBlocks(page.id);
    //3. Render
    const html = await renderer.render(...blocks);

    return (
        <article className='prose prose-lg mx-auto py-20 relative'>
            <Container>
            {/* Кнопка назад */}
                <Link
                    href='/'
                    className='inline-block  px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-sm font-medium transition-colors'
                >
                    ← Back to all posts
                </Link>

            {/* Контент поста */}
            <div dangerouslySetInnerHTML={{ __html: html }} />
            </Container>

        </article>
    );
}
