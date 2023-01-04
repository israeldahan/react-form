import Article from './Article';
import useDataFetching from '../services/useDataFetching'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// import axios from 'axios';
const ArticlesFromService = () => {
    const apiKey = process.env.REACT_APP_NEW_APIKEY;
    console.log("apiKey: "+ apiKey);
    let q = 'apple';
    let from = '2022-11-29';
    let sortBy = 'publishedAt';
    let pageSize = 4;
    let page = 3;
    // const url = `https://newsapi.org/v2/everything?q=${q}&from=${from}&sortBy=${sortBy}&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`;
    const url = `https://newsapi.org/v2/everything?q=${q}&pageSize=${pageSize}&apiKey=${apiKey}`;
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
                <Row ><h1>Componnents</h1></Row>
                <Row>
                    {data.articles && data.articles.map((article, key) => <Article data={article} key={key}/>)}
                </Row>
        </Container>
    )
}

export default ArticlesFromService;