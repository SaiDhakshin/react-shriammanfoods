
import Modal from "./Modal";
import classes from '../Cart.module.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch , useSelector} from 'react-redux';
import axios from 'axios';
import { accountActions } from "../../store/store";

const Dropdown = (props) => {

    // const [isLoggedIn , setIsLoggedIn] = useState(false);

    const isLoggedIn = useSelector(state => state.account.isLoggedIn);
    const dispatch = useDispatch();


    const onClose = () =>{
        props.onClose();
    }

    let account = <p>Log In</p>
    let exit = <p></p>

    if(isLoggedIn){
        account = <p>My Account</p>
        exit = <p>Log out</p>
    }

    const onAccountHandler = () => {
        window.open('http://localhost:8000/auth/google','_self');
        dispatch(accountActions.login('true'));
    }
    
    const logout = () => {
        window.open('http://localhost:8000/logout','_self');
    }


    return (
        <Modal onClose={onClose}>
       
            <div className={classes.total} onClick={onClose}>
            <ul>
                
                {/* <a href='http://localhost:8000/auth/google'>{account}</a> */}
                <li onClick={onAccountHandler}>{account}</li>
                <li>My Orders</li>
                <li onClick={logout}>{exit}</li>
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