import logo from '../../img/AMMAN IDLY_page-0001.jpg';
import {NavLink} from 'react-router-dom';
import cartImg from '../../img/icons8-cart-64.png'
import cartPng from '../../img/shopping-cart.png';
import classes from './Header.module.css';
import avatar from '../../img/man.png';
import {useState} from 'react';
import Cart from '../Cart';
import Dropdown from './Dropdown';
import {useDispatch , useSelector} from 'react-redux';


const Header = () => {

    const [cartShown , setCartShown] = useState(false);
    const [profileShown , setProfileShown] = useState(false);

    



    const onCartClick = () => {
        
        setCartShown(true);
    }

    const hideCart = () => {
        
        setCartShown(false);
    }

    const onProfileClick = () => {
        console.log('Profile clicked');
        setProfileShown(!profileShown);
    }

    const hideProfile = () => {
        console.log('Profile hidden');
        setProfileShown(false);
    }

    return (
        <div>
           
            <div className='flex'>
            <img className='rounded object-contain  h-40  mx-auto ' src={logo} ></img>
            <img className='object-contain h-12 w-10 mx-auto ml-10 mt-10 absolute top-2 right-30' src={cartPng}
            onClick={onCartClick}></img>
            <img className='object-contain h-12 w-10 mx-auto ml-10 mt-10 absolute top-2 right-10 cursor-pointer' src={avatar} 
           onClick={onProfileClick} ></img>
            </div>
            <div className='flex '>
            <NavLink to='/home' className='flex-initial basis-2/4 p-10 min-w-min'>Home</NavLink>
            <NavLink to='/contact' className='flex-initial basis-2/4 p-10 min-w-min'>Contact</NavLink>
            <NavLink to='/about' className='flex-initial basis-2/4 p-10 min-w-min'>About</NavLink>
            <NavLink to='/faq' className='flex-initial basis-2/4 p-10 min-w-min'>FAQ</NavLink>
            {cartShown && <Cart onClose={hideCart} />}
            {profileShown && <Dropdown onClose={hideProfile} />}
            </div>
           
        </div>
    );
}

export default Header;