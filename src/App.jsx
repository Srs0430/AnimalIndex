
import './App.css';
import { SearchInput } from './components/SearchInput/SearchInput';
import { AnimalCard } from './components/AnimalCard/AnimalCard.jsx';

function App() {
  console.log(process.env.REACT_APP_OPENAI_API_KEY);
  return (
    <div className="App">
        <SearchInput />
        <AnimalCard />
    </div>
  );
}

export default App;


