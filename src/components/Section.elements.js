import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { FaAtlas } from 'react-icons/fa';

const width = '100%',
    height = '700px';

export const Container = styled.div`
    position: relative;
    overflow: hidden;
    width: ${width};
    height: auto;
    min-height: ${height};
    z-index: 0;
`;

export const Description = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 700px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: rgba(255, 255, 255, 1);
    font-size: 3rem;
`;

export const Video = styled.video`
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: fixed;
    top: 0;
    left: 0;
`;

export const Children = styled.div`
    overflow: hidden;
    width: ${width};
    position: relative;
    height: ${height};
`;

export const Title = styled.h1`
    font-family: 'Major Mono Display', monospace;
    color: #fff;
    text-shadow: 12px 12px 12px #000000;
    font-size: 8rem;

    @media screen and (max-width: 960px) {
        font-size: 6rem;
    }

    @media screen and (max-width: 380px) {
        font-size: 2.5rem;
    }

    @media screen and (min-width: 410px) {
        font-size: 4rem;
    }
`;

export const Paragraph = styled.p`
    font-size: 1.5rem;
    line-height: 2.5rem;
    font-weight: 900;
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: #fff;
    text-shadow: 12px 12px 12px #000000;
    font-family: 'Major Mono Display', monospace;
    text-align: center;

    @media screen and (max-width: 960px) {
        font-size: 1.35rem;
    }

    @media screen and (min-width: 410px) {
        font-size: 1.25rem;
    }

    @media screen and (max-width: 380px) {
        font-size: 0.9rem;
    }
`;
export const Arrow = styled.div`
    z-index: 100;
    line-height: ${height};
    text-align: center;
    position: absolute;
    top: 0;
    width: 10%;
    font-size: 3em;
    color: #ffc003;
    opacity: 1;
    cursor: pointer;
    user-select: none;
    ${(props) =>
        props.right
            ? css`
                  left: 90%;
              `
            : css`
                  left: 0%;
              `}
    transition: opacity 0.25s ease-in-out;
    &:hover {
        color: #fff;
        text-shadow: 4px 4px 4px #000000;
    }

    @media screen and (max-width: 960px) {
        display: none;
    }
`;

export const Icon = styled(FaAtlas)`
    color: #ffc003;
    border-radius: 5px;
    font-size: 6rem;
    transform: rotate(25deg);
    cursor: pointer;
    transition: color 0.7s ease-in-out;
    &:hover {
        color: #fff;
    }

    @media screen and (max-width: 960px) {
        font-size: 5rem;
    }

    @media screen and (max-width: 420px) {
        font-size: 3.5rem;
    }
`;

export const TitleDiv = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const Button = styled.a`
    text-decoration: none;
    line-height: $btn-height;
    color: black;
    &:before,
    &:after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border: 0 solid;
        transform: rotate(360deg);
    }

    &:before {
        bottom: 0;
        left: 0;
        border-color: transparent transparent transparent black;
    }

    &:after {
        top: 0;
        right: 0;
        border-color: transparent black transparent transparent;
    }

    &:hover {
        color: tint(#eeeeee, 75%);

        &:before,
        &:after {
            border-width: 80px 250px * 1.05;
        }
    }
`;
