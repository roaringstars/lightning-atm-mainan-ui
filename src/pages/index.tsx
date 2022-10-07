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
import MetaTags from "../components/MetaTags";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import CountUp from "react-countup";
import ReactTimeAgo from "react-time-ago";
import LoadingTextHeadingShort from "../components/LoadingTextHeadingShort";
import LoadingTextHeadingLong from "../components/LoadingTextHeadingLong";

const IndexPage = () => {
  /**
   * Const
   */
  const apiEndpoint = process.env.ATM_API_ENDPOINT;
  const [modeTrxDuration, setModeTrxDuration] = React.useState(58);
  const [totalTrxSatoshiSent, setTotalTrxSatoshiSent] = React.useState(7500000);
  const [totalTrxCount, setTotalTrxCount] = React.useState(3420);
  const [totalTodayTrx, setTotalTodayTrx] = React.useState(34);
  const [lastTrxTimestamp, setLastTrxTimestamp] = React.useState('');

  const [isStatLoading, setIsStatLoading] = React.useState(true);
  const [isStatDataReady, setIsStatDataReady] = React.useState(false);

  /**
   * Get status on page load
   */
  const load = () => {
    const endpoint = apiEndpoint + '/api/simple_stats';
    fetch(endpoint, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(async response => {
        const data = await response.json();
        setIsStatLoading(false);


        if (!response.ok) {
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

        /**
         * Assign value
         */
        setModeTrxDuration(data.data.mode_trx_duration);
        setTotalTrxSatoshiSent(data.data.satoshi_sent);
        setTotalTrxCount(data.data.successfull_trx);
        setTotalTodayTrx(data.data.today_trx);
        setLastTrxTimestamp(data.data.last_trx_timestamp);
      })
      .catch(error => {
        // TODO: Log
        // Log('error', 'Failed while sending post data', {
        //     endpoint: apiEndpoint,
        //     error: error
        // })
      })
  }

  React.useEffect(() => {
    load();
  }, [])

  return (
    <>
      <main>
        <MetaTags
        // metaDescription="Membantu Lebih Banyak Orang Belajar Mengelola Bitcoin Mereka Sendiri"
        // metaTitle="Lightning ATM (Mainan)"
        // metaPath="/"
        />

        <Header />
        <div className="container">

          <div className="jumbotron pt-3 pb-3 text-center">
            <h1 className="display-6">Lightning ATM <span>(Mainan)</span></h1>
            <p className="lead">Membantu Lebih Banyak Orang Belajar Mengelola Bitcoin Mereka Sendiri</p>
            <p className="lead">
              <Link className="btn btn-orange btn-lg" to="/atm" role="button">Menuju ke ATM</Link>
            </p>
            <div className="help-text">
              <AnchorLink to="/bantuan#cara-menggunakan-atm">Atau pelajari dulu <span>Cara Menggunakan Lightning ATM</span></AnchorLink>
            </div>
          </div>
          <div className="header-anim">
            <object type="image/svg+xml" data={IntroAnim}>svg-animation</object>
          </div>
        </div>

        <section className="section-stat">
          <div className="container">
            <Row>
              <Col>
                <div className="title">Kebanyakan Transaksi Selesai</div>
                <div className="number">
                  {
                    isStatLoading ? (
                      <><LoadingTextHeadingShort /></>
                    ) : (
                      <CountUp end={modeTrxDuration} />
                    )
                  }
                </div>
                <div className="desc">Detik</div>
              </Col>
              <Col>
                <div className="title">Satoshi Terkirim</div>
                <div className="number">
                  {
                    isStatLoading ? (
                      <><LoadingTextHeadingLong /></>
                    ) : (
                      <CountUp
                        start={totalTrxSatoshiSent - 10000}
                        end={totalTrxSatoshiSent}
                        duration={190}
                        separator={','}
                        useEasing={true}
                      />
                    )
                  }

                </div>
                <div className="desc">dari <CountUp
                  start={totalTrxCount - 100}
                  end={totalTrxCount}
                  duration={690}
                  separator={','}
                  useEasing={true}
                /> transaksi berhasil</div>
              </Col>
              <Col>
                <div className="title">Transaksi Hari Ini</div>
                <div className="number">
                  {
                    isStatLoading ? (
                      <><LoadingTextHeadingShort /></>
                    ) : (
                      <CountUp end={totalTodayTrx} />
                    )
                  }
                </div>
                {
                  lastTrxTimestamp == '' ? (
                    <><div className="desc">berhasil</div></>
                  ) : (
                    <div className="desc">terakhir dilakukan <ReactTimeAgo date={new Date(lastTrxTimestamp * 1000)} /></div>
                  )
                }

              </Col>
            </Row>
          </div>
        </section>

        <section className="section-1">
          <div className="container">
            <h3>Mengapa ATM ini dibuat?</h3>
            <p>
              Masih banyak orang (terutama di Indonesia) yang belum mengetahui teknologi Bitcoin Lightning Network
              ataupun cara memegang dompet Bitcoin mereka sendiri (<i>Self Custody</i>). 
              Sementara kebanyakan jasa penukaran Bitcoin memerlukan nominal yang <Link to="/perbandingan">besar*</Link> bagi orang yang baru memulai belajar.
            </p>

            <p>
              ATM ini memungkinkan siapa pun untuk memulai belajar Bitcoin tanpa perlu takut kehilangan banyak uang, cukup dengan&nbsp;<b>Rp1,500</b> kamu bisa mulai bereksperimen dengan Bitcoin.
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
            <h3 className="mb-4">Apa Kata Mereka?</h3>

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
              <TweetBox tweetId={'1514083810052538372'} verified={true} />
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
