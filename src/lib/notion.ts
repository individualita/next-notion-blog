import { Client } from '@notionhq/client';
import { PageObjectResponse } from '@notionhq/client';
import { BlockObjectResponse } from '@notionhq/client';
import { unstable_cache } from 'next/cache';

import { CACHE_TIMES, CACHE_TAGS } from './cacheConfig';

export const notion = new Client({
    auth: process.env.NOTION_TOKEN,
    notionVersion: '2025-09-03',
});

// Список всех постов (кеш 1 час)
export const fetchLivePages = unstable_cache(
    async () => {
        console.log(
            '🔥 РЕАЛЬНЫЙ ЗАПРОС К NOTION API FETCHLIVEPAGES',
            new Date().toISOString(),
        );

        const response = await notion.dataSources.query({
            data_source_id: process.env.NOTION_DATA_SOURCE_ID!,
            filter: {
                property: 'status',
                status: { equals: 'live' },
            },
            sorts: [{ property: 'date', direction: 'descending' }],
        });
        return response;
    },
    ['notion-pages'], // cache key
    {
        // revalidate: CACHE_TIMES.LIVE_PAGES, // 1 час
        revalidate: 100,
        tags: [CACHE_TAGS.POSTS],
    },
);

//slug!!!!!!!!!
const _fetchPageBySlug = (slug: string) =>
    notion.dataSources.query({
        data_source_id: process.env.NOTION_DATA_SOURCE_ID!,
        filter: {
            property: 'slug',
            rich_text: { equals: slug },
        },
    });

// Страница по slug (кеш 5 минут)
export const fetchPageBySlug = (slug: string) =>
    unstable_cache(
        async () => {
            const response = await _fetchPageBySlug(slug);
            return response.results[0] as PageObjectResponse | undefined;
        },
        ['page-by-slug', slug],
        {
            revalidate: CACHE_TIMES.PAGE_BY_SLUG, //5 минут
            tags: [CACHE_TAGS.POST(slug)],
        },
    )();

export const fetchPageBlocks = (pageId: string) =>
    unstable_cache(
        async () => {
            console.log(
                '🔥 ЗАПРОС fetchPageBlocks:',
                pageId,
                new Date().toISOString(),
            );
            const response = await notion.blocks.children.list({
                block_id: pageId,
            });
            return response.results as BlockObjectResponse[];
        },
        ['page-blocks', pageId], 
        {
            revalidate: CACHE_TIMES.PAGE_BY_SLUG, // 5 минут (как и сама страница)
            tags: [CACHE_TAGS.BLOCKS(pageId)], // для ручной ревалидации
        },
    )();
