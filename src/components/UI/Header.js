import logo from '../../img/AMMAN IDLY_page-0001.jpg';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div>
           
            <img className='rounded object-contain h-40  mx-auto' src={logo}></img>
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