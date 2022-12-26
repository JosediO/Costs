import { Link } from 'react-router-dom'
import './Linkbtn.css'

function Linkbtn({to, text}){
    return(
        <Link className='Linkbtn' to={to}>
            {text}
        </Link>
    )
}

export default Linkbtn