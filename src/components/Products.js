import productImage from '../img/productimage.jpeg';
import classes from './Products.module.css';
import {useState} from 'react';
import {useDispatch , useSelector} from 'react-redux';
import { cartActions } from '../store/store';

const Products = () => {

    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(cartActions.addToCart({
            id : 1,
            name : 'Batter',
            price : 29,
        }));
    }

    return(
        <div>
            <h2 className='text-center leading-10 text-2xl pb-5'>Products</h2>
        <div className='flex flex-col' >
            <img className='object-contain h-52 w-96 mx-auto p-5' src={productImage}></img>
           <div>
           <h2 className='text-center leading-10 text-2xl '>Batter</h2>
            <p className='text-center'>Price : 29 per Kg</p>
           </div>
           
        <div className='flex flex-col justify-center mx-auto mt-5'>
        <input className={classes.quantity} type='number' step='1' max='5' min='1' defaultValue='1'></input>
            <button onClick={addToCart} className={classes.button} type="submit">
          Buy now
        </button>
        </div>
        </div>
        </div>
    )

}

export default Products;