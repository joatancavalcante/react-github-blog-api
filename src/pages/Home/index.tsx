import { Container, 
    ContentInfoProfile, 
    FooterInfoProfile, 
    HeaderInfoProfile, 
    IconAndDescriptionFooterContent, 
    InfoProfileContainer, 
    PhotoProfileContainer, 
    PostsContainer, 
    ProfileContainer,
    SearchFormContainer,
    SearchFormHeader } from "./styles";
import { ArrowSquareUpRight, Buildings, GithubLogo, UsersFour } from "phosphor-react";
import { defaultTheme } from '../../styles/theme/defaultTheme'
import { Post } from "../../components/Post";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../services/Api";

interface UserProps {
    name: string;
    followers: number;
    login: string;
    company: string;
    bio: string;
    avatar_url: string;
}

export interface PostProps {
    number: string; 
    body: string;
    created_at: string;
    title: string;
    user: string;
    comments: number;
}

export function Home(){

    const [user, setUser] = useState<UserProps>({} as UserProps);
    const [posts, setPosts] = useState<PostProps[]>([]);
    const [query, setQuery] = useState<string>('');

    const fetchUserData = useCallback(async () => {
        const response = await api.get('users/joatancavalcante');
        const { name, followers, login, company, bio, avatar_url } = response.data;
        const fetchedUser = {
            name, 
            followers,
            login,
            company,
            bio,
            avatar_url
        };
        setUser(fetchedUser);
    }, [])

    const fetchIssues = useCallback(async() => {
        const response = await api.get(`search/issues?q=${query}is:issue%20is:open%20repo:joatancavalcante/react-github-blog-api/issues`);
        const postsArray = response.data.items.map((item: any) => {
            return {
                number: item.number,
                body: item.body,
                created_at: item.created_at,
                title: item.title,
                user: item.user.login,
                comments: item.comments               
            } as PostProps;
        })
        setPosts(postsArray);
    }, [query])

    useEffect(() => {
        fetchUserData();
    }, [fetchUserData])

    useEffect(() => {
        fetchIssues();
    }, [fetchIssues])

    return (
        <Container>
            <ProfileContainer>
                <PhotoProfileContainer>
                    <PhotoProfileContainer>
                        <img src={user.avatar_url} alt="" />
                    </PhotoProfileContainer>
                    <InfoProfileContainer>
                        <HeaderInfoProfile>
                            <strong>{user.name}</strong>
                            <span>GITHUB</span>
                            <ArrowSquareUpRight size={18} color={defaultTheme.blue} />
                        </HeaderInfoProfile>
                        <ContentInfoProfile>
                            <p>
                                {user.bio}
                            </p>
                        </ContentInfoProfile>
                        <FooterInfoProfile>
                            <IconAndDescriptionFooterContent>
                                <GithubLogo size={18} color={defaultTheme["base-label"]}/>  
                                <span>{user.login}</span>
                            </IconAndDescriptionFooterContent>
                            <IconAndDescriptionFooterContent>
                                <Buildings size={18} color={defaultTheme["base-label"]}/>  
                                <span>{user.company}</span>
                            </IconAndDescriptionFooterContent>
                            <IconAndDescriptionFooterContent>
                                <UsersFour size={18} color={defaultTheme["base-label"]}/>  
                                <span>{user.followers} seguidores</span>
                            </IconAndDescriptionFooterContent>
                        </FooterInfoProfile>
                    </InfoProfileContainer>
                </PhotoProfileContainer>
            </ProfileContainer>    
            <SearchFormContainer>
                <SearchFormHeader>
                    <span>Publicações</span>
                    <p>{posts.length} publicações</p>
                </SearchFormHeader>
                <input 
                    type="text"
                    placeholder="Buscar conteúdo"
                    onKeyDown={(e) =>
                        e.key === 'Enter' && setQuery(e.currentTarget.value)
                    }
                >                    
                </input>
            </SearchFormContainer>  
            <PostsContainer>
                {
                    posts.map((post) => (
                        <Post key={post.number} postData={post} />
                    ))
                }
            </PostsContainer>          
        </Container>
    )
}