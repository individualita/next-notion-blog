'use client';
import { Container } from '@/src/components/Container';
import Link from 'next/link';

export default function ContactPage() {
    return (
        <section className='flex flex-1 items-center justify-center '>
            <Container>
                <div className='text-center space-y-6 '>
                    <h3 className='text-3xl font-bold '>Contact</h3>
                    <p className='text-gray-700 font-serif'>Find me on:</p>

                    <div className='flex justify-center gap-6 font-serif'>
                        <a
                            href='https://www.linkedin.com/in/romaw3b'
                            target='_blank'
                            className='text-gray-700 hover:text-sky-600 transition-colors'
                        >
                            LinkedIn
                        </a>
                        <a
                            href='https://github.com/individualita'
                            target='_blank'
                            className='text-gray-700 hover:text-sky-600 transition-colors'
                        >
                            GitHub
                        </a>
                        <a
                            href='https://www.romaw3b.com'
                            target='_blank'
                            className='text-gray-700 hover:text-sky-600 transition-colors '
                        >
                            My website
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}
