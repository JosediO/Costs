import './Input.css'

function Input({type, text , name, placeholder, handleOnChange, value}){
    return(
           <div className="form">
                <label htmlFor={name}>{text}</label>
                <input
                type={type}
                name = {name}
                id={name}
                placeholder={placeholder}
                OnChange ={handleOnChange}
                value={value}
                />
           </div>
    )
}

export default Input