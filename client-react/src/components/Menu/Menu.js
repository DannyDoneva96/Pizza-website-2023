import './Menu.css'
import deals from "../../images/pizza-images/icons-menu/320-3204667_pizza-pepperoni-png-transparent-png-removebg-preview.png"
import pizza from"../../images/pizza-images/icons-menu/png-transparent-pizza-pizza-food-bread-removebg-preview.png"
import salad from "../../images/pizza-images/icons-menu/salat-icon-removebg-preview.png"
import drinks from "../../images/pizza-images/icons-menu/drinks-icon-removebg-preview.png"
import desserts from "../../images/pizza-images/icons-menu/deserts.png"
import { db } from '../../firebase'
import { collection, getDocs, addDoc,updateDoc ,doc,deleteDoc} from 'firebase/firestore'
import {Product} from "./Product/Product"
import React, { useRef, useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../../styles-swiper.css";

// import required modules
import { EffectCoverflow, Pagination,  } from "swiper";



export const Menu = (props) => {
 
  const [chosenCategory,setChosenCategory]= useState('pizza')
  const [products, setProducts] = useState([]);
  const productRef = collection(db, chosenCategory);

  useEffect(() => {

    const getAll = async () => {
        const data = await getDocs(productRef)
        setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getAll()
}, [chosenCategory]);
 console.log(products)
   const selectCategory = (category)=>{

             setChosenCategory(category)
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
        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide> */}
        {products.length > 0 && !undefined
                        ? products.map(x => <SwiperSlide>
                             <Product key={x.id} x={x}  /> </SwiperSlide>)
                         : <p className="noproducts" >No products yet...</p>
                       
                    }
      </Swiper>
      </main>
    )
}