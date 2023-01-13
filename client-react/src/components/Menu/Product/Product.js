import './Product.css';
import {Routes, Route, useNavigate} from 'react-router-dom';


export const Product = ({x}) => {

    const navigate = useNavigate();



    return(
      
         <article className = "pizza-article">
            <img src={x.imgUrl} alt="ghygyh" />
             <h3 className="pizza-name">{x.productName}</h3>
             <button onClick={  ()=>{ navigate(`/details/${x.id}`)}} className="btn-o">Order</button>
         </article>
    )
}
