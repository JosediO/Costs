import './Select.css'

function Select({text , name, options ,handleOnChange, value}){
    return(
           <div className="form">
                <label htmlFor={name}>{text}</label>
                <select name={name}>
                    <option disabled selected>Selecione uma opção</option>
                </select>
           </div>
    )
}

export default Select