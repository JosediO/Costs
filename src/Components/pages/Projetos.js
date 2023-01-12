import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

import Message from "../layout/Message"
import Container from '../layout/Container'
import Linkbtn from "./Home/Linkbtn"
import ProjectCard from "../Project/ProjectCard"
import Loading from "../layout/Loading"

import styles from './Projetos.module.css'


function Projetos (){
    const [projects,setProjects] = useState([])
    const [removeLoading,setRemoveLoading] = useState(false)
    const [projectMessage,setProjectMessage] = useState('')

    const location = useLocation()
    let message = ''
    if (location.state){
        message = location.state.message
    }

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

    function removeProject(id){

        fetch(`http://localhost:5000/projects/${id}`,{
            method: 'DELETE',
            headers:{
                'Content-type':'application/json',
            },  
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            setProjects(projects.filter((project)=>project.id !== id))
            setProjectMessage('Projeto removido com sucesso!')
        })
        .catch((err)=>(console.log(err)))
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
            <h1>Projetos</h1>
            <div>
            {message && <Message type="success" msg={message} />}
            </div>
            <div>{projectMessage && <Message type="success" msg={projectMessage} />}</div>
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
                        handleRemove={removeProject}
                        />
                ))}
                {!removeLoading && <Loading/> }
                {removeLoading && projects.length ===0 &&
                    <p>Não existem projetos cadastrados!</p>
                }
            </Container>
        </div>
    )
}

export default Projetos