import logo from './logo.svg';
import './App.css';
import YakMain from './components/YakMain';

function App() {
  const test = 'testing this out'
  return (
    <div className="App">
      <YakMain test={test}/>
    </div>
  );
}

export default App;
