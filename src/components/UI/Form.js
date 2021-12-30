
import Button from "./Button";

const Form = (props) => {

    const mailSend = (e) => {
        e.preventDefault();
    }

    return(
       <div>
           <form className={props.className} onSubmit={mailSend}>
           <table className='p-5 table-auto'>
               <tr>
                   <td ><input name='name' placeholder='Name' type='text' className='drop-shadow-md px-3 form-input shadow-outer m-4 rounded'></input></td>
                   <td ><input name='email' placeholder='Email' type='email' className='drop-shadow-md px-3 form-input m-4 shadow-outer rounded'></input></td>
               </tr>
               <tr>
                <td><input name='phone' placeholder='Phone' type='tel' className='drop-shadow-md px-3 m-4 form-input shadow-outer rounded'></input></td>
                <td><input name='message' placeholder='Message' type='text' className='drop-shadow-md px-3 m-4 form-input shadow-outer rounded'></input></td>
               </tr>
                   <Button className='drop-shadow-md px-3 border-2  rounded ml-4 my-2'>Send Message</Button>
           </table>
           </form>
       </div>
    );
}

export default Form;