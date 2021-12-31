import Header from './UI/Header';
import Footer from './UI/Footer'
import aboutimg from '../img/shri amman.jpg'
import about from '../img/undraw_about_me_re_82bv.svg';
import avatar from '../img/undraw_male_avatar_323b.svg';

const About = () => {
    return(
        <div>
            <div className='container mx-auto'>
            <Header/>
            <h4 className="text-center font-sans text-3xl pb-5">About Us</h4>
            <img className='object-contain h-52 w-96 mx-auto' src={avatar}></img>

            <p className='text-center leading-10 pb-5'>In 2014  , We dreamed of sharing healthy idli / Dosa batter .
         So we thought and started a company in Dindigal.
        We make idli and dosa batter for our Customers just the way they made it at home.
        Soon there were none left at the shelves because people loved our healthy preservative free Batter.
        We are making a high quality "Idli Dosa Batter" under very hygenic environment.<br/>
        <br/>
      We are using the best in class dhal and RO - purified water with no other preservatives or soda added.<br/>
      <br/>
    We are making this with great love and care , which suits for all ages from kids to adults.<br/></p>
            <img className='object-contain h-52 w-96 mx-auto' src={aboutimg}></img>
    </div>
            <Footer/>
        </div>
    )
}

export default About;