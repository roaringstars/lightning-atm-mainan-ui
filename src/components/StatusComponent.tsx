import { faQuestionCircle, faCheckCircle, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as React from "react"
import { useState } from "react"
import { Card, Row, Col, Table } from "react-bootstrap"
import ContentLoader, { Facebook } from 'react-content-loader'
import ReactTooltip from "react-tooltip"
import TimeAgo from 'javascript-time-ago'

import id from 'javascript-time-ago/locale/id'
import ReactTimeAgo from "react-time-ago"

const StatusComponent = (props: any) => {

    /**
     * Load indonesian
     */
    TimeAgo.addDefaultLocale(id)


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
                                                <Col sm={10}>
                                                    LNPay Server <FontAwesomeIcon
                                                        icon={faQuestionCircle}
                                                        className="text-faded"
                                                        data-tip="React-tooltip" data-for={'lnpay-ping'}
                                                    />
                                                    <ReactTooltip
                                                        place="bottom"
                                                        id={'lnpay-ping'}
                                                        type="light"
                                                        effect="solid"
                                                        className={"opaque"}>
                                                        <Table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Status Code</td>
                                                                    <td className="text-right">
                                                                        {props.data[item].series[0].status_code}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Last Check</td>
                                                                    <td className="text-right">
                                                                        <ReactTimeAgo date={props.data[item].last_check * 1000} />
                                                                    </td>
                                                                </tr>

                                                            </tbody>
                                                        </Table>
                                                    </ReactTooltip>
                                                </Col>
                                                {
                                                    props.data[item].ok ? (

                                                        <Col sm={2} className="text-right text-success">
                                                            <FontAwesomeIcon icon={faCheckCircle} />
                                                        </Col>
                                                    ) : (

                                                        <Col sm={2} className="text-right text-danger">
                                                            <FontAwesomeIcon icon={faExclamationTriangle} />
                                                        </Col>
                                                    )
                                                }
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

export default StatusComponent
