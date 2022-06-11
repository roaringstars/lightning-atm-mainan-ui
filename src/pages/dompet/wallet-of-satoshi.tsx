import * as React from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faAndroid, faApple, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import Image1 from '../../assets/images/wallet/wallet-of-satoshi/screen.png';
import { Row, Col } from "react-bootstrap";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { Helmet } from "react-helmet"
import metaPreviewImage from '../../assets/images/meta/index.jpg';

const WOS = () => {
    /**
     * Helmet
     */
    const metaDescription = "Review dompet Bitcoin Lightning Network - Wallet of Satoshi";
    const metaTitle = "Dompet Wallet of Satoshi";
    const metaDomain = "https://roaringstars.com";
    const metaUrl = "https://roaringstars.com/dompet/wallet-of-satoshi";

    return (
        <main>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{metaTitle}</title>
                <link rel="canonical" href={metaUrl} />
                <meta name="description" content={metaDescription} />
                <meta property="og:url" content={metaUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:image" content={metaPreviewImage} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content={metaDomain} />
                <meta property="twitter:url" content={metaUrl} />
                <meta name="twitter:title" content={metaTitle} />
                <meta name="twitter:description" content={metaDescription} />
                <meta name="twitter:image" content={metaPreviewImage} />
            </Helmet>

            <Header />

            <article className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <h1 className="section-heading mb-2">Wallet of Satoshi</h1>
                            <img src={Image1} alt="Wallet of Satoshi" className="img-fluid" />

                            <h2 className="mt-4">Tautan Unduh</h2>
                            <a href="https://play.google.com/store/apps/details?id=com.livingroomofsatoshi.wallet"
                                className="btn btn-secondary"
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faAndroid} /> Android
                            </a>
                            <a href="https://itunes.apple.com/us/app/wallet-of-satoshi/id1438599608"
                                className="btn btn-secondary ml-1"
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faApple} /> iOS
                            </a>

                            <h2 className="mt-4">Review</h2>
                            <p>
                                Wallet yang sangat sederhana dan ringan, cocok untuk kamu yang baru belajar Lightning Network.
                                Wallet of Satoshi adalah dompet Kustodial yang artinya Bitcoin mu dititipkan ke Payment Channel milik Wallet of Satoshi.
                                Sehingga sangat praktis karena tidak perlu membuat Payment Channel, namun konsekuensinya jika pihak Wallet of Satoshi suatu hari 
                                tutup, kemungkinan kamu bisa kehilangan Bitcoin didalamnya. Maka cocok untuk belajar, namun disarankan tidak menggunakan dompet ini 
                                dalam jumlah nominal besar.
                            </p>

                            <h2 className="mt-4">Fitur</h2>
                            <p>
                                <ul className="no-bullet">
                                    <li>
                                        <FontAwesomeIcon icon={faCheckCircle} /> Kustodial
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faCheckCircle} />  Relatif Ringan
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faCheckCircle} />  Sudah mendukung alamat <Link to={'/alamat/taproot'}>TapRoot</Link>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faCheckCircle} /> Backup menggunakan E-mail
                                    </li>
                                </ul>
                            </p>


                            <h2 className="mt-4">Contoh Penggunaan</h2>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/sXBwRO7ML7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </article>


            <Footer />
        </main>
    )
}

export default WOS
