import React from "react"
import './Home.css';
import logoHome from '../../../img/savings.svg'
import Linkbtn from "./Linkbtn";

function Home (){
    return (
        <>
        <section className="home">
            <h1>Bem vindo ao <span>Costs</span></h1>
            <p>O seu gerenciador de projetos!</p>
            <img src={logoHome} alt="Costs" />
            <Linkbtn to='/novoProjeto' text="Criar Projeto"/>
        </section>
        </>
    )
}

export default Home