
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
import {useDispatch , useSelector} from 'react-redux';
import { axiosInstance } from './config';
import { accountActions } from './store/store';
import Order from './components/Order';
import Summary from './components/Summary';



function App() {


  const isLoggedIn = useSelector(state => state.account.isLoggedIn);
  const user = useSelector(state => state.account.user);
  

  const dispatch = useDispatch();

  useEffect( ()=>{
    const getUser = async () => {
    //   await axios.get('/login/success')
    //   .then(res => {
    //     if(res.status === 200){
    //       console.log(res);
    //     }
    //   })
    //   // .then(resObj => {
    //   //   dispatch(accountActions.login(resObj.user));
    //   // })
    //   .catch(err => {
    //     console.log(err);
    //   })
    // }

     await axiosInstance.get('login/success')

    .then(res => {
     
      console.log('REsponse : ' + res)
      if(res.status === 200){
        const ress = res
        console.log('ress : ' + ress);
        return ress;
        
      }
      throw new Error('Auth failed');
    }).then(resObj => {
      console.log('ResObj : ' + resObj);
      dispatch(accountActions.login('true'));
      
    }).catch(err => {
      console.log(err);
    })

  }
  

    getUser();
  
  },[dispatch]);

  console.log('User : ' + user);
  console.log('IsLogged :' + isLoggedIn);






  return (
    
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>} exact></Route>
      
      
      <Route path='/home' element={<Home/>} exact></Route>
      <Route path='/contact' element={<Contact/>} exact></Route>
      <Route path='/about' element={<About/>} exact></Route>
      <Route path='/faq' element={<Faq/>} exact></Route>
      <Route path='/order' element={<Order/>}></Route>
      <Route path='/summary' element={<Summary/>} exact></Route>
      
      
    
     
   
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
