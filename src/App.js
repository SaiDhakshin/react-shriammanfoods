
import './App.css';
import {useState , useEffect} from 'react';
import Header from './components/UI/Header'
import Home from './components/Home';
import Footer from './components/UI/Footer';
import {Route} from 'react-router-dom';
import Contact from './components/Contact';
import {BrowserRouter , Routes} from 'react-router-dom';
import About from './components/About';
import Faq from './components/Faq';



function App() {








  return (
    
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>} exact></Route>
      
      
      <Route path='/home' element={<Home/>} exact></Route>
      <Route path='/contact' element={<Contact/>} exact></Route>
      <Route path='/about' element={<About/>} exact></Route>
      <Route path='/faq' element={<Faq/>} exact></Route>
      
      
    
     
   
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
