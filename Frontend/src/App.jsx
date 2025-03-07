import { Box } from '@mui/material'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import DataProvider from './context/DataProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailView from './components/Details/DetailView';
import Cart from './components/cart/Cart';
import PlaceOrder from './components/cart/PlaceOrder'; // Import the PlaceOrder component
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <BrowserRouter>
        <DataProvider>
          <Header />
          <Box style={{ marginTop: 55 }}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product/:id' element={<DetailView />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/placeorder' element={<PlaceOrder />} />
            </Routes>
            <Toaster />
          </Box>
        </DataProvider>
      </BrowserRouter>

    </>
  )
}

export default App
