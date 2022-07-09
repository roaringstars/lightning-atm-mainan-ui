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
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Bantuan = () => {
    return (
        <main>
            <MetaTags
                metaDescription="Pusat Bantuan, Apa itu Bitcoin? Apa itu Lightning Network? Bagaimana cara menggunakan Lightning ATM (Mainan)?"
                metaTitle="Pusat Bantuan"
                metaPath="/bantuan"
                metaPreviewImage={metaPreviewImage}
            />

            <Header />

            <article className="mb-4 help-section">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">

                            <h2 className="section-heading text-center">Sering Ditanyakan (FAQ)</h2>

                            <Card className="pb-0 mt-4 shortcut">
                                <Card.Body>
                                    <ul>
                                        <li><AnchorLink to="/bantuan#apa-itu-bitcoin">Apa itu Bitcoin?</AnchorLink></li>
                                        <li><AnchorLink to="/bantuan#apa-itu-transaksi-on-chain">Apa itu Transaksi On-Chain Bitcoin?</AnchorLink></li>
                                        <li><AnchorLink to="/bantuan#apa-itu-transaksi-ln">Apa itu Transaksi Lightning Network?</AnchorLink></li>
                                        <li><AnchorLink to="/bantuan#apa-itu-invoice-ln">Apa itu Invoice Lightning Network?</AnchorLink></li>
                                        <li><AnchorLink to="/bantuan#apa-itu-lnurl">Apa itu LNURL?</AnchorLink></li>
                                        <li><AnchorLink to="/bantuan#dompet-ln">Dompet apa yang mendukung Lightning Network?</AnchorLink></li>
                                        <li><AnchorLink to="/bantuan#kenapa-mainan">Kenapa dinamakan (Mainan)?</AnchorLink></li>
                                        <li><AnchorLink to="/bantuan#apakah-bitcoin-asli">Meski (Mainan) apakah Bitcoin-nya asli?</AnchorLink></li>
                                        <li><AnchorLink to="/bantuan#mengapa-fee-mahal">Mengapa Fee-nya mahal?</AnchorLink></li>
                                        <li><AnchorLink to="/kebijakan-layanan#transaksi-gagal">Bagaimana Jika Transaksi Gagal?</AnchorLink></li>
                                        <li><AnchorLink to="/bantuan#kenapa-saya-jomblo">Kenapa saya jomblo?</AnchorLink></li>
                                    </ul>
                                </Card.Body>
                            </Card>

                        </div>
                    </div>
                </div>
                <div className="container px-4 px-lg-5" id="apa-itu-bitcoin">
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
                                    transaksi valid antar penggunanya. <br /> <br />

                                    Melainkan menggunakan kesepakatan bersama
                                    untuk memverifikasi setiap transaksi secara publik, saat ini ada sekitar 15 ribu node yang
                                    memverifikasi dan mencatat setiap transaksi. Selama ribuan node ini saling tidak percaya satu
                                    sama lain, maka tidak ada transaksi yang terlewat dan tidak ada orang yang
                                    bisa curang mengubah data didalamnya.
                                    <br /> <br />
                                    Bitcoin tidak memerlukan informasi pengguna seperti Nama, Foto, atau Tanda Tangan.
                                    Melainkan transaksi diwajibkan untuk dipublikasi dan diverifikasi ribuan node tersebut.
                                    Setiap pengguna harus memiliki Wallet yang fungsinya mirip Rekening Tabungan, berisi Public Key
                                    dan Private Key.
                                    <br /><br />
                                    Public Key itu berfungsi seperti Nomor Rekening yang orang bisa kirim uang kedalamnya, sedangkan
                                    Private Key adalah berfungsi sebagai kata sandi yang hanya pemilik Rekening Tabungan yang dapat
                                    memindahkan uang di Wallet tersebut.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container px-4 px-lg-5" id="apa-itu-transaksi-on-chain">
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
                                    <br />
                                    <br />
                                    Kekurangan dari transaksi On-Chain adalah membutuhkan waktu lama untuk terkonfirmasi
                                    dan tidak efisien untuk nominal pembayaran yang kecil. Namun kelebihannya adalah
                                    sederhana karena cukup kirim ke Public Key tujuan dan tidak memerlukan
                                    koneksi internet yang stabil.

                                    <br />
                                    <br />
                                    Karena kekurangan tadi, dibuatlah Jaringan Lightning (Off-Chain) yang memanfaatkan
                                    jaringan On-Chain ini yang memungkinkan menyelesaikan masalah keterbatasan transaksi,
                                    waktu yang lama, dan biaya yang tinggi.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container px-4 px-lg-5" id="apa-itu-transaksi-ln">
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
                                    <br />
                                    <br />
                                    Transaksi yang perlu dikabarkan ke seluruh dunia adalah saat
                                    Wowotek memulai transaksi dengan Tejo dan mengakhiri transaksi tersebut. Orang-orang tidak perlu tau
                                    berapa kali Wowotek membeli kopi, yang perlu setiap orang catat adalah berapa total Wowotek harus membayar ke Tejo.

                                    <br />
                                    <br />
                                    Transaksi ini juga disebut Off-Chain, karena tidak berlangsung di jaringan Bitcoin. Ciri dari transaksi ini
                                    adalah private, atau tidak bisa diketahui masyarakat umum. Setiap transaksi menggunakan sebuah kode Invoice yang
                                    biasanya lebih panjang dari Public Key dan sekali pakai.
                                    <br />
                                    <br />
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


                            <h2 className="section-heading mb-2 mt-5" id="apa-itu-invoice-ln">Apa itu Invoice Lightning Network?</h2>
                            <p className="mb-0">
                                Untuk menerima Bitcoin melalui lapisan Lightning Network, maka penerima 
                                harus memberikan invoice ke pengirim. Contoh invoice Lightning Network adalah sebagai berikut.
                            </p>
                            <blockquote className="blockquote">
                            <code>
                                
                                lnbc15u1p3v3uw2pp5lcemeh5tyg9mvpurr599plh89rsp6y2l9krquzgzwlhel430rjlsdp8v9hx7mned4hh2ueq9pmxjcfqf389qs2e9e3k72gcqzpgxqyz5vqsp5msw5978y04kd05tq9n2a7kng3420g53q9whfp2h0nvllxnd8daws9qyyssq6zd2acqdhndnluf6zj02rfww0k6772vuar2dmqmp4te47h42hw2ytunhpykzyfnj6frqn89y4hjld679skglw4fldwadmdug09rkzrspvrk88m
                           
                            </code>
                            </blockquote>
                           

                            <h2 className="section-heading mb-2 mt-5" id="apa-itu-lnurl">Apa itu LNURL?</h2>
                            <p className="mb-0">
                                LNURL ada karena penerima perlu mengirim invoice merupakan hal yang tidak praktis, dengan 
                                LNURL penerima tidak perlu lagi memberikan invoice untuk menerima Bitcoin. 
                                Hanya perlu memberikan sekali kode LNURL dan pengirim bisa mengirimkan berkali-kali.
                                <br/>
                                <br/>
                                Dalam kasus Lightning ATM, LNURL withdraw digunakan untuk mengambil Bitcoin secara 
                                otomatis setelah pembeli Bitcoin menscan kode LNURL yang dibuat oleh Lightning ATM.

                                <br/>
                                <br/>
                                Contoh dari LNURL adalah sebagai berikut: 
                            </p>
                            <blockquote className="blockquote">
                            <code>
                                
                            LNURL1DP68GURN8GHJ7UM9WFMXJCM99E3K7MF0V9CXJ0M385EKVCENXC6R2C35XVUKXEFCV5MKVV34X5EKZD3EV56NYD3HXQURZEPEXEJXXEPNXSCRVWFNV9NXZCN9XQ6XYEFHVGCXXCMYXYMNSERXFQ5FNS
                           
                            </code>
                            </blockquote>


                            <h2 className="section-heading mb-2  mt-5" id="dompet-ln">Dompet Bitcoin Lightning Network</h2>
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
                                </ul>
                            </p>

                            <h2 className="section-heading mb-2 mt-5" id="kenapa-mainan">Kenapa dinamakan (Mainan)?</h2>
                            <p className="mb-0">
                                <ol>
                                    <li>
                                    Menghindari salah paham dengan Lightning ATM buatan @21enough, dan mengkhususkan untuk orang Indonesia.
                                    </li>
                                    <li>
                                    Sebagai bentuk pengingat bahwa ATM ini hanya untuk edukasi.
                                    </li>
                                </ol>
                            </p>

                            <h2 className="section-heading mb-2 mt-5" id="apakah-bitcoin-asli">Apakah Bitcoin yang dikirim Asli?</h2>
                            <p className="mb-0">
                                Asli dan berada di main-net bukan testnet. 
                                <br/>
                                Mengapa mainnet? agar sederhana untuk pengguna baru yang belum tau Bitcoin. Karena 
                                saya yakin tidak semua wallet bisa mengubah ke jaringan testnet.
                            </p>

                            <h2 className="section-heading mb-2 mt-5" id="mengapa-fee-mahal">Mengapa Fee-nya mahal?</h2>
                            <p className="mb-0">
                                ATM ini didesain untuk mengubah Rupiah ke Bitcoin dan langsung dikirim ke dompet masing-masing, sehingga 
                                perubahan harga bitcoin sangat mempengaruhi biaya penukaran (fee).
                                <br/>
                                Biaya penukaran (fee) digunakan untuk <AnchorLink to="/kebijakan-layanan#transparansi-potongan-biaya">membuat website/mesin tetap berjalan</AnchorLink>.
                                Perubahan biaya penukaran bisa dilihat pada <Link to="/grafik-biaya-penukaran">grafik berikut</Link>.
                            </p>

                            <h2 className="section-heading mb-2 mt-5" id="kenapa-saya-jomblo">Kenapa Saya Jomblo?</h2>
                            <p className="mb-0">
                                Nah, kalau itu saya tidak tau 😅
                            </p>

                           <br/>            
                           <br/>            
                           <br/>            
                           <br/>            
                           <br/>            
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    )
}

export default Bantuan
