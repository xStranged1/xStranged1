import { Suspense } from 'react'
import me from '../assets/me.jpg'

export default function SectionMe() {

    return(
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
                <img src={me} loading='lazy' className="d-block mx-lg-auto img-fluid" alt="Federico Valle" width="700" height="500" style={{ borderRadius: 5 }} />
            </div>
            <div className="col-lg-6">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-4" style={{textAlign: 'left'}}>Federico Valle</h1>
                <p className="lead" style={{textAlign: 'left'}}>Soy desarrollador Full Stack. Estudiante de 3er año de Ingeniería en Sistemas de Información UTN FRLP. Becado del LINA</p>
                <p className="lead" style={{textAlign: 'left'}}>Mi sueño es ser un profesional que partiendo de problemas complejos, sea capaz de analizarlos, transformarlos en requerimientos y diseñar e implementar soluciones que agreguen valor al mundo.</p>
                
            </div>
            </div>
        </div>
    )
}
