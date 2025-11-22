type ContactLinkProps = {
    href: string;
    label: string;
};

export function ContactLink({ href, label }: ContactLinkProps) {
    return (
        <a
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-700 hover:text-sky-600 transition-colors font-serif'
        >
            {label}
        </a>
    );
}
