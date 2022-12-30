import {useEffect, useState} from 'react'

import Input from "../Form/Input"
import Select from "../Form/Select"
import SubmitBtn from "../Form/SubmitBtn"

import './ProjectForms.css'

function ProjectForms({handleSubmit, projectData}){

    const [categories,setCategorias] = useState([])
    const [project,setProject] = useState(projectData || {})

    useEffect(() =>{
        fetch("http://localhost:5000/categories",{
            method: 'GET',
            headers: {
                'Content-type':'application/json',
            },
        })
        .then((resp)=> resp.json())
        .then((data)=> {setCategorias(data)})
        .catch((err)=> (console.log(err)))
    },[])
    
    const submit = (e) =>{
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e){
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e){
        setProject({ ...project,
            category :{
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }

    return(
        <form onSubmit={submit} className="form">
                <Input 
                type="text" 
                text="Nome"
                name="name" 
                placeholder="Digite o nome" 
                handleOnChange ={handleChange}
                value = {project.name ? project.name : ''}
                />

                <Input 
                type="number" 
                text="Orçamento "
                name="budget" 
                placeholder="Digite o orçamento" 
                handleOnChange ={handleChange}
                value = {project.budget ? project.budget : ''}
                />

                <Select 
                name="category_id" 
                text="Categoria" 
                options={categories}
                handleOnChange ={handleCategory}
                value={project.category ? project.category.id : ''}
                />
                <SubmitBtn />

        </form>
    )
}
export default ProjectForms