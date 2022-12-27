function ProjectForm(){
    return(
        <form>
            <div>
                <input type="text" placeholder="Digite o nome"/>
            </div>
            <div>
                <input type="number" placeholder="Digite o orçamento"/>
            </div>
            <div>
                <select name="categoria_id">
                    <option disabled selected>
                        Selecione a categoria
                    </option>
                </select>
            </div>
            <div>
                <input type="submit" value ="Criar Projeto"/>
            </div>
        </form>
    )
}

export default ProjectForm