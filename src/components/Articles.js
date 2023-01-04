import { useEffect, useState } from 'react';
import Article from './Article';
// import axios from 'axios';
const Articles = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData(url) {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchData(`https://newsapi.org/v2/everything?q=tesla&pageSize=4&apiKey=6bd9cc4990674c61b79f5c98ea935eb9`);
    }, []);
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return <p>Data: {data.articles.map((article) => <Article data={article} />)}</p>;
}

export default Articles;