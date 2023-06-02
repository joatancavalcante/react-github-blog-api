
import { PostProps } from "../../pages/Home";
import { Container, Content, HeaderArticle } from "./styles";
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface PostDataProps {
    postData: PostProps;
}

export function Post({ postData }: PostDataProps){

    const formattedDate = formatDistanceToNow(new Date(postData.created_at), {
        locale: ptBR,
        addSuffix: true,
    })    

    return (
        <Container to={`/detail/${postData.number}`}>
            <div>
                <HeaderArticle>
                    <strong>{postData.title}</strong>
                    <time>{formattedDate}</time>
                </HeaderArticle>
                <Content>
                    <p>
                        {postData.body}
                    </p>
                </Content>
            </div>
        </Container>
    )
}