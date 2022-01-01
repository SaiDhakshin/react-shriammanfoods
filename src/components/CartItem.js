
const CartItem = (props) => {
    return (
        <div>
            <ul>
                <li>{props.name}</li>
                <li>{props.price}</li>
                <li>{props.quantity}</li>
                <li>{props.totalPrice}</li>
            </ul>
        </div>
    )
}

export default CartItem;