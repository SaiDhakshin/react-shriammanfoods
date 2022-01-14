
import Modal from "./UI/Modal";
import classes from "./Cart.module.css";
import {useState} from 'react';
import {useDispatch , useSelector} from 'react-redux';
import CartItem from "./CartItem";
import axios from 'axios';
import Form from "./UI/Form";
import { Link } from "react-router-dom";

const Cart = (props) => {

  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.items);
  const isCartEmpty = useSelector(state => state.cart.isEmpty);
  const test = 'test';



    const onClose = () =>{
        props.onClose();
    }

    const onOrder = () => {
      console.log('Order');
      console.log(cartItems);
      
    //   fetch('/order',{
    //     method : 'POST',
    //     mode : 'cors',
    //     headers : {
    //       'Access-Control-Allow-Origin' : "*",
    //       'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE',
    //       'Access-Control-Allow-Headers' : 'Content-Type' 
    //     },
    //     body : 'test',
    //   }).then(res => {
    //     console.log(res);
    //   }).catch(err => {
    //     console.log(err);
    //   })
    // }

    // axios.post('/order',{
    //   cartItem : cartItems
    // })
    // .then(res => console.log( 'Response Data : '+ res.data))
    // .catch(err => console.log(err));

    // axios({
    //   method: 'post',
    //   url: '/order',
    //   data: {
    //     firstName: 'Finn',
    //     lastName: 'Williams'
    //   }
    // });
    }


    return(
        <Modal onClose={onClose}>
    
      <div className={classes.total}>
        {isCartEmpty && <p>No products in Cart.</p>}
        {!isCartEmpty &&  cartItems.map(item => <CartItem key={item.id} id={item.id} name={item.name} price={item.price} totalPrice={item.totalPrice}
        quantity={item.quantity}/>)}
        {!isCartEmpty && <Link  to='/order'>Order</Link>}
       
       
      </div>
      
    </Modal>
    );
}

export default Cart;