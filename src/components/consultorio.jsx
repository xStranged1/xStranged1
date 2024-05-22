import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import woman from '../assets/woman.png'
import s1 from '../assets/screens-consultorio/1s.png'
import s2 from '../assets/screens-consultorio/2s.png' 
import s3 from '../assets/screens-consultorio/3s.png' 
import s4 from '../assets/screens-consultorio/4s.png'
import s5 from '../assets/screens-consultorio/5s.png'
import { useTranslation } from 'react-i18next';


export default function SectionConsultorio() {
    const { t } = useTranslation();

    const title = {
        userSelect: 'none',
        fontSize: 30,
        color: "#07183f",
        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
        opacity: 0.75,
        marginBottom: -18,
      };

    const subtitle = {
        userSelect: 'none',
        fontSize: 18,
        color: "#07183f",
        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
        opacity: 0.75,
        marginTop: 18,
      };
      
       

    return(
        <div>
            <div className="px-4 py-5 my-5 text-center" id='Consultorio'>
                <img className="d-block mx-auto mb-4" src={woman} alt="" width="256" height="256"/> 
                <h1 className="display-5 fw-bold text-body-emphasis">{t('ConsultorioMainTitle')} </h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">{t('ConsultorioMainDesc')} </p>
                </div>
            </div>

            <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 6"></button>
                </div>
                <div className="carousel-inner">
                <div className="carousel-item active" data-interval="2000">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
                            <image
                                href={s1}
                                width="100%"
                                height="100%"
                            />
                    </svg>
                    <div className="container">
                        <div className="carousel-caption">
                            <h1 style={title}>{t('inicio')} </h1>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-interval="2000">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
                            <image
                                href={s2}
                                width="100%"
                                height="100%"
                            />
                    </svg>

                    <div className="container" >
                        <div className="carousel-caption">
                            <h1 style={title}>{t('crearCliente')}</h1>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-interval="2000">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
                            <image
                                href={s3}
                                width="100%"
                                height="100%"
                            />
                    </svg>
                    <div className="container">
                        <div className="carousel-caption">
                            <h1 style={title}>{t('verCliente')}</h1>
                            <p style={subtitle}>{t('verClienteDesc')}</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-interval="2000">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
                            <image
                                href={s4}
                                width="100%"
                                height="100%"
                            />
                    </svg>
                    <div className="container">
                        <div className="carousel-caption">
                            <h1 style={title}>{t('turnos')}</h1>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-interval="2000">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
                            <image
                                href={s5}
                                width="100%"
                                height="100%"
                            />
                    </svg>
                    <div className="container">
                        <div className="carousel-caption">
                            <h1 style={title}>{t('editTurnos')}</h1>
                        </div>
                    </div>
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
        </div>
    )
}