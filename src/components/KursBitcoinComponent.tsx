import { faQuestionCircle, faCheckCircle, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as React from "react"
import { useState } from "react"
import { Card, Row, Col, Table } from "react-bootstrap"
import ReactTooltip from "react-tooltip"
import ReactTimeAgo from "react-time-ago"
import formatNumber from "./formatNumber"

const KursBitcoinComponent = (props: any) => {

    return (
        <>
            {
                props.data === undefined ? null : (
                    <> {
                        Object.keys(props.data).map((item) => {
                            return props.data[item] !== undefined ? (
                                <>
                                    <Card className="mb-4 card-default">
                                        <Card.Body>
                                            <Row>
                                                <Col>
                                                    {props.data[item].label} <FontAwesomeIcon
                                                        icon={faQuestionCircle}
                                                        className="text-faded"
                                                        data-tip="React-tooltip" data-for={props.data[item].id}
                                                    />
                                                    <ReactTooltip
                                                        place="bottom"
                                                        id={props.data[item].id}
                                                        type="light"
                                                        effect="solid"
                                                        className={"opaque"}>
                                                        <Table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Direkam Pada</td>
                                                                    <td className="text-right">
                                                                        <ReactTimeAgo date={props.data[item].created_at * 1000} />
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>Waktu Sumber</td>
                                                                    <td className="text-right">
                                                                        <ReactTimeAgo date={props.data[item].source_time * 1000} />
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </ReactTooltip>
                                                </Col>
                                                <Col className="text-right">
                                                    {formatNumber(Math.round(props.data[item].in_idr), 'IDR ', '')}
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </>
                            ) : (
                                <>err</>
                            )
                        })
                    }
                    </>
                )
            }


        </>
    )
}

export default KursBitcoinComponent
