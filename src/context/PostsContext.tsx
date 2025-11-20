'use client';

import {
    createContext,
    useContext,
    useState,
    Dispatch,
    SetStateAction,
} from 'react';



type PostsContextType = {
    results: any[];
    topics: string[];
    filteredPosts: any[];
    selectedTopic: string | null;
    setSelectedTopic: Dispatch<SetStateAction<string | null>>;
};

const PostsContext = createContext<PostsContextType | undefined>(undefined);

export function PostsProvider({
    results,
    children,
}: {
    results: any[];
    children: React.ReactNode;
}) {
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

    // Extract unique topics on the server
    const topics = Array.from(
        new Set(
            results
                .map(
                    (page: any) =>
                        page.properties.topic?.rich_text?.[0]?.plain_text,
                )
                .filter(Boolean),
        ),
    ).sort();



    const filteredPosts = selectedTopic
        ? results.filter(
              (p: any) =>
                  p.properties.topic?.rich_text?.[0]?.plain_text ===
                  selectedTopic,
          )
        : results;
        

    return (
        <PostsContext.Provider
            value={{
                results,
                topics,
                filteredPosts,
                selectedTopic,
                setSelectedTopic,
            }}
        >
            {children}
        </PostsContext.Provider>
    );
}

// Hook for convenient access
export const usePosts = () => {
    const ctx = useContext(PostsContext);
    if (!ctx) {
        throw new Error('usePosts must be used within a PostsProvider');
    }
    return ctx;
};
