import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

import { Card } from "react-bootstrap"
import ReactTooltip from "react-tooltip"
import { TwitterTweetEmbed } from "react-twitter-embed"
import { Link } from "gatsby"
import MoneyHistory from '../assets/images/bantuan/money_history.svg';
import OnChainTrx from '../assets/images/bantuan/on_chain_trx.svg';
import OffChainTrx from '../assets/images/bantuan/off_chain_trx.svg';
import Image1 from '../assets/images/bantuan/bitcoin.jpg';
import Image2 from '../assets/images/bantuan/lightning-network.jpg';
import metaPreviewImage from '../assets/images/meta/bantuan.jpg';
import MetaTags from "../components/MetaTags"

const Bantuan = () => {
    return (
        <main>
            <MetaTags
                metaDescription="Pusat Bantuan, Apa itu Bitcoin? Apa itu Lightning Network? Bagaimana cara menggunakan Lightning ATM (Mainan)?"
                metaTitle= "Pusat Bantuan"
                metaPath="/bantuan"
                metaPreviewImage={metaPreviewImage}
            />

            <Header />

            <article className="mb-4">

                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-10 col-xl-10">
                            <img src={MoneyHistory} alt="..." className="img-fluid" />                            </div>
                    </div>
                </div>
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="mb-5 mt-4">
                            <h2 className="section-heading mb-2">Bitcoin itu apa si njir?</h2>
                                    <p className="mb-0">Penjelasan yang paling sederhana Bitcoin adalah mata uang digital
                                    tapi tidak memerlukan pihak sentral seperti Bank, Pemerintah, atau Perusahaan untuk menjamin 
                                    transaksi valid antar penggunanya. <br/> <br/>
                                    
                                    Melainkan menggunakan kesepakatan bersama
                                    untuk memverifikasi setiap transaksi secara publik, saat ini ada sekitar 15 ribu node yang
                                    memverifikasi dan mencatat setiap transaksi. Selama ribuan node ini saling tidak percaya satu 
                                    sama lain, maka tidak ada transaksi yang terlewat dan tidak ada orang yang 
                                    bisa curang mengubah data didalamnya.
                                    <br/> <br/>
                                    Bitcoin tidak memerlukan informasi pengguna seperti Nama, Foto, atau Tanda Tangan. 
                                    Melainkan transaksi diwajibkan untuk dipublikasi dan diverifikasi ribuan node tersebut. 
                                    Setiap pengguna harus memiliki Wallet yang fungsinya mirip Rekening Tabungan, berisi Public Key 
                                    dan Private Key.
                                    <br/><br/>
                                    Public Key itu berfungsi seperti Nomor Rekening yang orang bisa kirim uang kedalamnya, sedangkan
                                    Private Key adalah berfungsi sebagai kata sandi yang hanya pemilik Rekening Tabungan yang dapat 
                                    memindahkan uang di Wallet tersebut.
                                    </p>
                            </div>
                            </div>
                     </div>
                </div>
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-10 col-xl-10">
                            <img src={OnChainTrx} alt="..." className="img-fluid" />                            </div>
                    </div>
                </div>
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="mb-5 mt-4">
                                <h2 className="section-heading mb-2">Transaksi On-Chain itu apa?</h2>

                                        <p className="mb-0">
                                            Hmm, sederhananya adalah transaksi yang dicatat setiap node Bitcoin (15 ribu tadi). Ciri-ciri dari
                                            transaksi ini adalah bisa dilihat semua orang melalui layanan Block Explorer. 
                                            <br/>
                                            <br/>
                                            Kekurangan dari transaksi On-Chain adalah membutuhkan waktu lama untuk terkonfirmasi
                                            dan tidak efisien untuk nominal pembayaran yang kecil. Namun kelebihannya adalah
                                            sederhana karena cukup kirim ke Public Key tujuan dan tidak memerlukan 
                                            koneksi internet yang stabil.

                                            <br/>
                                            <br/>
                                            Karena kekurangan tadi, dibuatlah Jaringan Lightning (Off-Chain) yang memanfaatkan 
                                            jaringan On-Chain ini yang memungkinkan menyelesaikan masalah keterbatasan transaksi,
                                            waktu yang lama, dan biaya yang tinggi.
                                        </p>
                            </div>

                            </div>
                     </div>
                </div>
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-10 col-xl-10">
                            <img src={OffChainTrx} alt="..." className="img-fluid" />                            </div>
                    </div>
                </div>
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="mb-5 mt-4">
                                <h2 className="section-heading mb-2">Lah, trus Transaksi Lightning itu apa?</h2>

                                        <p className="mb-0">
                                            Pengembang Bitcoin berpikir ketika kita sering membeli Kopi (misal 10 ribu Rupiah) itu tidak perlu 
                                            dikabarkan ke seluruh dunia (15 ribu node tadi). Melainkan cukup Penjual Kopi (misal Tejo) dan Pembeli Kopi (Wowotek)
                                            yang perlu tau detail transaksinya. 
                                            <br/>
                                            <br/>
                                            Transaksi yang perlu dikabarkan ke seluruh dunia adalah saat 
                                            Wowotek memulai transaksi dengan Tejo dan mengakhiri transaksi tersebut. Orang-orang tidak perlu tau 
                                            berapa kali Wowotek membeli kopi, yang perlu setiap orang catat adalah berapa total Wowotek harus membayar ke Tejo.

                                            <br/>
                                            <br/>
                                            Transaksi ini juga disebut Off-Chain, karena tidak berlangsung di jaringan Bitcoin. Ciri dari transaksi ini 
                                            adalah private, atau tidak bisa diketahui masyarakat umum. Setiap transaksi menggunakan sebuah kode Invoice yang 
                                            biasanya lebih panjang dari Public Key dan sekali pakai.
                                            <br/>
                                            <br/>
                                            Kekurangannya adalah baik Tejo dan Wowotek 
                                            harus selalu terhubung ke internet untuk melakukan transaksi. Kelebihannya transaksi tiap membeli Kopi tadi 
                                            bisa sangat murah bahkan gratis, jika kedua pihak sepakat untuk tidak menentukan biaya transaksi.
                                        </p>
                            </div>


                            {/* <h2 className="section-heading mb-2">Pembayaran Rupiah Yang Didukung</h2>
                            <Card className="mb-4">
                                <Card.Body>

                                    <p className="mb-0">
                                        Medukung semua jenis pembayaran yang masuk kedalam QRIS seperti:
                                        <ul>
                                            <li>
                                                <span data-tip="React-tooltip" data-for={'idr-gopay'}>
                                                    Gopay
                                                    [<a href="https://twitter.com/roaringstars/status/1490360523535564800">1</a>]
                                                </span>
                                                <ReactTooltip place="right" id={'idr-gopay'} effect="solid">
                                                    Terakhir diuji coba 6 Feb 2022
                                                </ReactTooltip>
                                            </li>
                                            <li>
                                                <span data-tip="React-tooltip" data-for={'idr-dana'}>
                                                    Dana
                                                    [<a href="https://twitter.com/jevanjovandy/status/1498143245758767104">1</a>]
                                                </span>
                                                <ReactTooltip place="right" id={'idr-dana'} effect="solid">
                                                    Terakhir diuji coba 28 Feb 2022
                                                </ReactTooltip>
                                            </li>
                                            <li> ... dll</li>
                                        </ul>
                                    </p>
                                </Card.Body>
                            </Card> */}

                            <h2 className="section-heading mb-2">Dompet Bitcoin Lightning Network</h2>
                                    <p className="mb-0">
                                        <ul>
                                            <li>
                                                <Link to={'/dompet/wallet-of-satoshi'}
                                                    data-tip="React-tooltip"
                                                    data-for={'wallet-wallet-of-satoshi'}>Wallet of Satoshi</Link>
                                                <ReactTooltip id={'wallet-wallet-of-satoshi'} effect="solid">
                                                    Direkomendasikan jika baru mencoba Lightning Network
                                                </ReactTooltip>
                                            </li>
                                            <li>
                                                <Link to={'/dompet/muun'}>Muun</Link>  ⚠️Banyak yang melaporkan transaksi lambat
                                            </li>
                                            <li>
                                                <Link to={'/dompet/bluewallet'} >BlueWallet</Link>
                                            </li>
                                            {/* <li>
                                                <Link to={'/dompet/zap'}
                                                    data-tip="React-tooltip"
                                                    data-for={'wallet-zap'}>Zap</Link>
                                                <ReactTooltip id={'wallet-zap'} effect="solid">
                                                    Halaman belum ada, membutuhkan bantuan untuk melengkapi info
                                                </ReactTooltip>
                                            </li>
                                            <li>
                                                <Link to={'/dompet/phoenix'}
                                                    data-tip="React-tooltip"
                                                    data-for={'wallet-phoenix'}>Phoenix</Link>
                                                <ReactTooltip id={'wallet-phoenix'} effect="solid">
                                                    Halaman belum ada, membutuhkan bantuan untuk melengkapi info
                                                </ReactTooltip>
                                            </li> */}
                                            <li>
                                                <Link to={'/dompet/zebedee'}
                                                    data-tip="React-tooltip"
                                                    data-for={'wallet-zebedee'}>Zebedee</Link>
                                                <ReactTooltip id={'wallet-zebedee'} effect="solid">
                                                    Halaman belum ada, membutuhkan bantuan untuk melengkapi info
                                                </ReactTooltip>
                                            </li>

                                            <li> ...(membutuhkan bantuan untuk melengkapi ) ⚠️</li>
                                        </ul></p>


                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    )
}

export default Bantuan
