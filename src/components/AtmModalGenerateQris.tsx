import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react"
import { Button, Modal, Table } from "react-bootstrap"
import ReactTooltip from "react-tooltip";
import Header from "../components/Header"
import ExchangeFeeDetail from "./ExchangeFeeDetail";
import formatNumber from "./formatNumber";
import SandClockIcon from '../assets/images/atm/sand_clock.png';
import BombIcon from '../assets/images/atm/bomb.png';
import BitcoinIcon from '../assets/images/atm/b_logo.png';
import ExclamationIcon from '../assets/images/atm/exclamation.png';
import QRCode from "react-qr-code";
import { navigate } from "gatsby";

const AtmModalGenerateQris = (props: any) => {
    /**
     * Constant 
     */
    const apiEndpoint = process.env.ATM_API_ENDPOINT;
    const isDebug = process.env.ATM_DEBUG;

    /**
     * Declare state
     */
    const [isLoading, setIsLoading] = React.useState(false);
    const [qrisData, setQrisData] = React.useState('');
    const [isQrisDataReady, setIsQrisDataReady] = React.useState(false);
    const [isQrisDataFailed, setIsQrisDataFailed] = React.useState(false);

    /**
     * Generate QRIS
     */
    function load(amount: number) {
        let forbidAction = false;

        if (isDebug) {
            console.log('Call API: /api_generate_qris');
        }

        /**
         * Change title
         */
        props.setModalTitle('Deposit Rupiah')

        /**
         * Avoid duplicate QR Generation
         */
        if (props.isQrisQrBeingGenerated) {
            forbidAction = true;
        }


        /**
         * discontinue when specifict criteria unmeet `forbidAction`
         */
        if (!forbidAction) {
            props.setIsQrisQrBeingGenerated(true);

            setIsLoading(true);
            setIsQrisDataReady(false);
            let endpoint = apiEndpoint + '/api_generate_qris.php?deposit=' + amount;
            console.log('Loading request: ', endpoint)
            fetch(endpoint, {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                }),
            })
                .then(response => {
                    setIsLoading(false);
                    if (response.ok) {
                        setIsQrisDataFailed(false);
                    } else {
                        setIsQrisDataFailed(true);
                    }
                    return response.json();
                })
                .then(data => {
                    /**
                     * Change URL into current Trx ID
                     */
                    navigate('/atm/?trx_id=' + data.data.trx_id);

                    setQrisData(data.data.qr_data);
                    props.setTrxId(data.data.trx_id);
                    props.setTrxStep('waiting-rupiah-deposit');
                    setIsQrisDataReady(true);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.log(error);
                    // TODO: Log
                    // Log('error', 'Failed while sending post data', {
                    //     endpoint: apiEndpoint,
                    //     error: error
                    // })
                })
        }
    }

    React.useEffect(() => {
        if (props.trxStep == 'generate-qris' && !isLoading && !isQrisDataReady) {
            load(props.depositAmount);
        }
    }, [props.trxStep, isLoading, isQrisDataReady])


    // Payment Checker ======================================================
    /**
     * Declare state
     */
    const [isPaymentCheckLoading, setIsPaymentCheckLoading] = React.useState(false);
    const [isPaymentCheckReady, setIsPaymentCheckReady] = React.useState(false);
    const [isPaymentCheckFailed, setIsPaymentCheckFailed] = React.useState(false);

    const [isPaymentComplete, setIsPaymentComplete] = React.useState(false);
    const [isPaymentCancelled, setIsPaymentCancelled] = React.useState(false);
    const [paymentLnurlData, setPaymentLnurlData] = React.useState('');
    const [paymentLnurlStatus, setPaymentLnurlStatus] = React.useState('');
    const [messageTop, setMessageTop] = React.useState('');
    const [messageBottom, setMessageBottom] = React.useState('');

    /**
     * Enable `PaymentChacker` after QRIS data received
     * Refrest every 1 second
     */
    React.useEffect(() => {
        console.log('props.trxId: ' + props.trxId);

        if (props.trxStep == 'waiting-rupiah-deposit') {
            console.log('Refreshing transaction status...');
            const timer = setInterval(() => {
                checkPayment(props.trxId, props)
            }, 1 * 1000);
            return () => clearInterval(timer);
        }
        if (props.trxStep == 'withdraw-lnurl') {
            console.log('Refreshing transaction status...');
            const timer = setInterval(() => {
                checkPayment(props.trxId, props)
            }, 5 * 1000);
            return () => clearInterval(timer);
        }
    }, [props.trxStep, props.trxId, props])

    function checkPayment(trxId: String, props: any) {
        let forbidAction = false;

        if (trxId == '') {
            forbidAction = true;
        }


        /**
         * discontinue when specifict criteria unmeet `forbidAction`
         */
        if (!forbidAction) {
            if (isDebug) {
                console.log('Call API: /api_check_payment');
            }

            setIsPaymentCheckLoading(true);
            setIsPaymentCheckReady(false);
            let endpoint = apiEndpoint + '/api_check_payment.php?id=' + trxId;
            console.log('Loading request: ', endpoint)
            fetch(endpoint, {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                }),
            })
                .then(response => {
                    setIsPaymentCheckLoading(false);
                    if (response.ok) {
                        setIsPaymentCheckFailed(false);
                    } else {
                        setIsPaymentCheckFailed(true);
                    }
                    return response.json();
                })
                .then(data => {
                    setIsPaymentComplete(data.data.payment_complete);
                    setIsPaymentCancelled(data.data.payment_cancelled);
                    setQrisData(data.data.qris_data);
                    setPaymentLnurlData(data.data.lnurl_data);
                    setPaymentLnurlStatus(data.data.lnurl_status);
                    setMessageTop(data.data.message_top);
                    setMessageBottom(data.data.message_bottom);
                    props.setModalTitle(data.data.modal_title);
                    props.setIsMachineInMaintenance(data.data.machine_in_maintenance);

                    setIsPaymentCheckReady(true);
                    setIsPaymentCheckLoading(false);

                    /**
                     * Set step
                     */
                    if (data.data.payment_cancelled) {
                        if (isDebug) {
                            console.log('Change step: transaction-cancelled');
                        }
                        props.setTrxStep('transaction-cancelled');
                    }

                    /**
                     * Set step if payment finished
                     */
                    if (data.data.payment_complete) {
                        if (isDebug) {
                            console.log('Change step: withdraw-lnurl');
                        }
                        props.setLnurlData(data.data.lnurl_data);
                        props.setTrxStep('withdraw-lnurl');

                        /**
                         * If LNURL complete 
                         */
                        if (data.data.lnurl_status == 'complete') {
                            props.setTrxStep('transaction-complete');
                        }
                    }
                })
                .catch(error => {
                    console.log(error);
                    // TODO: Log
                    // Log('error', 'Failed while sending post data', {
                    //     endpoint: apiEndpoint,
                    //     error: error
                    // })
                })
        }
    }

    /**
     * Tweet action
     */
    function tweetAction() {
        const tweetPreviewEncoded = encodeURI(props.tweetPreview).replace(/\#/g, '%23');
        const url = 'https://twitter.com/intent/tweet?text=' +  tweetPreviewEncoded + '%20https%3A%2F%2Ftwitter.com%2Froaringstars%2Fstatus%2F1490360523535564800';
        window.open(url, '_blank');
    }


    return (
        <>
            {
                props.trxStep == 'generate-qris' && (
                    <>
                        <div className="modal-top-message">
                            Sedang Membuat Tagihan QRIS
                        </div>

                        <img src={SandClockIcon} alt="Sand Clock Icon" className="big-icon" />

                        <div className="modal-bottom-message">
                            Harap Tunggu dan Siapkan E-wallet Anda
                        </div>

                    </>
                )
            }

            {
                props.trxStep == 'waiting-rupiah-deposit' && (
                    <>
                        <div className="modal-top-message">
                            {messageTop}
                        </div>

                        {
                            qrisData == '' || qrisData == null ? (
                                <img src={SandClockIcon} alt="Sand Clock Icon" className="big-icon" />
                            ) : (
                                <div className="qr-qris">
                                    <div className="qr-qris-logo" />
                                    <QRCode value={qrisData.toString()} fgColor="#444" />
                                </div>
                            )
                        }


                        {
                            props.trxId !== '' && (
                                <div className="modal-trx-id">
                                    Trx ID: {props.trxId}
                                </div>
                            )
                        }

                        <div className="modal-bottom-message">
                            {messageBottom}
                        </div>
                    </>
                )
            }


            {
                props.trxStep == 'transaction-cancelled' && (
                    <>
                        <div className="modal-top-message">
                            Transaksi Dibatalkan!
                        </div>

                        <img src={BombIcon} alt="Bomb Icon" className="big-icon" />

                        {
                            props.trxId !== '' && (
                                <div className="modal-trx-id">
                                    Trx ID: {props.trxId}
                                </div>
                            )
                        }

                        <div className="modal-bottom-message">
                            Maaf, transaksi telah dibatalkan karena tagihan tidak kunjung dibayar,
                            jika ini adalah kesalahan hubungi @roaringstars.
                        </div>
                    </>
                )
            }

            {
                props.trxStep == 'withdraw-lnurl' && (
                    <>
                        {
                            props.isMachineInMaintenance ? (
                                <>
                                    <div className="modal-top-message">
                                        {messageTop}
                                    </div>

                                    <img src={ExclamationIcon} alt="Exclamation Icon" className="big-icon" />
                                    {
                                        props.trxId !== '' && (
                                            <div className="modal-trx-id">
                                                Trx ID: {props.trxId}
                                            </div>
                                        )
                                    }

                                    <div className="modal-bottom-message">
                                        {messageBottom}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="modal-top-message">
                                        {messageTop}
                                    </div>

                                    {
                                        paymentLnurlData !== '' && (
                                            <div className="ln">
                                                <div className="ln-logo" />
                                                <QRCode value={paymentLnurlData.toString()} fgColor="#444" />
                                            </div>
                                        )
                                    }


                                    <div className="modal-bottom-message">
                                        {messageBottom}
                                    </div>
                                </>
                            )
                        }

                    </>
                )
            }
            {
                props.trxStep == 'transaction-complete' && (
                    <>
                        <div className="modal-top-message">
                            {messageTop}<br/>
                            {messageBottom}
                        </div>

                        <img src={BitcoinIcon} alt="Bitcoin Icon" className="big-icon" />

                        <div className="modal-bottom-message">
                           <>{props.tweetPreview}</>
                           <Button className="btn btn-primary btn-8bit" onClick={() => { tweetAction() }}>Tweet ini di Twitter</Button>
                        </div>

                       
                    </>
                )
            }
        </>
    )
}

export default AtmModalGenerateQris
