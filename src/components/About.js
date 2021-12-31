import Header from './UI/Header';
import Footer from './UI/Footer'
import aboutimg from '../img/shri amman.jpg'

const About = () => {
    return(
        <div>
            <div className='container mx-auto'>
            <Header/>
            <h4 className="text-center font-sans text-3xl pb-5">About Us</h4>

            <p className='text-center leading-10 pb-5'>In 2014  , We dreamed of sharing healthy idli / Dosa batter .
         So we thought and started a company in Dindigal.
        We make idli and dosa batter for our Customers just the way they made it at home.
        Soon there were none left at the shelves because people loved our healthy preservative free Batter.
        We are making a high quality "Idli Dosa Batter" under very hygenic environment.<br/>
        <br/>
      We are using the best in class dhal and RO - purified water with no other preservatives or soda added.<br/>
      <br/>
    We are making this with great love and care , which suits for all ages from kids to adults.<br/></p>
            <img className='object-fill hover:object-scale-down rounded' src={aboutimg}></img>
    </div>
            <Footer/>
        </div>
    )
}

export default About;