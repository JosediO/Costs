import React from 'react';
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/pages/Home';
import Empresa from './Components/pages/Empresa'
import Contato from './Components/pages/Contato';
import Container from './Components/layout/Container';

import NavBar from './Components/layout/NavBar';
import Footer from './Components/layout/Footer';


function App() {
  return (
    <>
    <BrowserRouter>
    <div className='App'>
      <h1 >Costs</h1>
    </div>
    <NavBar/>
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