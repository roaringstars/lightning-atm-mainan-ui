import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "react-bootstrap";
import formatNumber from "../components/formatNumber";
import SatsToIdrLoading from "../components/SatsToIdrLoading";
import metaPreviewImage from '../assets/images/meta/sats-to-idr.jpg';
import { Helmet } from "react-helmet"

const SatsToIdr = () => {
    /**
     * Helmet
     */
    const metaDescription = "Konversi kurs Satoshi ke Rupiah secara Realtime";
    const metaTitle = "Satoshi to Indonesian Rupiah";
    const metaDomain = "https://roaringstars.com";
    const metaUrl = "https://roaringstars.com/satoshi-to-idr";

    /**
     * Constant 
     */
    const apiEndpoint = process.env.ATM_API_ENDPOINT;
    const isDebug = process.env.ATM_DEBUG;

    const [satoshi, setSatoshi] = React.useState(1);
    const [idr, setIdr] = React.useState(0);
    const [rate, setRate] = React.useState(500000000);
    const [isReady, setIsReady] = React.useState(false);

    const onChangeSats = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSatoshi(parseInt(e.target.value))
        setIdr(Math.round(parseFloat(e.target.value) * rate / 100000000));
    }

    const onChangeIdr = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIdr(parseFloat(e.target.value))
        setSatoshi(Math.round(parseInt(e.target.value) / rate * 100000000));
    }

    /**
     * Compose API endpoint
     */
    const endpoint = apiEndpoint + '/api/atm/rate?deposit=1500'

    /**
     * Load latest Bitcoin price rate
     */
    const load = () => {
        setIsReady(false);
        fetch(endpoint, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                setIsReady(true);
                setRate(data.data.one_btc_to_idr_int);
                setIdr(Math.round(satoshi * rate / 100000000));
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

            <article className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <h1 className="section-heading mb-4">Satoshi to IDR</h1>

                            {
                                !isReady && (

                                    <SatsToIdrLoading />
                                )
                            }
                            {
                                isReady && (<>
                                    <Row>
                                        <Col md={5}>
                                            Satoshi
                                            <input type="number" className="form-control"
                                                onChange={(e) => {
                                                    onChangeSats(e)
                                                }
                                                }
                                                value={satoshi}
                                            />
                                        </Col>
                                        <Col md={2} className="text-center mt-4">
                                            <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                                        </Col>
                                        <Col md={5}>

                                            IDR
                                            <input type="number" className="form-control"
                                                onChange={(e) => {
                                                    onChangeIdr(e)
                                                }
                                                }
                                                value={idr}
                                            />

                                        </Col>
                                    </Row>
                                    <br />
                                    <br />
                                    <Row>
                                        <Col>Rate: 1 BTC = {formatNumber(rate, 'IDR ', '')} (Luno)</Col>
                                    </Row>
                                </>
                                )
                            }
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </article>
            <Footer />
        </main>
    )
}

export default SatsToIdr