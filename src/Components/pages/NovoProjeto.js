import {useNavigate} from 'react-router-dom'

import ProjectForms from '../Project/ProjectForms'

import styles from './../pages/NovoProjeto.module.css'

function NovoProjeto(){
   
    const navigate = useNavigate()

    function createPost(project){

        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects",{
            method: 'POST',
            headers: {
                'Content-type':'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp)=> resp.json())
        .then((data)=> {
            console.log(data)
            navigate('/projetos',{ state: {message: 'Projeto criado com sucesso!'} })
        })
        .catch((err)=> console.log(err))

    }
   
    return(
        <>
            <div className={styles.newproject}>
                <h1>Criar Projeto</h1>
                <p>Crie agora seu novo projeto!</p>
                <ProjectForms handleSubmit={createPost} btnText="Criar Projeto"/>
            </div>
        </>
    )
}

export default NovoProjeto