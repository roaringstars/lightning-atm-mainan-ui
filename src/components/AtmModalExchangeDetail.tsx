import * as React from "react"
import { Button, Modal, Table } from "react-bootstrap"
import Header from "../components/Header"

const AtmModalExchangeDetail = () => {
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
    const [depositAmount, setDepositAmount] = React.useState(1500);

    /**
     * Compose API endpoint
     */
    const endpoint = apiEndpoint + '/api_rate.php?deposit=' + depositAmount

    /**
     * Load latest Bitcoin price rate
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
                    setIsRateDataReady(true);
                } else {
                    setIsRateDataFailed(true);
                }
                return response.json();
            })
            .then(data => {
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

    React.useEffect(() => {
        load();
    }, [])

    return (
        <>
            <Table bordered>
                <tr>
                    <td>Rupiah Deposit Amount</td>
                    <td className="idr-deposit-amount text-end">
                        {
                            isLoading && (
                                <>Loading...</>
                            )
                        }
                        {
                            isRateDataFailed && (
                                <>Failed!</>
                            )
                        }
                        {
                            isRateDataReady ? (
                                <>{rateData.idr_deposit_amount}</>
                            ) : null
                        }
                    </td>
                </tr>
            </Table>
            <Table className="minimal">
                <tr>
                    <td>Payment Gateway Fee (2%)</td>
                    <td className="payment-fee text-end">
                    {
                            isLoading && (
                                <>Loading...</>
                            )
                        }
                        {
                            isRateDataFailed && (
                                <>Failed!</>
                            )
                        }
                        {
                            isRateDataReady ? (
                                <>{rateData.payment_gateway_fee}</>
                            ) : null
                        }
                    </td>
                </tr>
                <tr>
                    <td>Exchange Fee (7%)</td>
                    <td className="exchange-fee text-end">
                    {
                            isLoading && (
                                <>Loading...</>
                            )
                        }
                        {
                            isRateDataFailed && (
                                <>Failed!</>
                            )
                        }
                        {
                            isRateDataReady ? (
                                <>{rateData.exchange_fee}</>
                            ) : null
                        }
                    </td>
                </tr>
                <tr>
                    <td>Rupiah After Fee</td>
                    <td className="after-fee text-end">
                    {
                            isLoading && (
                                <>Loading...</>
                            )
                        }
                        {
                            isRateDataFailed && (
                                <>Failed!</>
                            )
                        }
                        {
                            isRateDataReady ? (
                                <>{rateData.after_fee_idr}</>
                            ) : null
                        }
                    </td>
                </tr>
                <tr>
                    <td>Rate (1 BTC to IDR)</td>
                    <td className="current-rate text-end">
                    {
                            isLoading && (
                                <>Loading...</>
                            )
                        }
                        {
                            isRateDataFailed && (
                                <>Failed!</>
                            )
                        }
                        {
                            isRateDataReady ? (
                                <>{rateData.one_btc_to_idr}</>
                            ) : null
                        }
                    </td>
                </tr>
            </Table>
            <Table bordered>
                <tr>
                    <td>You'll Receive</td>
                    <td className="sats-received text-end">
                    {
                            isLoading && (
                                <>Loading...</>
                            )
                        }
                        {
                            isRateDataFailed && (
                                <>Failed!</>
                            )
                        }
                        {
                            isRateDataReady ? (
                                <>{rateData.sats_receive}</>
                            ) : null
                        }
                    </td>
                </tr>
            </Table>

            <div className="alert alert-8bit">
                <p className="text-center mb-1">- Please Read Before Make A Payment -</p>
                <ul>
                    <li>Support any QRIS payment (OVO, Gopay, DANA, LinkAja, ShopeePay, BCA, CIMB).</li>
                    <li>If you need help please DM <b>@roaringstars</b>
                        on Twitter with providing the Trx ID, so take note that.</li>
                    <li>This machine builds for education purposes only, loss of funds
                        after the transaction is complete/spending that is prohibited by law is at your own risk
                    </li>
                </ul>
            </div>


        </>
    )
}

export default AtmModalExchangeDetail
