import "rc-pagination/assets/index.css";
import { useEffect, useState } from 'react';
import { getAllMovies } from 'services/movies';
import { movieAction } from 'redux/slices/movies';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Main, LinkTo, Card, CardBody, CardFooter, Title, Pagination, NextPrev } from './style';
const Home = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const { getList, clearState } = movieAction;
    const state = useSelector(state => state.movies.list);
    useEffect(() => {
        getAllMovies(page)
            .then((res) => dispatch(getList(res)))
        return () => dispatch(clearState())
    }, [page])
    const updatePage = p => setPage(p)
    const itemRender = (current, type, originalElement) => {
        if (type === "prev") {
            return <NextPrev>Предыдущий</NextPrev>;
        }
        if (type === "next") {
            return <NextPrev>Следующий</NextPrev>;
        }
        return originalElement;
    }
    const paginationProps = {
        total: state?.total_items,
        current: page, locale: 'ru_RU',
        pageSize: state?.items_per_page || 10,
        showLessItems: true, onChange: updatePage,
        itemRender: itemRender, hideOnSinglePage: true
    }
    return (
        <Container>
            <Main>
                {state?.movies?.length ? state.movies.map(({ files: { poster_url }, title, id }) => (
                    <LinkTo key={id} to={`/details/${id}`}>
                        <Card>
                            <CardBody img={poster_url} />
                            <CardFooter>
                                <Title>{title}</Title>
                            </CardFooter>
                        </Card>
                    </LinkTo>
                )) : 'Фильмы не доступны'}
            </Main>
            {state?.total_items && <Pagination {...paginationProps} />}
        </Container>
    )
}
export default Home