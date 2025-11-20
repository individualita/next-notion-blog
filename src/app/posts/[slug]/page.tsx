export const revalidate = 300; // обновлять кеш раз в 60 секунд

import { fetchPageBySlug, fetchPageBlocks} from '@/src/lib/notion';

import { renderer } from '@/src/lib/notionRenderer';

export default async function Post({ params }: { params: { slug: string } }) {
    const { slug } = await params;

    const page = await fetchPageBySlug(slug);

    if (!page) {
        return <div>Page not found. </div>;
    }

    const blocks = await fetchPageBlocks(page.id);

    const html = await renderer.render(...blocks);

    return (
        <article className='prose prose-lg mx-auto py-20' dangerouslySetInnerHTML={{ __html: html }} />
    );
}
