import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footermain from './Components/Footermain';
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';
import Footertwo from './Components/Footer/Footertwo';
import Footerthree from './Components/Footer/Footerthree';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footertwo />
        <Footerthree />
      </Router>
    </div>
  );
}

export default App;
