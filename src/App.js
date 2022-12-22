import React from 'react';
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/pages/Home';
import Empresa from './Components/pages/Empresa'
import Contato from './Components/pages/Contato';

import Container from './Components/layout/Container';
import Footer from './Components/layout/Footer/Footer';
import Header from './Components/layout/Header/Header';
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Container>
    <Routes >
      <Route path='/' element={<Home/>} exact/>
      <Route path='/Empresa' element={<Empresa/>} exact/>
      <Route path='/Contato' element={<Contato/>} exact/>
    </Routes>
    </Container>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App;