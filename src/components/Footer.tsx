import { Container } from './Container';
import { FooterSection } from './FooterSection';

const footerData = [
    {
        title: 'Product',
        links: [
            { label: 'AI', href: '#' },
            { label: 'Docs', href: '#' },
            { label: 'Wikis', href: '#' },
            { label: 'Projects', href: '#' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { label: 'Blog', href: '#' },
            { label: 'Guides', href: '#' },
            { label: 'Templates', href: '#' },
            { label: 'Help Center', href: '#' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About', href: '#' },
            { label: 'Careers', href: '#' },
            { label: 'Media Kit', href: '#' },
        ],
    },
    {
        title: 'Download',
        links: [
            { label: 'iOS & Android', href: '#' },
            { label: 'Mac & Windows', href: '#' },
            { label: 'Web Clipper', href: '#' },
        ],
    },
];

export const Footer = () => {
    return (
        <footer className='border-t border-gray-200 py-12'>
            <Container>
                {/* wrapper */}
                <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-sm'>
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
