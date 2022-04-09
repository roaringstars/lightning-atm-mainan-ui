import * as React from "react"
import { Table } from "react-bootstrap";
import ReactTooltip from 'react-tooltip';

const PriceInBtc = (props: any) => {
    const [indodaxPrice, setIndodaxPrice] = React.useState(600000000);
    const [indodaxPriceReady, setIndodaxPriceReady] = React.useState(true);

    function formatNumber(angka: number, prefix: string = 'Rp', suffix: string = '') {
        const format = angka.toString().split('').reverse().join('');
        const convert = format.match(/\d{1,3}/g);
        if (convert !== null) {
            return prefix + convert.join(',').split('').reverse().join('') + suffix
        }
        return angka.toString();
    }

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
