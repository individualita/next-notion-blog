import { Client } from '@notionhq/client';
import { PageObjectResponse } from '@notionhq/client';
import { BlockObjectResponse } from '@notionhq/client';
import { unstable_cache } from 'next/cache';

import { CACHE_TIMES, CACHE_TAGS } from './cacheConfig';

// ---------------------------------------------
// Initialize Notion client
// ---------------------------------------------
export const notion = new Client({
    auth: process.env.NOTION_TOKEN,
    notionVersion: '2025-09-03',
});

// ---------------------------------------------
// Fetch all published posts (cached for 1 hour)
// ---------------------------------------------
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
        revalidate: CACHE_TIMES.LIVE_PAGES, // 1 hour
        tags: [CACHE_TAGS.POSTS],
    },
);

// ---------------------------------------------
// Helper: fetch a single page by slug
// ---------------------------------------------
const _fetchPageBySlug = (slug: string) =>
    notion.dataSources.query({
        data_source_id: process.env.NOTION_DATA_SOURCE_ID!,
        filter: {
            property: 'slug',
            rich_text: { equals: slug },
        },
    });

// ---------------------------------------------
// Fetch a single page by slug (cached for 5 minutes)
// ---------------------------------------------
export const fetchPageBySlug = (slug: string) =>
    unstable_cache(
        async () => {
            const response = await _fetchPageBySlug(slug);
            return response.results[0] as PageObjectResponse | undefined;
        },
        ['page-by-slug', slug],
        {
            revalidate: CACHE_TIMES.PAGE_BY_SLUG, //5 minutes
            tags: [CACHE_TAGS.POST(slug)], // tag for manual revalidation
        },
    )();
// ---------------------------------------------
// Fetch all blocks (content) of a page
// Cached for 5 minutes (same as the page itself)
// ---------------------------------------------
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
            revalidate: CACHE_TIMES.PAGE_BY_SLUG, // 5 minutes
            tags: [CACHE_TAGS.BLOCKS(pageId)], // tag for manual revalidation
        },
    )();
