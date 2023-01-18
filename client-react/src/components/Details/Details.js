import './Details.css'
import { useState, useEffect, useRef} from 'react';
import { useParams } from 'react-router-dom';

import { UserAuth } from '../../Context/Auth/authContext';
import { db } from '../../firebase'
import { collection, getDocs,getDoc, addDoc,updateDoc ,doc,deleteDoc} from 'firebase/firestore'

export const Details = () => {

  const { user } = UserAuth();
  const [isPizza, setPizza] = useState(true);
  const [isDrinks, setDrinks] = useState(false);
  const [isNormalfield, setNormalField] = useState('none');
  const { id ,category} = useParams()
  

  useEffect(() => {
    if (category !== 'pizza') {
      setPizza(false);
    }
    if (category == 'drinks') {
      setDrinks('drinks');
    }

    if(category !== 'pizza'&& category !== 'drinks') {
      setNormalField('block')
    }


  }, []);

  return (<div className="product-details-container">
    <article>
      <div className="pizzaImg-container">
        <img src="{{pizza.imgUrl}}" alt="" />
      </div>
      <form className="product-details-form">
        <h1 name="productName" className="productName">name</h1>
        <p name="description" className="descr">des</p>
       
        {isPizza
          ? <fieldset >
            
            <legend>Select size</legend>
            <div>
              <input type="radio" id="small" name="size" defaultValue="small" defaultChecked />
              <label htmlFor="small">Small</label>
            </div>
            <div>
              <input type="radio" id="medium" name="size" defaultValue="medium" />
              <label htmlFor="medium">Medium</label>
            </div>
            <div>
              <input type="radio" id="large" name="size" defaultValue="large" />
              <label htmlFor="large">Large</label>
            </div>
            <div>
              <input type="radio" id="xxl" name="size" defaultValue="xxl" />
              <label htmlFor="xxl">XXL</label>
            </div>
          </fieldset>
          
         : null}

         {isDrinks ? <fieldset >


            <legend>Select size</legend>
            <div>
              <input type="radio" id="small" name="size" defaultValue="small" defaultChecked />
              <label htmlFor="small">Strawberry</label>
            </div>
            <div>
              <input type="radio" id="medium" name="size" defaultValue="medium" />
              <label htmlFor="medium">Chocolate</label>
            </div>
            <div>
              <input type="radio" id="large" name="size" defaultValue="large" />
              <label htmlFor="large">Mango</label>
            </div>
            <div>
              <input type="radio" id="xxl" name="size" defaultValue="xxl" />
              <label htmlFor="xxl">Apple</label>
            </div>
          </fieldset>
          : null}

          <fieldset style={{display:isNormalfield}} >


            <legend>Select size</legend>
            <div>
              <input type="radio" id="small" name="size" defaultValue="small" defaultChecked />
              <label htmlFor="small">fff</label>
            </div>
            <div>
              <input type="radio" id="medium" name="size" defaultValue="medium" />
              <label htmlFor="medium">fff</label>
            </div>
            <div>
              <input type="radio" id="large" name="size" defaultValue="large" />
              <label htmlFor="large">fff</label>
            </div>
            <div>
              <input type="radio" id="xxl" name="size" defaultValue="xxl" />
              <label htmlFor="xxl">fff</label>
            </div>
          </fieldset>
          


        <div className="error-mes"><i className="fa-solid fa-triangle-exclamation" />err</div>
        <button className="btn-add">Add to cart</button>
      </form>
    </article>
  </div>)
}