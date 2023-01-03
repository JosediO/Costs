import './ProjectCard.css';

import {BsPencil, BsFillTrashFill} from 'react-icons/bs'

function ProjectCard({id,name,budget,category,handleRemove}){
    return(
        <div className='project_card'>
            <h4>{name}</h4>
            <p>
                <span>Orçamento</span> R$:{budget}
            </p>
            <p>
                <span></span>{category}
            </p>
            <p>Editar
            </p>
            <p>Remover
            </p>
        </div>
    )
}

export default ProjectCard