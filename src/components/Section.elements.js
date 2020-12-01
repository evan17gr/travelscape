import styled, { css } from 'styled-components';
import {Link} from "react-router-dom";

const width = '100%', height='700px';

export const Container = styled.div`
    position: relative;
    overflow: hidden;
    width: ${width};
    height: auto;
    min-height: ${height};
    z-index:0;
`

export const Description = styled.div`
    position:absolute;
    top:0;
    left:0;
    z-index:1;
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    color:rgba(255,255,255, 1);
    font-size:3rem;
`

export const Video  = styled.video`
    width:100%;
    height:100vh;
    object-fit: cover;
    position: fixed;
    top: 0;
    left: 0;
`

export const Children  = styled.div`
    overflow: hidden;
    width: ${width};
    position: relative;
    height: ${height};
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
        border-width: 80px 250px*1.05;
    }
    }

`


