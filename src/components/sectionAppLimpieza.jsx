import imgFirebase from '../assets/imgFirebase.png'
import imgReact from '../assets/imgReact.png'
import imgExpo from '../assets/imgExpo.png'
import screenSignIn from '../assets/screens-appLimpieza/screenSignIn.png'
import screenCreateTask from '../assets/screens-appLimpieza/screenCreateTask.png'
import screenLogIn from '../assets/screens-appLimpieza/screenLogIn.png'
import videoAsign from '../assets/screens-appLimpieza/videoAsign.mp4'
import videoHome from '../assets/screens-appLimpieza/videoHome.mp4'
import videoHist from '../assets/screens-appLimpieza/videoHist.mp4'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'


export default function SectionAppLimpieza() {
    const { t } = useTranslation();

    const [isVideoPlaying, setIsVideoPlaying] = useState(false);


    const title = {
        userSelect: 'none',
        fontSize: 30,
        color: "#07183f",
        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
        opacity: 0.75,
        marginBottom: -18,
    };

    const handleIndicators = () => {
        isVideoPlaying ? setIsVideoPlaying(false) : setIsVideoPlaying(true)
    }

    return (
        <div>
            <h1 className="display-5 pb-2 fw-bold text-body-emphasis border-bottom">appLimpieza</h1>
            <div className="container px-4 py-5">
                <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                    <div className="col d-flex flex-column align-items-center gap-2">
                        <div className="d-flex align-items-center">
                            <img src={imgReact} className="bi me-2" width="80" height="80" />
                            <div style={{ marginLeft: 10 }} />
                            <h2 className="fw-bold text-body-emphasis text-left">  + </h2>
                            <div style={{ marginLeft: 10 }} />
                            <img src={imgFirebase} className="bi me-2" width="55" height="55" />
                            <div style={{ marginLeft: 10 }} />
                            <h2 className="fw-bold text-body-emphasis text-left">  + </h2>
                            <div style={{ marginLeft: 10 }} />
                            <img src={imgExpo} className="bi me-2" width="55" height="55" />
                        </div>
                        <h3 className="fs-2 text-body">React Native, Firebase {t('y')} Expo</h3>
                        <p className="text-body-secondary text-center">{t('generatedBy')} </p>



                        <div id="carrouselAppLimpieza" className="carousel slide mb-6" data-bs-ride="carousel" style={{ width: 356, }}>
                            <div className={isVideoPlaying ? 'carousel-indicators ds-none' : 'carousel-indicators '} >
                                <button type="button" data-bs-target="#carrouselAppLimpieza" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carrouselAppLimpieza" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carrouselAppLimpieza" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carrouselAppLimpieza" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carrouselAppLimpieza" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                <button type="button" data-bs-target="#carrouselAppLimpieza" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="15000" style={{ backgroundColor: "#fff" }}>
                                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                        <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                                        <image
                                            href={screenSignIn}
                                            width="100%"
                                            height="100%"
                                        />
                                    </svg>
                                    <div className="container">
                                        <div className="carousel-caption">
                                            <h1 style={title}>Sign in</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="6500">
                                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                                        <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                                        <image
                                            href={screenLogIn}
                                            width="100%"
                                            height="100%"
                                        />
                                    </svg>
                                    <div className="container">
                                        <div className="carousel-caption">
                                            <h1 style={title}>Login</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="100000" >
                                    <video width="100%" height="100%" controls muted onPause={handleIndicators} onPlay={handleIndicators}>
                                        <source src={videoHome} type="video/mp4" />
                                    </video>
                                    <div className="container">
                                        <div className="carousel-caption">
                                            <h1 style={title}>Home</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="50000" >
                                    <video width="100%" height="100%" controls muted onPause={handleIndicators} onPlay={handleIndicators} >
                                        <source src={videoHist} type="video/mp4" />
                                    </video>
                                    <div className="container">
                                        <div className="carousel-caption">
                                            <h1 style={title}>{t('Historial')}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="70000" >
                                    <video width="100%" height="100%" controls muted onPause={handleIndicators} onPlay={handleIndicators} >
                                        <source src={videoAsign} type="video/mp4" />
                                    </video>
                                    <div className="container">
                                        <div className="carousel-caption">
                                            <h1 style={title}>{t('AsignarTareas')}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="6500">
                                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                                        <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                                        <image
                                            href={screenCreateTask}
                                            width="100%"
                                            height="100%"
                                        />
                                    </svg>
                                    <div className="container">
                                        <div className="carousel-caption">
                                            <h1 style={title}>{t('CrearTarea')} </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carrouselAppLimpieza" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon arrow-black" style={{ filter: "invert(90%)" }} aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carrouselAppLimpieza" data-bs-slide="next">
                                <span className="carousel-control-next-icon arrow-black" style={{ filter: "invert(90%)" }} aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>








                    </div>

                    <div className="col">
                        <div className="row row-cols-1 row-cols-sm-2 g-4">
                            <div className="col d-flex flex-column gap-2">
                                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                    <i className="bi bi-person-fill-add"></i>
                                </div>
                                <h4 className="fw-semibold mb-0 text-body-emphasis text-left">Register/Log-In</h4>
                                <p className="text-body-secondary text-left">{t('logInDesc')}</p>
                            </div>

                            <div className="col d-flex flex-column gap-2">

                                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                    <i className="bi bi-house-add"></i>
                                </div>
                                <h4 className="fw-semibold mb-0 text-body-emphasis text-left">{t('crearSectoresYTareas')}</h4>
                                <p className="text-body-secondary text-left">{t('crearSectoresYTareasDesc')}</p>
                            </div>

                            <div className="col d-flex flex-column gap-2">
                                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                    <i className="bi bi-hand-index"></i>
                                </div>
                                <h4 className="fw-semibold mb-0 text-body-emphasis text-left">{t('AsignarTareasManual')}</h4>
                                <p className="text-body-secondary text-left">{t('AsignarTareasManualDesc')}</p>
                            </div>

                            <div className="col d-flex flex-column gap-2">
                                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                    <i className="bi bi-gear-fill"></i>
                                </div>
                                <h4 className="fw-semibold mb-0 text-body-emphasis text-left">{t('AsignarTareasAutomaticamente')}</h4>
                                <p className="text-body-secondary text-left">{t('AsignarTareasAutomaticamenteDesc')}</p>
                            </div>
                            <div className="col d-flex flex-column gap-2">
                                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                    <i className="bi bi-check2-square"></i>
                                </div>
                                <h4 className="fw-semibold mb-0 text-body-emphasis text-left">{t('MarcarTareas')}</h4>
                                <p className="text-body-secondary text-left">{t('MarcarTareasDesc')}</p>
                            </div>
                            <div className="col d-flex flex-column gap-2">
                                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                    <i className="bi bi-list-task"></i>
                                </div>
                                <h4 className="fw-semibold mb-0 text-body-emphasis text-left">{t('Estado')}</h4>
                                <p className="text-body-secondary text-left">{t('EstadoDesc')}</p>
                            </div>
                            <div className="col d-flex flex-column gap-2">
                                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                    <i className="bi bi-bell"></i>
                                </div>
                                <h4 className="fw-semibold mb-0 text-body-emphasis text-left">{t('Notificaciones')}</h4>
                                <p className="text-body-secondary text-left">{t('NotificacionesDesc')}</p>
                            </div>


                            <div className="col d-flex flex-column gap-2">

                                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                    <i className="bi bi-clock-history"></i>
                                </div>
                                <h4 className="fw-semibold mb-0 text-body-emphasis text-left">{t('Historial')}</h4>
                                <p className="text-body-secondary text-left">{t('HistorialDesc')}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}