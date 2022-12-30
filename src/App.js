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
              <Route path='/' element={<Home />}/>
              <Route path='/Projetos' element={<Projetos />} />
              <Route path='/Contato' element={<Contato />} />
              <Route path='/NovoProjeto' element={<NovoProjeto />} />
              <Route path='/Empresa' element={<Empresa />} />
            </Routes>
          </Container>
          <Footer />
    </BrowserRouter>
    </div>
    </>
  )
}

export default App;