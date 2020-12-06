import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaAngleDoubleLeft } from 'react-icons/fa';

export const Container = styled.div`
    height: 1050px;
    background-color: #101522;
    position: absolute;
    z-index: 999;
    width: 100%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 960px) {
        height: 1720px;
    }
`;

export const TitleDiv = styled.div`
    margin: 1.5rem 0 3rem 0;
`;

export const Title = styled.h1`
    font-size: 2.3rem;
    font-family: 'Major Mono Display', monospace;
    color: #ffc003;

    @media screen and (max-width: 960px) {
        font-size: 1.7rem;
    }

    @media screen and (max-width: 960px) {
        font-size: 1.7rem;
    }

    @media screen and (max-width: 960px) {
        text-align: center;
    }
`;

export const CardsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 0 5rem;
    height: 100%;

    @media screen and (max-width: 1460px) {
        margin: 0 1rem;
    }

    @media screen and (max-width: 960px) {
        flex-direction: column;
        flex-wrap: nowrap;
    }
`;

export const CardDiv = styled.div`
    margin: 1rem 2rem;
    height: 400px;
    width: 45%;
    position: relative;
    @media screen and (max-width: 1460px) {
        width: 45%;
        margin: 1rem 0.5rem;
    }

    @media screen and (max-width: 1460px) {
        width: 48%;
        margin: 1rem 0.5rem;
    }

    @media screen and (max-width: 960px) {
        height: 350px;
        width: 80%;
        margin: 1rem 0;
    }

    @media screen and (max-width: 562px) {
        width: 95%;
        margin: 1rem 0;
    }

    @media screen and (max-width: 375px) {
        width: 99%;
        margin: 1rem 0;
    }

    @media screen and (max-width: 320px) {
        width: 100%;
    }
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
    object-fit: cover;
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
    font-weight: 999;
`;

export const InfoTitle = styled.h2`
    padding: 0.3rem;
    color: #fff;
    margin: 2rem 2rem;
    font-size: 2.1rem;
    border-bottom: 2px solid #fff;
    text-shadow: 7px 7px 7px #000000;
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
    justify-content: center;
    align-items: center;
    background-color: black;
    width: 100%;
    height: 17%;
    @media screen and (max-width: 960px) {
        height: 22%;
    }
`;

export const NavBarLink = styled.a`
    font-size: 1.1vw;
    margin: 1.5vw;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    font-family: 'Major Mono Display', monospace;

    &:hover {
        color: #fff;
    }

    @media screen and (max-width: 1024px) {
        font-size: 1.3vw;
    }

    @media screen and (max-width: 960px) {
        font-size: 1.5vw;
    }

    @media screen and (max-width: 768px) {
        font-size: 2vw;
    }

    @media screen and (max-width: 540px) {
        font-size: 2.5vw;
    }

    @media screen and (max-width: 320px) {
        font-size: 3vw;
    }
`;

export const NavBarItem = styled.li`
    color: #ffc003;
    padding-top: 0.5vw;
    padding-bottom: 1vw;
    position: relative;
    font-weight: 999;
    transition: border 0.3s ease-in-out;

    &:hover::after {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: calc(100vw - calc(100vw - 100%));
        content: '';
        height: 5px;
        background-color: #ffc003;
    }
`;

export const NavBarItemActive = styled.li`
    color: #ffc003;
    font-weight: 999;
    position: relative;
    &::after {
        position: absolute;
        bottom: 0;
        right: 0;
        width: calc(100vw - calc(100vw - 100%));
        left: 0;
        content: '';
        height: 5px;
        background-color: #ffc003;
    }
`;

export const NavBarList = styled.ul`
    display: flex;
    list-style: none;
    height: 100%;
    width: 100%;
`;

export const PlacesInfoDiv = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 45%;
    color: #fff;
    text-shadow: 4px 4px 4px #000000;
    line-height: 1.8rem;
    padding-left: 0.6rem;
    display: flex;
    align-items: flex-end;
    transition: background-color 1s ease-in-out;

    &:hover {
        background-color: rgba(0, 0, 0, 0.25);
    }

    @media screen and (max-width: 1460px) {
        line-height: 1.6rem;
    }

    @media screen and (max-width: 1200px) {
        font-size: 0.95rem;
    }

    @media screen and (max-width: 1105px) {
        font-size: 0.85rem;
    }

    @media screen and (max-width: 992px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 400px) {
        font-size: 0.7rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 0.6rem;
    }
`;

export const PlacesInfoSubDiv = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
`;

export const HotelInfo = styled.div`
    width: 100%;
`;

export const InfoImage = styled.img`
    height: 110px;
    width: 110px;
    margin-right: 0.2rem;
    border-radius: 100%;
    cursor: pointer;
    opacity: 1;
    transition: opacity 1s ease-in-out;

    &:hover {
        opacity: 0.6;
    }

    @media screen and (max-width: 960px) {
        margin-right: 0.7rem;
        height: 90px;
        width: 90px;
    }

    @media screen and (max-width: 652px) {
        height: 85px;
        width: 85px;
        margin-right: 0.3rem;
    }

    @media screen and (max-width: 420px) {
        margin-right: 0.1rem;
    }

    @media screen and (max-width: 400px) {
        height: 70px;
        width: 70px;
    }
`;

export const ImagesDiv = styled.div`
    display: flex;
    height: 80%;
    width: 70%;
    justify-content: flex-end;
    @media screen and (max-width: 960px) {
        width: 80%;
    }

    @media screen and (max-width: 652px) {
        align-items: flex-end;
    }

    @media screen and (max-width: 400px) {
        align-items: center;
    }
`;

export const ExploreDiv = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 4rem;
`;

export const ExploreLink = styled(Link)`
    font-size: 2.3rem;
    color: #ffc003;
    text-decoration: none;
    font-family: 'Major Mono Display', monospace;
    @media screen and (max-width: 960px) {
        font-size: 1.7rem;
    }

    @media screen and (max-width: 720px) {
        text-align: center;
    }

    @media screen and (max-width: 410px) {
        font-size: 1.2rem;
    }
`;

export const ArrowIcon = styled(FaAngleDoubleLeft)`
    font-size: 2.3rem;
    color: #ffc003;
    text-decoration: none;
    animation: arrow 3.5s infinite;

    @keyframes arrow {
        from {
            position: absolute;
            right: 0;
        }
        50% {
            position: absolute;
            right: 1.5rem;
        }
        to {
            position: absolute;
            right: 0;
        }
    }

    @media screen and (max-width: 960px) {
        font-size: 1.7rem;
    }
`;
