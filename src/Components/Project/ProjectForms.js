import Input from "../Form/Input"
import Select from "../Form/Select"
import SubmitBtn from "../Form/SubmitBtn"

import './ProjectForms.css'

function ProjectForms(){
    return(
        <form className="form">
                <Input type="text" text="Nome" placeholder="Digite o nome" name="name"/>
                <Input type="number" text="Orçamento " placeholder="Digite o orçamento" name="budget"/>
                <Select name="category_id" text="Selecione a categoria"/>
                <SubmitBtn />

        </form>
    )
}

export default ProjectForms