
import Modal from "./Modal";
import classes from '../Cart.module.css';

const Dropdown = (props) => {


    const onClose = () =>{
        props.onClose();
    }

    return (
        <Modal onClose={onClose}>
       
            <div className={classes.total} onClick={onClose}>
            <ul>
                <li>Account</li>
                <li>My Orders</li>
                <li>Log out</li>
            </ul>
        </div>
        </Modal>

//         <div class="absolute ml-72  p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
//   <div class="shrink-0">
//     <img class="h-7 w-7" src="/img/logo.svg" alt="ChitChat Logo"/>
//   </div>
//   <div>
//     <div class="text-xl font-medium text-black">ChitChat</div>
//     <p class="text-gray-500">You have a new message!</p>
//   </div>
// </div>
      
    )
}

export default Dropdown;