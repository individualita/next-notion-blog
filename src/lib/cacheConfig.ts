//Это конфиг для нашего  кешика в notion.ts
export const CACHE_TIMES = {
    LIVE_PAGES: 3600, // 1 час
    PAGE_BY_SLUG: 300, // 5 минут
};

export const CACHE_TAGS = {
    POSTS: 'notion-posts',
    POST: (slug: string) => `post-${slug}`,
    BLOCKS: (pageId: string) => `blocks-${pageId}`,
};
