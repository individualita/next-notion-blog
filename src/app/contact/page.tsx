import { Container } from '@/src/components/Container';
import { ContactLink } from '@/src/components/ContactLink';

const links = [
    { href: 'https://www.linkedin.com/in/romaw3b', label: 'LinkedIn' },
    { href: 'https://github.com/individualita', label: 'GitHub' },
    { href: 'https://www.romaw3b.com', label: 'My website' },
];
export default function ContactPage() {
    return (
        <section className='flex flex-1 items-center justify-center '>
            <Container>
                <div className='text-center space-y-6 '>
                    <h3 className='text-3xl font-bold '>Contact</h3>
                    <p className='text-gray-700 font-serif'>Find me on:</p>

                    <div className='flex justify-center gap-6 font-serif'>
                        {links.map(link => (
                            <ContactLink
                                key={link.href}
                                href={link.href}
                                label={link.label}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
