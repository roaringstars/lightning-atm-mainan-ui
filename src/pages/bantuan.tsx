import * as React from "react"
import Header from "../components/Header"

const Bantuan = () => {
    return (
        <main>
            <title>Pusat Bantuan</title>

            <Header/>


            <div className="panel panel-default">
                <div className="panel-heading">Apa itu Bitcoin</div>
                <div className="panel-body">
                    <p>Penjelasan Bitcoin....</p>
                </div>
            </div>

            <div className="panel panel-default">
                <div className="panel-heading">Apa itu Bitcoin Lightning</div>
                <div className="panel-body">
                    <p>Penjelasan Bitcoin Lightning</p>
                </div>
            </div>

            <div className="panel panel-default">
                <div className="panel-heading">Apa itu Bitcoin Wallet</div>
                <div className="panel-body">
                    <p>Penjelasan Bitcoin Wallet</p>
                </div>
            </div>


            <div className="panel panel-default">
                <div className="panel-heading">Pembayaran Rupiah yang didukung</div>
                <div className="panel-body">
                    <ul>
                        <li>Gopay</li>
                        <li>Dana</li>
                        <li> ... need help add more</li>
                    </ul>
                </div>
            </div>


            <div className="panel panel-default">
                <div className="panel-heading">Dompet Bitcoin Lightning yang mendukung</div>
                <div className="panel-body">
                    <ul>
                        <li>Muun</li>
                        <li>BlueWallet</li>
                        <li> ... need help add more</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default Bantuan
