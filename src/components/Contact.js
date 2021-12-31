
import Form from "./UI/Form";

import Header from "./UI/Header";
import Footer from "./UI/Footer";

const Contact = () => {
    return(
        <div>
        <div className='container mx-auto'>
            <Header/>
            <h2 className='p-5 text-center text-2xl '>Contact Us</h2>
            
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