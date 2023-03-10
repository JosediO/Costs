import React from "react"
import styles from './Home.module.css';
import logoHome from '../../../img/savings.svg'
import Linkbtn from "./Linkbtn";

function Home (){
    return (
        <>
        <section className={styles.home}>
            <h1>Bem vindo ao <span>Costs</span></h1>
            <p>O seu gerenciador de projetos!</p>
            <Linkbtn to='/novoProjeto' text="Criar Projeto"/>
            <img src={logoHome} alt="Costs" />
        </section>
        </>
    )
}

export default Home