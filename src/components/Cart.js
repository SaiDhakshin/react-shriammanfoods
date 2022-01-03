
import Modal from "./UI/Modal";
import classes from "./Cart.module.css";
import {useState} from 'react';
import {useDispatch , useSelector} from 'react-redux';
import CartItem from "./CartItem";

const Cart = (props) => {

  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.items);
  const isCartEmpty = useSelector(state => state.cart.isEmpty);



    const onClose = () =>{
        props.onClose();
    }

    const onOrder = () => {
      fetch('http://localhost:8000/order',{
        method : 'POST',
        body : {
          cartItems : cartItems,
        }
      })
    }

    return(
        <Modal onClose={onClose}>
    
      <div className={classes.total}>
        {isCartEmpty && <p>No products in Cart.</p>}
        {!isCartEmpty &&  cartItems.map(item => <CartItem key={item.id} id={item.id} name={item.name} price={item.price} totalPrice={item.totalPrice}
        quantity={item.quantity}/>)}
        {!isCartEmpty && <button onClick={onOrder}>Order</button>}
       
       
      </div>
      
    </Modal>
    );
}

export default Cart;