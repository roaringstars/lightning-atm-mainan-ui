import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

import { Card, Table } from "react-bootstrap"
import ReactTooltip from "react-tooltip"
import { TwitterTweetEmbed } from "react-twitter-embed"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap";

import { faCheckCircle, faTimesCircle, faCheck, faQuestionCircle, faTimes, faExclamation, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MarketPriceLoading from "../components/MarketPriceLoading"
import metaPreviewImage from '../assets/images/meta/sats-to-idr.jpg';
import '../styles/kurs-bitcoin.css'
import formatNumber from "../components/formatNumber";
import KursBitcoinComponent from "../components/KursBitcoinComponent"
import MetaTags from "../components/MetaTags"

const KursBitcoin = () => {
    /**
     * Endpoint 
     */
    const apiEndpoint = process.env.ATM_API_ENDPOINT;
    const endpoint = apiEndpoint + '/api/market_price'

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
            <MetaTags
                metaDescription="Rata-rata harga Bitcoin dari berbagai sumber"
                metaTitle="Kurs Bitcoin"
                metaPath="/kurs-bitcoin"
                metaPreviewImage={metaPreviewImage}
            />

            <Header />

            <article className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7 mb-5">

                            <h2 className="section-heading mb-5 text-center">Kurs Bitcoin</h2>

                            {
                                isLoading ? (<MarketPriceLoading />) : (
                                    <>
                                        {
                                            data !== undefined && data.average != undefined ? (
                                                <>
                                                    <Card className="mb-5 card-default kurs-average">
                                                        <Card.Body>
                                                            <Row>
                                                                <Col className="h2">1 Bitcoin</Col>
                                                            </Row>
                                                            <Row>
                                                                <Col className="equal">=</Col>
                                                            </Row>
                                                            <Row>
                                                                <Col className="h1">{formatNumber(Math.round(data.average.in_idr), 'IDR ', '')}</Col>
                                                            </Row>
                                                            <Row>
                                                                <Col className="h4">rata-rata dari {data.external.length} sumber yang berbeda</Col>
                                                            </Row>
                                                        </Card.Body>
                                                    </Card>
                                                </>
                                            ) : null

                                        }
                                        <div className="kurs-external">
                                            <KursBitcoinComponent data={data.external} />
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    )
}

export default KursBitcoin
