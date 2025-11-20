import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { fetchLivePages } from '../lib/notion';

import './globals.css';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';


const inter = Inter({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Notion-like blog :)',
    description: 'created by romaw3b',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${inter.variable} bg-white text-gray-900 antialiased`}
            >
                <Header />

                <div className='min-h-screen pt-16'>
                    <div className='flex'>{children}</div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
