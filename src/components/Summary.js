
import Header from "./UI/Header";
import Footer from "./UI/Footer";
import classes from './Summary.module.css';
import CartItem from "./CartItem";
import {useDispatch , useSelector} from 'react-redux';
import productImage from '../img/productimage.jpeg';
import { useEffect , useState } from "react";
import { locationActions } from "../store/store";
import Maps from "./Maps";
import axios from "axios";
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

const Summary = () => {

    const cartItems = useSelector(state => state.cart.items);
    const isCartEmpty = useSelector(state => state.cart.isEmpty);
    return(
        <div>
            <Header/>
            <h2 className={classes.orderhead}>Order placed Successfully!</h2>
            <div className='flex flex-col' >
            <img className='object-contain h-52 w-96 mx-auto p-5' src={productImage}></img>
           </div>
           <h2 className='text-center leading-10 text-2xl '>Batter</h2>
            <p className='text-center'>Price : 29 per Kg</p>

            {!isCartEmpty &&  cartItems.map(item => <CartItem key={item.id} id={item.id} name={item.name} price={item.price} totalPrice={item.totalPrice}
        quantity={item.quantity}/>)}

<ul className='text-center leading-10 pb-5'>
        <li>Product is out for Delivery and will be delivered Shortly!</li>
        <li>Call 7994254518 for enquiries.</li>
      </ul>
            <Footer/>
        </div>
    )
}

export default Summary;