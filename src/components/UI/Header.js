import logo from '../../img/AMMAN IDLY_page-0001.jpg';

const Header = () => {
    return (
        <div>
            <img className='rounded object-contain h-40  mx-auto' src={logo}></img>
            <div className='flex '>
            <div className='flex-initial basis-2/4 p-10 min-w-min'>Home</div>
            <div className='flex-initial basis-2/4 p-10 min-w-min'>Contact</div>
            <div className='flex-initial basis-2/4 p-10 min-w-min'>About</div>
            <div className='flex-initial basis-2/4 p-10 min-w-min'>FAQ</div>
            </div>
           
        </div>
    );
}

export default Header;