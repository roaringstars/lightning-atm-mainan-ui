import * as React from "react"
import { Link } from "gatsby"
import Header from "../components/Header"
import { Button, Row, Col } from 'react-bootstrap';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <>
      <main>
        <title>Index</title>

        <Header />
        <div className="container">

          <div className="jumbotron pt-5 pb-5">
            <h1 className="display-6">Lightning ATM <span>(mainan)</span></h1>
            <p className="lead">Membantu Lebih Banyak Orang Belajar Mengelola Bitcoin Mereka Sendiri</p>
            <p className="lead">
              <Link className="btn btn-orange btn-lg" to="https://roaringstars.com" role="button">Menuju ke ATM</Link>
            </p>
          </div>

        </div>

        <section className="section-1">
          <div className="container">
            <h3>Mengapa ATM ini dibuat?</h3>
            <p>
              Alasan utama adalah karena banyak orang (terutama Indonesa) belum mengetahui teknologi Bitcoin Lightning Network 
              dan cara memegang dompet Bitcoin mereka sendiri (<i>Self Custody</i>). Sementara kebanyakan jasa penukaran Bitcoin 
              di Indonesia mematok tarif yang lumayan <Link to="/perbandingan">mahal*</Link> untuk memulai belajar dan seringkali menganggap Bitcoin sebagai aset bukan 
              sebagai mata uang seperti tujuan awal dibuatnya <i>cryptocurrency</i>.
               </p>

              <p>
              ATM ini memungkinan siapaun untuk mencoba menggunakan Bitcoin tanpa perlu takut kehilangan banyak uang, cukup dengan 
              Rp1,500 atau Rp10,000 kamu bisa mulai belajar tentang Bitcoin.
            </p>
          </div>
        </section>

        <section className="section-2">
          <div className="container">
            <h3>Cara Menggunakan</h3>
            <ul>
              <li>Buka situs <Link to="https://roaringstars.com">https://roaringstars.com</Link> atau klik tombol
                <Link to="/atm" className="btn-orange btn-xs">Menuju ATM</Link>
              </li>
              <li>Klik Reboot</li>
              <li>Ketuk tombol “Please deposit rupiah.”</li>
              <li>Setujui S&K dengan mengetuk tombol Agree & Deposit.</li>
              <li>ATM akan men-generate kode QRIS. Lalu bayar dengan scan QRIS (bisa GoPay, OVO, dll)</li>
              <li>Kirim Bitcoin ke wallet yang support LNURL</li>
            </ul>
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
