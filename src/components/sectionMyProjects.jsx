import house from "../assets/house.png";
import esmalte from "../assets/esmalte.png";
import rickAndMortyImg from "../assets/rickAndMortyImg.jpg";
import casaLaCosta from "../assets/casaLaCosta.png";
import snail from "../assets/snail.png";
import prime from "../assets/icons/prime.png";
import php from "../assets/icons/php.png";
import { useTranslation } from "react-i18next";

export default function SectionMyProjects() {
    const { t } = useTranslation();

    return (
        <div>
            <h1 id="CasaLaCosta" className="visually-hidden">
                {t("projects")}
            </h1>

            <div
                className="container align-items-center justify-content-center px-4 py-5"
                id="featured-3"
            >
                <h2 className="pb-2 text-body-emphasis">{t("someProjectsTitle")}</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                    <div className="col py-3">
                        <div className="border border-1 rounded p-5">
                            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                                <img src={house} className="mt-5" width="192" height="139" />
                            </div>
                            <h3 className="fs-2 text-body-emphasis">appLimpieza</h3>
                            <p>{t("appLimpiezaDesc")}</p>
                            <button
                                type="button"
                                className="btn btn-outline-secondary btn-lg px-4"
                                onClick={() => {
                                    window.location.href = "#appLimpieza";
                                }}
                            >
                                {t("seeMore")}
                            </button>
                        </div>
                    </div>
                    <div className="col py-3">
                        <div className="border border-1 rounded p-5">
                            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                                <img
                                    src={casaLaCosta}
                                    className="mt-5"
                                    width="200%"
                                    height="200%"
                                />
                            </div>
                            <h3 className="fs-2 text-body-emphasis">CasaLaCosta</h3>
                            <p>{t("casaLaCostaDesc1")}</p>
                            <p>
                                {t("casaLaCostaDesc2")}
                                <a
                                    href="https://github.com/nachitoooo"
                                    target="_blank"
                                    className="icon-link"
                                >
                                    Nacho
                                </a>
                            </p>
                            <a
                                className="btn btn-primary btn-lg px-4 me-md-2"
                                target="_blank"
                                href="https://nachitoooo.github.io/casadelacosta/"
                            >
                                {t("visitWebSite")}
                            </a>
                        </div>
                    </div>

                    <div className="col py-3">
                        <div className="border border-1 rounded p-5">
                            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                                <img src={esmalte} className="mt-5" width="100" height="100" />
                            </div>
                            <h3 className="fs-2 text-body-emphasis">
                                {t("consultorioTitle")}
                            </h3>
                            <div style={{ flexDirection: "row" }}>
                                <a href="https://primereact.org/" target="_blank">
                                    <img src={php} width="45" height="26" />
                                </a>
                            </div>
                            <p>{t("consultorioDesc")}</p>
                            <button
                                type="button"
                                className="btn btn-outline-secondary btn-lg px-4"
                                onClick={() => {
                                    window.location.href = "#Consultorio";
                                }}
                            >
                                {t("seeMore")}
                            </button>
                        </div>
                    </div>

                    <div className="col py-3">
                        <div className="border border-1 rounded p-5">
                            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                                <img
                                    src={rickAndMortyImg}
                                    className="mt-5 rounded border-2 border-black"
                                    width="163"
                                    height="121"
                                />
                            </div>
                            <h3 className="fs-2 text-body-emphasis">Rick and Morty Guess</h3>
                            <p>{t("rickAndMortyDesc")}</p>
                            <a
                                className="btn btn-primary btn-lg px-4 me-md-2"
                                target="_blank"
                                href="https://xstranged1.github.io/rick-and-morty-guess/"
                            >
                                {t("play")}
                            </a>
                        </div>
                    </div>
                    <div className="col py-3">
                        <div className="border border-1 rounded p-5">
                            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                                <img src={snail} className="mt-5" width="120" height="120" />
                            </div>
                            <h3 className="fs-2 text-body-emphasis">Calendary</h3>
                            <div style={{ flexDirection: "row" }}>
                                <a href="https://supabase.com/" target="_blank">
                                    <svg
                                        width="32"
                                        height="32"
                                        viewBox="0 0 109 113"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
                                            fill="url(#paint0_linear)"
                                        />
                                        <path
                                            d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
                                            fill="url(#paint1_linear)"
                                            fillOpacity="0.2"
                                        />
                                        <path
                                            d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z"
                                            fill="#3ECF8E"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear"
                                                x1="53.9738"
                                                y1="54.974"
                                                x2="94.1635"
                                                y2="71.8295"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#249361" />
                                                <stop offset="1" stopColor="#3ECF8E" />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint1_linear"
                                                x1="36.1558"
                                                y1="30.578"
                                                x2="54.4844"
                                                y2="65.0806"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop />
                                                <stop offset="1" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </a>
                                <a
                                    href="https://primereact.org/"
                                    style={{ marginLeft: 20 }}
                                    target="_blank"
                                >
                                    <img src={prime} width="32" height="32" />
                                </a>
                            </div>
                            <p>{t("calendaryDesc")}</p>
                            <a
                                className="btn btn-primary btn-lg px-4 me-md-2"
                                target="_blank"
                                href="https://xstranged1.github.io/Calendary/"
                            >
                                {t("seeMore")}
                            </a>
                        </div>
                    </div>
                    <div className="col py-3">
                        <div className="border border-1 rounded p-5">
                            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                                <img src={snail} className="mt-5" width="120" height="120" />
                            </div>
                            <h3 className="fs-2 text-body-emphasis">Snail Sort 🐌</h3>
                            <p>{t("snailSortDesc")}</p>
                            <a
                                className="btn btn-primary btn-lg px-4 me-md-2"
                                target="_blank"
                                href="https://xstranged1.github.io/snailSort/"
                            >
                                {t("seeMore")}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
