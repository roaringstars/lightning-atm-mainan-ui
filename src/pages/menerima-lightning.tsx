import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

import { Button, Card, Col, Row } from "react-bootstrap"
import ReactTooltip from "react-tooltip"
import { Link } from "gatsby"
import Image1 from '../assets/images/menerima-lightning/bitrefill.jpg';
import Image2 from '../assets/images/menerima-lightning/fixedfloat.jpg';
import Image3 from '../assets/images/menerima-lightning/coinkit.jpg';
import Image4 from '../assets/images/menerima-lightning/ahnames.jpg';
import Image5 from '../assets/images/menerima-lightning/microlancer.jpg';
import Image6 from '../assets/images/menerima-lightning/ln-address.png';

const MenerimaLightning = () => {
    return (
        <main>
            <title>Menerima Lightning</title>

            <Header />

            <article className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <h2 className="section-heading mb-2 text-center">Dimana Saya Bisa Menggunakan Lightning?</h2>
                            <Card className="mt-4">
                                <Card.Body>

                                    <p className="mb-0">Terdapat banyak layanan yang menerima Pembayaran Lightning, berikut adalah beberapa
                                    </p>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </article>
            <section className="section-3">
                <div className="container">
                    <Row>
                        <Col sm={12} md={6} lg={4}>
                            <Card>
                                <div style={{ height: '150px', overflow: 'hidden' }}>
                                    <Card.Img variant="top" src={Image1} />
                                </div>
                                <Card.Body>
                                    <Card.Title>Bitrefill</Card.Title>
                                    <Card.Text>
                                        Dari membeli pulsa, voucher game, sampai voucher balanja bisa dilakukan diwebsite tersebut.
                                    </Card.Text>
                                    <a href="https://www.bitrefill.com/buy/?hl=en" target="_blank">

                                        <Button variant="primary">bitrefill.com</Button>
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <Card>
                                <div style={{ height: '150px', overflow: 'hidden' }}>
                                    <Card.Img variant="top" src={Image2} />
                                </div>
                                <Card.Body>
                                    <Card.Title>FixedFloat</Card.Title>
                                    <Card.Text>
                                        Kamu bisa menukarkan Lightning ke berbagaimacam kripto
                                    </Card.Text>
                                    <a href="https://fixedfloat.com/" target="_blank">

                                        <Button variant="primary">fixedfloat.com</Button>
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <Card>
                                <div style={{ height: '150px', overflow: 'hidden' }}>
                                    <Card.Img variant="top" src={Image3} />
                                </div>
                                <Card.Body>
                                    <Card.Title>CoinKit</Card.Title>
                                    <Card.Text>
                                        Aplikasi ini memungkinkan kamu membuat giveaway dengan LN di Twitter atau mengirim LN melalui WhatsApp dan Telegram.
                                    </Card.Text>
                                    <a href="https://coinkit.de/" target="_blank">

                                        <Button variant="primary">coinkit.de</Button>
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                    </Row>
                    <Row className="mt-3">
                        <Col sm={12} md={6} lg={4}>
                            <Card>
                                <div style={{ height: '150px', overflow: 'hidden' }}>
                                    <Card.Img variant="top" src={Image4} />
                                </div>
                                <Card.Body>
                                    <Card.Title>AhNames</Card.Title>
                                    <Card.Text>
                                        Website ini menerima pembayaran LN untuk sewa Domain dan VPS, termasuk domain ini juga sewa di website tersebut :)
                                    </Card.Text>
                                    <a href="https://ahnames.com/en" target="_blank">

                                        <Button variant="primary">ahnames.com</Button>
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <Card>
                                <div style={{ height: '150px', overflow: 'hidden' }}>
                                    <Card.Img variant="top" src={Image5} />
                                </div>
                                <Card.Body>
                                    <Card.Title>Microlancer</Card.Title>
                                    <Card.Text>
                                       Tempat untuk mencari pekerjaan ringan seperti like/retweet atau lainnya, dan tentunya dibayar menggunakan Lightning.
                                    </Card.Text>
                                    <a href="https://microlancer.io/" target="_blank">

                                        <Button variant="primary">microlancer.io</Button>
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <Card>
                                <div style={{ height: '150px', overflow: 'hidden' }}>
                                    <Card.Img variant="top" src={Image6} />
                                </div>
                                <Card.Body>
                                    <Card.Title>Tipping</Card.Title>
                                    <Card.Text>
                                        Kamu juga bisa mengirimkan hadiah atau tipping ke seseorang, 
                                        kamu bisa belajar membuat alamat lightning disini.
                                    </Card.Text>
                                    <a href="https://lightningaddress.com/" target="_blank">

                                        <Button variant="primary">lightningaddress.com</Button>
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                    </Row>


                    <Row className="mt-3">
                        <Col sm={12}>
                            <Card>
                                <Card.Body>
                                    <p>Selain beberapa diatas adalah yang sudah saya coba, selebihnya masih banyak lagi, 
                                        mungkin coba kunjungi beberapa situs ini, atau Googling saja pasti banyak kok 😉</p>
                                    <ul>
                                        <li>
                                            <a href="https://lightningnetworkstores.com/">https://lightningnetworkstores.com/</a>
                                        </li>
                                        <li>
                                            <a href="https://acceptlightning.com/">https://acceptlightning.com/</a>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="mt-3">
                        <Col sm={12}>
                            <Card>
                                <Card.Body>
                                    <p>Oya kalau kamu punya rekomendasi, bisa hubungi @roaringstars di Twitter ya</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </section>

            <Footer />
        </main>
    )
}

export default MenerimaLightning
