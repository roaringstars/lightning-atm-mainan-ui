import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

import { faCheckCircle, faNewspaper, faPencil, faTimesCircle, faVideo } from "@fortawesome/free-solid-svg-icons";
import { faAndroid, faApple, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import Image1 from '../assets/images/wallet/muun/1.png';
import { Row, Col } from "react-bootstrap";
import { TwitterTweetEmbed } from "react-twitter-embed";

const Muun = () => {
    return (
        <main>
            <title>Liputan Media</title>

            <Header />

            <article className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <h1 className="section-heading mb-2">Liputan Media</h1>
                            <p>Beberapa liputan yang membahas tentang project Lightning ATM (Mainan)</p>
                            <p>
                                <ul>
                                    <li>
                                        <FontAwesomeIcon icon={faNewspaper} />&nbsp;
                                        <a target="_blank" 
                                        href="https://www.cnbcindonesia.com/tech/20220413094000-37-331226/atm-bitcoin-buatan-netizen-indonesia-minimal-tukar-rp-1500">
                                            CNBC Indonesia: ATM Bitcoin Buatan Netizen Indonesia, Minimal Tukar Rp 1.500
                                        </a>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faNewspaper} />&nbsp;
                                        <a target="_blank" 
                                        href="https://id.beincrypto.com/mengenal-atm-bitcoin-pertama-di-indonesia-yang-dukung-lightning-network/">
                                           BeInCrypto: Mengenal ATM Bitcoin Pertama di Indonesia yang Dukung Lightning Network
                                        </a>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faNewspaper} />&nbsp;
                                        <a target="_blank" 
                                        href="https://coinvestasi.com/berita/atm-bitcoin-di-indonesia">
                                           Coinvestasi: Didukung Lightning Network, Indonesia Bakal Punya ATM Bitcoin?!
                                        </a>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faTwitter} />&nbsp;
                                        <a target="_blank" 
                                        href="https://twitter.com/GlobalBTCFest/status/1513577186745364485">
                                            Global Bitcoin Fest
                                        </a>
                                    </li>

                                    <li>
                                        <FontAwesomeIcon icon={faPencil} />&nbsp;
                                        <a target="_blank" 
                                        href="https://orangkamar.com/lightning-atm-beli-bitcoin-eceran-dan-belajar-self-custody/">
                                           Orang Kamar: Beli Bitcoin Eceran dan Belajar Self Custody dengan Lightning ATM
                                        </a>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faVideo} />
                                        <a target="_blank" 
                                        href="https://www.youtube.com/watch?v=Iwk-rRCy6qU&feature=youtu.be">
                                           Bukanrastaman: Cara mudah membeli Bitcoin dengan Lightning ATM ( Roaringstars)
                                        </a>
                                    </li>
                                </ul>
                            </p>


                        </div>
                    </div>
                </div>
            </article>
            <Footer />
        </main>
    )
}

export default Muun
