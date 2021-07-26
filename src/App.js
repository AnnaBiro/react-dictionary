
import './App.css';
import Dictionary from "./Dictionary";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
           Find your word!
        </header>
        <div className="secondname">
          Your Online Dictionary
        </div>
        <main>
         <Dictionary /> 
        </main>
        
        <footer className="App-footer">
          <small>
            Coded by Anna Biro <a href="https://github.com/AnnaBiro/react-dictionary">Open source code</a>
          </small>
          
        </footer>
      </div>
    </div>
  );
}


