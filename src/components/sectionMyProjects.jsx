import house from '../assets/house.png'
import esmalte from '../assets/esmalte.png'
import rickAndMortyImg from '../assets/rickAndMortyImg.jpg'
import casaLaCosta from '../assets/casaLaCosta.png'
import snail from '../assets/snail.png'
import { useTranslation } from 'react-i18next'

export default function SectionMyProjects() {
const { t } = useTranslation();

    return(
        <div>
            <h1 id='CasaLaCosta' className="visually-hidden">Proyectos</h1>

            <div className="container px-4 py-5" id="featured-3">
                <h2 className="pb-2 border-bottom text-body-emphasis">Algunos de mis proyectos</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                            <img src={house} className="mt-5" width="192" height="139"/>
                        </div>
                        <h3 className="fs-2 text-body-emphasis">appLimpieza</h3>
                        <p>{t('appLimpiezaDesc')}</p>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={()=>{window.location.href = '#appLimpieza'}}>Ver más</button>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                            <img src={casaLaCosta} className="mt-5" width="200%" height="200%"/>
                        </div>
                        <h3 className="fs-2 text-body-emphasis">CasaLaCosta</h3>
                        <p>{t('casaLaCostaDesc1')}</p>
                        <p>{t('casaLaCostaDesc2')}
                            <a href="https://github.com/nachitoooo" target="_blank" className="icon-link">Nacho</a>
                        </p>
                        <a className="btn btn-primary btn-lg px-4 me-md-2" target='_blank' href="https://nachitoooo.github.io/casadelacosta/">
                            Visitar sitio web
                        </a>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                            <img src={esmalte} className="mt-5" width="100" height="100"/>
                        </div>
                        <h3 className="fs-2 text-body-emphasis">{t('consultorioTitle')}</h3>
                        <p>{t('consultorioDesc')}</p>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={()=>{window.location.href = '#Consultorio'}}>Ver más</button>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                            <img src={rickAndMortyImg} className="mt-5 rounded border-2 border-black" width="163" height="121"/>
                        </div>
                        <h3 className="fs-2 text-body-emphasis">Rick and Morty Guess</h3>
                        <p>{t('rickAndMortyDesc')}</p>
                        <a className="btn btn-primary btn-lg px-4 me-md-2" target='_blank' href="https://xstranged1.github.io/rick-and-morty-guess/">
                            Jugar
                        </a>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                            <img src={snail} className="mt-5" width="120" height="120"/>
                        </div>
                        <h3 className="fs-2 text-body-emphasis">Snail Sort 🐌</h3>
                        <p>{t('snailSortDesc')}</p>
                        <a className="btn btn-primary btn-lg px-4 me-md-2" target='_blank' href="https://xstranged1.github.io/snailSort/">
                            Ver más
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}