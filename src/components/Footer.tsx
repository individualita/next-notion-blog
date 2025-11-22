import { Container } from './Container';
import { FooterSection } from './FooterSection';

const footerData = [
    {
        title: 'Docs',
        links: [
            { label: 'Getting started', href: 'https://developers.notion.com/docs/getting-started' },
            { label: 'Update guide 03-09-2025', href: 'https://developers.notion.com/docs/upgrade-guide-2025-09-03' },
            { label: 'Query database', href: 'https://developers.notion.com/reference/post-database-query' },
        ],
    },
    {
        title: 'Info',
        links: [
            { label: 'Wiki', href: 'https://en.wikipedia.org/wiki/Notion_(productivity_software)' },
            { label: 'Templates', href: 'https://www.notion.com/templates?srsltid=AfmBOortA63MgNr1_M1pDBpSuFNg7bwYmjbv0sspbPUgBO4aOb1UZ3DM' },
        ],
    },
    {
        title: 'Packages',
        links: [
            { label: 'Notionhq/client', href: 'https://www.npmjs.com/package/@notionhq/client' },
            { label: 'Render/client', href: 'https://www.npmjs.com/package/@notion-render/client' },
            { label: 'Hljs-plugin', href: 'https://www.npmjs.com/package/@notion-render/hljs-plugin' },
            {label: 'Bookmark plugin', href: 'https://www.npmjs.com/package/@notion-render/bookmark-plugin'}
        ],
    },

];

export const Footer = () => {
    return (
        <footer className='border-t border-gray-200 py-12'>
            <Container>
                {/* wrapper */}
                <div className='grid grid-cols-2 md:grid-cols-3  gap-8 text-sm justify-center'>
                    {footerData.map(section => (
                        <FooterSection
                            key={section.title}
                            title={section.title}
                            links={section.links}
                        />
                    ))}
                </div>
            </Container>
        </footer>
    );
};
