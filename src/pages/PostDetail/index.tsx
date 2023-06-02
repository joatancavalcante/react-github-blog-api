import { ArrowLeft, ArrowUpRight, Calendar, ChatCircle, GithubLogo } from "phosphor-react";
import { AdditionalInfoHeader, 
    BackButtonArea, 
    Container, 
    Content, 
    IconAndDescriptionFooterContent, 
    MenuHeader, 
    PostHeader, 
    PostTitle, 
    SeeOnGithubArea } from "./styles";
import { defaultTheme } from "../../styles/theme/defaultTheme";
import { useNavigate } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from 'remark-gfm'
import { useParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from "react";
import { api } from "../../services/Api";
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface PostDetailProps {
    title: string;
    login: string;
    created_at: string;
    comments: number;
    body: string;
}

export function PostDetail(){

    const [post, setPost] = useState<PostDetailProps>({} as PostDetailProps);

    const { number } = useParams();

    const navigate = useNavigate();

    const fetchPost = useCallback(async () => {
        const response = await api.get(`/repos/joatancavalcante/react-github-blog-api/issues/${number}`)
        const {
            title, 
            user, 
            created_at, 
            comments, 
            body
        } = response.data;
        const postObj = {
            title, 
            login: user.login, 
            created_at: formatDistanceToNow(new Date(created_at), {
                locale: ptBR,
                addSuffix: true,
            }), 
            comments, 
            body
        } as PostDetailProps;
        setPost(postObj);
    }, [])

    useEffect(() => {
        fetchPost();
    }, [fetchPost]);

    function handleBack(){
        navigate("/");
    }

    const markdown = post.body;

    return (
        <Container>
            <PostHeader>
                <MenuHeader>
                    <BackButtonArea onClick={handleBack}>
                        <ArrowLeft size={18} color={defaultTheme.blue} weight="bold" />
                        <span>VOLTAR</span>                        
                    </BackButtonArea>
                    <SeeOnGithubArea>
                        <span>VER NO GITHUB</span>
                        <ArrowUpRight size={18} color={defaultTheme.blue} weight="bold" />                        
                    </SeeOnGithubArea>
                </MenuHeader>
                <PostTitle>
                    {post.title}
                </PostTitle>
                <AdditionalInfoHeader>
                    <IconAndDescriptionFooterContent>
                        <GithubLogo size={18} color={defaultTheme["base-label"]} weight="fill"/>  
                        <span>{post.login}</span>
                    </IconAndDescriptionFooterContent>
                    <IconAndDescriptionFooterContent>
                        <Calendar size={18} color={defaultTheme["base-label"]} weight="fill"/>  
                        <span>{post.created_at}</span>
                    </IconAndDescriptionFooterContent>
                    <IconAndDescriptionFooterContent>
                        <ChatCircle size={18} color={defaultTheme["base-label"]} weight="fill"/>  
                        <span>{post.comments} comentários</span>
                    </IconAndDescriptionFooterContent>
                </AdditionalInfoHeader>
            </PostHeader>
            <Content>
                <div>
                    <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
                </div>    
            </Content>
        </Container>
    )
}