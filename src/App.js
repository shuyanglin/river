import './App.css';

function App() {
  const API_KEY = process.env.REACT_APP_OPENAPI_KEY;
  
  return (
    <div className="App">

        
        <p>
          {API_KEY}
        </p>
   
    </div>
  );
}

export default App;
