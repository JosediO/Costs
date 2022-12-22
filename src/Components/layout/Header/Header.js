import './Header.css'
import NavBar from '../Navbar/NavBar'

function Header(){
    return(
        <div className='Header'>
            <h1 className='Logo'>Costs</h1>
            <NavBar className='Navbar'/>
        </div>
    )
}
export default Header