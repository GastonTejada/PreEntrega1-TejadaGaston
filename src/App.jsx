import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Containers/ItemListContainer';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />        
      </header>      
      <ItemListContainer greeting='Top 100 Greatest Movies of All Time' />
    </div>
  )    
}

export default App;