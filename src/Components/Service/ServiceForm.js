import { useState } from 'react'

import Input from '../Form/Input'
import SubmitBtn from '../Form/SubmitBtn'

import styles from '../Project/ProjectForms.module.css'

function ServiceForm({handleSubmit, btnText, projectData}){

    const [service,setService] = useState({})

    function submit(e){
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handgleChange(e){
        setService({...service,[e.target.name]: e.target.value})
    }

    return(
        <form onSubmit={submit} className={styles.form}>
            <Input
            type="text"
            text="Nome do serviço"
            name="name"
            placeholder="Nome do serviço"
            handleOnChange={handgleChange}
            />
            <Input
            type="number"
            text="Custo do serviço"
            name="cost"
            placeholder="Valor total"
            handleOnChange={handgleChange}
            />
            <Input
            type="text"
            text="Descrição do serviço"
            name="description"
            placeholder="Descreva o serviço"
            handleOnChange={handgleChange}
            />
            <SubmitBtn text={btnText}/>
        </form>
    )
}

export default ServiceForm