import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2.25rem auto;
    width: 54rem;
`;

export const PostHeader = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    width: 54rem;
    height: 13.25rem;
    background: ${props => props.theme['base-profile']};
    box-shadow: 0px 0.125rem 1.75rem rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin-top: -6rem;
`;

export const MenuHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 1.25rem;
`;

export const BaseButtonArea = styled.button`
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    gap: 0.625rem;
    cursor: pointer;

    span {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 0.75rem;
        line-height: 160%;
        text-transform: uppercase;
        color: ${props => props.theme["blue"]};
    }
`;

export const BackButtonArea = styled(BaseButtonArea)`
    
`;

export const SeeOnGithubArea = styled(BaseButtonArea)`

`;

export const PostTitle = styled.p`
    display: flex;
    flex: 1;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    margin-bottom: 0.5rem;
    color: ${props => props.theme["base-title"]};
`;

export const AdditionalInfoHeader = styled.footer`
    display: flex;
    flex-direction: row;
    gap: 2rem;
`;

export const IconAndDescriptionFooterContent = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 160%;
        color: ${props => props.theme["base-span"]};
    }
`;

export const Content = styled.div`
    display: flex;
    flex: wrap;
    padding: 2.5rem 2rem; 
    max-width: 864px;
    white-space: pre-wrap;
    overflow: hidden;
    
    div {
        overflow-x: auto;
        width: 100%;
        height: 100%;
    }      
`;