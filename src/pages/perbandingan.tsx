import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { Card, Table } from "react-bootstrap"
import PriceInBtc from "../components/PriceInBtc";
import metaPreviewImage from '../assets/images/meta/perbandingan.jpg';
import { Helmet } from "react-helmet"
import { Link } from "gatsby";

const Bantuan = () => {
    /**
     * Helmet
     */
    const metaDescription = "Perbandingan Biaya Layanan Exchange Kripto di Indonesia secara Realtime";
    const metaTitle = "Perbandingan Biaya Layanan Exchange Kripto di Indonesia";
    const metaDomain = "https://roaringstars.com";
    const metaUrl = "https://roaringstars.com/perbandingan";

    /**
     * Endpoint 
     */
     const apiEndpoint = process.env.ATM_API_ENDPOINT;
     const endpoint = apiEndpoint + '/api_rate.php'
 
     /**
      * Declare state
      */
     const [isLoading, setIsLoading] = React.useState(true);
     const [data, setData] = React.useState({
         atm: undefined,
         lnpay: undefined,
     });
     const [isDataReady, setIsDataReady] = React.useState(false);
     const [isDataFailed, setIsDataFailed] = React.useState(false);
 
     /**
      * Get status on page load
      */
     const load = () => {
         setIsLoading(true);
         fetch(endpoint, {
             method: 'GET',
             headers: new Headers({
                 'Content-Type': 'application/json',
             }),
         })
             .then(response => {
                 setIsLoading(false);
                 if (response.ok) {
                     setIsDataReady(true);
                 } else {
                     setIsDataFailed(true);
                 }
                 return response.json();
             })
             .then(data => {
                 setData(data.data);
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
                <meta name="twitter:image" content={metaPreviewImage} />+
            </Helmet>
            <Header />

            <article className="mb-4 section-comparison">

                <div className="container ">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-10 col-xl-7">
                            <h2 className="section-heading mb-2 text-center">Perbandingan Biaya Self-Custody</h2>
                                    <p className="mb-5 text-center">Berikut tabel perbandingan biaya yang dibutuhkan untuk memegang Bitcoin kamu
                                        sendiri.
                                    </p>

                        </div>
                    </div>
                </div>


                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-10 col-xl-10">
                            
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
                                        <td>
                                            {
                                                isDataReady ? (
                                                    <><Link to="/grafik-biaya-penukaran">{data.exchange_fee_percentage}%</Link></>
                                                ) : (
                                                    <>Loading...</>
                                                )
                                            }
                                        </td>
                                        <td>
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-success" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Indodax</td>
                                        <td>Rp10,000</td>
                                        <td><PriceInBtc btc="0.001" /></td>
                                        <td><PriceInBtc btc="0.0005" /></td>
                                        <td>
                                            <FontAwesomeIcon icon={faTimesCircle} className="text-danger" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Binance</td>
                                        <td>Rp20,000</td>
                                        <td><PriceInBtc btc="0.001" /></td>
                                        <td><PriceInBtc btc="0.0002" /></td>
                                        <td>
                                            <FontAwesomeIcon icon={faTimesCircle} className="text-danger" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>TokoCrypto</td>
                                        <td>Rp50,000</td>
                                        <td><PriceInBtc btc="0.001" /></td>
                                        <td><PriceInBtc btc="0.0002" /></td>
                                        <td>
                                            <FontAwesomeIcon icon={faTimesCircle} className="text-danger" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Pintu</td>
                                        <td>Rp30,000</td>
                                        <td>?</td>
                                        <td>Rp300,xxx</td>
                                        <td>
                                            <FontAwesomeIcon icon={faTimesCircle} className="text-danger" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Luno</td>
                                        <td>Rp10,000</td>
                                        <td>Rp0</td>
                                        <td>Rp7,xxx (OnChain Fee)</td>
                                        <td>
                                            <FontAwesomeIcon icon={faTimesCircle} className="text-danger" />
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
