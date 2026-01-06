import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import Showtimes from './pages/Showtimes/Showtimes';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/movies" element = {<Movies/>} />
        <Route path = "/showtimes" element = {<Showtimes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
