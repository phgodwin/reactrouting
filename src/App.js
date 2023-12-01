import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import AboutMe from './Components/Routing/AboutMe';
import Home from './Components/Routing/Home';



function App() {
  return (
    <Router>
      <nav>
      <Link to= '/'>Home</Link>
      <br/>
      <Link to= '/aboutme'>About Me</Link>
      <br/>

      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutme' element={<AboutMe/>}/>
      
      </Routes>
    </Router>




  );
}

export default App;
