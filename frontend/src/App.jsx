import React from 'react';
import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Archives from './pages/Archives'; 
import Community from './pages/Community'; 
import Contact from './pages/Contact'; 
import Projects from './pages/Projects'; 
import Teams from './pages/teams'; 
import Testimonials from './pages/Testimonials'; 
import Register from './pages/Register'; 
import Login from './pages/Login'; 
import Blog from './pages/Blog';

function App() {
  return (
    <div>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/archives' element={<Archives />} />
      <Route path='/about' element={<About />} />
      <Route path='/blog' element={<Blog />}/>
      <Route path='/community' element={<Community />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/teams' element={<Teams />}/>
      <Route path='/testimonials' element={<Testimonials />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
    
    </div>
  );
}

export default App
