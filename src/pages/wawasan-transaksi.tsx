import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ReactFrappeChart from "react-frappe-charts";

import { Badge, Button, Card, Col, Form, FormControl, InputGroup, Modal, Row, Table } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faSearch } from "@fortawesome/free-solid-svg-icons";

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
TimeAgo.addDefaultLocale(en)
import ReactTimeAgo from 'react-time-ago'

const WawasanTransaksi = ({ location }: any) => {
    const [isDataReady, setIsDataReady] = React.useState(false);
    const [dataNotFound, setDataNotFound] = React.useState(false);
    const [trxId, setTrxId] = React.useState(location.search.replace('?trx_id=', ''));
    const [trxStatus, setTrxStatus] = React.useState(null);
    const [idrAmount, setIdrAmount] = React.useState(0);
    const [satoshiAmount, setSatoshiAmount] = React.useState(0);
    const [isRefundable, setIsRefundable] = React.useState(false);
    const [trxCreatedAt, setTrxCreatedAt] = React.useState(0);
    const [totalTrxDuration, setTrxDuration] = React.useState(0);
    const [timePercentageLabel, setTimePercentageLabel] = React.useState([]);
    const [timePercentageValue, setTimePercentageValue] = React.useState([]);


    /**
     * Load tipper on page load 
     */
    function load() {
        setIsDataReady(false);
        setDataNotFound(false);
        const endpoint = 'https://roaringstars.com/' + '/api_troubleshoot_trx.php?trx_id=' + trxId
        fetch(endpoint, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                if (data.success === false) {
                    setDataNotFound(true);
    
                } else {
                    setIsDataReady(true);
                    setTrxStatus(data.trx_status);
                    setIsRefundable(data.is_refundable);
                    setTrxCreatedAt(data.trx_created_at);
    
                    if (data.trx_status == 'finished') {
                        setIdrAmount(data.idr_amount);
                        setSatoshiAmount(data.satoshi_amount);
                        setTrxDuration(data.total_trx_time_sec);
                        setTimePercentageLabel(data.time_percentage_label);
                        setTimePercentageValue(data.time_percentage_value);
                    }
                }
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
            <title>Wawasan Transaksi</title>

            <Header />

            <article className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 text-center">
                        <div className="col-md-12">
                            <br />
                            <br />
                            <h2 className="section-heading mb-5 mt-4">Wawasan Transaksi</h2>
                            {
                                isDataReady && dataNotFound ? (
                                    <>Data Not Found</>
                                ) : null
                            }
                            {
                                isDataReady && !dataNotFound ? (
                                    <>
                                        <Card body className="trx-insight-box mb-3">
                                            <Row>
                                                <Col>
                                                    <InputGroup className="mb-3">
                                                        <FormControl
                                                            placeholder="Trx ID (contoh. aaaaaaaa-1111-dddd-4444-dddddddddd)"
                                                            aria-label="Trx ID (contoh. aaaaaaaa-1111-dddd-4444-dddddddddd)"
                                                            aria-describedby="basic-addon2"
                                                            value={trxId}
                                                            onChange={(item) => 
                                                                setTrxId(item.target.value)
                                                            }
                                                        />
                                                        <Button variant="outline-secondary" id="button-addon2"
                                                            onClick={() => {
                                                                load();
                                                            }}
                                                        >
                                                            Cari <FontAwesomeIcon icon={faSearch} />
                                                        </Button>
                                                    </InputGroup>
                                                </Col>
                                            </Row>
                                        </Card>

                                        
                                        {
                                            trxStatus == 'finished' ? (
                                                <Card body className="trx-insight">
                                                    <Row className="p-4">
                                                        <Col>
                                                            <Table>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>Trx ID</td>
                                                                        <td>{trxId}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Jumlah Deposit</td>
                                                                        <td>IDR {idrAmount.toLocaleString()}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Satoshi Diterima</td>
                                                                        <td>{satoshiAmount} Satoshi</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Trx Dibuat</td>
                                                                        <td>
                                                                            <ReactTimeAgo date={new Date(trxCreatedAt * 1000)} locale="en-US" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Status</td>
                                                                        <td>
                                                                            {
                                                                                trxStatus == 'finished' ? (
                                                                                    <Badge bg="success">Selesai &nbsp;
                                                                                        <FontAwesomeIcon icon={faCheckCircle} />
                                                                                    </Badge>
                                                                                ) : null
                                                                            }
                                                                            {
                                                                                trxStatus == 'onprogress' ? (
                                                                                    <Badge bg="primary">Dalam Proses</Badge>
                                                                                ) : null
                                                                            }
                                                                            {
                                                                                trxStatus == 'cancelled' ? (
                                                                                    <Badge bg="secondary">Dibatalkan</Badge>
                                                                                ) : null
                                                                            }
                                                                            <div className="ml-1 d-inline-block">


                                                                                {
                                                                                    isRefundable ? (
                                                                                        <Badge bg="success">Masih Bisa Refund</Badge>
                                                                                    ) : (
                                                                                        <Badge bg="secondary">Sudah Tidak Bisa Refund</Badge>
                                                                                    )
                                                                                } </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </Col>
                                                        <Col className="mt-5">
                                                            <div className="h5 text-bold">
                                                                Total Waktu Transaksi
                                                            </div>
                                                            <div className="h1 text-bold">
                                                                {totalTrxDuration.toLocaleString()}
                                                            </div>
                                                            <div className="h5 text-bold">
                                                                detik
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <ReactFrappeChart
                                                                type="bar"
                                                                colors={["#21ba45"]}
                                                                axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
                                                                height={160}
                                                                type={"percentage"}
                                                                data={{
                                                                    labels: timePercentageLabel,
                                                                    datasets: [{ values: timePercentageValue }],
                                                                }}
                                                            />
                                                        </Col>
                                                    </Row>
                                                </Card>
                                            ) : (
                                                <Card body className="trx-insight">
                                                    <Row className="p-4">
                                                        <Col>
                                                            <Table>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>Trx ID</td>
                                                                        <td>{trxId}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Jumlah Deposit</td>
                                                                        <td>-</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Satoshi Diterima</td>
                                                                        <td>-</td>
                                                                    </tr>
                                                                    {
                                                                                trxCreatedAt !== undefined && (<>
                                                                    <tr>
                                                                        <td>Trx Dibuat</td>
                                                                        <td>
                                                                            
                                                                                    <ReactTimeAgo date={new Date(trxCreatedAt * 1000)} locale="en-US" />
                                                                       
                                                                           
                                                                        </td>
                                                                    </tr>    
                                                                    <tr>
                                                                        <td>Status</td>
                                                                        <td>
                                                                            {
                                                                                trxStatus == 'finished' ? (
                                                                                    <Badge bg="success">Selesai &nbsp;
                                                                                        <FontAwesomeIcon icon={faCheckCircle} />
                                                                                    </Badge>
                                                                                ) : null
                                                                            }
                                                                            {
                                                                                trxStatus == 'onprogress' ? (
                                                                                    <Badge bg="primary">Dalam Proses</Badge>
                                                                                ) : null
                                                                            }
                                                                            {
                                                                                trxStatus == 'cancelled' ? (
                                                                                    <Badge bg="secondary">Dibatalkan</Badge>
                                                                                ) : null
                                                                            }
                                                                            <div className="ml-1 d-inline-block">


                                                                                {
                                                                                    isRefundable ? (
                                                                                        <Badge bg="success">Masih Bisa Refund</Badge>
                                                                                    ) : (
                                                                                        <Badge bg="secondary">Sudah Tidak Bisa Refund</Badge>
                                                                                    )
                                                                                } </div>
                                                                        </td>
                                                                    </tr>        </> )
                                                                            }
                                                                </tbody>
                                                            </Table>
                                                        </Col>
                                                        <Col className="mt-5 hide">
                                                            <div className="h5 text-bold">
                                                                Total Waktu Transaksi
                                                            </div>
                                                            <div className="h1 text-bold">
                                                                {totalTrxDuration.toLocaleString()}
                                                            </div>
                                                            <div className="h5 text-bold">
                                                                detik
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Card>
                                            )
                                        }

                                    </>
                                ) : (<>Loading..</>)
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
                        </div>
                    </div>
                </div>
            </article>
            <Footer />
        </main>
    )
}

export default WawasanTransaksi
