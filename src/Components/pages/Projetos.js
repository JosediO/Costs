import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

import Message from "../layout/Message"
import Container from '../layout/Container'
import Linkbtn from "./Home/Linkbtn"

import styles from './Projetos.module.css'
import ProjectCard from "../Project/ProjectCard"

function Projetos (){

    const location = useLocation()
    let message = ''
    if (location.state){
        message = location.state.message
    }

    const [projects,setProjects] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/projects',{
            method: 'GET',
            headers: {
                'Content-type':'application/json',
            },
        })
        .then((resp)=> resp.json())
        .then((data)=> {
            console.log(data);
            setProjects(data)})
        .catch((err)=> (console.log(err)))
    },[])
    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
            <h1>Projetos</h1>
            <Linkbtn to="/novoprojeto" text="Criar Projeto"/>
            </div>
            {message && <Message type="sucess" msg={message} />}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) =>( 
                        <ProjectCard 
                        id={project.id}
                        name={project.name}
                        budget={project.budget}
                        category={project.category?project.category.name: null}
                        key={project.id}
                        />
                    ))
                }
            </Container>
        </div>
    )
}

export default Projetos