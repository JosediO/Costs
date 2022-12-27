import ProjectForms from '../Project/ProjectForms'

import '../pages/NovoProjeto.css'

function NovoProjeto(){
    return(
        <>
            <div className="newproject">
                <h1>Criar Projeto</h1>
                <p>Crie agora seu novo projeto!</p>
                <ProjectForms btnText="Criar Projeto"/>
            </div>
        </>
    )
}

export default NovoProjeto