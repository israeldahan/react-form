import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Articles from './components/Articles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Articles />
      </header>
    </div>
  );
}

export default App;
