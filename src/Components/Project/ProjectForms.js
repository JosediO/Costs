import {useState} from 'react'

import Input from "../Form/Input"
import Select from "../Form/Select"
import SubmitBtn from "../Form/SubmitBtn"

import './ProjectForms.css'

function ProjectForms(){

    const [categorias,setCategorias] = useState([])

    fetch("http://localhost:5000/categorias",{
        method: "GET",
        headers: {
            'Content-Type':'application/json'
        }
        .then((resp)=> resp.json())
        .then((data)=> {setCategorias(data)})
        .catch((err)=> console.log(err))


    })

    return(
        <form className="form">
                <Input type="text" text="Nome" placeholder="Digite o nome" name="name"/>
                <Input type="number" text="Orçamento " placeholder="Digite o orçamento" name="budget"/>
                <Select name="category_id" text="Selecione a categoria" options={categorias}/>
                <SubmitBtn />

        </form>
    )
}

export default ProjectForms