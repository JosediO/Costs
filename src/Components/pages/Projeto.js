import styles from './Projeto.module.css'

import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react';

import Loading from './../layout/Loading'
import Container from './../layout/Container'
import ProjectForms from './../Project/ProjectForms'
import Message from './../layout/Message'


function Projeto(){
    const {id} = useParams()

    const[project,setProject] = useState([])
    const[showProjectForm,setShowProjectForm] = useState(false)
    const[showServiceForm,setShowServiceForm] = useState(false)
    const[message,setMessage] = useState()
    const[type,setType]=useState() 

    useEffect(()=>{
        setTimeout(()=>{
            fetch(`http://localhost:5000/projects/${id}`,{
            method: 'GET',
            headers:{
                'Content-Type':'application/json',
            },
        })
        .then((resp)=> resp.json())
        .then((data)=>{
            setProject(data)
        })
        .catch((err)=>console.log(err))
        },3000)
    },[id])

function editPost(project){
    setMessage('')
    if(project.budget < project.cost){
        setMessage('O orçamento não pode ser menor que o custo do projeto!')
        setType('error')
        return false
    }
    fetch(`http://localhost:5000/projects/${project.id}`,{
        method: 'PATCH',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(project),
    })
    .then((resp)=> resp.json())
    .then((data)=>{
        setProject(data)
        setShowProjectForm(false)
        setMessage('O projeto foi atualizado!')
        setType('success')
    })
    .catch((err)=>console.log(err))
}

function toggleProjectForm(){
    setShowProjectForm(!showProjectForm)
}

function toggleServiceForm(){ 
    setShowServiceForm(!showServiceForm)
}

    return(
    <>
        {project.name ? (
            <div className={styles.project_datails}>
                <Container customClass="column">
                    <div className={styles.datails_container}>
                        <h1>Projeto: {project.name}</h1>
                    <div>{message && <Message type={type} msg={message}/>}</div>
                    <button className={styles.btn} onClick={toggleProjectForm}>
                     {!showProjectForm ? 'Editar ':'Fechar'}   
                    </button>
                    {!showProjectForm ?(
                        <div className={styles.project_info}>
                            <p><span>Categoria: </span>{project.category.name}</p>
                            <p><span>Orçamento </span>R$:{project.budget}</p>
                            <p><span>Total Utilizado </span>R$:{project.cost}</p>
                        </div>):(
                            <div className={styles.project_info}>
                            <ProjectForms handleSubmit={editPost} btnText="Concluir Edição" projectData={project} />
                        </div>
                        )}
                    </div>
                    <div className={styles.service_from_container}>
                        <h2>Adcione um serviço:</h2> 
                        <button className={styles.btn} onClick={toggleServiceForm}>
                         {!showServiceForm ? 'Adcionar':'Fechar'}   
                        </button>
                        <div className={styles.project_info}>
                            {showServiceForm &&(
                                <div>
                                    FORMULARIO DE SERVIÇO
                                </div>
                            )}
                        </div> 
                        <Container customClass="start">
                            <p>Itens do serviço:</p>
                        </Container>
                    </div>
                </Container>
            </div>
        ):(
        <Container>
            <Loading/>
        </Container>
        )}
    </>
    )
}

export default Projeto