import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import SearchDates from './components/SearchDates'
import Search from './pages/Search'
import BookHotel from './pages/BookHotel'

import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <SearchDates />
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
