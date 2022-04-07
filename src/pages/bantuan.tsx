import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

import { Card } from "react-bootstrap"

const Bantuan = () => {
    return (
        <main>
            <title>Pusat Bantuan</title>

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
                            <Card className="mb-4">
                                <Card.Body>

                                    <p className="mb-0">(membutuhkan bantuan untuk melengkapi penjelasan lightning network) ⚠️
                                    </p>
                                </Card.Body>
                            </Card>


                            <h2 className="section-heading mb-2">Apa itu Bitcoin Wallet?</h2>
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
                            </Card>


                            <h2 className="section-heading mb-2">Pembayaran Rupiah Yang Didukung</h2>
                            <Card className="mb-4">
                                <Card.Body>

                                    <p className="mb-0">
                                        <ul>
                                            <li>Gopay</li>
                                            <li>Dana</li>
                                            <li> ... need help add more</li>
                                        </ul>
                                        (membutuhkan bantuan untuk melengkapi ) ⚠️
                                    </p>
                                </Card.Body>
                            </Card>

                            <h2 className="section-heading mb-2">Dompet Bitcoin LN Yang Didukung</h2>
                            <Card className="mb-4">
                                <Card.Body>

                                    <p className="mb-0">
                                        <ul>
                                            <li>Muun</li>
                                            <li>BlueWallet</li>
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
