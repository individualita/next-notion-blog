import { Container } from '@/src/components/Container';

export default function AboutPage() {
    return (
        <section className='py-12 flex flex-1 items-center justify-center'>
            <Container>
                <article className='prose mx-auto '>
                    <h3 className='text-3xl font-bold text-gray-900 mb-6'>
                        About
                    </h3>
                    <p className='text-lg text-gray-700 leading-relaxed mb-4'>
                        This project was created as a test of the{' '}
                        <strong>Notion API</strong> — to see how Notion pages
                        can be turned into a working blog. The idea was simple:
                        write posts directly in Notion, fetch them through the
                        API, and render them with Next.js.
                    </p>
                    <p className='text-lg text-gray-700 leading-relaxed mb-4'>
                        It’s not meant to be a full‑scale CMS, but rather an
                        experiment to explore:
                    </p>
                    <ul className='list-disc  text-lg list-inside text-gray-700 mb-4 space-y-2'>
                        <li>
                            how different content formats (headings, lists,
                            images, code blocks) can be displayed,
                        </li>
                        <li>how plugins improve the experience,</li>
                        <li>
                            and how lightweight a blog can be when powered by
                            tools you already use every day.
                        </li>
                    </ul>
                    <p className='text-lg text-gray-700 leading-relaxed mb-4'>
                        {' '}
                        Design inspiration? I basically took Notion’s design and
                        made just a tiny tweak. Honestly, their clean layout was
                        too good not to borrow — and it fits perfectly for a
                        lightweight blog experiment.
                    </p>
                </article>
            </Container>
        </section>
    );
}
