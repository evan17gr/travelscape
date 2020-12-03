import styled from 'styled-components';

export const Container = styled.div`
    height: 1000px;
    background-color: #fff;
    position: absolute;
    z-index: 999;
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
`;

export const TitleDiv = styled.div`
    margin: 1.5rem 0 3rem 2rem;
`;

export const Title = styled.h1`
    font-size: 2.3rem;
    font-family: 'Major Mono Display', monospace;
`;

export const CardsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 0 5rem;
`;

export const CardDiv = styled.div`
    margin: 1rem 2rem;
    height: 400px;
    width: 45%;
    position: relative;
`;

export const ImageDiv = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

export const BackgroundImage = styled.img`
    height: 100%;
    width: 100%;
`;

export const InfoDiv = styled.div`
    z-index: 999;
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;

    height: 100%;
    width: 100%;
`;

export const InfoTitleDiv = styled.div`
    display: flex;
    justify-content: center;
`;

export const InfoTitle = styled.h2`
    padding: 0.3rem;
    margin: 2rem 2rem;
    font-size: 2.1rem;
    border-bottom: 2px solid black;
    border-bottom-width: 60%;
    font-family: 'Major Mono Display', monospace;
`;

export const BottomInfoDiv = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;

export const NavBar = styled.div`
    display: flex;
    background-color: black;
    width: 100%;
`;

export const NavBarLink = styled.a``;
