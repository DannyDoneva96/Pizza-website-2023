import "./app-reset.css"
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { ContactUs } from './components/ContactUs/ContactUs';
import { ErrorPage } from './components/ErrorPage/ErrorPage';
import { Login } from './components/Login/Login';
import { Messages } from './components/Messages/Messages';
import { Orders } from './components/Orders/Orders';
import { Details } from "./components/Details/Details";
import { Menu } from "./components/Menu/Menu";


function App() {
  return (
    <div className="App" >

      <Header />


      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/details" element={<Details />} />
        <Route path="/menu" element={<Menu />} />



      </Routes>

      <Footer />
    </div>
  );
}

export default App;
