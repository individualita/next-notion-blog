
import { PostsProvider } from '../context/PostsContext';
import { fetchLivePages } from '../lib/notion';
import HomeContent from '../components/HomeContent';

export default async function Home() {
    const pages = await fetchLivePages();
    const results = pages.results;

    return (
        <PostsProvider results={results}>
            <HomeContent />
        </PostsProvider>
    );
}
