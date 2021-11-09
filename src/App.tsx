import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Search from './pages/Search'
import BookHotel from './pages/BookHotel'

import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/hotel" element={<BookHotel />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
