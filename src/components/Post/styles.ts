import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Container = styled(NavLink)`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    padding: 32px;
    width: 416px;
    height: 260px;
    background: ${props => props.theme["base-post"]};
    border-radius: 10px;

    div {
        overflow-x: auto;
        width: 100%;
        height: 100%;
    } 
`;

export const HeaderArticle = styled.header`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    height: 4rem;
    margin-bottom: 1.25rem;
    
    strong {
        display: flex;
        width: 260px;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 160%;
        color: ${props => props.theme["base-title"]};
    }

    time {
        text-align: end;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 160%;
        margin-top: 0.3125rem;
        color: ${props => props.theme["base-span"]};
    }
`;

export const Content = styled.main`
    display: flex;
    width: 22rem;
    overflow: hidden;
    height: 108px;
    p {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 160%;
        color: ${props => props.theme["base-text"]};
    }
`;