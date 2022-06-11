import * as React from "react"
import { navigate } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ReactFrappeChart from "react-frappe-charts";

import { Badge, Button, Card, Col, Form, FormControl, InputGroup, Modal, Row, Table } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCircleNotch, faExclamation, faSearch } from "@fortawesome/free-solid-svg-icons";

import ReactTimeAgo from 'react-time-ago'
import LoadingTrxInsight from "../components/LoadingTrxInsight";
import TrxIdHelp from '../assets/images/wawasan-transaksi/trx_id_help.svg';

import metaPreviewImage from '../assets/images/meta/wawasan-transaksi.jpg';
import { Helmet } from "react-helmet"

import { Chrono } from "react-chrono";
import { TimelineItemModel } from "react-chrono/dist/models/TimelineItemModel";
import { Timeline, Event } from "../components/Timeline";
import Moment from 'react-moment';

const WawasanTransaksi = ({ location }: any) => {
    /**
     * Helmet
     */
    const metaDescription = "Wawasan Transaksi, mengetahui detail dari sebuah transaksi Lightning ATM (Mainan)";
    const metaTitle = "Wawasan Transaksi";
    const metaDomain = "https://roaringstars.com";
    const metaUrl = "https://roaringstars.com/wawasan-transaksi";

    /**
     * Regex for find valid Trx ID
     */
    const regex = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/gm;

    const [isTrxIdValid, setIsTrxIdValid] = React.useState(true);
    const [actualTrxId, setActualTrxId] = React.useState(location.search.replace('?trx_id=', ''));

    const [isDataReady, setIsDataReady] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [dataNotFound, setDataNotFound] = React.useState(false);
    const [trxId, setTrxId] = React.useState(null);
    const [lnurlCreatedAt, setLnurlCreatedAt] = React.useState(0);
    const [lnurlScannedAt, setLnurlScannedAt] = React.useState(0);
    const [lnurlPrData, setLnurlPrData] = React.useState(null);
    const [lnurlFee, setLnurlFee] = React.useState(0);
    const [lnurlOtt, setLnurlOtt] = React.useState(null);
    const [lnurlStatus, setLnurlStatus] = React.useState(null);
    const [lnurlErrorMessage, setLnurlErrorMessage] = React.useState(null);
    const [isPrAmountValid, setIsPrAmountValid] = React.useState(false);
    const [prAmount, setPrAmount] = React.useState(0);
    const [prHash, setPrHash] = React.useState(null);
    const [prPubkey, setPrPubkey] = React.useState(null);
    const [trxStatus, setTrxStatus] = React.useState(null);
    const [idrAmount, setIdrAmount] = React.useState(0);
    const [satoshiAmount, setSatoshiAmount] = React.useState(0);
    const [isRefundable, setIsRefundable] = React.useState(false);
    const [trxCreatedAt, setTrxCreatedAt] = React.useState(0);
    const [totalTrxDuration, setTrxDuration] = React.useState(0);
    const [timePercentageLabel, setTimePercentageLabel] = React.useState([]);
    const [timePercentageValue, setTimePercentageValue] = React.useState([]);

    const [idrPaidAt, setIdrPaidAt] = React.useState(0);

    const apiEndpoint = process.env.ATM_API_ENDPOINT;

    /**
     * Load tipper on page load 
     */
    function load() {
        navigate('/wawasan-transaksi/?trx_id=' + actualTrxId);
        setIsLoading(true);
        setIsDataReady(false);
        setDataNotFound(false);
        const endpoint = apiEndpoint + '/api_troubleshoot_trx.php?trx_id=' + actualTrxId
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
                    setIsDataReady(true);
                    setIsLoading(false);
                } else {
                    setIsLoading(false);
                    setIsDataReady(true);
                    setTrxId(data.trx_id);
                    setTrxStatus(data.trx_status);
                    setIsRefundable(data.is_refundable);
                    setTrxCreatedAt(data.trx_created_at);

                    setIdrAmount(data.idr_amount);
                    setSatoshiAmount(data.satoshi_amount);
                    setLnurlPrData(data.lnurl_pr_data);
                    setLnurlFee(data.lnurl_fee);
                    setLnurlOtt(data.lnurl_ott);
                    setLnurlStatus(data.lnurl_status);
                    setLnurlErrorMessage(data.lnurl_status_error_message);
                    setIsPrAmountValid(data.pr_amount_valid);
                    setPrAmount(data.pr_amount);
                    setPrHash(data.pr_hash);
                    setPrPubkey(data.pr_pubkey);

                    if (data.trx_status == 'withdraw' || data.trx_status == 'complete') {
                        setIdrPaidAt(data.idr_paid_at);
                        setLnurlCreatedAt(data.lnurl_created_at);
                        setLnurlScannedAt(data.lnurl_scan_at);
                    }

                    if (data.trx_status == 'complete') {
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
        if (location.search.replace('?trx_id=', '') != '') {
            load();
        }

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
                    <div className="row gx-4 gx-lg-5 text-center">
                        <div className="col-md-12">
                            <br />
                            <br />

                            <h2 className="section-heading mb-5 mt-4">Wawasan Transaksi</h2>


                            <Card body className="trx-insight-box">
                                <Row>
                                    <Col>
                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="aaaaaaaa-1111-dddd-4444-dddddddddd"
                                                aria-label="aaaaaaaa-1111-dddd-4444-dddddddddd"
                                                aria-describedby="basic-addon2"
                                                value={actualTrxId}
                                                onChange={(item) => {
                                                    if (regex.test(item.target.value)) {
                                                        console.log('valid!');
                                                        setIsTrxIdValid(true);
                                                    } else {
                                                        console.log('invalid!');
                                                        setIsTrxIdValid(false);
                                                    }
                                                    setActualTrxId(item.target.value)
                                                }}
                                                onKeyPress={(ev) => {
                                                    if (ev.key === "Enter" && isTrxIdValid) {
                                                        load();
                                                        ev.preventDefault();
                                                    }
                                                }}
                                            />
                                            <Button variant="secondary" id="button-addon2"
                                                onClick={() => {
                                                    load();
                                                }}
                                                disabled={!isTrxIdValid}
                                            >
                                                <FontAwesomeIcon icon={faSearch} /> Cari Transaksi
                                            </Button>
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        {
                                            !isTrxIdValid && (
                                                <><div className="text-danger">Trx ID tidak valid</div></>
                                            )
                                        }
                                    </Col>
                                </Row>
                            </Card>

                            {
                                location.search.replace('?trx_id=', '') == '' && (
                                    <>
                                        <img src={TrxIdHelp} alt="Trx Id" className="img-fluid" />
                                    </>
                                )
                            }
                            {
                                isDataReady && dataNotFound ? (
                                    <>
                                        <div className="trx-not-found">🤷 Transaksi Tidak Ditemukan</div><br />
                                        <p>Mungkin kode tidak lengkap? atau transaksi sudah lebih dari 3 hari 🤔</p><br />
                                        <img src={TrxIdHelp} alt="Trx Id" className="img-fluid" />
                                    </>
                                ) : null
                            }
                            {
                                isLoading && (
                                    <>
                                        <Card body className="trx-insight">
                                            <Row className="p-4">
                                                <Col>
                                                    <LoadingTrxInsight />
                                                </Col>
                                            </Row>
                                        </Card>
                                    </>
                                )
                            }

                            {
                                isDataReady && !dataNotFound ? (
                                    <>


                                        <Card body className="trx-insight">
                                            {
                                                trxStatus == 'complete' && (
                                                    <>
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
                                                                            <td>{satoshiAmount.toLocaleString()} Satoshi</td>
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
                                                                                    trxStatus == 'complete' ? (
                                                                                        <Badge bg="success">Selesai &nbsp;
                                                                                            <FontAwesomeIcon icon={faCheckCircle} />
                                                                                        </Badge>
                                                                                    ) : null
                                                                                }
                                                                                {
                                                                                    trxStatus == 'waiting' ? (
                                                                                        <Badge bg="primary">Dalam Proses</Badge>
                                                                                    ) : null
                                                                                }
                                                                                {
                                                                                    trxStatus == 'withdraw' ? (
                                                                                        <Badge bg="primary">Withdraw</Badge>
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
                                                                    animate={1}
                                                                    axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
                                                                    height={160}
                                                                    type={"percentage"}
                                                                    data={{
                                                                        labels: timePercentageLabel,
                                                                        datasets: [{ values: timePercentageValue }]
                                                                    }}
                                                                    colors={['#ca8b7d', '#af4ced', '#f7931a']}
                                                                    truncateLegends={1}
                                                                />
                                                            </Col>
                                                        </Row>

                                                        <hr />
                                                    </>
                                                )
                                            }


                                            <Row className="p-4">
                                                <Col>

                                                    <div className="trx-title">
                                                        Ringkasan Transaksi
                                                    </div>
                                                    <Table>
                                                        <tbody>
                                                            <tr>
                                                                <td>Trx ID</td>
                                                                <td>{trxId}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Status Transaksi</td>
                                                                <td>
                                                                    {
                                                                        trxStatus == 'complete' ? (
                                                                            <Badge bg="success">Selesai &nbsp;
                                                                                <FontAwesomeIcon icon={faCheckCircle} />
                                                                            </Badge>
                                                                        ) : null
                                                                    }
                                                                    {
                                                                        trxStatus == 'waiting' ? (
                                                                            <Badge bg="primary">Dalam Proses</Badge>
                                                                        ) : null
                                                                    }
                                                                    {
                                                                        trxStatus == 'withdraw' ? (
                                                                            <Badge bg="primary">Withdraw</Badge>
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
                                                            <tr>
                                                                <td>Jumlah Deposit</td>
                                                                <td>IDR {idrAmount.toLocaleString()}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Satoshi Diterima</td>
                                                                <td>

                                                                    {
                                                                        trxStatus == 'waiting' || trxStatus == 'cancelled' ? (
                                                                            <>
                                                                                -
                                                                                {trxStatus == 'waiting' && (
                                                                                    <>&nbsp;⚠️ Nominal Satoshi ditentukan setelah deposit diterima</>
                                                                                )}
                                                                            </>
                                                                        ) : (
                                                                            <>
                                                                                {satoshiAmount.toLocaleString()} Satoshi
                                                                            </>
                                                                        )
                                                                    }
                                                                </td>
                                                            </tr>

                                                            {
                                                                trxCreatedAt !== undefined && (
                                                                    <>
                                                                        <tr>
                                                                            <td>Transaksi Dimulai</td>
                                                                            <td>
                                                                                <Moment unix>{trxCreatedAt}</Moment> (<ReactTimeAgo date={new Date(trxCreatedAt * 1000)} locale="en-US" />)
                                                                            </td>
                                                                        </tr>
                                                                    </>
                                                                )
                                                            }

                                                        </tbody>
                                                    </Table>

                                                    {
                                                        (trxStatus == 'waiting' || trxStatus == 'withdraw' || trxStatus == 'complete') && (
                                                            <>
                                                                <div className="trx-title">
                                                                    Detail Deposit
                                                                </div>
                                                                <Table>
                                                                    <tbody>
                                                                        {
                                                                            idrPaidAt !== undefined && (
                                                                                <>
                                                                                    <tr>
                                                                                        <td>Deposit Diterima</td>
                                                                                        <td>
                                                                                            <Moment unix>{idrPaidAt}</Moment> (<ReactTimeAgo date={new Date(idrPaidAt * 1000)} locale="en-US" />)
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Jeda Pembayaran</td>
                                                                                        <td>
                                                                                            {Math.round((idrPaidAt - trxCreatedAt) / 60)} menit
                                                                                        </td>
                                                                                    </tr>
                                                                                </>
                                                                            )
                                                                        }
                                                                    </tbody>
                                                                </Table>
                                                            </>
                                                        )
                                                    }


                                                    {
                                                        (trxStatus == 'withdraw' || trxStatus == 'complete') && (
                                                            <>
                                                                <div className="trx-title">
                                                                    Detail LNURL
                                                                </div>
                                                                <Table>
                                                                    <tbody>

                                                                        {
                                                                            lnurlCreatedAt !== undefined && (
                                                                                <>
                                                                                    <tr>
                                                                                        <td>LNURL Dibuat Pada</td>
                                                                                        <td>
                                                                                            <Moment unix>{lnurlCreatedAt}</Moment> (<ReactTimeAgo date={new Date(lnurlCreatedAt * 1000)} locale="en-US" />)
                                                                                        </td>
                                                                                    </tr>
                                                                                </>
                                                                            )
                                                                        }

                                                                        <tr>
                                                                            <td>LNURL OTT</td>
                                                                            <td>
                                                                                {lnurlOtt}
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </>
                                                        )
                                                    }

                                                    {
                                                        (trxStatus == 'withdraw' || trxStatus == 'complete') && lnurlScannedAt !== null && (
                                                            <>
                                                                <div className="trx-title">
                                                                    Detail Withdraw Request
                                                                </div>
                                                                <Table>
                                                                    <tbody>
                                                                        {
                                                                            trxCreatedAt !== undefined && (<>
                                                                                {/* Detail if status in withdraw */}
                                                                                {
                                                                                    (trxStatus == 'withdraw' || trxStatus == 'complete') && (
                                                                                        <>
                                                                                            <tr>
                                                                                                <td>Payment Request</td>
                                                                                                <td>
                                                                                                    <div style={{ wordWrap: "break-word", width: "600px" }}>
                                                                                                        {lnurlPrData}
                                                                                                    </div>
                                                                                                </td>
                                                                                            </tr>
                                                                                            {
                                                                                                isPrAmountValid ? (
                                                                                                    <tr>
                                                                                                        <td>PR Amount</td>
                                                                                                        <td>
                                                                                                            {prAmount.toLocaleString()} Satoshi
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                ) : (
                                                                                                    <tr>
                                                                                                        <td>PR Amount</td>
                                                                                                        <td>
                                                                                                            {prAmount.toLocaleString()} Satoshi
                                                                                                            <span className="text-danger ml-3">
                                                                                                                &nbsp;⚠️ Jumlah tidak sama dengan nominal deposit!
                                                                                                            </span>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                )
                                                                                            }
                                                                                            <tr>
                                                                                                <td>PR Hash</td>
                                                                                                <td>
                                                                                                    {prHash}
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>PR Pubkey</td>
                                                                                                <td>
                                                                                                    {prPubkey}
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>LNURL Fee</td>
                                                                                                <td>
                                                                                                    {lnurlFee.toLocaleString()} Satoshi
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>LNURL Status</td>
                                                                                                <td>
                                                                                                    {
                                                                                                        lnurlStatus == 'confirmed' && (
                                                                                                            <Badge bg="success">Terkonfirmasi</Badge>
                                                                                                        )
                                                                                                    }
                                                                                                    {
                                                                                                        lnurlStatus == 'pending' && (
                                                                                                            <Badge bg="warning">Terjeda</Badge>
                                                                                                        )
                                                                                                    }
                                                                                                    {
                                                                                                        lnurlStatus == 'failed' && (
                                                                                                            <Badge bg="danger">Gagal</Badge>
                                                                                                        )
                                                                                                    }
                                                                                                    {
                                                                                                        lnurlStatus == 'error' && (
                                                                                                            <Badge bg="danger">Error</Badge>
                                                                                                        )
                                                                                                    }
                                                                                                    {
                                                                                                        lnurlStatus == 'notfound' && (
                                                                                                            <Badge bg="secondary">Tidak Ditemukan</Badge>
                                                                                                        )
                                                                                                    }
                                                                                                </td>
                                                                                            </tr>

                                                                                            {
                                                                                                lnurlErrorMessage == null ? (
                                                                                                    <>
                                                                                                        <tr>
                                                                                                <td>LNURL Error Message</td>
                                                                                                <td>
                                                                                                    -
                                                                                                </td>
                                                                                            </tr>
                                                                                                    </>
                                                                                                ) : (
                                                                                                    <>
    <tr>
                                                                                                <td>LNURL Error Message</td>
                                                                                                <td>
                                                                                                    {lnurlErrorMessage} 
                                                                                                </td>
                                                                                            </tr>
                                                                                                    </>
                                                                                                )
                                                                                            }
                                                                                            
                                                                                        </>
                                                                                    )
                                                                                }
                                                                            </>)
                                                                        }
                                                                    </tbody>
                                                                </Table>
                                                            </>
                                                        )
                                                    }


                                                    {/* <Timeline className="my-vertical-progress">
                                                                <Event>
                                                                    <b>Kode QRIS Dibuat</b>
                                                                    <Table>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>Waktu</td>
                                                                                <td></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </Table>
                                                                </Event>
                                                                <Event>
                                                                    Ned Stark comes to Kings Landing and starts bothering everyone.
                                                                </Event>
                                                            </Timeline> */}
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
                                    </>
                                ) : null
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
