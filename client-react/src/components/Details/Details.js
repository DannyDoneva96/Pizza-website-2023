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

  const [product, setProduct] = useState([]);
  const [error, setError] = useState('');

  const ordersRef= collection(db, "orders");
  const { id ,category} = useParams()


  if(!user){
    setError('You must be logged in!')
}

 

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
    setOrder(state=>({
      ...state
  }))

  }, []);
  useEffect(() => {
    const getProductData = async (id,category) => {


        const docRef = doc(db, category ,id);
        const docSnap = await getDoc(docRef);

            setProduct(docSnap.data());
     
    }
    getProductData(id,category)
}, []);

 const [order,setOrder]=useState({
    productName:product.productName,
    imgUrl: product.imgUrl,
    category: product.category,
    message: '',
    size:'',
    uid: user.id
});
  
const onChange=(e)=>{
  setOrder(state=>({
      ...state,
      [e.target.name]:e.target.value
  }))
  
}
const onSubmit = (e) =>{
    e.preventDefault()
    const addOrder = async (order) => {
      await addDoc(ordersRef, order)
      
  }

  addOrder(order)
}  

  return (<div className="product-details-container">
    <article>
      <div className="pizzaImg-container">
        <img src={product.imgUrl} alt="" />
      </div>
      <form className="product-details-form">
        <h1 name="productName" className="productName">{product.productName}</h1>
        <p name="description" className="descr">des</p>
       
        {isPizza
          ? <fieldset >
            
            <legend>Select size</legend>
            <div>
              <input type="radio" id="small" name="size"  onChange={onChange} value={order.size} defaultChecked />
              <label htmlFor="small">Small</label>
            </div>
            <div>
              <input type="radio" id="medium" name="size"  onChange={onChange} value={order.size} />
              <label htmlFor="medium">Medium</label>
            </div>
            <div>
              <input type="radio" id="large" name="size"  onChange={onChange} value={order.size} />
              <label htmlFor="large">Large</label>
            </div>
            <div>
              <input type="radio" id="xxl" name="size"  onChange={onChange} value={order.size} />
              <label htmlFor="xxl">XXL</label>
            </div>
          </fieldset>
          
         : null}

         {isDrinks ? <fieldset >


            <legend>Select size</legend>
            <div>
              <input type="radio" id="small" name="size"  onChange={onChange} value={order.size} defaultChecked />
              <label htmlFor="small">Strawberry</label>
            </div>
            <div>
              <input type="radio" id="medium" name="size"  onChange={onChange} value={order.size} />
              <label htmlFor="medium">Chocolate</label>
            </div>
            <div>
              <input type="radio" id="large" name="size"  onChange={onChange} value={order.size} />
              <label htmlFor="large">Mango</label>
            </div>
            <div>
              <input type="radio" id="xxl" name="size"  onChange={onChange} value={order.size}/>
              <label htmlFor="xxl">Apple</label>
            </div>
          </fieldset>
          : null}

          <div style={{display:isNormalfield}} >


            <div>
               <label htmlFor="message">If any requirements.. </label><br/>
              <input type="textarea" id="mesage" name="message"  onChange={onChange} value={order.message} />
             
            </div>
            
             
          </div>
          


       {error ?<div className="error-mes"><i className="fa-solid fa-triangle-exclamation" />err</div> :null} 
       <br/>
        <button className="btn-add" onClick={onSubmit}>Add to cart</button>
      </form>
    </article>
  </div>)
}