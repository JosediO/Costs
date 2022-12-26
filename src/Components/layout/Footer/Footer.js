import { FaFacebook as Facebook, FaInstagram as Instagram, FaLinkedin as Linkedin } from 'react-icons/fa'
import './Footer.css'


function Footer(){
    return(
        <footer className='footer'>
            <div>
                <ul className='socialList'>
                    <li>
                        <Facebook />
                    </li>
                    <li>
                        <Instagram />
                    </li>
                    <li>
                        <Linkedin />
                    </li>
                </ul>
            </div>
            <div>
            <span className='span'>Costs </span> &copy; 2022
            </div>
        </footer>
    )
}

export default Footer