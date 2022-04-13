import * as React from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faAndroid, faApple, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import Image1 from '../../assets/images/wallet/muun/1.png';
import { Row, Col } from "react-bootstrap";
import { TwitterTweetEmbed } from "react-twitter-embed";

const Muun = () => {
    return (
        <main>
            <title>Dompet Muun</title>

            <Header />

            <article className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <h1 className="section-heading mb-2">Muun</h1>
                            <img src={Image1} alt="Muun Wallet" className="img-fluid" />

                            <h2 className="mt-4">Tautan Unduh</h2>
                            <a href="https://play.google.com/store/apps/details?id=io.muun.apollo&hl=in&gl=US"
                                className="btn btn-secondary"
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faAndroid} /> Android
                            </a>
                            <a href="https://apps.apple.com/us/app/muun-wallet/id1482037683"
                                className="btn btn-secondary ml-1"
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faApple} /> iOS
                            </a>
                            <a href="https://github.com/muun"
                                className="btn btn-secondary ml-1"
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faGithub} /> GitHub
                            </a>

                            <h2 className="mt-4">Kelebihan</h2>
                            <p>
                                <ul className="no-bullet">
                                    <li>
                                        <FontAwesomeIcon icon={faCheckCircle} /> Self-Kustodial
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faCheckCircle} />  Bisa swap  <Link to={'/bantuan'}>Bitcoin</Link> (on-chain) ke Lightning
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faCheckCircle} />  Sudah mendukung alamat <Link to={'/alamat/taproot'}>TapRoot</Link>
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
                                        <FontAwesomeIcon icon={faTimesCircle} /> Tidak bisa memisahkan antara Lightning dan On-cahin
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
                                tweetId={'1490360523535564800'}
                            />
                        </Col>
                        <Col>
                            <TwitterTweetEmbed
                                tweetId={'1496527510284431361'}
                            />
                        </Col>
                        <Col>
                            <TwitterTweetEmbed
                                tweetId={'1496929201185705997'}
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
