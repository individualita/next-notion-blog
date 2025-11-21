import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

//components
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

                <main className='min-h-screen pt-16 flex '>
                    {/* children будет flex-элементом */}
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
