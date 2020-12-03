import styled from 'styled-components';
import { Container } from '../gloablStyles';
import { Link } from 'react-router-dom';
import { FaMagento } from 'react-icons/fa';

export const Nav = styled.nav`
    background: #101522;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const NavBarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;
`;

export const NavLogo = styled(Link)`
    color: #ffc003;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    transition: color 1.5s ease-in;

    &:hover {
        color: #fff;
    }

    @media screen and (min-width: 410px) {
        font-size: 1.7rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 280px) {
        font-size: 1.3rem;
    }
`;

export const NavIcon = styled(FaMagento)`
    margin: 0.3rem;
    color: #ffc003 !important;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        margin-top: 0rem;
        font-size: 1.8rem;
        cursor: pointer;
    }

    @media screen and (min-width: 410px) {
        margin-top: 0.27rem;
        font-size: 1.8rem;
    }

    @media screen and (max-width: 380px) {
        margin-top: 0.34rem;
        font-size: 1.7rem;
    }

    @media screen and (max-width: 320px) {
        margin-top: 0.57rem;
        font-size: 1.5rem;
    }

    @media screen and (max-width: 280px) {
        margin-top: 0.82rem;
        font-size: 1.3rem;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style-type: square none;
    text-align: center;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({ click }) => (click ? 0 : ' -100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: #101522;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;

    &:hover {
        border-bottom: 5px solid #ffc003;
    }

    @media screen and (max-width: 960px) {
        width: 100%;

        &:hover {
            border: none;
        }
    }
`;

export const NavLinks = styled(Link)`
    color: #ffc003;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    transition: color 0.25s ease-in-out;
    &:hover {
        color: #fff;
    }

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 3rem;
        width: 100%;
        display: table;

        &:hover {
            color: #fff;
            transform: all 0.3s ease;
        }
    }
`;

export const NavItemBtn = styled.li`
    @media screen and (max-width: 960px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }
`;

export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
`;
