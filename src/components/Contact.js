
import Form from "./UI/Form";

import Header from "./UI/Header";
import Footer from "./UI/Footer";
import contact from '../img/undraw_contact_us_re_4qqt.svg';

const Contact = () => {
    return(
        <div>
        <div className='container mx-auto'>
            <Header/>
            <h2 className='p-5 text-center text-2xl '>Contact Us</h2>

            <img className='object-contain h-52 w-96 mx-auto' src={contact}></img>
            
            <ul className='p-5 text-sm float-left'>
                <li>4,NETHAJI NAGAR,4th STREET,SANDHAI ROAD,DINDIGUL-624003</li>
                <li>shriammanfoods9999@gmail.com</li>
                <li>7904012706</li>
            </ul>
            <Form />
            </div>
        <Footer/>

        </div>
        
    );
}

export default Contact;