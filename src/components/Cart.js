
import Modal from "./UI/Modal";
import classes from "./Cart.module.css";
import {useState} from 'react';
import {useDispatch , useSelector} from 'react-redux';
import CartItem from "./CartItem";

const Cart = (props) => {

  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.items);

  const [isEmpty , setIsEmpty] = useState(true);

    const onClose = () =>{
        props.onClose();
    }

    return(
        <Modal onClose={onClose}>
    
      <div className={classes.total}>
        {isEmpty && <p>No products in Cart.</p>}
        {cartItems.map(item => <CartItem key={item.id} id={item.id} name={item.name} price={item.price} totalPrice={item.totalPrice}
        quantity={item.quantity}/>)}
        <span>Total Amount</span>
       
      </div>
      
    </Modal>
    );
}

export default Cart;