import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

import Message from "../layout/Message"
import Container from '../layout/Container'
import Linkbtn from "./Home/Linkbtn"
import ProjectCard from "../Project/ProjectCard"
import Loading from "../layout/Loading"

import styles from './Projetos.module.css'


function Projetos (){

    const location = useLocation()
    let message = ''
    if (location.state){
        message = location.state.message
    }

    const [projects,setProjects] = useState([])
    const [removeLoading,setRemoveLoading] = useState(false)

    useEffect(() =>{
        setTimeout(()=>(
            fetch('http://localhost:5000/projects',{
            method: 'GET',
            headers: {
                'Content-type':'application/json',
            },
        })
        .then((resp)=> resp.json())
        .then((data)=> {
            setProjects(data)
            setRemoveLoading(true)
        })
        .catch((err)=> (console.log(err)))
        ),1000)
    },[])
    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
            <h1>Projetos</h1>
            {message && <Message type="success" msg={message} />}
            <Linkbtn to="/novoprojeto" text="Criar Projeto"/>
            </div>
            
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
                ))}
                {!removeLoading && <Loading/> }
            </Container>
        </div>
    )
}

export default Projetos