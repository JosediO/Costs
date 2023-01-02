import {useNavigate} from 'react-router-dom'

import ProjectForms from '../Project/ProjectForms'

import '../pages//NovoProjeto.css'

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
            <div className="newproject">
                <h1>Criar Projeto</h1>
                <p>Crie agora seu novo projeto!</p>
                <ProjectForms handleSubmit={createPost}/>
            </div>
        </>
    )
}

export default NovoProjeto