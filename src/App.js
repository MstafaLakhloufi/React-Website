import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';
import Footer from './components/pages/Footer/Footer';



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
