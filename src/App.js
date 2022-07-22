import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import Skill from './components/Skill';
// import Footer from './components/Footer';
function App() {
  return (
    <>
            
      <Router>
        <div className='container'>
      <Navbar />
             <Routes>
          <Route index path="/" element={<Home/>}/>
          <Route index path="/about" element={<About/>}/>
          <Route index path="/skill" element={<Skill/>}/>
          <Route index path="/project" element={<Projects/>}/>
          <Route index path="/contact" element={<Contact/>}/>
        </Routes>
        {/* <Footer/> */}
        </div>
      </Router> 

      
        {/* <Navbar />
        <Home />
        <About />
        <Skill />
        <Projects />
        <Contact /> */}
      
    </>
  );
}

export default App;
