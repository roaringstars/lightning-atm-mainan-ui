import { Link, navigate } from "gatsby";
import * as React from "react"
import { Button, Col, Modal, Row, Table } from "react-bootstrap"
import CopyToClipboard from "react-copy-to-clipboard";
import AtmModalExchangeDetail from "../components/AtmModalExchangeDetail";
import AtmModalGenerateQris from "../components/AtmModalGenerateQris";
import Header from "../components/Header"
import '../styles/atm.css'
import { Helmet } from "react-helmet"
import BackSideLabel from '../assets/images/atm/back_label.svg';

import ReactTimeAgo from 'react-time-ago'

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
TimeAgo.addDefaultLocale(en)

const ATM = ({ location }: any) => {
    /**
     * Constant 
     */
    const isDebug = (process.env.ATM_DEBUG === 'true');
    const depositOption = [1500, 10000, 15000];
    const appUiVersion = process.env.ATM_UI_VERSION;

    /**
     * Declare state
     */
    const [isScreenModalVisible, setIsScreenModalVisible] = React.useState(false);
    const [isConfigModalVisible, setIsConfigModalVisible] = React.useState(true);
    const [isEinkEffectEnabled, setIsEinkEffectEnabled] = React.useState(true);
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
    const [lastLocalTrx, setLastLocalTrx] = React.useState([]);

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
        navigate('/atm/')
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

    /**
     * Handle E-ink Toggle
     */
    function handleEinkToggle() {
        if (isDebug) {
            console.log('E-ink Enabled: ' + !isEinkEffectEnabled);
        }
        setIsEinkEffectEnabled(!isEinkEffectEnabled)
        localStorage.setItem('atm-config', JSON.stringify({
            'enable_flashy_effect': !isEinkEffectEnabled
        }));

    }

    /**
     * Handle Reboot Toggle
     */
    function handleRebootBtn() {
        if (isDebug) {
            console.log('Rebooting...');
        }
        setIsConfigModalVisible(false)
    }
    function handleOpenConfig() {
        if (isDebug) {
            console.log('Opening Config Modal...');
        }
        setIsConfigModalVisible(true)

    }

    /**
     * Load previous config
     */
    React.useEffect(() => {

        const atmConfig = localStorage.getItem('atm-config');
        if (atmConfig === null) {
            if (isDebug) {
                console.log('No config found.');
            }
        } else {
            if (isDebug) {
                console.log('Previous config found.');
            }
            setIsConfigModalVisible(false);
        }
        /**
         * Load last trx
         */
        renderLastTrx();
    }, [])

    /**
     * Render last trx
     */
    function renderLastTrx() {
        /**
         * Check last trx
         * @type {string}
         */
        const lastTrx = localStorage.getItem('last-trx');
        if (lastTrx == null) {
            console.log('No last trx found.');
        } else {
            let lastTrxDecode = JSON.parse(lastTrx);
            console.log('Found ' + lastTrxDecode.length + ' previous transaction.');

            setLastLocalTrx(lastTrxDecode)
        }

    }

    return (
        <main>
            <Helmet
                title={'ATM'}
                meta={[
                    {
                        name: `viewport`,
                        content: 'width=device-width, initial-scale=1.0',
                    }
                ]}
            />

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
                                - ketuk untuk deposit -
                            </a>
                        </div>

                        <div className="atm-logo white"></div>

                        <div className="config-btn" onClick={() => { handleOpenConfig() }}></div>
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
                                <a className="btn btn-primary float-start btn-8bit" href="https://twitter.com/roaringstars/" target="_blank">Laporkan Kesalahan</a>
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
                                                onCopy={() => { alert('URL halaman ini berhasil disalin, akses halaman ini beberapa saat lagi') }}
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
                                                onCopy={() => { alert('Kode LNURL berhasil disalin, tempelkan pada dompet Bitcoin yang mendukung Lightning Network') }}
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

            {/* <!-- Config Modal --> */}
            <Modal
                show={isConfigModalVisible}
                backdrop="static"
                keyboard={false}
                className="modal fade modal-back-case"
                size="lg"
            >
                <Modal.Body>
                    <div className=" text-center">
                        <div className="back-label">
                            <p>
                                Model: BTCLN-21M<br />
                                Version: {appUiVersion} (Beta)<br />
                                Last Trx: -<br />
                                Successful Trx: -<br />
                                Today Trx: -<br />
                            </p>
                            <div className="screw tl"></div>
                            <div className="screw tr r1"></div>
                            <div className="screw bl r2"></div>
                            <div className="screw br r3"></div>
                            <img src={BackSideLabel} alt="back label" />
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Row>
                        <Col>
                            Flashy E-Ink Effect
                        </Col>
                        <Col>
                            <div className="pull-right">
                                <input id="switch" type="checkbox"
                                    checked={isEinkEffectEnabled}
                                    onChange={() => { handleEinkToggle() }}
                                />
                                <div className="wrap">
                                    <label htmlFor="switch"><span className="rib"></span><span className="rib"></span><span className="rib">
                                    </span></label>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Save Config &amp; Reboot
                        </Col>
                        <Col>
                            <div className="pull-right">
                                <input id="switch-reboot" type="checkbox"
                                    checked={!isConfigModalVisible}
                                    onChange={() => { handleRebootBtn() }} />
                                <div className="wrap">
                                    <label htmlFor="switch-reboot">
                                        <span className="rib"></span>
                                        <span className="rib"></span>
                                        <span className="rib"></span>
                                    </label>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="last-trx ">
                                <div className="title">Last Transaction</div>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>TRX ID</th>
                                            <th>Amount</th>
                                            <th>Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            lastLocalTrx.length < 1 ? (
                                                <><tr><td colSpan={3} className="text-center">Tidak Ada Transaksi Terakhir</td></tr></>
                                            ) : (
                                                <>
                                                    {
                                                        lastLocalTrx.map((item: any) => {
                                                            return (
                                                                <>
                                                                    <tr>
                                                                        <td>
                                                                            <a onClick={() => {
                                                                                setIsConfigModalVisible(false)
                                                                                setIsScreenModalVisible(true)
                                                                                setTrxId(item.trx_id)
                                                                                setModalTitle('Memuat Transaksi...')
                                                                                setTrxStep('waiting-rupiah-deposit')
                                                                                navigate('/atm/?trx_id=' + item.trx_id)
                                                                            }}>{item.trx_id}</a>
                                                                        </td>
                                                                        <td>
                                                                            {item.amount}
                                                                        </td>
                                                                        <td>
                                                                            <ReactTimeAgo date={new Date(item.timestamp * 1000)} locale="en-US" />
                                                                        </td>
                                                                    </tr>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </>
                                            )
                                        }
                                    </tbody>
                                </table>

                            </div>
                        </Col>
                    </Row>
                </Modal.Footer>

            </Modal>
        </main>
    )
}

export default ATM
