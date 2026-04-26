import { useTranslation } from 'react-i18next'

// Íconos de tecnología — reemplazá con tus assets reales
// import imgDjango from '../assets/icons/django.png'
// import imgReact from '../assets/imgReact.png'
// import imgExpo from '../assets/imgExpo.png'
// import imgShadcn from '../assets/icons/shadcn.png'
// import imgMercadoPago from '../assets/icons/mercadopago.png'
// Imágenes / pantallas del proyecto — agregá las tuyas en assets/screens-xtremegym/
// import screen1 from '../assets/screens-xtremegym/1s.png'

export default function SectionXtremeGym() {
    const { t } = useTranslation();

    const features = [
        {
            icon: 'bi-people-fill',
            title: t('xg_rolesTitle'),
            desc: t('xg_rolesDesc'),
        },
        {
            icon: 'bi-qr-code-scan',
            title: t('xg_asistenciaTitle'),
            desc: t('xg_asistenciaDesc'),
        },
        {
            icon: 'bi-journal-text',
            title: t('xg_rutinasTitle'),
            desc: t('xg_rutinasDesc'),
        },
        {
            icon: 'bi-credit-card-fill',
            title: t('xg_pagosTitle'),
            desc: t('xg_pagosDesc'),
        },
        {
            icon: 'bi-bell-fill',
            title: t('xg_notifTitle'),
            desc: t('xg_notifDesc'),
        },
        {
            icon: 'bi-graph-up-arrow',
            title: t('xg_progresoTitle'),
            desc: t('xg_progresoDesc'),
        },
        {
            icon: 'bi-cloud-upload-fill',
            title: t('xg_infraTitle'),
            desc: t('xg_infraDesc'),
        },
        {
            icon: 'bi-shield-lock-fill',
            title: t('xg_authTitle'),
            desc: t('xg_authDesc'),
        },
    ];

    return (
        <div id="XtremeGym">
            {/* Título de sección */}
            <h1 className="display-5 pb-2 fw-bold text-body-emphasis border-bottom">
                XtremeGym
            </h1>

            <div className="container px-4 py-5">
                <div className="row row-cols-1 row-cols-md-2 align-items-md-start g-5 py-5">

                    {/* Columna izquierda: stack + links + estadísticas */}
                    <div className="col d-flex flex-column gap-4">

                        {/* Stack tecnológico */}
                        <div>
                            <h5 className="fw-semibold text-body-emphasis mb-3">
                                {t('xg_stack')}
                            </h5>

                            <div className="d-flex flex-wrap gap-2">
                                {['Django REST', 'React', 'shadcn/ui', 'React Native', 'Expo', 'Mercado Pago', 'Cloudflare', 'Donweb'].map(tech => (
                                    <span
                                        key={tech}
                                        className="px-3 py-2 rounded-pill border text-body small fw-medium bg-body-tertiary"
                                        style={{
                                            transition: 'all 0.2s ease',
                                            cursor: 'default'
                                        }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.backgroundColor = 'rgba(13,110,253,0.1)'
                                            e.currentTarget.style.borderColor = 'rgba(13,110,253,0.3)'
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.backgroundColor = ''
                                            e.currentTarget.style.borderColor = ''
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Estadística destacada */}
                        <div className="p-4 rounded-4 border bg-body-tertiary shadow-sm">
                            <div className="d-flex align-items-center gap-3">
                                <div className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: 56, height: 56 }}>
                                    <i className="bi bi-person-check-fill fs-4"></i>
                                </div>

                                <div>
                                    <div className="display-6 fw-bold mb-0">+1.500</div>
                                    <div className="text-body-secondary fw-semibold">
                                        {t('xg_usersRegistered')}
                                    </div>
                                </div>
                            </div>

                            <p className="text-body-secondary mb-0 mt-3 small">
                                {t('xg_inProduction')}
                            </p>
                        </div>

                        {/* Links */}
                        <div className="d-flex flex-column gap-2">
                            <h5 className="fw-semibold text-body-emphasis mb-1">{t('xg_accessTitle')}</h5>
                            <a
                                href="https://xtremegym.com.ar/"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-primary d-flex align-items-center gap-2 justify-content-center"
                            >
                                <i className="bi bi-globe2"></i>
                                {t('xg_visitWeb')}
                            </a>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.fedevalle.xtremegym&hl=es"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-dark d-flex align-items-center gap-2 justify-content-center"
                            >
                                <i className="bi bi-google-play"></i>
                                Google Play Store
                            </a>
                            <a
                                href="https://apps.apple.com/ar/app/xtremegym/id6759013698"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-dark d-flex align-items-center gap-2 justify-content-center"
                            >
                                <i className="bi bi-apple"></i>
                                Apple App Store
                            </a>
                        </div>

                        {/* Descripción general */}
                        <p className="text-body-secondary">
                            {t('xg_mainDesc')}
                        </p>
                    </div>

                    {/* Columna derecha: grilla de features */}
                    <div className="col">
                        <div className="row row-cols-1 row-cols-sm-2 g-4">
                            {features.map((f) => (
                                <div key={f.title} className="col d-flex flex-column gap-2">
                                    <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                                        <i className={`bi ${f.icon}`}></i>
                                    </div>
                                    <h4 className="fw-semibold mb-0 text-body-emphasis text-left">
                                        {f.title}
                                    </h4>
                                    <p className="text-body-secondary text-left">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}