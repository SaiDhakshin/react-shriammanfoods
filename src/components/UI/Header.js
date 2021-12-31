import logo from '../../img/AMMAN IDLY_page-0001.jpg';
import {NavLink} from 'react-router-dom';
import cartImg from '../../img/icons8-cart-64.png'
import cartPng from '../../img/shopping-cart.png';
import classes from './Header.module.css';
import avatar from '../../img/man.png';

const Header = () => {
    return (
        <div>
           
            <div className='flex'>
            <img className='rounded object-contain  h-40  mx-auto' src={logo}></img>
            <img className='object-contain h-12 w-10 mx-auto ml-10 mt-10 absolute top-2 right-30' src={cartPng}></img>
            <img className='object-contain h-12 w-10 mx-auto ml-10 mt-10 absolute top-2 right-10' src={avatar}></img>
            </div>
            <div className='flex '>
            <NavLink to='/home' className='flex-initial basis-2/4 p-10 min-w-min'>Home</NavLink>
            <NavLink to='/contact' className='flex-initial basis-2/4 p-10 min-w-min'>Contact</NavLink>
            <NavLink to='/about' className='flex-initial basis-2/4 p-10 min-w-min'>About</NavLink>
            <NavLink to='/faq' className='flex-initial basis-2/4 p-10 min-w-min'>FAQ</NavLink>
            </div>
           
        </div>
    );
}

export default Header;