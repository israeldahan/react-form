import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Articles from './components/Articles';
import ArticlesFromService from './components/ArticlesFromService';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ArticlesFromService />
      </header>
    </div>
  );
}

export default App;
