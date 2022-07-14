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
import QRCode from "react-qr-code";

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
                                        <li><AnchorLink to="/bantuan#mengapa-fee-mahal">Mengapa Biaya Tukarnya mahal?</AnchorLink></li>
                                        <li><AnchorLink to="/kebijakan-layanan#transaksi-gagal">Bagaimana Jika Transaksi Gagal?</AnchorLink></li>
                                        <li><AnchorLink to="/bantuan#public-key">Apa itu Public Key?</AnchorLink></li>
                                        <li><AnchorLink to="/bantuan#private-key">Apa itu Private Key?</AnchorLink></li>
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
                                <h2 className="section-heading mb-2">Bitcoin itu apa si?</h2>
                                <p className="mb-0">Sederhananya, Bitcoin adalah mata uang digital
                                    tapi tidak memerlukan pihak sentral seperti Bank, Pemerintah, atau Perusahaan untuk menjamin
                                    transaksi valid antar penggunanya. <br /> <br />

                                    Melainkan menggunakan kesepakatan bersama
                                    untuk memverifikasi setiap transaksi secara publik dan otomatis menggunakan algoritma, saat ini ada 
                                    sekitar <a href="https://bitnodes.io/">15 ribu node</a> yang
                                    memverifikasi dan mencatat setiap transaksi. Selama ribuan node ini saling tidak percaya satu
                                    sama lain, maka tidak ada transaksi yang terlewat dan tidak ada orang yang
                                    bisa curang mengubah data didalamnya.
                                    <br /> <br />
                                    Bitcoin tidak memerlukan informasi pengguna seperti Nama, Foto, atau Tanda Tangan.
                                    Melainkan transaksi diwajibkan untuk dipublikasi dan diverifikasi ribuan node tersebut.
                                    Setiap pengguna harus memiliki Wallet yang fungsinya mirip Rekening Tabungan, 
                                    berisi <AnchorLink to="/bantuan#public-key"><i>Public Key</i></AnchorLink>&nbsp;
                                    dan <AnchorLink to="/bantuan#private-key"><i>Private Key</i></AnchorLink>.
                                    <br /><br />
                                    <AnchorLink to="/bantuan#public-key"><i>Public Key</i></AnchorLink> itu berfungsi seperti Nomor Rekening yang orang bisa kirim uang kedalamnya, 
                                    sedangkan <AnchorLink to="/bantuan#private-key"><i>Private Key</i></AnchorLink> berfungsi sebagai kata sandi yang 
                                    hanya pemilik Rekening Tabungan yang dapat memindahkan uang di Wallet tersebut.
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
                                    Hmm, sederhananya transaksi yang dicatat setiap node Bitcoin (15 ribu node tadi). Ciri-ciri dari
                                    transaksi ini adalah bisa dilihat semua orang melalui layanan <a href="https://mempool.space/" target="_blank">Block Explorer</a>.
                                    <br />
                                    <br />
                                    Kekurangan dari transaksi On-Chain adalah membutuhkan waktu lama untuk terkonfirmasi
                                    dan tidak efisien untuk nominal pembayaran yang kecil. Namun kelebihannya adalah
                                    sederhana karena hanya memerlukan <AnchorLink to="/bantuan#public-key"><i>Public Key</i></AnchorLink> tujuan dan tidak memerlukan
                                    koneksi internet yang stabil.

                                    <br />
                                    <br />
                                    Karena kekurangan tadi, dibuatlah <AnchorLink to="/bantuan#apa-itu-transaksi-ln">Jaringan Lightning (Off-Chain)</AnchorLink> yang memanfaatkan
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
                                    yang perlu tahu detail transaksinya.
                                    <br />
                                    <br />
                                    Transaksi yang perlu dikabarkan ke seluruh dunia adalah saat
                                    Wowotek memulai transaksi dengan Tejo dan mengakhiri transaksi tersebut. Orang-orang tidak perlu tahu
                                    berapa kali Wowotek membeli kopi, yang perlu setiap orang catat adalah berapa total Wowotek harus membayar ke Tejo.

                                    <br />
                                    <br />
                                    Transaksi ini juga disebut Off-Chain, karena tidak berlangsung di <AnchorLink to="/bantuan#apa-itu-transaksi-on-chain">jaringan utama Bitcoin</AnchorLink>. Ciri dari transaksi ini
                                    adalah <i>private</i>, atau tidak bisa diketahui masyarakat umum. Setiap transaksi menggunakan sebuah kode <AnchorLink to="/bantuan#apa-itu-invoice-ln"><i>Invoice</i></AnchorLink> yang
                                    biasanya lebih panjang dari <AnchorLink to="/bantuan#public-key"><i>Public Key</i></AnchorLink> dan hanya sekali pakai.
                                    <br />
                                    <br />
                                    Kekurangannya adalah baik Tejo dan Wowotek
                                    harus selalu terhubung ke internet untuk melakukan transaksi, 
                                    namun bisa diatasi dengan menggunakan Dompet Kustodial atau menyewa <a href="https://voltage.cloud/">Lightning Node</a>. 
                                    Kelebihan Lightning adalah setiap transaksi bisa sangat murah bahkan gratis, 
                                    jika kedua pihak sepakat untuk tidak menentukan biaya transaksi.
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
                                Untuk menerima Bitcoin melalui lapisan <AnchorLink to="/bantuan#apa-itu-transaksi-ln">Lightning Network</AnchorLink>, maka penerima 
                                harus memberikan <i>invoice</i> ke pengirim. Contoh <i>invoice</i> Lightning Network adalah sebagai berikut.
                            </p>
                            <blockquote className="blockquote mt-3 text-sm">
                            <code>
                                
                                lnbc15u1p3v3uw2pp5lcemeh5tyg9mvpurr599plh89rsp6y2l9krquzgzwlhel430rjlsdp8v9hx7mned4hh2ueq9pmxjcfqf389qs2e9e3k72gcqzpgxqyz5vqsp5msw5978y04kd05tq9n2a7kng3420g53q9whfp2h0nvllxnd8daws9qyyssq6zd2acqdhndnluf6zj02rfww0k6772vuar2dmqmp4te47h42hw2ytunhpykzyfnj6frqn89y4hjld679skglw4fldwadmdug09rkzrspvrk88m
                           
                            </code>
                            </blockquote>
                            <p className="mb-0">
                                Umumnya, <i>invoice</i> akan di-<i>encode</i> dalam sebuah kode QR untuk memudahkan pembayaran.
                            </p>
                            <div className="mt-3 text-center">
                                <QRCode value={'lnbc15u1p3v3uw2pp5lcemeh5tyg9mvpurr599plh89rsp6y2l9krquzgzwlhel430rjlsdp8v9hx7mned4hh2ueq9pmxjcfqf389qs2e9e3k72gcqzpgxqyz5vqsp5msw5978y04kd05tq9n2a7kng3420g53q9whfp2h0nvllxnd8daws9qyyssq6zd2acqdhndnluf6zj02rfww0k6772vuar2dmqmp4te47h42hw2ytunhpykzyfnj6frqn89y4hjld679skglw4fldwadmdug09rkzrspvrk88m'} fgColor="#444" bgColor="#fff" />
                            </div>
                            <p className="mt-4">
                                <i>Invoice</i> Lightning bisa dibuat melalui aplikasi dompet Bitcoin yang sudah mendukung Lightning. 
                                Sebuah <i>Invoice</i> Lightning juga aman untuk dipublikasi karena tidak mengandung informasi sensitif.
                                 
                            </p>

                            <h2 className="section-heading mb-2 mt-5" id="apa-itu-lnurl">Apa itu LNURL?</h2>
                            <p className="mb-0">
                                LNURL diciptakan karena pengembang Bitcoin merasa mengirim invoice setiap kali melakukan transaksi merupakan hal yang tidak praktis, 
                                dengan LNURL penerima tidak perlu lagi memberikan <i>invoice</i> untuk menerima <AnchorLink to="/bantuan#apa-itu-bitcoin">Bitcoin</AnchorLink>. 
                                Penerima hanya perlu memberikan sekali kode LNURL dan pengirim bisa mengirimkan berkali-kali.
                                <br/>
                                <br/>
                                Dalam aplikasi Lightning ATM, LNURL <i>withdraw</i> digunakan untuk mengambil Bitcoin 
                                secara <i>seamless</i> setelah pembeli Bitcoin memindai kode LNURL yang dibuat oleh Lightning ATM.

                                <br/>
                                <br/>
                                Contoh dari kode LNURL adalah sebagai berikut: 
                            </p>
                            <blockquote className="blockquote text-sm mt-3">
                            <code>
                                
                            LNURL1DP68GURN8GHJ7UM9WFMXJCM99E3K7MF0V9CXJ0M385EKVCENXC6R2C35XVUKXEFCV5MKVV34X5EKZD3EV56NYD3HXQURZEPEXEJXXEPNXSCRVWFNV9NXZCN9XQ6XYEFHVGCXXCMYXYMNSERXFQ5FNS
                           
                            </code>
                            </blockquote>
                            <p className="mb-0">
                                Umumnya, <i>LNURL</i> akan di-<i>encode</i> dalam sebuah kode QR untuk memudahkan proses pembayaran.
                            </p>
                            <div className="mt-3 text-center">
                                <QRCode value={'LNURL1DP68GURN8GHJ7UM9WFMXJCM99E3K7MF0V9CXJ0M385EKVCENXC6R2C35XVUKXEFCV5MKVV34X5EKZD3EV56NYD3HXQURZEPEXEJXXEPNXSCRVWFNV9NXZCN9XQ6XYEFHVGCXXCMYXYMNSERXFQ5FNS'} fgColor="#444" bgColor="#fff" />
                            </div>

                            <p className="mt-4">
                                Saat ini tengah dikembangkan berbagai macam variasi baru LNURL, sebagai contoh untuk
                                melakukan Login atau Autentikasi, dengan kata lain memungkinkan seseorang <i>login</i> pada 
                                sebuah situs tanpa memerlukan kata sandi.
                                 
                            </p>

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

                            <h2 className="section-heading mb-2 mt-5" id="public-key">Apa itu Public Key?</h2>
                            <p className="mb-0">
                                Dalam Bitcoin, <i>Public Key</i> digunakan sebagai identitas sebuah dompet. 
                                Contoh dari  <i>Public Key</i> atau biasa disebut alamat Bitcoin adalah sebagai berikut:
                            </p>
                            <blockquote className="blockquote mt-3">
                            <code>
                                
                            1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
                           
                            </code>
                            </blockquote>
                            <p className="mb-0">
                                Terkadang, <i>Public Key</i> akan di-<i>encode</i> dalam sebuah kode QR untuk memudahkan proses pembayaran.
                            </p>
                            <div className="mt-3 text-center">
                                <QRCode value={'1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa'} fgColor="#444" bgColor="#fff" />
                            </div>
                            <p className="mt-3">
                                Seperti namanya, <i>Public Key</i> bisa dilihat semua orang melalui layanan <a href="https://mempool.space/address/1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa" target="_blank">Block Explorer</a>.
                                
                            </p>
                            

                            <h2 className="section-heading mb-2 mt-5" id="private-key">Apa itu Private Key?</h2>
                            <p className="mb-0">
                                Berfungsi sebagai kata sandi sebuah dompet Bitcoin, 
                                sehingga kode <i>Private Key</i> <b>bersifat sangat rahasia</b>. Ketika seseorang telah mengetahui 
                                kode <i>Private Key</i> maka dia bisa memindahkan atau memiliki Bitcoin dalam dompet tersebut.
                                <br/>
                                <br/>
                                Sehingga ada istilah <i><b>"Not Your Keys, Not Your Money"</b></i>, 
                                yang berarti jika membeli Bitcoin namun tidak memiliki <i>Private Key</i>, maka dipertanyakan 
                                kepemilikan Bitcoin tersebut.
                                <br/>
                                <br/>
                                Berikut merupakan contoh dari kode <i>Private Key</i>:
                                
                            </p>
                            <blockquote className="blockquote mt-2 text-sm">
                            <code>
                                5K4pkuTyfZhM4wCFpvFQ3ZNAZJpPc7Ks4QKjvZBNFaPQei1GbyJ
                            </code>
                            </blockquote>
                            <p className="mb-0">
                                Dewasa ini, beberapa dompet tidak lagi menggunakan kode <i>Private Key</i>, melainkan 
                                menggunakan <i>Seed Phrase</i>. Fungsinya sama, namun lebih sederhana karena 
                                bukan merupakan kumpulan karakter acak, melainkan 12 kata acak bahasa inggris.
                            </p>
                            <blockquote className="blockquote mt-3 text-sm">
                            <code>
                                witch collapse practice feed shame open despair creek road again ice least
                            </code>
                            </blockquote>
                            
                            <p className="mb-0">
                                <i>Seed Phrase</i> juga <b>bersifat sangat rahasia</b>.
                                
                                <br/>
                                <br/>
                                Ketika <i>Private Key</i> atau <i>Seed Phrase</i> diketahui orang lain, segera buat dompet baru dan pindahkan 
                                saldo Bitcoin ke dompet baru.
                            </p>


                            <h2 className="section-heading mb-2 mt-5" id="kenapa-mainan">Kenapa dinamakan (Mainan)?</h2>
                            <p className="mb-0">
                                <ol>
                                    <li>
                                    Menghindari salah paham dengan Lightning ATM milik <a href="https://twitter.com/21isenough">@21isenough</a>, 
                                    dan mengkhususkan untuk pengguna di Indonesia.
                                    </li>
                                    <li>
                                    Sebagai bentuk pengingat bahwa ATM ini hanya untuk edukasi.
                                    </li>
                                </ol>
                            </p>

                            <h2 className="section-heading mb-2 mt-5" id="apakah-bitcoin-asli">Apakah Bitcoin yang dikirim Asli?</h2>
                            <p className="mb-0">
                                Asli dan berada di <i>mainnet</i> bukan <i>testnet</i>. 
                                <br/>
                                <br/>
                                Mengapa <i>mainnet</i>? agar sederhana untuk pengguna baru yang belum tahu Bitcoin. Karena 
                                saya yakin tidak semua wallet bisa mengubah ke jaringan <i>testnet</i>.
                            </p>

                            <h2 className="section-heading mb-2 mt-5" id="mengapa-fee-mahal">Mengapa Biaya Tukarnya mahal?</h2>
                            <p className="mb-0">
                                ATM ini didesain untuk mengubah Rupiah ke Bitcoin dan langsung dikirim ke dompet masing-masing, sehingga 
                                perubahan harga Bitcoin sangat mempengaruhi biaya penukaran (<i>fee</i>).
                                <br/>
                                <br/>
                                Biaya penukaran digunakan untuk <AnchorLink to="/kebijakan-layanan#transparansi-potongan-biaya">membuat website/mesin tetap berjalan</AnchorLink>.
                                Perubahan biaya penukaran bisa dilihat pada <Link to="/grafik-biaya-penukaran">grafik berikut</Link>.
                            </p>

                            <h2 className="section-heading mb-2 mt-5" id="kenapa-saya-jomblo">Kenapa Saya Jomblo?</h2>
                            <p className="mb-0">
                                Nah, kalau itu saya tidak tahu 😅
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
