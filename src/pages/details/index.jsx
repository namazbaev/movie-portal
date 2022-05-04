import { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { getById } from 'services/movies';
import { useParams } from 'react-router-dom';
import { movieAction } from 'redux/slices/movies';
import { useDispatch, useSelector } from 'react-redux';
import { Container, PosterWrap, Poster, Info, AllInfo, InfoList, InfoItem, InfoItemKey, InfoItemValue } from './style';
const Details = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { clearState, getByMovieId } = movieAction;
    const obj = useSelector(state => state.movies.item);

    useEffect(() => {
        getById(params.id)
            .then((res) => dispatch(getByMovieId(res.movie)))
        return () => dispatch(clearState())
    }, [])

    return (
        <>
            <Container>
                <Info>
                    <PosterWrap>
                        <Poster src={obj?.files?.poster_url || ''} alt={obj.title} />
                    </PosterWrap>
                    <AllInfo>
                        <InfoList>
                            <InfoItem>
                                <InfoItemKey>Название</InfoItemKey>
                                <InfoItemValue>{obj.title}</InfoItemValue>
                            </InfoItem>
                            <InfoItem>
                                <InfoItemKey>Страна</InfoItemKey>
                                <InfoItemValue>{obj.countries_str}</InfoItemValue>
                            </InfoItem>
                            <InfoItem>
                                <InfoItemKey>Дата</InfoItemKey>
                                <InfoItemValue>{obj.year}</InfoItemValue>
                            </InfoItem>
                            <InfoItem>
                                <InfoItemKey>Жанр</InfoItemKey>
                                <InfoItemValue>{obj.genres_str}</InfoItemValue>
                            </InfoItem>
                            <InfoItem>
                                <InfoItemKey>Описание</InfoItemKey>
                                <InfoItemValue>{obj.description}</InfoItemValue>
                            </InfoItem>
                        </InfoList>
                        <ReactPlayer controls={true} loop={true} width='100%' height='355px' url='https://www.youtube.com/watch?v=3Rj3wQce1bU' />
                    </AllInfo>
                </Info>
            </Container>
        </>
    )
}

export default Details