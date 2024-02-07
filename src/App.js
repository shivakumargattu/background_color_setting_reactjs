
import './App.css';

function App() {
  return (
    <div>  
      <div className="App">
      <h1 style={{margin:"50px 10px "}}>Background Color Setting</h1>
      <input type="color" onChange={(event)=>{
         document.body.style.background=event.target.value
          
        
      }
      
      }/>
    </div>
    </div>

  );
}

export default App;
