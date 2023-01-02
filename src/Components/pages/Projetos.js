import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

import Message from "../layout/Message"
import Container from '../layout/Container'
import Linkbtn from "./Home/Linkbtn"

import './Projetos.css'

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
            setProjects(data)})
        .catch((err)=> (console.log(err)))
    },[])
    return (
        <div className="project_container">
            <div className="title_container">
            <h1>Projetos</h1>
            <Linkbtn to="/novoprojeto" text="Criar Projeto"/>
            </div>
            {message && <Message type="sucess" msg={message} />}
            <Container customClass="start" >
                {projects.length > 0 &&
                    projects.map((project) =>(
                        
                    ))
                }
            </Container>
        </div>
    )
}

export default Projetos