
import Modal from "./UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {

    const onClose = () =>{
        props.onClose();
    }

    return(
        <Modal onClose={onClose}>
    
      <div className={classes.total}>
        <span>Total Amount</span>
       
      </div>
      
    </Modal>
    );
}

export default Cart;