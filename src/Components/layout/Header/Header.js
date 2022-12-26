import './Header.css'
import NavBar from '../Navbar/NavBar'
import Logo from '../../../img/costslogo.png'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <div className='Header'>
            <div className='Logo'>
                <Link to="/"><img src={Logo} alt='Costs'/>
                </Link>
            <h1> Costs</h1>
            </div>
            <NavBar className='Navbar'/>
        </div>
    )
}
export default Header