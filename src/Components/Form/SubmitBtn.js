import styles from './SubmitBtn.module.css'

function SubmitBtn(text){
    return(
           <div >
                <button className={styles.btn}> Criar Projeto</button>
           </div>
    )
}

export default SubmitBtn