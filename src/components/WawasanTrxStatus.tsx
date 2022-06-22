import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as React from "react"
import { Badge } from "react-bootstrap"

const WawasanTrxStatus = (props: any) => {
    return (
        <>
            {
                props.trxStatus == 'complete' ? (
                    <Badge bg="success">Selesai &nbsp;
                        <FontAwesomeIcon icon={faCheckCircle} />
                    </Badge>
                ) : null
            }
            {
                props.trxStatus == 'waiting' ? (
                    <Badge bg="primary">Dalam Proses</Badge>
                ) : null
            }
            {
                props.trxStatus == 'withdraw' ? (
                    <>
                        {
                            props.lnurlStatus != null ? (
                                <>
                                    {
                                        props.lnurlStatus == 'pending' ? (
                                            <Badge bg="primary">Mengirim Satoshi</Badge>
                                        ) : (
                                            <Badge bg="primary">Withdraw</Badge>
                                        )
                                    }
                                </>
                            ) : (
                                <Badge bg="primary">Withdraw</Badge>
                            )
                        }
                    </>
                ) : null
            }
            {
                props.trxStatus == 'cancelled' ? (
                    <Badge bg="secondary">Dibatalkan</Badge>
                ) : null
            }
            {
                props.trxStatus == 'failed' ? (
                    <Badge bg="danger">Gagal, Waktu HTLC habis</Badge>
                ) : null
            }
            <div className="ml-1 d-inline-block">
                {
                    props.isRefundable ? (
                        <Badge bg="success">Masih Bisa Refund</Badge>
                    ) : (
                        props.trxStatus == 'waiting' || props.trxStatus == 'cancelled' ? (
                            <Badge bg="secondary">Tidak Bisa Refund karena Deposit belum diterima</Badge>
                        ) : (
                            <>
                                {
                                    props.lnurlStatus != null ? (
                                        <>
                                            {
                                                props.lnurlStatus == 'pending' ? (
                                                    <Badge bg="secondary">Tidak Bisa Refund Sampai Batas HTLC</Badge>
                                                ) : (
                                                    <Badge bg="secondary">Sudah Tidak Bisa Refund</Badge>
                                                )
                                            }
                                        </>
                                    ) : (
                                        <Badge bg="secondary">Sudah Tidak Bisa Refund</Badge>
                                    )
                                }
                            </>
                        )
                    )
                }
            </div>
        </>
    )
}

export default WawasanTrxStatus
