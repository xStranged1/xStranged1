import { useState } from 'react'
import ghIcon from '../assets/gitHub.png'
import { useTranslation } from 'react-i18next'

const DropMenuLanguaje = () => {
    const [expanded, setExpanded] = useState(false)
    const [language, setLanguaje] = useState('ES')
    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return(
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" 
                type="button" id="dropdownMenu2"
                data-toggle="dropdown" 
                aria-haspopup="true"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded ? "true" : "false"}>
                {language}
            </button>
            <div className={`dropdown-menu ${expanded ? 'show' : ''}`} aria-labelledby="dropdownMenu2">
                <button className="dropdown-item" type="button"
                    onClick={() => {
                        setLanguaje('ES');
                        changeLanguage('es')
                    } }>ES</button>
                <button className="dropdown-item" type="button"
                    onClick={() => {
                        setLanguaje('EN');
                        changeLanguage('en')
                    }}>EN</button>
            </div>
        </div>
    )
}
export default function Header () {

    const [expanded, setExpanded] = useState(false)
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark py-3 mb-4 border-bottom" aria-label="navbar">
            <div className="container px-4">
                <a href="https://github.com/xstranged1" target='_blank' className="mb-md-0 me-md-auto display-contents mr-60 link-body-emphasis text-decoration-none hover-op">
                    <img src={ghIcon} className="bi me-2 invert-color" width="40" height="40"/>
                    <div className='ml-10'/>
                    <span className="fs-4 color-ghwt">xStranged</span>
                </a>
                <button className="navbar-toggler" onClick={() => {expanded ? setExpanded(false) : setExpanded(true)}} type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse flex-reverse ${expanded ? 'mt-4': '' }`} id="navbar">
                    <ul className="nav nav-pills justify-content-center">
                        <li className="nav-item"><a href="#appLimpieza" className="nav-link active color-ghwt">appLimpieza</a></li>
                        <li className="nav-item"><a href="#CasaLaCosta" className="nav-link color-ghwt ">CasaLaCosta</a></li>
                        <li className="nav-item"><a href="#Consultorio" className="nav-link color-ghwt">Esteticista</a></li>
                        <li className="nav-item"><a href="#Contacto" className="nav-link color-ghwt">Contacto</a></li>
                        <DropMenuLanguaje />
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}