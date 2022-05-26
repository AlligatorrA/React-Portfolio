import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from "./components/home/Home.jsx";
import FooterNav from './components/navbar/FooterNav';
import Topnav from "./components/navbar/Topnav.jsx";
import Projects from './components/projecs/Projects';
function App() {
  return (
    <div className="App">
      <Topnav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <FooterNav />
    </div>
  );
}

export default App;
