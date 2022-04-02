import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Bantuan = () => {
    return (
        <main>
            <title>Pusat Bantuan</title>

            <Header/>

            <article className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <h2 className="section-heading">Apa itu Bitcoin</h2>
                            <p>Bitcoin adalah mata uang digital yang didistribusikan secara elektronik dan tidak dikendalikan oleh pemerintah mana pun. Bitcoin merupakan sebuah repository open-source yakni seluruh desain arsitekturnya dipublikasi, siapa saja dapat melihat isi dari software Bitcoin itu sendiri. Yang artinya bersifat transparan akan segala konsep dan cara kerja teknologinya.</p>
                            <h2 className="section-heading">Apa itu Bitcoin Lightning</h2>
                            <p></p>
                            <h2 className="section-heading">Penjelasan Bitcoin Wallet</h2>
                            <p></p>
                            <h2 className="section-heading">Pembayaran Rupiah Yang Didukung</h2>
                            <ul>
                                <li>Gopay</li>
                                <li>Dana</li>
                                <li> ... need help add more</li>
                            </ul>
                            <h2 className="section-heading">Dompet Bitcoin Lightning Yang Mendukung</h2>
                            <ul>
                                <li>Muun</li>
                                <li>BlueWallet</li>
                                <li> ... need help add more</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>

            <Footer/>
        </main>
    )
}

export default Bantuan
