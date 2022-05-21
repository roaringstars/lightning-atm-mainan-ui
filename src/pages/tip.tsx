import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

import { Button, Form, Modal } from "react-bootstrap"
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import LoadingQr from "../components/LoadingQr";
import QRCode from "react-qr-code";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

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
        const endpoint = apiEndpoint + '/api_tip.php'
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
        const endpoint = apiEndpoint + '/api_tip.php?payment_request=' + invoiceCode
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

    return (
        <main>
            <title>Tip</title>

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

                                                {tipAmount.toLocaleString()} Satoshi
                                            </h1>
                                            <Slider min={1} max={10000} defaultValue={tipAmount} onChange={(value) => {
                                                setTipAmount(parseInt(value.toString()));
                                            }} />
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
                                                style={{"display":"block", "width": "100%"}}
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
