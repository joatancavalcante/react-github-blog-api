import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2.25rem auto;
    width: 54rem;
`;

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2.5rem;
    width: 54rem;
    height: 13.25rem;
    background: ${props => props.theme['base-profile']};
    box-shadow: 0px 0.125rem 1.75rem rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin-top: -6rem;
`;

export const PhotoProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    
    img {
        width: 148px;
        height: 148px;
        border-radius: 8px;   
    }
`;

export const InfoProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 612px;
    margin-left: 32px;
    gap: 8px;
    padding: 6px 0;
`;

export const HeaderInfoProfile = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    strong {
        display: flex;
        flex: 1;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 130%;
        color: ${props => props.theme['base-title']} 
    }

    span {
        margin-right: 8px;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 160%;
        text-transform: uppercase;
        color: ${props => props.theme['blue']}
    }
`;

export const ContentInfoProfile = styled.main`
    display: flex;
    flex: 1;
    height: 142px;

    p {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
        color: ${props => props.theme['base-text']}
    }
`;

export const FooterInfoProfile = styled.footer`
    display: flex;
    gap: 28px;
`;

export const IconAndDescriptionFooterContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    span {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
        color: ${props => props.theme['base-subtitle']}
    }
`;

export const SearchFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 54rem;
    gap: 0.75rem;
    margin-top: 4.5rem;

    input {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
        color: ${props => props.theme['base-text']};

        padding: 12px 16px;
        gap: 8px;
        width: 864px;
        height: 50px;
        background: ${props => props.theme['base-input']};
        border: 1px solid ${props => props.theme['base-border']};
        border-radius: 6px;
        &:focus {
            outline: none;
            box-shadow: 0px 0px 2px ${(props) => props.theme["blue"]};
        }
    }
`;

export const SearchFormHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const PostsContainer = styled.div`
    display: grid;    
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 3rem;

    @media (max-width: 950px) {
        grid-template-columns: 1fr;
    }

`;