import { Link } from 'react-router-dom'
import combo from '../../images/pizza-images/deals/combo-4family.png'
import './Home.css'

export const Home = (props) => {



  return (


 
      <main className='main-main'>
        <div className="main-home">
          <div className="home">
            <div className="main-content">
              <h1 className="h1-home"> Donevis's Pizzeria </h1>
              <p className="home-p"> Do good. Be nice. Order pizza. Repeat.</p>
              <div className="order-btn-parrent">
                <a className="order-btn glow-on-hover" href='/menu'> ORDER NOW </a>
              </div>
            </div>
          </div>
        </div>
        <section className="home-deliv-section">
          <h2>Easy in <span className="span-home">three steps... </span></h2>
          <div className="steps-container">
            <div className="steps">
              <p className="num">1</p>
              <p>select your meal</p>
            </div>
            <div className="steps">
              <p className="num">2</p>
              <p>fill the details</p>
            </div>
            <div className="steps">
              <p className="num">3</p>
              <p>your order delivered in minute</p>
            </div>
          </div>
          <div className="offer-of-the-day">
            <div>
              <h1 className="dealOfDay">
                DEAL OF THE DAY
              </h1>
              <div className="img-container">
                <a href="/menu/deals/Cl7TJYde1osByGBsOjrm">  <img src={combo} alt="" /></a>
              </div>
              <h3>Combo Deal</h3>
              <p>pay<span className="span-home">45.00$</span >instead of<span className="scratch">60.00$</span></p>
            </div>
          </div>
        </section>
      </main>
  )

}