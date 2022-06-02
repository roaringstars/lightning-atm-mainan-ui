import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react"
import { Button, Modal, Table } from "react-bootstrap"
import ReactTooltip from "react-tooltip";
import Header from "../components/Header"
import ExchangeFeeDetail from "./ExchangeFeeDetail";
import formatNumber from "./formatNumber";

const AtmModalExchangeDetail = (props: any) => {
    /**
     * Constant 
     */
    const apiEndpoint = process.env.ATM_API_ENDPOINT;
    const isDebug = process.env.ATM_DEBUG;

    /**
     * Declare state
     */
    const [isLoading, setIsLoading] = React.useState(true);
    const [rateData, setRateData] = React.useState({});
    const [isRateDataReady, setIsRateDataReady] = React.useState(false);
    const [isRateDataFailed, setIsRateDataFailed] = React.useState(false);
    const [depositAmount, setDepositAmount] = React.useState(parseInt(props.depositAmount));

    const [exchangeFee, setExchangeFee] = React.useState(0);
    const [afterFeeIdr, setAfterFeeIdr] = React.useState(0);
    const [oneBtcToIdr, setOneBtcToIdr] = React.useState(0);
    const [satsReceive, setSatsReceive] = React.useState(0);
    const exchangeFeePercentage = 10;


    /**
     * Load latest Bitcoin price rate
     */
    const load = (amount: number) => {
        setIsLoading(true);
        setIsRateDataReady(false);
        let endpoint = apiEndpoint + '/api_rate.php?deposit=' + amount;
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
                    setIsRateDataReady(true);
                } else {
                    setIsRateDataFailed(true);
                }
                return response.json();
            })
            .then(data => {
                setExchangeFee(data.data.exchange_fee);
                setAfterFeeIdr(data.data.after_fee_idr);
                setOneBtcToIdr(data.data.one_btc_to_idr);
                setSatsReceive(data.data.sats_receive);
                setRateData(data.data);
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
     * Update price rate when deposit amount change 
     */
    React.useEffect(() => {
        console.log('Deposit Amount:', props.depositAmount);
        console.log('Updating exchange detail...');
        load(props.depositAmount);
    }, [props.depositAmount, apiEndpoint])

    /**
     * Refrest every 1 minutes
     * Update when `depositAmount` changes 
     */
    React.useEffect(() => {
        if (props.depositAmount === undefined) {
            return
        }

        setDepositAmount(props.depositAmount)
        console.log('Refreshing rate...');
        const timer = setInterval(() => {
            load(props.depositAmount)
        }, 5 * 1000);
        return () => clearInterval(timer);
    }, [props.depositAmount])

    return (
        <>
            {
                props.trxStep == 'agreement' && (
                    <>

                        <Table bordered>
                            <tbody>

                                <tr className="tr-bordered">
                                    <td>Jumlah Deposit Rupiah</td>
                                    <td className="idr-deposit-amount text-end">
                                        {
                                            <> {formatNumber(depositAmount, 'IDR ', '')}</>
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Table className="minimal">
                            <tbody>
                                <tr>
                                    <td>
                                        <span data-tip="React-tooltip" data-for={'exchange-fee-detail'}>
                                            Biaya Penukaran ({exchangeFeePercentage}%)
                                        </span>
                                    </td>
                                    <td className="exchange-fee text-end">
                                        {
                                            isLoading && (
                                                <>Memuat...</>
                                            )
                                        }
                                        {
                                            isRateDataFailed && (
                                                <>Gagal Memuat!</>
                                            )
                                        }
                                        {
                                            isRateDataReady ? (
                                                <>{exchangeFee}</>
                                            ) : null
                                        }

                                        <ReactTooltip place="bottom" id={'exchange-fee-detail'} effect="solid">
                                            <div style={{ maxWidth: "500px", textAlign: "left" }}>
                                                <ExchangeFeeDetail />
                                            </div>
                                        </ReactTooltip>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Jumlah Setelah Potongan</td>
                                    <td className="after-fee text-end">
                                        {
                                            isLoading && (
                                                <>Memuat...</>
                                            )
                                        }
                                        {
                                            isRateDataFailed && (
                                                <>Gagal Memuat!</>
                                            )
                                        }
                                        {
                                            isRateDataReady ? (
                                                <>{afterFeeIdr}</>
                                            ) : null
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kurs (1 BTC ke IDR)</td>
                                    <td className="current-rate text-end">
                                        {
                                            isLoading && (
                                                <>Memuat...</>
                                            )
                                        }
                                        {
                                            isRateDataFailed && (
                                                <>Gagal Memuat!</>
                                            )
                                        }
                                        {
                                            isRateDataReady ? (
                                                <>{oneBtcToIdr}</>
                                            ) : null
                                        }
                                    </td>
                                </tr>

                            </tbody>

                        </Table>
                        <Table bordered>

                            <tbody>

                                <tr className="tr-bordered">
                                    <td>Kamu Akan Menerima</td>
                                    <td className="sats-received text-end">
                                        {
                                            isLoading && (
                                                <>Memuat...</>
                                            )
                                        }
                                        {
                                            isRateDataFailed && (
                                                <>Gagal Memuat!</>
                                            )
                                        }
                                        {
                                            isRateDataReady ? (
                                                <>{satsReceive}</>
                                            ) : null
                                        }
                                    </td>
                                </tr>

                            </tbody>

                        </Table>

                        <div className="alert alert-8bit">
                            <p className="text-center mb-1">- Mohon Baca Sebelum Melakukan Pembayaran -</p>
                            <ul>
                                <li>Mendukung semua pembayaran QRIS (OVO, Gopay, DANA, LinkAja, ShopeePay, BCA, CIMB).</li>
                                <li>Jika membutuhkan bantuan DM <b>@roaringstars</b> dengan menyertakan nomor Trx ID.</li>

                                <li>Mesin ini dibuat untuk tujuan edukasi, kehilangan Bitcoin setelah transaksi selesai/menggunakan
                                    untuk hal dilarang hukum merupakan tanggung jawab sendiri.
                                </li>
                            </ul>
                        </div>

                    </>
                )
            }

        </>
    )
}

export default AtmModalExchangeDetail
