import * as React from "react"
import { Link } from "gatsby"
import Header from "../components/Header"
import { Button, Row, Col } from 'react-bootstrap';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Footer from "../components/Footer";


import ScanQris from '../assets/images/index/scan_qris.svg';
import ScanLnurl from '../assets/images/index/scan_lnurl.svg';
import OwnBitcoin from '../assets/images/index/own_bitcoin.svg';

import IntroAnim from '../assets/images/index/intro_anim.svg';


const IndexPage = () => {
  return (
    <>
      <main>
        <title>Lightning ATM (Mainan)</title>

        <Header />
        <div className="container">

          <div className="jumbotron pt-5 pb-5 text-center">
            <h1 className="display-6">Lightning ATM <span>(Mainan)</span></h1>
            <p className="lead">Membantu Lebih Banyak Orang Belajar Mengelola Bitcoin Mereka Sendiri</p>
            <p className="lead">
              <Link className="btn btn-orange btn-lg" to="/atm" role="button">Menuju ke ATM</Link>
            </p>
          </div>
          {/* <div className="header-anim"/> */}
          <object type="image/svg+xml" data={IntroAnim}>svg-animation</object>
        </div>

        <section className="section-1">
          <div className="container">
            <h3>Mengapa ATM ini dibuat?</h3>
            <p>
              Masih banyak orang (terutama di-Indonesia) yang belum mengetahui teknologi Bitcoin Lightning Network 
              dan cara memegang dompet Bitcoin mereka sendiri (<i>Self Custody</i>). Sementara kebanyakan jasa penukaran Bitcoin mematok tarif yang lumayan <Link to="/perbandingan">mahal*</Link> untuk memulai belajar.
               </p>

              <p>
              ATM ini memungkinan siapaun untuk mencoba belajar Bitcoin tanpa perlu takut kehilangan banyak uang, cukup dengan 
              Rp1,500 kamu bisa mulai bereksperimen dengan Bitcoin.
            </p>
          </div>
        </section>

        <section className="section-2"> 
          <div className="container">
            <h3>Cara Menggunakan</h3>

            <Row className="simple-step">
              <Col>
                <img src={ScanQris} alt="Scan Qris"/>
                <div>Deposit menggunakan QRIS</div>
              </Col>
              <Col>
                <img src={ScanLnurl} alt="Scan LNURL"/>
                <div>Ambil Bitcoin dengan LNURL</div>
              </Col>
              <Col>
                <img src={OwnBitcoin} alt="Miliki Bitcoin"/>
                <div>Miliki Bitcoin Eceran</div>
              </Col>
            </Row>
            {/* <ul>
              <li>Buka situs <Link to="https://roaringstars.com">https://roaringstars.com</Link> atau klik tombol
                <Link to="/atm" className="btn-orange btn-xs">Menuju ATM</Link>
              </li>
              <li>Ketuk tombol <Button className="btn btn-xs">- ketuk untuk deposit - </Button></li>
              <li>Setujui S&amp;K dengan mengetuk tombol Agree &amp; Deposit.</li>
              <li>ATM akan men-generate kode QRIS. Lalu bayar dengan scan QRIS (bisa GoPay, OVO, dll)</li>
              <li>Kirim Bitcoin ke wallet yang support LNURL</li>
            </ul> */}
          </div>
        </section>

        <section className="section-3">
          <div className="container">
            <h3>Contoh Penggunaan</h3>
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
              <Col>
                <TwitterTweetEmbed
                  tweetId={'1498143245758767104'}
                />
              </Col>
            </Row>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default IndexPage
