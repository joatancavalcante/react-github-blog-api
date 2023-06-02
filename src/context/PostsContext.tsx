import { ReactNode, createContext, useState } from "react";

interface Post {
    title: string;
    createdAt: string;
    content: string;
}

interface PostsContextType {
    posts: Post[];
}

const PostsContext = createContext({} as PostsContextType);

interface PostsContextProviderProps {
    children: ReactNode;
}

export function PostsContextProvider({children}: PostsContextProviderProps){

    const [posts, setPosts] = useState<Post[]>([]);

    return (
        <PostsContext.Provider value={{posts}}>
            {children}
        </PostsContext.Provider>
    )
}