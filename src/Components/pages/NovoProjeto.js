import ProjectForm from '../Project/ProjectForm'

import './NovoProjeto.css'

function NovoProjeto(){
    return(
        <>
            <div className='newproject'>
                <h1>Criar Projeto</h1>
                <p>Crie agora seu novo projeto!</p>
                <ProjectForm/>
            </div>
        </>
    )
}

export default NovoProjeto