import './Menu.css'
import { useState } from 'react'
import deals from "../../images/pizza-images/icons-menu/320-3204667_pizza-pepperoni-png-transparent-png-removebg-preview.png"
import pizza from"../../images/pizza-images/icons-menu/png-transparent-pizza-pizza-food-bread-removebg-preview.png"
import salad from "../../images/pizza-images/icons-menu/salat-icon-removebg-preview.png"
import drinks from "../../images/pizza-images/icons-menu/drinks-icon-removebg-preview.png"
import desserts from "../../images/pizza-images/icons-menu/deserts.png"
import img from "../../images/pizza-images/pizza/margarita.png"
import img from "../../images/pizza-images/pizza/mexicana.png"
import img from "../../images/pizza-images/pizza/Miracle.png"
import img from "../../images/pizza-images/pizza/peperoni.png"
import img from "../../images/pizza-images/pizza/Quatro-Formajo.png"




export const Menu = (props) => {
 
  const [chosenCategory,setChosenCategory]= useState('deals')


   const selectCategory = (category)=>{
             setChosenCategory(category)
             console.log(category)
   }
    return(
        <main className="main-menu">
        <div className="options">
          <div className="options-container">
            <p className="options-label">
              <a className="a-menu" href="javascript:void(0)" onClick={() => selectCategory('deals')} >Deals</a>
            </p>
            <img src={deals} alt="" />
          </div>
          <div className="options-container">
            <p className="options-label">
              <a className="a-menu" href='javascript:void(0)' onClick={() => selectCategory('pizza')}>Pizza</a>
            </p>
            <img src={pizza} alt="" />
          </div>
          <div className="options-container">
            <p className="options-label">
              <a className="a-menu" href="javascript:void(0)" onClick={() => selectCategory('salad')}>Salad</a>
            </p>
            <img src={salad} alt="" />
          </div>
          <div className="options-container">
            <p className="options-label">
              <a className="a-menu" href="javascript:void(0)" onClick={() => selectCategory('desserts')}>Dessert</a>
            </p>
            <img src={desserts} alt="" />
          </div>
          <div className="options-container">
            <p className="options-label">
              <a className="a-menu" href="javascript:void(0)" onClick={() => selectCategory('drinks')}>Drinks</a>
            </p>
            <img src={drinks} alt="" />
          </div>
        </div>
        {/*------------------ Offers menu -----------------------------*/}
        <div className="todaysDeals">Most Famous...</div>
        <div className="pizzas-sec-container">
          <section className="menu-section">
           
          </section>
        </div>
      </main>
    )
}