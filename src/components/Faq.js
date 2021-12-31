import Header from "./UI/Header";
import Footer from "./UI/Footer";
import Breakfast from '../img/undraw_breakfast_psiw.svg';
import Fridge from '../img/fridge-5930424_1920.png';
import Dosa from '../img/Dosa.jpg'
import Idli from '../img/idli.jpg';

const Faq = () => {
    return(
        <div>
            <div className='container mx-auto'>
                <Header/>
                <ul className='text-center leading-10 pb-5'>
        
        <img className='object-contain h-52 w-96 mx-auto' src={Breakfast}></img>
    
      <h4 className="p-5 text-center text-2xl">How To Use ? </h4>
      <br/>
      <h4 className="p-5 text-center text-2xl mb-5">To Make Idli</h4>
      <br/>
      <div className='flex'>

      <img className='object-contain h-52 w-96 mx-auto rounded' src={Idli}></img>
      <li>Open the pack and add salt if required. The Batter is mildly salted only.<br/>
      If you are making idli , directly scoop out the batter and pour it into the idli streamer.<br/>
      Stir the batter before pouring it into the moulds of the idli steamer for the soft idli.</li>
      </div>
      <br/>
      <h4 className="p-5 text-center text-2xl mb-5">To Make Dosa</h4>
      <div className='flex'>
      <br/>
      <li>If you are making dosa , add some water to dilute the batter.<br/>
      After dilution , the batter can no longer be used for making idli.</li>
      <img className='object-contain h-52 w-96 mx-auto rounded' src={Dosa}></img>
      </div>
    </ul>
    <br/>
      <h4 className="p-5 text-center text-2xl">How To Store ? </h4>
      <div className='flex'>
        <img className='object-contain h-52 w-96 mx-auto' src={Fridge}></img>
      <br/>
      <ul className='text-center leading-10 pb-5'>
        <li>Refrigerate at 0-5 degree . Bring the batter to room temperature before using it.</li>
      </ul>
      </div>
    


            </div>
        </div>

    )
}

export default Faq;