import styles from './Projeto.module.css'

import{ parse, v4 as uuidv4 } from 'uuid'

import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react';

import Loading from './../layout/Loading'
import Container from './../layout/Container'
import ProjectForms from './../Project/ProjectForms'
import Message from './../layout/Message'
import ServiceForm from '../Service/ServiceForm';


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
        },500)
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

function createService(project){
    setMessage('')
    
    const lastService = project.services[project.services.length - 1]

    lastService.id = uuidv4()

    const lastServiceCost = lastService.cost

    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

    if(newCost > parseFloat(project.budget)){
        setMessage("Orgçamento estourado, verifique o valor do serviço")
        setType("error")
        project.services.pop()
        return false
    }

    project.cost = newCost

    fetch(`http://localhost:5000/projects/${project.id}`,{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(project),
        }).then((resp) => resp.json())
        .then((data) =>{
            console.log(data)
        })
        .catch(err => console.log(err))
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
                        <h2>Adcione um serviço</h2> 
                        <button className={styles.btn} onClick={toggleServiceForm}>
                         {!showServiceForm ? 'Adcionar':'Fechar'}   
                        </button>
                        <div className={styles.project_info}>
                            {showServiceForm &&(<div>
                                <ServiceForm
                                handleSubmit={createService}
                                btnText="Adcionar"
                                projectData={project}
                                />
                                </div>
                            )}
                        </div> 
                        </div>
                    <h2>Serviços</h2>
                        <Container customClass="start">
                            {services.length > 0 &&
                                (services.map((service) =>(
                                    <ServiceCard/>
                                )))
                            }
                        </Container>
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