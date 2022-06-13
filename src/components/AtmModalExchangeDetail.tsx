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
    const [exchangeFeePercentage, setExchangeFeePercentage] = React.useState(12);
    const [afterFeeIdr, setAfterFeeIdr] = React.useState(0);
    const [oneBtcToIdr, setOneBtcToIdr] = React.useState(0);
    const [satsReceive, setSatsReceive] = React.useState(0);
    const updateInterval = 3;

    const [priceOutdateInSec, setPriceOutdateInSec] = React.useState(0);
    const [rateTimer, setRateTimer] = React.useState(0);
    const [isMachineInMaintenaceLocal, setIsMachineInMaintenaceLocal] = React.useState(false);
    const [isReachingQuotaLimitLocal, setIsReachingQuotaLimitLocal] = React.useState(false);

    /**
     * Load latest Bitcoin price rate
     */
    function load(amount: number) {
        let forbidAction = false;

        /**
         * Only check when `RateChecker` is enabled
         */
        if (!props.isRateCheckerEnabled) {
            forbidAction = true;
        }

        /**
         * Only when `depositAmount` already set
         */
         if (amount == undefined) {
             forbidAction = true;
        }

        /**
         * discontinue when specifict criteria unmeet `forbidAction`
         */
        if (!forbidAction) {
            if (isDebug) {
                console.log('Call API: /api_rate.php?deposit=' + amount);
            }
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
                    setPriceOutdateInSec(Math.floor(Date.now() / 1000));
                    setExchangeFee(data.data.exchange_fee_int + data.data.payment_gateway_fee_int);
                    setAfterFeeIdr(data.data.after_fee_idr);
                    setOneBtcToIdr(data.data.one_btc_to_idr);
                    setSatsReceive(data.data.sats_receive);
                    setIsMachineInMaintenaceLocal(data.data.machine_in_maintenance);
                    setExchangeFeePercentage(data.data.exchange_fee_percentage);
                    setRateData(data.data);
                    props.setIsPriceLoading(false);

                    // disable machine if run out of quota
                    if (data.data.trx_quota < 1) {
                        setIsReachingQuotaLimitLocal(true);
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
    }

    /**
     * Update when `depositAmount` changes 
     */
    React.useEffect(() => {
        console.log('depositAmount changed: ' + depositAmount);

        let forbidAction = false;
        if (depositAmount === undefined) {
            console.log('depositAmount: undefined');
            forbidAction = true;
        }

        if (!forbidAction) {
            console.log('Refreshing rate...');
            load(depositAmount)
        }
    }, [depositAmount])
    

    /**
     * Only refresh when more than `updateInterval`sec
     */
    React.useEffect(() => {
        let updatePriceIn = (updateInterval+1 - ((Math.floor(Date.now() / 1000)) - priceOutdateInSec))
        if (isDebug) {
            if (updatePriceIn > 0) {
                console.log('Update price in: ' + updatePriceIn + ' sec');
            }
        }
        
        /**
         * Update global props
         */
        if (updatePriceIn > 0) {
            if (updatePriceIn > 0) {
                props.setRecheckMachineStatusIn(priceOutdateInSec);
            }
        }
        if ((Math.floor(Date.now() / 1000)) - priceOutdateInSec > updateInterval) {
            // call update
            load(depositAmount)
        }
    }, [priceOutdateInSec, depositAmount, rateTimer])
    
    /**
     * OnLoad action
     */
    React.useEffect(() => {
        load(depositAmount)
        const timer = setInterval(() => {
            setRateTimer(Math.random())
        }, 1 * 1000);
        return () => clearInterval(timer);
    }, [])

    // quota
    React.useEffect(() => {
        props.setIsReachingQuotaLimit(isReachingQuotaLimitLocal)
    }, [isReachingQuotaLimitLocal])

    React.useEffect(() => {
        setIsReachingQuotaLimitLocal(props.isReachingQuotaLimit)
    }, [props.isReachingQuotaLimit])

    // machine in maintenance
    React.useEffect(() => {
        props.setIsMachineInMaintenance(isMachineInMaintenaceLocal)
    }, [isMachineInMaintenaceLocal])

    React.useEffect(() => {
        setIsMachineInMaintenaceLocal(props.isMachineInMaintenance)
    }, [props.isMachineInMaintenance])

    React.useEffect(() => {
        props.setDepositAmount(depositAmount)
    }, [depositAmount])

    React.useEffect(() => {
        setDepositAmount(props.depositAmount)
    }, [props.depositAmount])

    return (
        <>
            {
                props.trxStep == 'agreement' && (
                    <>

                        <Table bordered>
                            <tbody>

                                <tr className="tr-bordered">
                                    <td>Jumlah Deposit</td>
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
                                                <>IDR {exchangeFee.toLocaleString()}</>
                                            ) : null
                                        }

                                        <ReactTooltip place="bottom" id={'exchange-fee-detail'} effect="solid">
                                            <div style={{ maxWidth: "500px", textAlign: "left" }}>
                                                <ExchangeFeeDetail exchangeFeePercentage={exchangeFeePercentage}/>
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
                                    <td>Akan Menerima</td>
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
