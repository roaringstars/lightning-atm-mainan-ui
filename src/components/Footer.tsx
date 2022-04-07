import * as React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "gatsby";

const Footer = () => {
    return (
        <>
            <footer className="text-center text-lg-start bg-light text-muted footer-section">
                <section className="">
                    <div className="container text-center text-md-start pt-5">

                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 about  text-justify">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Lightning ATM <span>(Mainan)</span>
                                </h6>
                                <p className="mb-2">
                                    ATM Bitcoin pertama di Indonesia yang mendukung Lightning Network.</p>
                                <p>
                                    Memberikan ruang untuk yang ingin mencoba
                                    Bitcoin tanpa mengeluarkan banyak uang.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Menu Utama
                                </h6>
                                <p>
                                    <Link to="/" className="text-reset">Beranda</Link>
                                </p>
                                <p>
                                    <Link to="/atm" className="text-reset">ATM</Link>
                                </p>
                                <p>
                                    <Link to="/bantuan" className="text-reset">Bantuan</Link>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Tautan
                                </h6>
                                <p>
                                    <Link to="https://github.com/roaringstars/" className="text-reset">
                                        Github
                                    </Link>
                                </p>

                                <p>
                                    <Link to="/tos" className="text-reset">Kebijakan Layanan</Link>
                                </p>
                                <p>
                                <Link to="/kontributor"  className="text-reset">Kontributor</Link>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Alamat Kantor
                                </h6>
                                <p>Jl. Raya Internet, Block #709632, Internet 🏴‍☠</p>

                                <Link to="https://twitter.com/hashtag/LightningAtmMainan?src=hashtag_click" className="me-4 text-reset">

                                    <FontAwesomeIcon icon={faTwitter} />  #LightningAtmMainan
                                </Link>
                                <Link to="https://twitter.com/roaringstars/" className="me-4 text-reset">
                                    <br />
                                    <FontAwesomeIcon icon={faTwitter} />  @roaringstars
                                </Link>

                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center p-4 footer-copyright">
                &#127279; {new Date().getFullYear()} F**k Copyright, Semua Milik Tuhan. Dikelola oleh Banyak Orang
                </div>
            </footer>
        </>
    )
}

export default Footer
