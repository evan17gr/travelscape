import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
        font-family: "Source Sans Pro", sans-serif;
    }

`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-wdith: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`;

export const Button = styled.button`
    border-radius: 4px;
    background: ${({ primary }) => (primary ? '#ffc003' : '#cf9b00')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
    color: black;
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: #fff;
        color: #fff;
        background: ${({ primary }) => (primary ? '#cf9b00' : '#ffc003')};
    }

    @media screen and (max-wdith: 960px) {
        width: 100%;
    }
`;

export default GlobalStyle;
