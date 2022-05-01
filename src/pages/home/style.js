import Paginate from "rc-pagination";
import styled from "styled-components";
import { Link } from 'react-router-dom';
export const Container = styled.div`
    margin: 0 auto;
    max-width: 1280px;
    background-color: #16151A;
`
export const Main = styled.main`
    width: 100%;
    height: 100%;
    display: grid;
    padding: 20px 0;
    background-color: #16151A;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
`
export const LinkTo = styled(Link)`
    text-decoration: none;
`
export const Card = styled.div`
    width: 100%;
    height: 300px;
    opacity: 0.9;
    cursor: pointer;
    border-radius: 8px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
     -webkit-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
    &:hover {
        opacity: 1;
	    transform: scale(1.01);
	    -ms-transform: scale(1.01);
        -webkit-transform: scale(1.01);
    }
`
export const CardBody = styled.div`
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background-image: url(${({ img }) => img || ''});
`
export const CardFooter = styled.div`
    height: 15%;
    color: #fff;
    display: flex;
    padding: 10px 8px;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: #1D232C;
    
`
export const Title = styled.p`
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
`
export const Pagination = styled(Paginate)`
    margin: 30px 0;
    li {
        padding: 10px;
        height: 40px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-color: #22303E;
        border: none;
        border-radius: 4px;
        &:hover {
            color: #A5AEAE;
            background-color: #304156;
            a {
                color: #A5AEAE;
            }
        }
        a {
            color: #A5AEAE;
        }
        button {
            color: #A5AEAE;
        }
    }
`
export const NextPrev = styled.button`
    border: none;
    color: #A5AEAE;
    background-color: transparent;
`