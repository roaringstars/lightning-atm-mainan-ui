import * as React from "react"
import { Button, Modal, Table } from "react-bootstrap"
import AtmModalExchangeDetail from "../components/AtmModalExchangeDetail";
import Header from "../components/Header"

const ATM = () => {
    /**
     * Constant 
     */
    const isDebug = (process.env.ATM_DEBUG === 'true');

         
    /**
     * Declare state
     */
    const [isScreenModalVisible, setIsScreenModalVisible] = React.useState(false);

    /**
     * Deposit Modal
     */
    function depositBtnAction() {
        setIsScreenModalVisible(true);
        console.log(isScreenModalVisible);
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
                    <Modal.Title>Exchange detail</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <AtmModalExchangeDetail/>
                    
                </Modal.Body>

                <Modal.Footer>
                    <Button className="btn btn-primary float-start btn-8bit disabled hide" disabled>ATM Out of Service</Button>
                    <Button className="btn btn-primary float-start btn-8bit">Agree &amp; Deposit</Button>
                    <Button className="btn btn-secondary float-end btn-8bit">Close</Button>
                    <Button className="btn btn-secondary float-end btn-8bit">Deposit 10K</Button>
                </Modal.Footer>
            </Modal>



            <div className="modal fade modal-8bit"
                id="exchangeDetailModal"
                role="dialog"
                aria-labelledby="exchangeDetailModalLabel"
                data-keyboard="false"
                data-backdrop="static"
                aria-hidden="true">
                <div className="modal-dialog modal-lg" id="modal-step-1" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exchangeDetailModalLabel">Exchange detail</h5>
                        </div>
                        <div className="modal-body">
                            <AtmModalExchangeDetail/>
                        </div>
                        <div className="modal-footer">
                            <a className="btn btn-primary float-start btn-8bit disabled hide" disabled href="#"
                                aria-disabled="" id="step-1-btn-deposit-maintenance">ATM Out of Service</a>
                            <a className="btn btn-primary float-start btn-8bit" href="#"
                                id="step-1-btn-deposit">Agree &amp; Deposit</a>

                            <button type="button"
                                className="btn btn-secondary float-end btn-8bit" id="step-1-close-modal-btn">Close</button>
                            <button className="btn btn-secondary float-end btn-8bit"
                                id="step-1-change-deposit-btn"
                            >Deposit 10K</button>
                        </div>
                    </div>
                </div>

                {/* <!-- Modal step 2 --> */}
                <div className="modal-dialog modal-lg hide" id="modal-step-2" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="step2-modal-title">Deposit Rupiah</h5>
                        </div>
                        <div className="modal-body text-center">
                            <p id="step-2-loading">Generating QRIS QR Code...</p>

                            <div id="step-2-qr-generated" className="hide">
                                <div id="step-2-message-top">Finish the payment by scanning with app that support QRIS</div>
                                <div id="step-2-qr-code" className="qr-code">
                                    <span></span>
                                </div>
                                <div id="step-2-trx-id"></div>
                                <div id="step-2-message-bottom"></div>
                            </div>

                            <div id="step-3-share" className="hide">
                                <p id="step-3-share-title">Share with your friends!</p>
                                <img src="assets/img/b_logo.png" alt="share" />
                                <div id="step-3-share-message">
                                    Just exchange Indonesian Rupiah to Bitcoin with Lightning ATM (Mainan) and it's frickin' awesome!<br /><br /> #LightningAtmMainan #BitcoinEceran                    </div>
                                <a className="btn btn-primary btn-block btn-8bit" id="step-3-share-btn"
                                    href="https://twitter.com/intent/tweet?text=Just+exchange+Indonesian+Rupiah+to+Bitcoin+with+Lightning+ATM+%28Mainan%29+and+it%27s+frickin%27+awesome%21%0A%0A%23LightningAtmMainan+%23BitcoinEceran+https%3A%2F%2Ftwitter.com%2Froaringstars%2Fstatus%2F1490360523535564800" target="_blank"
                                >Tweet this on Twitter</a>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <textarea id="step-2-lnurl-copy" className="hide" rows="3"></textarea>

                            <div className="container">
                                <div className="row">
                                    <div className="col text-center">
                                        <a className="btn btn-primary btn-block btn-8bit hide" id="step-2-lnurl-copy-btn">Copy LNURL</a>
                                    </div>
                                </div>
                            </div>

                            <button type="button" className="btn btn-secondary float-end btn-8bit"
                                id="step-2-close-modal-btn">Close</button>
                        </div>
                    </div>
                </div>

            </div>

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
                                        <input id="switch" type="checkbox" checked />
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
