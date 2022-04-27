import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" 
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'

export default function SocialMedia() {
    return (
        <div className="social-media">
            <nav>
                <ul className="social-ul">
                    <li><a href="https://github.com/LucaPalminteri" target="_blank"><FontAwesomeIcon className="icon" icon={faGithub}/></a></li>
                    <li><a  href="https://www.linkedin.com/in/luca-palminteri/?locale=en_US" target="_blank"><FontAwesomeIcon className="icon" icon={faLinkedinIn}/></a></li>
                </ul>
            </nav>
        </div>
    )
}