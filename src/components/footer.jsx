import { useTranslation } from 'react-i18next';
import cv from '../assets/CV.pdf'
import { t } from 'i18next'

export default function Footer() {

    const { t } = useTranslation();

    return (
        <div id='Contacto'>
            <div className="b-example-divider"></div>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
                    <a className="col-md-4 d-flex align-items-center text-decoration-none" href="https://github.com/xStranged1" target="_blank">
                        <span className="mb-1 me-2 mb-md-0 text-body-secondary lh-1" >
                            <i className="bi-github fs-3"></i>
                        </span>
                        <span className="mb-1 mb-md-0 text-body-secondary"> xStranged1</span>
                    </a>
                    <ul className="nav justify-content-end list-unstyled d-flex mt-2 align-items-baseline">
                        <li className="ms-3"><a href={cv} download>{t('descargarCV')} </a></li>


                        <li className="ms-3"><p className="text-body-secondary">fede.valle04@gmail.com</p> </li>
                        <li className="ms-3"><a className="text-body-secondary" target="_blank" href="https://www.linkedin.com/in/federico-valle-d440a/"><i className="bi bi-linkedin fs-4"></i></a></li>
                        <li className="ms-3"><a className="text-body-secondary" target="_blank" href="https://www.instagram.com/fedevalle1/"><i className="bi bi-instagram fs-4"></i></a></li>
                        <li id="leesin3698" className="ms-3"><a className="text-body-secondary" href="#leesin3698"><i className="bi bi-discord fs-4"></i></a></li>
                    </ul>
                </footer>
            </div>
        </div>
    )
}