import styled from "styled-components";
import { ReactComponent as CineLogo } from 'assets/images/logo.svg';
export const Container = styled.div`
    width: 100%;
    background-color: #16151A;
`
export const Wrap = styled.div`
    max-width: 1280px;
    height: 70px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
`
export const LogoWrap = styled.a`
    cursor: pointer;    
`
export const Logo = styled(CineLogo)`
    width: 150px;
`
export const Menu = styled.ul`
    padding: 0;
    display: flex;
    justify-content: space-between;
`
export const MenuItem = styled.li`
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    list-style-type: none;
    &:not(:last-child){
        margin-right: 30px;
    }
    &:hover {
        color: #FFFF4D;
    }
`
export const MenuLink = styled.a`
    text-decoration: none;
`
export const RightSection = styled.div``
export const SignIn = styled.button`
    color: #000;
    border: transparent;
    outline: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    border-radius: 4px;
    padding: 10px 24px;
    background-color: #FFFF4D;
    &:hover {
        color: #FFFF4D;
        background-color: transparent;
        border: 0.5px solid #FFFF4D;
        transition: 0.3s;
    }
`