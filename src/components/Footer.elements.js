import styled from 'styled-components';
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaPinterestSquare,
} from 'react-icons/fa';

export const Container = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    position: absolute;
    z-index: 999;
    margin-top: 1050px;
    background-color: #0e121c;

    @media screen and (max-width: 960px) {
        margin-top: 1720px;
    }

    @media screen and (max-width: 768px) {
        height: 450px;
    }

    @media screen and (max-width: 540px) {
        height: 350px;
    }
`;

export const LeftSide = styled.div`
    width: 30%;
    height: 80%;
    display: flex;
    flex-direction: column;
`;

export const Center = styled.div`
    width: 30%;
    height: 87%;

    @media screen and (max-width: 1200px) {
        height: 85%;
    }

    @media screen and (max-width: 960px) {
        height: 84%;
    }
`;

export const RightSide = styled.div`
    width: 30%;
    height: 80%;
`;

export const TopPart = styled.div`
    display: flex;
    justify-content: center;
    height: 0.5%;
`;

export const Line = styled.hr`
    width: 90%;
    background-color: #ffc003;
    border-color: #ffc003;
`;

export const MidPart = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 4vw;
`;

export const Links = styled.ul`
    list-style: none;
    font-size: 1.2vw;
    text-align: center;
    color: #fff;
    line-height: 2.5vw;
`;

export const ItemInfo = styled.li`
    text-decoration: none;
    cursor: pointer;
`;

export const LinkItemInfo = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: #fff;
    transition: color 0.25s ease-in-out;
    &:hover {
        color: #ffc003;
    }
`;

export const TopPart2 = styled.div`
    display: flex;
    justify-content: center;
`;

export const Title = styled.h1`
    color: #ffc003;
    font-size: 2.7vw;
`;

export const MidPart2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 60%;
    align-items: center;
`;

export const SocialMedia = styled.ul`
    display: flex;
    margin-top: 2.5vw;
    list-style: none;
    font-size: 1.2vw;
    text-align: center;
    line-height: 2.5vw;
`;

export const SocialMediaInfo = styled.li`
    text-decoration: none;
    cursor: pointer;
    margin: 0 2vw;
`;

export const SocialMediaLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: black;
    transition: color 1s ease-in-out;
    &:hover {
        color: #ffc003;
    }
`;

export const VerticalLine = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin: 1vw 0 0.3vw 0;
`;

export const Line2 = styled.hr`
    background-color: #fff;
    border-color: #fff;
    height: 100%;
    width: 0.8%;
    margin-top: 0.2vw;
`;

export const LowerPart = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
`;

export const NewsLetter = styled.h2`
    color: #ffc003;

    @media screen and (max-width: 1200px) {
        font-size: 1.7vw;
    }
`;

export const LowPart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30%;
`;

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const Input = styled.input`
    height: 100%;
    background-color: #0e121c;
    width: 85%;
    text-align: center;
    border-color: #ffc003;
    color: #fff;
    &:focus {
        border-color: #ffc003;
    }
    &:focus {
        border-color: #ffc003;
    }
    &::placeholder {
        color: #fff;

        @media screen and (max-width: 768px) {
            font-size: 1.3vw;
        }

        @media screen and (max-width: 540px) {
            font-size: 1.6vw;
        }

        @media screen and (max-width: 411px) {
            font-size: 2vw;
        }
    }
`;

export const Button = styled.button`
    height: 100%;
    width: 85%;
    font-size: 1vw;
    border-color: #ffc003;
    font-weight: 600;
    color: #000000;
    background-color: #ffc003;
    cursor: pointer;
    transition: background-color 0.6s ease-in-out;

    &:hover {
        background-color: #bda302;
    }
    @media screen and (max-width: 768px) {
        font-size: 1.3vw;
    }

    @media screen and (max-width: 540px) {
        font-size: 1.6vw;
    }

    @media screen and (max-width: 411px) {
        font-size: 2vw;
    }
`;

export const Paragraph = styled.p`
    text-align: center;
    color: #fff;
    font-size: 1.1vw;
    @media screen and (max-width: 768px) {
        font-size: 1.4vw;
    }

    @media screen and (max-width: 540px) {
        font-size: 1.6vw;
    }

    @media screen and (max-width: 411px) {
        font-size: 1.9vw;
    }
`;

export const ParaDiv = styled.div`
    height: 100%;
    display: flex;
    align-items: flex-end;
`;

export const FacebookIcon = styled(FaFacebookSquare)`
    font-size: 3.7vw;
    color: #fff;
    transition: color 1s ease-in-out;
    &:hover {
        color: #ffc003;
    }
`;

export const InstagramIcon = styled(FaInstagramSquare)`
    font-size: 3.7vw;
    color: #fff;
    transition: color 1s ease-in-out;
    &:hover {
        color: #ffc003;
    }
`;

export const PinterestIcon = styled(FaPinterestSquare)`
    font-size: 3.7vw;
    color: #fff;
    transition: color 1s ease-in-out;
    &:hover {
        color: #ffc003;
    }
`;
