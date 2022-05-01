import styled from "styled-components";

export const Container = styled.div`
    max-width: 1280px;
    max-height: 100vh;
    margin: 0 auto;
    background-color: #24303D;
`
export const Info = styled.div`
    width: 100%;
    color: #fff;
    display: flex;
    padding: 30px 50px;
`
export const PosterWrap = styled.div`
    width: 40%;
    padding-right: 30px;
`
export const Poster = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const AllInfo = styled.div`
    width: 60%;
    height: 100%;
`
export const InfoList = styled.ul`
    margin-bottom: 15px;
`
export const InfoItem = styled.li`
    display: flex;
    list-style-type: none;
    &:not(:last-child) {
        margin-bottom: 10px;
    }
`
export const InfoItemKey = styled.div`
    width: 25%;
    padding: 10px;
    color: #a5bbdc;
    display: flex;
    align-items: center;
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase;
    background-color: #304156;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
`
export const InfoItemValue = styled.div`
    width: 75%;
    padding: 10px;
    color: #798fa6;
    font-size: 12px;
    font-weight: 700;
    background-color: #222933;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
`