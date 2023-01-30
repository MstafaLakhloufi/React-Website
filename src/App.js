import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/homePage/Home';
import Services from './pages/services/Services';
import Products from './pages/products/Products';
import SignUp from './pages/signUp/SignUp';
import Footer from './pages/footer/Footer';



function App() {
  return (
    <BrowserRouter>
     <Navbar />
     <Routes>
          <Route  path='/' element={<Home />} /> 
          <Route path='/services' element={<Services />} /> 
          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<SignUp />} />
     </Routes>
     <Footer />
    </BrowserRouter>
  );
}

export default App;
