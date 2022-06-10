import * as React from "react"
import { Table } from "react-bootstrap";
import ReactTooltip from 'react-tooltip';
import formatNumber from "./formatNumber";

const PriceInBtc = (props: any) => {
    const apiEndpoint = process.env.ATM_API_ENDPOINT;
    const [btcRate, setBtcRate] = React.useState(600000000);
    const [btcRateReady, setBtcRateReady] = React.useState(true);


    function uniqueId(btc: number) {
        return 'id-' + (props.btc * 100000000).toString();
    }

    /**
* Compose API endpoint
*/
    const endpoint = apiEndpoint + '/api_rate.php?deposit=1500'

    /**
     * Load latest Bitcoin price rate
     */
    const load = () => {
        fetch(endpoint, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                setBtcRate(data.data.one_btc_to_idr_int);
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
            <a data-tip="React-tooltip" data-for={uniqueId(props.btc)}>{props.btc} BTC</a>

            <ReactTooltip
                place="bottom"
                id={uniqueId(props.btc)}
                type="light"
                effect="solid"
                className={"opaque"}>
                <Table>
                    <tbody>
                        <tr>
                            <td>Bitcoin</td>
                            <td className="text-right">
                                {props.btc} BTC
                            </td>
                        </tr>
                        <tr>
                            <td>Satoshi</td>
                            <td>
                                {formatNumber(props.btc * 100000000, '', ' sats')}
                            </td>
                        </tr>
                        <tr>
                            <td>Rupiah</td>
                            <td className="text-right">
                                {
                                    (!btcRateReady) ? (
                                        <>Loading...</>
                                    ) : (
                                        <>{formatNumber(Math.round(btcRate * props.btc))}</>
                                    )
                                }
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </ReactTooltip>
        </>
    )
}

export default PriceInBtc
