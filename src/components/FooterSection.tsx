interface FooterSectionProps {
    title: string;
    links: { label: string; href: string }[];
}

export const FooterSection = ({ title, links }: FooterSectionProps) => (
    <div>
        <h4 className='font-semibold mb-3'>{title}</h4>
        <div className='flex flex-col gap-2 text-gray-600'>
            {links.map(link => (
                <a
                    key={link.label}
                    href={link.href}
                    className='hover:text-black'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`Visit ${link.label}`}
                >
                    {link.label}
                </a>
            ))}
        </div>
    </div>
);
