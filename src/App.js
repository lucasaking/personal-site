import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes"
import ReactNavbar from "./ReactNavbar"

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
          <ReactNavbar />
          <Routes />
      </BrowserRouter>

    </div>
  );
}

export default App;
