import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import { Card, Table } from "react-bootstrap"
import PriceInBtc from "../components/PriceInBtc";

const Bantuan = () => {
    const [btcRate, setBtcRate] = React.useState(600000000);

    return (
        <main>
            <title>Pusat Bantuan</title>

            <Header />

            <article className="mb-4 section-comparison">
                <div className="container ">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-10 col-xl-7">
                            <h2 className="section-heading mb-2">Perbandingan Biaya Self-Custody</h2>
                            <Card className="mb-4">
                                <Card.Body>

                                    <p className="mb-0">Berikut tabel perbandingan biaya yang dibutuhkan untuk memegang Bitcoin kamu
                                        sendiri sesuai tujuan awal Bitcoin.
                                    </p>
                                </Card.Body>
                            </Card>

                            <Table striped bordered hover size="lg">
                                <thead>
                                    <tr>
                                        <th>Nama Layanan</th>
                                        <th>Min Deposit</th>
                                        <th>Min Bitcoin Withdraw</th>
                                        <th>Withdraw Fee</th>
                                        <th>Support LN</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Lightning ATM (Mainan)</td>
                                        <td>Rp1,500</td>
                                        <td>Rp1,500</td>
                                        <td>10% (Fixed)</td>
                                        <td>
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-success"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Indodax</td>
                                        <td>Rp10,000</td>
                                        <td>Rp100,000</td>
                                        <td>Rp300,xxx</td>
                                        <td>
                                            <FontAwesomeIcon icon={faTimesCircle} className="text-danger"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Binance</td>
                                        <td>Rp20,000</td>
                                        <td>?</td>
                                        <td>?</td>
                                        <td>
                                            <FontAwesomeIcon icon={faTimesCircle} className="text-danger"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>TokoCrypto</td>
                                        <td>Rp50,000</td>
                                        <td><PriceInBtc btc="0.001"/></td>
                                        <td><PriceInBtc btc="0.0004"/></td>
                                        <td>
                                            <FontAwesomeIcon icon={faTimesCircle} className="text-danger"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Pintu</td>
                                        <td>Rp50,000</td>
                                        <td>?</td>
                                        <td>Rp300,xxx</td>
                                        <td>
                                            <FontAwesomeIcon icon={faTimesCircle} className="text-danger"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Luno</td>
                                        <td>Rp10,000</td>
                                        <td>Rp0</td>
                                        <td>Rp7,xxx (OnChain Fee)</td>
                                        <td>
                                            <FontAwesomeIcon icon={faTimesCircle} className="text-danger"/>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    )
}

export default Bantuan
