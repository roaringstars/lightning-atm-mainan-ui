import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

import { Card } from "react-bootstrap"
import { Row, Col } from "react-bootstrap";

import { faCheckCircle, faTimesCircle, faCheck, faQuestionCircle, faTimes, faExclamation, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StatusLoading from "../components/StatusLoading"
import StatusComponent from "../components/StatusComponent"
import metaPreviewImage from '../assets/images/meta/status.jpg';
import MetaTags from "../components/MetaTags";

const Status = () => {
    /**
     * Endpoint 
     */
    const apiEndpoint = process.env.ATM_API_ENDPOINT;
    const endpoint = apiEndpoint + '/api/status'

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
                metaDescription="Halaman untuk mengetahui status layanan Lightning ATM (Mainan)"
                metaTitle="Status Layanan"
                metaPath="/status"
                metaPreviewImage={metaPreviewImage}
            />
            <Header />

            <article className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">

                            <h2 className="section-heading mb-5">Status Layanan</h2>

                            {
                                isLoading ? (<StatusLoading />) : (
                                    <>
                                        {
                                            data !== undefined && data.atm != undefined ? (
                                                <>
                                                    {
                                                        data.atm.ok === true ? (
                                                            <Card className="mb-5 card-success">
                                                                <Card.Body>
                                                                    <p className="mb-0">
                                                                        <FontAwesomeIcon icon={faCheck} /> Semua Komponen Bekerja Normal
                                                                    </p>
                                                                </Card.Body>
                                                            </Card>
                                                        ) : (
                                                            <Card className="mb-5 card-danger">
                                                                <Card.Body>
                                                                    <p className="mb-0">
                                                                        <FontAwesomeIcon icon={faExclamationTriangle} /> Gangguan Dari Pihak Luar
                                                                    </p>
                                                                </Card.Body>
                                                            </Card>
                                                        )
                                                    }
                                                </>


                                            ) : null

                                        }

                                        <StatusComponent data={data.external}/>

                                        <Row className="text-center mb-5 mt-5">
                                            <Col md={6}>
                                                <span className="text-success text-center">
                                                    <FontAwesomeIcon icon={faCheckCircle} />
                                                </span> Bekerja Normal
                                            </Col>
                                            <Col md={6}>
                                                <span className="text-danger text-center">
                                                    <FontAwesomeIcon icon={faExclamationTriangle} />
                                                </span> Ada Gangguan
                                            </Col>
                                        </Row>
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

export default Status
