import { Link } from 'react-router-dom'
import styles from './Linkbtn.module.css'

function Linkbtn({to, text}){
    return(
        <Link className={styles.Linkbtn} to={to}>
            {text}
        </Link>
    )
}

export default Linkbtn