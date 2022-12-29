import Article from './Article';
import useDataFetching from '../services/useDataFetching'
// import axios from 'axios';
const ArticlesFromService = () => {
    const apiKey = '6bd9cc4990674c61b79f5c98ea935eb9';
    let q = 'tesla';
    let from = '2022-11-29';
    let sortBy = 'publishedAt';
    const url = `https://newsapi.org/v2/everything?q=${q}&from=${from}&sortBy${sortBy}=&apiKey=${apiKey}`;
    const { data, loading, error } = useDataFetching(url);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return <p>Data: {data.articles.map((article) => <Article data={article} />)}</p>;
}

export default ArticlesFromService;