import React from 'react';
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/pages/Home/Home';
import Projetos from './Components/pages/Projetos'
import Contato from './Components/pages/Contato';
import NovoProjeto from './Components/pages/NovoProjeto';
import Empresa from './Components/pages/Empresa';

import Container from './Components/layout/Container';
import Footer from './Components/layout/Footer/Footer';
import Header from './Components/layout/Header/Header';


function App() {
  return (
    <>
    <div className='App'>
    <BrowserRouter>
          <Header />
          <Container>
            <Routes >
              <Route path='/' element={<Home />} exact />
              <Route path='/Projetos' element={<Projetos />} exact />
              <Route path='/Contato' element={<Contato />} exact />
              <Route path='/NovoProjeto' element={<NovoProjeto />} exact />
              <Route path='/Empresa' element={<Empresa />} exact />
            </Routes>
          </Container>
          <Footer />
    </BrowserRouter>
    </div>
    </>
  )
}

export default App;