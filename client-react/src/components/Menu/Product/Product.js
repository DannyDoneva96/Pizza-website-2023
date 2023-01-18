import './Product.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { useState } from 'react';

export const Product = ({x}) => {


    const navigate = useNavigate();



    return(
      
         <article className = "pizza-article">
            <img src={x.imgUrl} alt="ghygyh" />
             <h3 className="pizza-name">{x.productName}</h3>
             <button onClick={  ()=>{ navigate(`/details/${x.category}/${x.id}`)}} className="btn-o">Order</button>
         </article>
    )
}
