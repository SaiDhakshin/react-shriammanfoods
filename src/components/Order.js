
import Header from "./UI/Header";
import Footer from "./UI/Footer";
import Button from "./UI/Button";
import classes from './Order.module.css';
import CartItem from "./CartItem";
import {useDispatch , useSelector} from 'react-redux';
import productImage from '../img/productimage.jpeg';
import { useEffect , useState } from "react";
import { locationActions } from "../store/store";
import Maps from "./Maps";
import axios from "axios";
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import {Link} from 'react-router-dom';



const Order = (props) => {

    const cartItems = useSelector(state => state.cart.items);
    const isCartEmpty = useSelector(state => state.cart.isEmpty);

    const dispatch = useDispatch();

    const [lat , setLat] = useState('');
    const [lng , setLng] = useState('');

    const mailSend = (e) => {
        e.preventDefault();
        
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const phone  = e.target.elements.phone.value;
        const location = e.target.elements.location.value;
        const coords = {lat : lat , lng : lng};
        const cart = cartItems.items;
        console.log('cartItems : ' + cartItems[0].name);



        axios.post('/confirm',{data : {name : name ,
        email : email , 
    phone : phone ,
    location : location,
    coords : coords,
    cartItems : cartItems[0]
}}).then(res => {
    if(res.status === 200 && res.data === 'successful'){

    }
})
.catch(err => {
    console.log(err);
});

    }

    const saveLocation = (lat,lng) => {
        const location = {lat : lat , lng : lng};
        dispatch(locationActions.setLocation(location));
    }

    useEffect(()=>{
        const getLocation = () => {
            navigator.geolocation.getCurrentPosition(function(position) {
                        setLat(position.coords.latitude);
                        setLng(position.coords.latitude);
                      console.log("Latitude is :", position.coords.latitude);
                      console.log("Longitude is :", position.coords.longitude);
                      saveLocation(lat,lng);
                   });
        }
        getLocation();
    },[])


    return(
        <div>
            <Header/>
            <h2 className='text-center text-2xl'>Your Order Summary</h2>

            <div className='flex flex-col' >
            <img className='object-contain h-52 w-96 mx-auto p-5' src={productImage}></img>
           </div>
           <h2 className='text-center leading-10 text-2xl '>Batter</h2>
            <p className='text-center'>Price : 29 per Kg</p>

            {!isCartEmpty &&  cartItems.map(item => <CartItem key={item.id} id={item.id} name={item.name} price={item.price} totalPrice={item.totalPrice}
        quantity={item.quantity}/>)}
            <form  onSubmit={mailSend}>
           <table className='p-5 table-auto mx-auto'>
               <tr>
                   <td ><input name='name' placeholder='Name' type='text' className='drop-shadow-md px-3 form-input shadow-outer m-4 rounded'></input></td>
                   <td ><input name='email' placeholder='Email' type='email' className='drop-shadow-md px-3 form-input m-4 shadow-outer rounded'></input></td>
               </tr>
               <tr>
                <td><input name='phone' placeholder='Phone' type='tel' className='drop-shadow-md px-3 m-4 form-input shadow-outer rounded'></input></td>
                <td><input name='location' placeholder='Location' type='text' className='drop-shadow-md px-3 m-4 form-input shadow-outer rounded'></input></td>
               </tr>
             
           </table>
           <div className={classes.order}>

                   
                   <Link to='/summary'   className='drop-shadow-md px-3 border-2   rounded' >Order</Link>
               </div>
           </form>

         
           
            <Footer/>
        </div>
    )
}

export default Order;