import * as React from "react"
import { Table } from "react-bootstrap";
import ReactTooltip from 'react-tooltip';
import formatNumber from "./formatNumber";

const PriceInBtc = (props: any) => {
    const [indodaxPrice, setIndodaxPrice] = React.useState(600000000);
    const [indodaxPriceReady, setIndodaxPriceReady] = React.useState(true);

    
    function uniqueId(btc: number) {
        return 'id' + (props.btc * 100000000).toString();
    }


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
                                    (!indodaxPriceReady) ? (
                                        <>Loading...</>
                                    ) : (
                                        <>{formatNumber(indodaxPrice * props.btc)}</>
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
