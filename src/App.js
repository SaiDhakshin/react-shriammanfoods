
import './App.css';
import {useState , useEffect} from 'react';
import Header from './components/UI/Header'
import Home from './components/Home';
import Footer from './components/UI/Footer';

function App() {








  return (
    <div>
      <div className='container mx-auto'>
      <Header />
      <Home/>
    </div>
      <Footer/>
    </div>
  );
}

export default App;
