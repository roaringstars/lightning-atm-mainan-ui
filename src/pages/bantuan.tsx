import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

import { Card } from "react-bootstrap"
import ReactTooltip from "react-tooltip"
import { TwitterTweetEmbed } from "react-twitter-embed"
import { Link } from "gatsby"
import Image1 from '../assets/images/bantuan/bitcoin.jpg';
import Image2 from '../assets/images/bantuan/lightning-network.jpg';
import metaPreviewImage from '../assets/images/meta/bantuan.jpg';
import MetaTags from "../components/MetaTags"

const Bantuan = () => {
    return (
        <main>
            <MetaTags
                metaDescription="Pusat Bantuan, Apa itu Bitcoin? Apa itu Lightning Network? Bagaimana cara menggunakan Lightning ATM (Mainan)?"
                metaTitle= "Pusat Bantuan"
                metaPath="/bantuan"
                metaPreviewImage={metaPreviewImage}
            />

            <Header />

            <article className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <h2 className="section-heading mb-2">Apa itu Bitcoin?</h2>
                            <Card className="mb-4">
                                <Card.Body>

                                    <p className="mb-0">Bitcoin adalah mata uang digital yang didistribusikan secara elektronik dan tidak dikendalikan oleh pemerintah mana pun.
                                        Bitcoin merupakan sebuah repository open-source yakni seluruh desain arsitekturnya dipublikasi,
                                        siapa saja dapat melihat isi dari software Bitcoin itu sendiri.
                                        Yang artinya bersifat transparan akan segala konsep dan cara kerja teknologinya.
                                    </p>
                                </Card.Body>
                            </Card>


                            <h2 className="section-heading mb-2">Apa itu Lightning Network?</h2>
                            <img src={Image2} alt="BlueWallet" className="img-fluid" />
                            <Card className="mb-4">
                                <Card.Body>

                                    <p className="mb-0">
                                        Bitcoin Lightning network merupakan solusi dari isu skalabilitas Bitcoin.
                                        Jaringan ini menumpang diatas jaringan Bitcoin, sehingga dapat melakukan transaksi
                                        lebih cepat dan efisien tanpa mengorbankan desentralisasi dan keamanan Bitcoin.
                                        Lightning Network menawarkan transaksi instan dan sangat menghemat biaya.
                                    </p>
                                </Card.Body>
                            </Card>


                            {/* <h2 className="section-heading mb-2">Apa itu Bitcoin Wallet?</h2>
                            <Card className="mb-4">
                                <Card.Body>

                                    <p className="mb-0">(membutuhkan bantuan untuk melengkapi penjelasan Bitcoin Wallet) ⚠️
                                    </p>
                                </Card.Body>
                            </Card>


                            <h2 className="section-heading mb-2">Apa itu LNURL?</h2>
                            <Card className="mb-4">
                                <Card.Body>

                                    <p className="mb-0">(membutuhkan bantuan untuk melengkapi penjelasan LNURL) ⚠️
                                    </p>
                                </Card.Body>
                            </Card> */}


                            <h2 className="section-heading mb-2">Pembayaran Rupiah Yang Didukung</h2>
                            <Card className="mb-4">
                                <Card.Body>

                                    <p className="mb-0">
                                        Medukung semua jenis pembayaran yang masuk kedalam QRIS seperti:
                                        <ul>
                                            <li>
                                                <span data-tip="React-tooltip" data-for={'idr-gopay'}>
                                                    Gopay
                                                    [<a href="https://twitter.com/roaringstars/status/1490360523535564800">1</a>]
                                                </span>
                                                <ReactTooltip place="right" id={'idr-gopay'} effect="solid">
                                                    Terakhir diuji coba 6 Feb 2022
                                                </ReactTooltip>
                                            </li>
                                            <li>
                                                <span data-tip="React-tooltip" data-for={'idr-dana'}>
                                                    Dana
                                                    [<a href="https://twitter.com/jevanjovandy/status/1498143245758767104">1</a>]
                                                </span>
                                                <ReactTooltip place="right" id={'idr-dana'} effect="solid">
                                                    Terakhir diuji coba 28 Feb 2022
                                                </ReactTooltip>
                                            </li>
                                            <li> ... dll</li>
                                        </ul>
                                    </p>
                                </Card.Body>
                            </Card>

                            <h2 className="section-heading mb-2">Dompet Bitcoin LN Yang Didukung</h2>
                            <Card className="mb-4">
                                <Card.Body>
                                    <p className="mb-0">
                                        <ul>
                                            <li>
                                                <Link to={'/dompet/wallet-of-satoshi'}
                                                    data-tip="React-tooltip"
                                                    data-for={'wallet-wallet-of-satoshi'}>Wallet of Satoshi</Link>
                                                <ReactTooltip id={'wallet-wallet-of-satoshi'} effect="solid">
                                                    Direkomendasikan jika baru mencoba Lightning Network
                                                </ReactTooltip>
                                            </li>
                                            <li>
                                                <Link to={'/dompet/muun'}>Muun</Link>
                                            </li>
                                            <li>
                                                <Link to={'/dompet/bluewallet'} >BlueWallet</Link>
                                            </li>
                                            {/* <li>
                                                <Link to={'/dompet/zap'}
                                                    data-tip="React-tooltip"
                                                    data-for={'wallet-zap'}>Zap</Link>
                                                <ReactTooltip id={'wallet-zap'} effect="solid">
                                                    Halaman belum ada, membutuhkan bantuan untuk melengkapi info
                                                </ReactTooltip>
                                            </li>
                                            <li>
                                                <Link to={'/dompet/phoenix'}
                                                    data-tip="React-tooltip"
                                                    data-for={'wallet-phoenix'}>Phoenix</Link>
                                                <ReactTooltip id={'wallet-phoenix'} effect="solid">
                                                    Halaman belum ada, membutuhkan bantuan untuk melengkapi info
                                                </ReactTooltip>
                                            </li> */}
                                            <li>
                                                <Link to={'/dompet/zebedee'}
                                                    data-tip="React-tooltip"
                                                    data-for={'wallet-zebedee'}>Zebedee</Link>
                                                <ReactTooltip id={'wallet-zebedee'} effect="solid">
                                                    Halaman belum ada, membutuhkan bantuan untuk melengkapi info
                                                </ReactTooltip>
                                            </li>

                                            <li> ...(membutuhkan bantuan untuk melengkapi ) ⚠️</li>
                                        </ul></p>

                                </Card.Body>
                            </Card>

                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    )
}

export default Bantuan
