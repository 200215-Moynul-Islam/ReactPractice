import { useState } from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import Showtimes from './pages/Showtimes/Showtimes';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MainContent from './components/MainContent/MainContent';

function App() {

  return (
    <BrowserRouter>
      <div className='page-layout'>
        <Header />
        <MainContent>
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/movies" element = {<Movies/>} />
            <Route path = "/showtimes" element = {<Showtimes />} />
          </Routes>
        </MainContent>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
