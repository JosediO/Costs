import Input from "../Form/Input"
import Select from "../Form/Select"
import SubmitBtn from "../Form/SubmitBtn"

import './ProjectForms.css'

function ProjectForms({btnText}){
    return(
        <form className="form">
            <div>
                <Input type="text" text="Nome" placeholder="Digite o nome" name="name"/>
            </div>

            <div>
                <Input type="number" text="Orçamento " placeholder="Digite o orçamento" name="budget"/>
            </div>
            <div>
                <Select name="id" text="Selecione a categoria"/>
            </div>
            <div>
                <SubmitBtn text={btnText}/>
            </div>
        </form>
    )
}

export default ProjectForms