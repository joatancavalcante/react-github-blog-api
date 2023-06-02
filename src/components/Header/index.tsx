import { Container } from "./styles";
import GitHubBlogLogo from '../../assets/cover-github-blog.svg';

export function Header(){
    return(
        <Container>
            <img src={GitHubBlogLogo} />
        </Container>    
    )
}