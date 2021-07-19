
import './App.css';
import Dictionary from "./Dictionary";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
           Find your word!
        </header>
        <main>
         <Dictionary /> 
        </main>
        
        <footer className="App-footer">
          <small>
            Coded by Anna Biro
          </small>
          
        </footer>
      </div>
    </div>
  );
}


