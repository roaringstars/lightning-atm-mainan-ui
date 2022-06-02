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
import QRCode from "react-qr-code";

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
    const [qrisData, setQrisData] = React.useState({});
    const [isQrisDataReady, setIsQrisDataReady] = React.useState(false);
    const [isQrisDataFailed, setIsQrisDataFailed] = React.useState(false);

    React.useEffect(() => {
        props.setModalTitle('Deposit Rupiah')
    })

    /**
     * Generate QRIS
     */
    const load = (amount: number) => {
        if (isDebug) {
            console.log('Call API: /api_generate_qris');
        }
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

    React.useEffect(() => {
        if (props.trxStep == 'generate-qris' && !isLoading && !isQrisDataReady) {
            console.log(isQrisDataReady);
            load(props.depositAmount);
        }
    }, [props.trxStep, isLoading, isQrisDataReady])


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
                            Selesaikan Pembayaran, Pindai Dengan E-wallet yang mendukung QRIS
                        </div>

                        <div className="qr-qris">
                            <div className="qr-qris-logo"/>
                            <QRCode value={qrisData.toString()} fgColor="#444"/>
                        </div>

                        {
                            props.trxId !== '' && (
                                <div className="modal-trx-id">
                                Trx ID: {props.trxId}
                            </div>
                            )
                        }

                        <div className="modal-bottom-message">
                            Transaksi secara otomatis dibatalkan jika tagihan tidak dibayar dalam 1 jam, 
                            sementara kami sedang memverifikasi pembayaran anda.
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

        </>
    )
}

export default AtmModalGenerateQris
