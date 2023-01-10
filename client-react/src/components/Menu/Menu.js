import './Menu.css'
import deals from "../../images/pizza-images/icons-menu/320-3204667_pizza-pepperoni-png-transparent-png-removebg-preview.png"
import pizza from"../../images/pizza-images/icons-menu/png-transparent-pizza-pizza-food-bread-removebg-preview.png"
import salad from "../../images/pizza-images/icons-menu/salat-icon-removebg-preview.png"
import drinks from "../../images/pizza-images/icons-menu/drinks-icon-removebg-preview.png"
import desserts from "../../images/pizza-images/icons-menu/deserts.png"
export const Menu = (props) => {


    return(
        <main className="main-menu">
        <div className="options">
          <div className="options-container">
            <p className="options-label">
              <a className="a-menu" href="/deals">Deals</a>
            </p>
            <img src={deals} alt="" />
          </div>
          <div className="options-container">
            <p className="options-label">
              <a className="a-menu" href="/pizza">Pizza</a>
            </p>
            <img src={pizza} alt="" />
          </div>
          <div className="options-container">
            <p className="options-label">
              <a className="a-menu" href="/salad">Salad</a>
            </p>
            <img src={salad} alt="" />
          </div>
          <div className="options-container">
            <p className="options-label">
              <a className="a-menu" href="/dessert">Dessert</a>
            </p>
            <img src={desserts} alt="" />
          </div>
          <div className="options-container">
            <p className="options-label">
              <a className="a-menu" href="/drinks">Drinks</a>
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