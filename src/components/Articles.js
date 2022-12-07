import fake  from '../fake'
import Article from './Article';

const Articles = () => {
return (
    <div>
        {fake.articles.map((article) => <Article data={article} /> )}
    </div>
)
}

export default Articles;