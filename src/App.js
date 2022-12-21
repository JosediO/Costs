import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/pages/Home';
import Empresa from './Components/pages/Empresa'
import Contato from './Components/pages/Contato';
import Rotas from './Components/Rotas';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
    <div className='App'>
      <h1>Costs</h1>
    </div>
    <Rotas/>
    
    <Routes>
      <Route path='/' element={<Home/>} exact/>
      <Route path='/Empresa' element={<Empresa/>}/>
      <Route path='/Contato' element={<Contato/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App;