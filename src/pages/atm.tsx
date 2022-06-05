import { Link } from "gatsby";
import * as React from "react"
import { Button, Modal, Table } from "react-bootstrap"
import CopyToClipboard from "react-copy-to-clipboard";
import AtmModalExchangeDetail from "../components/AtmModalExchangeDetail";
import AtmModalGenerateQris from "../components/AtmModalGenerateQris";
import Header from "../components/Header"

const ATM = ({ location }: any) => {
    /**
     * Constant 
     */
    const isDebug = (process.env.ATM_DEBUG === 'true');
    const depositOption = [1500, 10000, 15000];

    /**
     * Declare state
     */
    const [isScreenModalVisible, setIsScreenModalVisible] = React.useState(false);
    const [depositAmount, setDepositAmount] = React.useState(0);
    const [depositAmountText, setDepositAmountText] = React.useState('Deposit 10K');
    const [trxStep, setTrxStep] = React.useState('agreement');
    const [trxId, setTrxId] = React.useState('');
    const [trxIdFromUrl, setTrxIdFromUrl] = React.useState(location.search.replace('?trx_id=', ''));

    const [isQrisQrBeingGenerated, setIsQrisQrBeingGenerated] = React.useState(false);
    const [isRateCheckerEnabled, setIsRateCheckerEnabled] = React.useState(true);
    const [isPaymentCheckerEnabled, setIsPaymentCheckerEnabled] = React.useState(false);
    const [isLnurlTextareaVisible, setIsLnurlTextareaVisible] = React.useState(false);
    const [lnurlBtnLabel, setLnurlBtnLabel] = React.useState('^');
    const [lnurlData, setLnurlData] = React.useState('');

    const [isMachineInMaintenance, setIsMachineInMaintenance] = React.useState(false);

    /**
     * UI Text
     */
    const [modalTitle, setModalTitle] = React.useState('Detail Penukaran');
    const tweetPreview = 'Baru saja menukarkan Rupiah ke Bitcoin dengan Lightning ATM (Mainan) dan itu keren!\n\n#LightningAtmMainan #BitcoinEceran';

    /**
     * Deposit Modal
     */
    function depositBtnAction() {
        setIsScreenModalVisible(true);
    }

    /**
     * Change deposit amount
     */
    function changeDepositAmount() {
        if (depositAmount == 0) {
            setDepositAmount(1)
        }
        else if (depositAmount == 1) {
            setDepositAmount(2)
        }
        else {
            setDepositAmount(0)
        }
    }

    /**
     * Close modal 
     */
    function closeModal() {
        if (isDebug) {
            console.log('Change step: agreement');
        }
        setTrxStep('agreement');
        setIsScreenModalVisible(false)
    }

    /**
     * Update text when `depositAmount` changes
     */
    React.useEffect(() => {
        if (depositAmount == 0) {
            setDepositAmountText('Deposit 10K')
        }
        else if (depositAmount == 1) {
            setDepositAmountText('Deposit 15K')
        }
        else {
            setDepositAmountText('Deposit 1.5K')
        }
    }, [depositAmount])

    /**
     * Check previous 
     */
    React.useEffect(() => {
        const regex = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/gm;
        if (regex.test(trxIdFromUrl)) {
            if (isDebug) {
                console.log('Found previous Trx Id from URL: ' + trxIdFromUrl)
                console.log('Change step: waiting-rupiah-deposit');
            }
            setTrxStep('waiting-rupiah-deposit');
            setModalTitle('Memuat Transaksi...');
            setTrxId(trxIdFromUrl);
            depositBtnAction();
        }
    }, [trxIdFromUrl])

    /**
     * Accept & Deposit button
     */
    function acceptAndDeposit() {
        if (isDebug) {
            console.log('Change step: generate-qris');
        }
        setIsRateCheckerEnabled(false);
        setTrxStep('generate-qris');
    }

    /**
     * Open/Close LNURL Textarea
     */
    function toggleLnurlTextarea() {
        if (isLnurlTextareaVisible) {
            if (isDebug) { console.log('Close LNURL Textarea') }
            setIsLnurlTextareaVisible(false);
            setLnurlBtnLabel('^');
        } else {
            if (isDebug) { console.log('Open LNURL Textarea') }
            setIsLnurlTextareaVisible(true);
            setLnurlBtnLabel('v');
        }
    }

    return (
        <main>
            <title>ATM</title>

            {/* <Header/>
             */}

            {
                !isDebug ? (
                    <div className="atm-wip">ATM di halaman ini masih dalam proses rekonstruksi,
                        sementara waktu gunakan versi <a href="https://roaringstars.com">sebelumnya</a>.</div>
                ) : null
            }


            <div className="main-wrapper">
                <div className="box-container ">
                    <div className="text-center box p-5">
                        <div className="screen">
                            <div className="small">Selamat Datang di</div>
                            <div className="large">Lightning ATM (Mainan)</div>
                            <div className="more-text hide" id="maintenance">maaf, atm sedang bermasalah</div>
                            <div className="more-text hide" id="maintenance-max-trx">maaf, melebihi quota harian</div>
                            <a className="btn btn-default"
                                id="please-deposit-btn"
                                onClick={() => { depositBtnAction() }}
                            >
                                - ketuk untuk deposit rupiah -
                            </a>
                        </div>

                        <div className="atm-logo white"></div>
                    </div>
                </div>
            </div>

            {/* <!-- Exchange Detail Modal --> */}
            <Modal
                show={isScreenModalVisible}
                backdrop="static"
                keyboard={false}
                className="modal fade modal-8bit"
                size="lg"
            >
                <Modal.Header>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <AtmModalExchangeDetail
                        depositAmount={depositOption[depositAmount]}
                        modalTitle={modalTitle}
                        setModalTitle={setModalTitle}
                        trxStep={trxStep}
                        setTrxStep={setTrxStep}
                        isRateCheckerEnabled={isRateCheckerEnabled}
                        setIsRateCheckerEnabled={setIsRateCheckerEnabled}
                        setIsMachineInMaintenance={setIsMachineInMaintenance}
                    />
                    <AtmModalGenerateQris
                        depositAmount={depositOption[depositAmount]}
                        modalTitle={modalTitle}
                        setModalTitle={setModalTitle}
                        trxStep={trxStep}
                        setTrxStep={setTrxStep}
                        trxId={trxId}
                        setTrxId={setTrxId}
                        isQrisQrBeingGenerated={isQrisQrBeingGenerated}
                        setIsQrisQrBeingGenerated={setIsQrisQrBeingGenerated}
                        isRateCheckerEnabled={isRateCheckerEnabled}
                        setIsRateCheckerEnabled={setIsRateCheckerEnabled}
                        isPaymentCheckerEnabled={isPaymentCheckerEnabled}
                        setIsPaymentCheckerEnabled={setIsPaymentCheckerEnabled}
                        setLnurlData={setLnurlData}
                        isMachineInMaintenance={isMachineInMaintenance}
                        setIsMachineInMaintenance={setIsMachineInMaintenance}
                        tweetPreview={tweetPreview}
                    />
                </Modal.Body>

                <Modal.Footer>
                    {
                        trxStep === 'agreement' && (
                            <>
                                {
                                    isMachineInMaintenance ? (
                                        <Button className="btn btn-primary float-start btn-8bit disabled" disabled>ATM Sedang Gangguan</Button>
                                    ) : (
                                        <Button className="btn btn-primary float-start btn-8bit" onClick={() => { acceptAndDeposit() }}>Setuju &amp; Deposit</Button>
                                    )
                                }
                                <Button className="btn btn-secondary float-end btn-8bit" onClick={() => { closeModal() }}>Tutup</Button>
                                <Button className="btn btn-secondary float-end btn-8bit" onClick={() => { changeDepositAmount() }}>{depositAmountText}</Button>
                            </>
                        )
                    }
                    {
                        trxStep === 'transaction-cancelled' && (
                            <>
                                <a className="btn btn-primary float-start btn-8bit"  href="https://twitter.com/roaringstars/" target="_blank">Laporkan Kesalahan</a>
                                <Button className="btn btn-secondary float-end btn-8bit" onClick={() => { closeModal() }}>Tutup</Button>
                            </>
                        )
                    }

                    {
                        trxStep === 'withdraw-lnurl' && (
                            <div className="text-center">
                                {
                                    isMachineInMaintenance ? (
                                        <>
                                            <CopyToClipboard 
                                                text={'https://roaringstars.com/atm/?trx_id=' + trxId} 
                                                onCopy={() => { alert('URL halaman ini berhasil disalin, akses halaman ini beberapa saat lagi')}}
                                            >
                                                <Button className="btn btn-primary btn-8bit">Salin Alamat Halaman</Button>
                                            </CopyToClipboard>
                                        </>
                                    ) : (
                                        <>
                                            {
                                                isLnurlTextareaVisible && (
                                                    <textarea className="form-control lnurl-textarea" rows={3}>{lnurlData}</textarea>
                                                )
                                            }

                                            <CopyToClipboard 
                                                text={lnurlData} 
                                                onCopy={() => { alert('Kode LNURL berhasil disalin, tempelkan pada dompet Bitcoin yang mendukung Lightning Network')}}
                                            >
                                                <Button className="btn btn-primary btn-8bit">Salin LNURL</Button>
                                            </CopyToClipboard>
                                            <Button className="btn btn-primary btn-8bit" onClick={() => { toggleLnurlTextarea() }}>{lnurlBtnLabel}</Button>
                                        </>
                                    )
                                }

                                
                            </div>
                        )
                    }


                    {
                        trxStep === 'transaction-complete' && (
                            <>
                                <Link className="btn btn-secondary float-start btn-8bit" to={'/wawasan-transaksi/?trx_id=' + trxId}>Wawasan Transaksi</Link>
                                <Button className="btn btn-secondary float-end btn-8bit" onClick={() => { closeModal() }}>Tutup</Button>
                            </>
                        )
                    }


                </Modal.Footer>
            </Modal>

            <div className="modal modal-back-case"
                id="modal-settings"
                role="dialog"
                data-keyboard="false"
                data-backdrop="static"
                aria-hidden="true">

                {/* <!-- Modal Settings --> */}
                <div className="modal-dialog modal-lg " role="document">
                    <div className="modal-content">
                        <div className="modal-body text-center">
                            <div className="back-label">
                                <p>
                                    Model: BTCLN-21M<br />
                                    Version: 0.0.3 (Beta)<br />
                                    Last Trx: 1 hour ago<br />
                                    Successful Trx: 584<br />
                                    Today Trx: 10<br />
                                </p>
                                <div className="screw tl"></div>
                                <div className="screw tr r1"></div>
                                <div className="screw bl r2"></div>
                                <div className="screw br r3"></div>
                                <img src="/assets/img/back_label.svg" alt="back label" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="row">
                                <div className="col">
                                    Flashy E-Ink Effect
                                </div>
                                <div className="col">
                                    <div className="pull-right">
                                        <input id="switch" type="checkbox" />
                                        <div className="wrap">
                                            <label htmlFor="switch"><span className="rib"></span><span className="rib"></span><span className="rib">

                                            </span></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    Save Config &amp; Reboot
                                </div>
                                <div className="col">
                                    <div className="pull-right">
                                        <input id="switch-reboot" type="checkbox" />
                                        <div className="wrap">
                                            <label htmlFor="switch-reboot">
                                                <span className="rib"></span>
                                                <span className="rib"></span>
                                                <span className="rib"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ATM
