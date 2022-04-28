import * as React from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import { Link } from "gatsby"
import Illustration1 from '../../assets/images/mengapa-bitcoin-ada/i1.svg';
import Illustration2 from '../../assets/images/mengapa-bitcoin-ada/i2.png';

import './style.css'
import ReactTooltip from "react-tooltip";
import { Col, Row } from "react-bootstrap";

const Index = () => {
    return (
        <main className="why">
            <title>Mengapa Bitcoin Ada?</title>

            <Header />


            <section className="section-1">
                <div className="container">
                    <div className="h1">Mengapa Bitcoin Ada?</div>
                    <div className="h2">Sebuah usaha manusia untuk menemukan kembali Uang</div>

                    <div className="illustration">
                        Illustrasi Evolusi Uang dari Kerang ke Bitcoin.
                    </div>

                </div>
            </section>

            <section className="section-2">
                <div className="container">

                    <Row>
                        <Col md={6}>
                            <div className="h3">Kita kembali ke 5000 tahun lalu...</div>
                            Pada masa ini, adalah awal manusia mulai hidup dalam kelompok dan membagi tugas
                            untuk bertahan hidup.
                            Ada yang bekerja sebagai petani, nelayan, peternak dan lain sebagainya. <br />

                            Setiap Peternak ayam mulai menukarkan
                            sebagian telur dengan sekantung beras, begitu pula sebaliknya
                            <a data-tip="React-tooltip" data-for={'ref1'} href="#"><sup>[1]</sup></a>.
                            <br />
                            <br />
                            Sistem inilah yang kemudian dinamakan Barter.
                        </Col>
                        <Col md={6}>
                            <div className="illustration">
                                Illustrasi seseorang dari masa kini, menyelinap untuk melihat transaksi di
                                saat masih menggunakan
                                kerang. 😅😅

                                Tapi illustrasinya simpel aja, dual tone aja 😅
                            </div>
                        </Col>
                    </Row>

                </div>
            </section>



            <section className="section-3">
                <div className="container">

                    <Row>
                        <Col md={6}>
                            <div className="illustration">
                               Illustrasi garam, kerang dan rai stones.
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="h3">Namun Sistem Barter memiliki kekurangan...</div>
                            Salah satu kekurangan barter adalah sulitnya menemukan orang yang 
                            mau menukarkan barang dengan yang mereka butuhkan. 
                            <br/>
                            <br/>
                            Sehingga mulailah 
                            manusia menggunakan benda-benda tertentu untuk digunakan 
                            sebgai simbol pertukaran. 
                            Bangsa Romawi menggunakan Garam, Bangsa X menggunakan X, dan sebgainya. (perlu riset)
                            
                        </Col>
                    </Row>

                </div>
            </section>


            <section className="section-4">
                <div className="container">

                    <Row>
                        <Col md={6}>
                            <div className="h3">Emas Sebagai Alat Tukar</div>
                            (masih bingung deskripsinya apa)
                            
                            <br />
                            <br />
                            Namun, penggunaan emas juga tidak efektif, terutama dalam 
                            jumlah besar, karena berat dan rentang hilang.

                            Kemudian, dibuatlah sebuah Bank.
                        </Col>
                        <Col md={6}>
                            <div className="illustration">
                                Illustrasi juga masih binung apa.
                            </div>
                        </Col>
                    </Row>

                </div>
            </section>


            <section className="section-5">
                <div className="container">

                    <Row>
                        <Col md={12}>
                            <div className="illustration">
                                Illustrasi bank dengan orang antri membawa emas
                            </div>
                        </Col>
                    </Row>

                </div>
            </section>



            <section className="section-6">
                <div className="container">

                    <Row>
                        <Col md={6}>
                            <div className="h3">Kelebihan dan Kekurangan Bank</div>
                            (masih bingung deskripsinya apa)
                            <br/>
                            <br/>
                            Kelebihan: Relatif mudah

                            <br/>
                            Kekurangan: Perlu Membayar banyak orang, sehingga bank 
                            mencoba mengambil keungungan
                            
                        </Col>
                        <Col md={6}>
                            <div className="illustration">
                                Illustrasi juga masih binung apa.
                            </div>
                        </Col>
                    </Row>

                </div>
            </section>


            <section className="section-7">
                <div className="container">

                    <Row>
                        <Col md={6}>
                            <div className="h3">Mengirim Uang Jarak Jauh</div>
                            (masih bingung deskripsinya apa)
                            <br/>
                            <br/>
                            Kemudian ditemukan ... untuk mengirim uang jarak jauh. 
                            Namun....
                            
                        </Col>
                        <Col md={6}>
                            <div className="illustration">
                                Illustrasi juga masih binung apa.
                            </div>
                        </Col>
                    </Row>

                </div>
            </section>



            <section className="section-7">
                <div className="container">

                    <Row>
                        <Col md={6}>
                            <div className="illustration">
                                Illustrasi pencetakan uang masif
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="h3">Pencabutan Standar Emas</div>
                            (masih bingung deskripsinya apa)
                            
                        </Col>
                    </Row>

                </div>
            </section>



            <section className="section-8">
                <div className="container">

                    <Row>
                        <Col md={12}>
                            <div className="illustration">
                                Illustrasi peradaban modern dan uang
                            </div>
                        </Col>
                    </Row>

                </div>
            </section>


            <section className="section-9">
                <div className="container">

                    <Row>
                        <Col md={6}>
                            <div className="illustration">
                                Illustrasi juga masih binung apa.
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="h3">Bitcoin</div>
                            (masih bingung deskripsinya apa)
                            <br/>
                            Bitcoin pun masih memiliki masalah, yaitu terbatasnya jumlah transaksiu 
                        </Col>
                    </Row>

                </div>
            </section>


            <section className="section-10">
                <div className="container">

                    <Row>
                        <Col md={6}>
                            <div className="h3">Lightning Network</div>
                            (masih bingung deskripsinya apa)
                            <br/>
                        </Col>
                        <Col md={6}>
                            <div className="illustration">
                                Illustrasi petir dan dua smartphone
                            </div>
                        </Col>
                    </Row>

                </div>
            </section>



            <section className="section-99">
                <div className="container">
                    <div>Sumber Artikel</div>
                    <ol>
                        <li>
                            Britanica: A Brief (and Fascinating) History of Money.<br />
                            <a href="https://www.britannica.com/story/a-brief-and-fascinating-history-of-money">
                                https://www.britannica.com/story/a-brief-and-fascinating-history-of-money
                            </a>
                        </li>
                    </ol>
                </div>
            </section>
<section className="section-99">
    <div className="container">
        <div>Inspirasi</div>
        <ol>
            <li>
                https://www.upfolio.com/ultimate-bitcoin-guide
            </li>
            <li>
                https://www.investopedia.com/articles/07/roots_of_money.asp#citation-7
            </li>
        </ol>
    </div>
</section>


            <Footer />
        </main>
    )
}

export default Index
