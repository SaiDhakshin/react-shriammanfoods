import showcaseimg from '../img/398dcf8341363bee65705747a85403c5 (1).jpg'
import classes from './Showcase.module.css';
import Button from './UI/Button';

const Showcase = () => {
    return (
        <div>
            
          
            <img className='object-contain hover:object-scale-down rounded' src={showcaseimg}></img>
            <div className='relative bottom-40 left-10 text-2xl'><Button className={classes.showcasetext}>Welcome To Shri Amman Batters</Button></div>
            
           
           
        </div>
    )
}

export default Showcase;