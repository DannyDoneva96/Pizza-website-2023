import "./app-reset.css"
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import {About} from './components/About/About';
import {ContactUs} from './components/ContactUs/ContactUs';

function App() {
  return (
    <div className="App" >
      
      <Header />


      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />

        {/*
  <Route path="*" element={<ErrorPage />} />
  <Route path="/invitation" element={<Invitation />} />
  <Route path="/logout" element={<Logout />} />

  <Route path="/rsvp" element={<RSVP addGuestHandler={addGuestHandler} />} />
  <Route path="/wishingBook" element={<Wishes />} />
  <Route path="/login" element={<Login />} />
  <Route path="/create" element={<CreateWish />} />
  <Route path="/register" element={<Register  />} />
  <Route path="/guest" element={<Guest guest={guest} />} />
  <Route path="/guests/:id" element={<DetailsOfGuest guest={guest} />} />*/}

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
