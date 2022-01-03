
const CartItem = (props) => {
    return (
        <div>
            <ul className='container mx-auto'>
                <li>{props.name} {props.price} X {props.quantity}</li>
                <li>Total Amount = {props.totalPrice}</li>
            </ul>
        </div>
    )
}

export default CartItem;