import * as React from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faAndroid, faApple, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import Image1 from '../../assets/images/wallet/bluewallet/1.png';
import { Row, Col } from "react-bootstrap";
import { TwitterTweetEmbed } from "react-twitter-embed";

const Muun = () => {
    return (
        <main>
            <title>Dompet BlueWallet</title>

            <Header />

            <article className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <h1 className="section-heading mb-2">BlueWallet</h1>
                            <img src={Image1} alt="BlueWallet" className="img-fluid" />

                            <h2 className="mt-4">Tautan Unduh</h2>
                            <a href="https://play.google.com/store/apps/details?id=io.bluewallet.bluewallet"
                                className="btn btn-secondary"
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faAndroid} /> Android
                            </a>
                            <a href="https://itunes.apple.com/app/bluewallet-bitcoin-wallet/id1376878040"
                                className="btn btn-secondary ml-1"
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faApple} /> iOS
                            </a>
                            <a href="https://github.com/bluewallet/bluewallet"
                                className="btn btn-secondary ml-1"
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faGithub} /> GitHub
                            </a>

                            <h2 className="mt-4">Kelebihan</h2>
                            <p>
                                <ul className="no-bullet">
                                    <li>
                                        <FontAwesomeIcon icon={faCheckCircle} /> Semi Self-Kustodial
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faCheckCircle} />  Bisa membuat banyak dompet dalam satu aplikasi
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faCheckCircle} /> Ada fitur bankas MultiSig
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faCheckCircle} /> Bisa dihubungan dengan Node sendiri (contoh. Umbrel)
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faCheckCircle} /> Open Source
                                    </li>
                                </ul>
                            </p>

                            <h2 className="mt-4">Kekurangan</h2>
                            <p>
                                <ul className="no-bullet">
                                    <li>
                                        <FontAwesomeIcon icon={faTimesCircle} /> Tidak bisa swap, harus menggunakan Exchange (contoh. Zigzag, FixedFloat)
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faTimesCircle} /> Ukuran file installasi besar
                                    </li>
                                </ul>
                            </p>


                            <h2 className="mt-4">Contoh Penggunaan</h2>

                        </div>
                    </div>
                </div>
            </article>

            <section className="section-3">
                <div className="container">
                    <Row>
                        <Col>
                            <TwitterTweetEmbed
                                tweetId={'1498143245758767104'}
                            />
                        </Col>
                        <Col>
                            <TwitterTweetEmbed
                                tweetId={'1497910856302329859'}
                            />
                        </Col>
                    </Row>
                </div>
            </section>

            <Footer />
        </main>
    )
}

export default Muun
