import * as React from "react"
import { Link } from "gatsby"
import Header from "../components/Header"
import { Row, Col } from 'react-bootstrap';
import Footer from "../components/Footer";

import ScanQris from '../assets/images/index/scan_qris.svg';
import ScanLnurl from '../assets/images/index/scan_lnurl.svg';
import OwnBitcoin from '../assets/images/index/own_bitcoin.svg';

import IntroAnim from '../assets/images/index/intro_anim.svg';
import TweetBox from "../components/TweetBox";
import Masonry from 'react-masonry-css'
import metaPreviewImage from '../assets/images/meta/index.jpg';
import { Helmet } from "react-helmet"

const IndexPage = () => {
  /**
   * Helmet
   */
  const metaDescription = "Membantu Lebih Banyak Orang Belajar Mengelola Bitcoin Mereka Sendiri";
  const metaTitle = "Lightning ATM (Mainan)";
  const metaDomain = "https://roaringstars.com";
  const metaUrl = "https://roaringstars.com";
  
  return (
    <>
      <main>
        <Helmet>
          <meta charSet="utf-8"/>
          <title>{metaTitle}</title>
          <link rel="canonical" href={metaUrl} />
          <meta name="description" content={metaDescription}/>
          <meta property="og:url" content={metaUrl}/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content={metaTitle}/>
          <meta property="og:description" content={metaDescription}/>
          <meta property="og:image" content={metaPreviewImage}/>

          <meta name="twitter:card" content="summary_large_image"/>
          <meta property="twitter:domain" content={metaDomain}/>
          <meta property="twitter:url" content={metaUrl}/>
          <meta name="twitter:title" content={metaTitle}/>
          <meta name="twitter:description" content={metaDescription}/>
          <meta name="twitter:image" content={metaPreviewImage}/>+
        </Helmet>
        
        <Header />
        <div className="container">

          <div className="jumbotron pt-3 pb-3 text-center">
            <h1 className="display-6">Lightning ATM <span>(Mainan)</span></h1>
            <p className="lead">Membantu Lebih Banyak Orang Belajar Mengelola Bitcoin Mereka Sendiri</p>
            <p className="lead">
              <Link className="btn btn-orange btn-lg" to="/atm" role="button">Menuju ke ATM</Link>
            </p>
          </div>
        <div className="header-anim">
            <object type="image/svg+xml" data={IntroAnim}>svg-animation</object>
          </div>
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
            <h3>3 Tahap Cara Menggunakan</h3>

            <Row className="simple-step">
              <Col>
                <img src={ScanQris} alt="Scan Qris" />
                <div>Deposit menggunakan QRIS</div>
              </Col>
              <Col>
                <img src={ScanLnurl} alt="Scan LNURL" />
                <div>Ambil Bitcoin dengan LNURL</div>
              </Col>
              <Col>
                <img src={OwnBitcoin} alt="Miliki Bitcoin" />
                <div>Siap Belajar dengan Bitcoin Eceran</div>
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
            <h3 className="mb-4">Testimoni Pengguna</h3>

            <Masonry
              breakpointCols={{
                default: 4,
                1100: 3,
                960: 2,
                500: 1
              }}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">
              <TweetBox tweetId={'1490360523535564800'} />
              <TweetBox tweetId={'1496527510284431361'} />
              <TweetBox tweetId={'1513577186745364485'} />
              <TweetBox tweetId={'1514083810052538372'} verified={true}/>
              <TweetBox tweetId={'1498143245758767104'} />
              <TweetBox tweetId={'1533939880371204096'} />
              <TweetBox tweetId={'1532877038738022400'} />
              <TweetBox tweetId={'1534050411128459264'} />
              <TweetBox tweetId={'1533476330884411393'} />
              <TweetBox tweetId={'1496929201185705997'} />
              <TweetBox tweetId={'1533435118991249408'} />
              <TweetBox tweetId={'1531623761358618624'} />
              <TweetBox tweetId={'1527124877857406977'} />
              <TweetBox tweetId={'1530023874112262145'} />
              <TweetBox tweetId={'1514457432142979073'} />
              <TweetBox tweetId={'1510841968024190976'} />
            </Masonry>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default IndexPage
