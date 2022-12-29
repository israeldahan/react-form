import Article from './Article';
import useDataFetching from '../services/useDataFetching'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Pagination from 'react-bootstrap/Pagination';

// import axios from 'axios';
const ArticlesFromService = () => {
    const apiKey = '6bd9cc4990674c61b79f5c98ea935eb9';
    let q = 'tesla';
    let from = '2022-11-29';
    let sortBy = 'publishedAt';
    let pageSize = 4;
    let page = 3;
    const url = `https://newsapi.org/v2/everything?q=${q}&from=${from}&sortBy${sortBy}=&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`;
    const { data, loading, error } = useDataFetching(url);

    // const handleClickPagination = (e) => {
    //     console.log(e.target.innerHTML);
    
    // }
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }
    return (
        <Container>
            <Container>
                <Row>
                    {data.articles.map((article, key) => <Article data={article} key={key}/>)}
                </Row>
            </Container>
            {/* <Container>
                <Row>
                    <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item onClick={handleClickPagination}>{1}</Pagination.Item>
                        <Pagination.Ellipsis />

                        <Pagination.Item onClick={handleClickPagination}>{10}</Pagination.Item>
                        <Pagination.Item onClick={handleClickPagination}>{11}</Pagination.Item>
                        <Pagination.Item onClick={handleClickPagination} active>{12}</Pagination.Item>
                        <Pagination.Item onClick={handleClickPagination} >{13}</Pagination.Item>
                        <Pagination.Item onClick={handleClickPagination}>{14}</Pagination.Item>

                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </Row>
            </Container> */}

        </Container>
    )
}

export default ArticlesFromService;