import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function NavBar() {
    return (
        <div>
            <nav>
                <ul className='Lista'>
                    <li >
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/empresa">Empresa</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
