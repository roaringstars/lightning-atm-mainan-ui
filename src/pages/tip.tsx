import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

import { Button, Form, Modal } from "react-bootstrap"
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import LoadingQr from "../components/LoadingQr";
import QRCode from "react-qr-code";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import User from '../assets/images/user.jpg';
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import metaPreviewImage from '../assets/images/meta/tip.jpg';
import MetaTags from "../components/MetaTags";

const Tip = () => {
    /**
     * Endpoint 
     */
    const apiEndpoint = process.env.ATM_API_ENDPOINT;

    const [isInvoiceModalVisible, setIsInvoiceModalVisible] = React.useState(false);
    const [tipAmount, setTipAmount] = React.useState(1500);
    const [isAnonTip, setIsAnonTip] = React.useState(false);
    const [tipMemo, setTipMemo] = React.useState('');


    const [isGenerateInvoiceLoading, setIsGenerateInvoiceLoading] = React.useState(false);
    const [isGenerateInvoiceSuccess, setIsGenerateInvoiceSuccess] = React.useState(false);
    const [isGenerateInvoiceReady, setIsGenerateInvoiceReady] = React.useState(false);
    const [invoiceCode, setInvoiceCode] = React.useState('');
    const [invoiceGenerateFailMessage, setInvoiceGenerateFailMessage] = React.useState('');

    const [isInvoiceCopied, setIsInvoiceCopied] = React.useState(false);
    const [isPaymentPaid, setIsPaymentPaid] = React.useState(false);


    const [isListTipperReady, setIsListTipperReady] = React.useState(false);
    const [listTipper, setListTipper] = React.useState([]);
    const [totalTip, setTotalTip] = React.useState(0);


    const [isListContributorReady, setIsListContributorReady] = React.useState(false);
    const [listContributor, setListContributor] = React.useState([]);

    function resetState() {
        setTipAmount(1500);
        setIsAnonTip(false);
        setTipMemo('');
        setIsGenerateInvoiceLoading(false);
        setIsGenerateInvoiceSuccess(false);
        setIsGenerateInvoiceReady(false);
        setInvoiceCode('');
        setInvoiceGenerateFailMessage('');
        setIsInvoiceCopied(false);
        setIsPaymentPaid(false);
    }

    function generateQr() {
        setIsGenerateInvoiceLoading(true);
        const endpoint = apiEndpoint + '/api/tip'
        fetch(endpoint, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                amount: tipAmount,
                memo: (isAnonTip ? 'anonymous' : tipMemo),
            })
        })
            .then(response => {
                setIsGenerateInvoiceLoading(false);
                setIsGenerateInvoiceReady(true);
                if (response.ok) {
                    setIsGenerateInvoiceSuccess(true);
                } else {
                    setIsGenerateInvoiceSuccess(false);
                }
                return response.json();
            })
            .then(data => {
                if (data.success == true) {
                    setInvoiceCode(data.data.invoice)
                } else {
                    setIsGenerateInvoiceSuccess(false);
                    setInvoiceGenerateFailMessage(data.message);
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

    function checkPayment(invoiceCode: string) {
        const endpoint = apiEndpoint + '/api/tip?payment_request=' + invoiceCode
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
                console.log('check payment data: ', data);
                if (data.data.is_paid) {
                    setIsPaymentPaid(true);
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

    /**
     * Check payment if QR code generated successfully 
     */
    React.useEffect(() => {
        if (isGenerateInvoiceReady && isGenerateInvoiceSuccess && !isPaymentPaid) {
            console.log('Refreshing payment status...');
            const timer = setInterval(() => {
                checkPayment(invoiceCode)
            }, 2 * 1000);
            return () => clearInterval(timer);
        }
    }, [isGenerateInvoiceSuccess, isGenerateInvoiceReady, invoiceCode, isPaymentPaid])

    /**
     * Load tipper on page load 
     */
    function loadTipper() {
        const endpoint = apiEndpoint + '/api/tip'
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
                setIsListTipperReady(true);
                setTotalTip(data.data.total_amount)
                setListTipper(data.data.donors_list);
            })
            .catch(error => {
                // TODO: Log
                // Log('error', 'Failed while sending post data', {
                //     endpoint: apiEndpoint,
                //     error: error
                // })
            })
    }
    function loadContributor() {
        const endpoint =  '/contributor.json'
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
                setIsListContributorReady(true);
                setListContributor(data.data);
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
        loadTipper();
        loadContributor();
    }, [])

    return (
        <main>
            <MetaTags
                metaDescription="Tip dan Kontributor, terimakasih kepada semua yang telah membantu membuat Lightning ATM (Mainan) jadi kenyataan"
                metaTitle="Tip dan Kontributor"
                metaPath="/tip"
                metaPreviewImage={metaPreviewImage}
            />
            <Header />

            <article className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 text-center">
                        <div className="col-md-12">
                            <br />
                            <br />
                            <h2 className="section-heading mb-4 mt-4">Tip @roaringstars</h2>

                            <Button onClick={() => {
                                setIsInvoiceModalVisible(true);
                            }}>Tip with Bitcoin Lightning Network ⚡</Button>
                            <br />
                            <br />
                            <div className="text-center">
                                Thank You For Helping <b>Lightning ATM (Mainan)</b> grow!
                            </div>
                            <br />
                            {
                                isListTipperReady ? (
                                    <>
                                        {
                                            listTipper != undefined && (
                                                <div className="tip-donor-list">
                                                    {
                                                        listTipper.map((item) => {
                                                            return <>
                                                                {
                                                                    /^(\@)([a-zA-Z0-9_])+/.test(item.memo) ? (
                                                                        <>
                                                                            <a href={'https://twitter.com/' + item.memo} target="_blank">
                                                                                <div className="tip-donor clickable">
                                                                                    <div className="tip-donor-avatar">
                                                                                        <img src={'https://unavatar.io/twitter/' + item.memo}
                                                                                            alt=".."
                                                                                        />
                                                                                    </div>
                                                                                    <div className="tip-donor-name">
                                                                                        {item.memo} ({item.amount.toLocaleString()} sats)
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <div className="tip-donor">
                                                                                <div className="tip-donor-avatar">
                                                                                    <img src={User}
                                                                                        alt=".."
                                                                                    />
                                                                                </div>
                                                                                <div className="tip-donor-name">
                                                                                    {item.memo} ({item.amount.toLocaleString()} sats)
                                                                                </div>
                                                                            </div>
                                                                        </>
                                                                    )
                                                                }

                                                            </>
                                                        })
                                                    }
                                                    {
                                                        listContributor.map((item) => {
                                                            return <>
                                                                {
                                                                    /^(\@)([a-zA-Z0-9_])+/.test(item.username) ? (
                                                                        <>
                                                                            {
                                                                                item.social == 'twitter' && (
                                                                                    <a href={'https://twitter.com/' + item.username.replace('@', '')} target="_blank">
                                                                                        <div className="tip-donor clickable contributor">
                                                                                            <div className="tip-donor-avatar">
                                                                                            <img src={'https://unavatar.io/twitter/' + item.username}
                                                                                            alt=".."
                                                                                        />
                                                                                            </div>
                                                                                            <div className="tip-donor-name">
                                                                                                {item.username} ({item.contribution})
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>
                                                                                )
                                                                            }
                                                                            {
                                                                                item.social == 'github' && (
                                                                                    <a href={'https://github.com/' + item.username.replace('@', '')} target="_blank">
                                                                                        <div className="tip-donor clickable contributor">
                                                                                            <div className="tip-donor-avatar">
                                                                                                <img src={'https://github.com/' + item.username.replace('@', '') + '.png?size=40'}
                                                                                                    alt=".."
                                                                                                />
                                                                                            </div>
                                                                                            <div className="tip-donor-name">
                                                                                                {item.username} ({item.contribution})
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>
                                                                                )
                                                                            }
                                                                        </>
                                                                    ) : null
                                                                }

                                                            </>
                                                        })
                                                    }

                                                </div>
                                            )
                                        }
                                    </>
                                ) : (<>Loading...</>)
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

            <Modal
                show={isInvoiceModalVisible}
                className="modal fade"
            >
                <Modal.Body>
                    {
                        isGenerateInvoiceLoading ? (
                            <>
                                <LoadingQr />

                                <div className="text-center mt-4">
                                    Generating QR
                                </div>
                            </>
                        ) : (
                            <>
                                {
                                    isGenerateInvoiceReady && !isGenerateInvoiceSuccess && (
                                        <>
                                            <div className="text-danger text-center">{invoiceGenerateFailMessage}
                                            </div></>
                                    )
                                }
                                {
                                    isGenerateInvoiceReady && isGenerateInvoiceSuccess ? (
                                        <>
                                            {
                                                isPaymentPaid ? (
                                                    <>
                                                        <div className="text-center mb-4" style={{ "fontSize": "4rem" }}>🤩🙏⚡</div>
                                                        <div className="text-center">Thank you for your Tip!</div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div className="tip-checking">Scan with your Bitcoin Lightning Network wallet</div>
                                                        <div className="text-center mt-4">
                                                            <QRCode value={invoiceCode} />
                                                        </div>
                                                        <div className="mt-4 tip-invoice-code">
                                                            {invoiceCode}
                                                        </div>
                                                        {isInvoiceCopied ? <><br /><div className="tip-copied">Copied.</div></> : null}
                                                    </>
                                                )
                                            }


                                        </>
                                    ) : (
                                        <>
                                            <div className="text-center mb-4" style={{ "fontSize": "4rem" }}>⚡</div>
                                            <h1 className="text-center mb-3 mt-3">
                                                <EditText
                                                    value={tipAmount.toString()}
                                                    formatDisplayText={(val) => {
                                                        return val.toLocaleString() + ' Satoshi'
                                                    }}
                                                    onSave={(input) => {
                                                        if (
                                                            parseInt(input.value.toString()) <= 10000 &&
                                                            parseInt(input.value.toString()) > 0
                                                        ) {
                                                            setTipAmount(parseInt(input.value.toString()));
                                                        } else {
                                                            setTipAmount(10000);
                                                        }
                                                    }}
                                                    onChange={(input) => {
                                                        if (
                                                            parseInt(input.toString()) <= 10000 &&
                                                            parseInt(input.toString()) > 0
                                                        ) {
                                                            setTipAmount(parseInt(input.toString()));
                                                        } else {
                                                            setTipAmount(10000);
                                                        }
                                                    }}
                                                    type="number"
                                                    style={{ textAlign: "center" }}
                                                />
                                            </h1>

                                            <Slider min={1} max={10000} defaultValue={tipAmount} onChange={(value) => {
                                                setTipAmount(parseInt(value.toString()));
                                            }}
                                                value={tipAmount}
                                            />
                                            <br />
                                            <br />
                                            <div className="center-checkbox"
                                                onClick={() => {
                                                    if (isAnonTip) {
                                                        setIsAnonTip(false);
                                                    } else {
                                                        setIsAnonTip(true);
                                                    }
                                                }}>
                                                <Form.Check
                                                    type={'checkbox'}
                                                    label={'Send as Anonymous tip'}
                                                    checked={isAnonTip}
                                                />
                                            </div>
                                            {
                                                !isAnonTip && (
                                                    <input
                                                        type="text"
                                                        className="form-control center-placeholder"
                                                        disabled={isAnonTip}
                                                        placeholder="Your Twitter handle (example: @roaringstars)"
                                                        onChange={(tipMemo) => {
                                                            setTipMemo(tipMemo.target.value)
                                                        }}
                                                    />
                                                )
                                            }
                                        </>
                                    )
                                }
                            </>
                        )
                    }


                </Modal.Body>

                <Modal.Footer style={{ "border": "none" }}>
                    {
                        isGenerateInvoiceLoading ? (
                            <></>
                        ) : (
                            <>
                                {
                                    isGenerateInvoiceReady && isGenerateInvoiceSuccess ? (
                                        <>
                                            {
                                                isPaymentPaid ? (
                                                    <>
                                                        <Button className="btn btn-primary btn-center mt-3 mb-3"
                                                            onClick={() => {
                                                                setIsInvoiceModalVisible(false);
                                                                resetState();
                                                            }}
                                                        >Close</Button>
                                                    </>
                                                ) : (
                                                    <>
                                                        <CopyToClipboard text={invoiceCode}
                                                            onCopy={() => setIsInvoiceCopied(true)}>
                                                            <Button className="btn btn-primary btn-center mb-3"

                                                            >Copy Invoice Code</Button>
                                                        </CopyToClipboard>     </>
                                                )
                                            }
                                        </>
                                    ) : (
                                        <>
                                            <Button className="btn btn-primary btn-center mt-3 mb-2"
                                                style={{ "display": "block", "width": "100%" }}
                                                disabled={(!isAnonTip && (tipMemo == '' || (tipMemo !== '' && tipMemo.length < 2)))}
                                                onClick={() => {
                                                    generateQr()
                                                }}
                                            >Generate Lightning Invoice</Button>


                                            <div className="text-center btn btn-outline btn-center mb-2"
                                                onClick={() => {
                                                    setIsInvoiceModalVisible(false);
                                                    resetState();
                                                }}
                                            >Close</div>
                                        </>
                                    )
                                }

                            </>
                        )
                    }

                </Modal.Footer>
            </Modal>
            <Footer />
        </main>
    )
}

export default Tip
