import { Link } from "gatsby"
import * as React from "react"
import ExchangeFeeDetail from "../components/ExchangeFeeDetail"
import Footer from "../components/Footer"
import Header from "../components/Header"
import metaPreviewImage from '../assets/images/meta/kebijakan-layanan.jpg';
import { Helmet } from "react-helmet"

const TOS = () => {
    /**
     * Helmet
     */
    const metaDescription = "Kami sangat mengedepankan privasi data anda. Transparasi Potongan Biaya 10% sepenuhnya digunakan untuk menutup biaya operasional ATM (Mainan)";
    const metaTitle = "Kebijakan Layanan";
    const metaDomain = "https://roaringstars.com";
    const metaUrl = "https://roaringstars.com/kebijakan-layanan";

    return (
        <main>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{metaTitle}</title>
                <link rel="canonical" href={metaUrl} />
                <meta name="description" content={metaDescription} />
                <meta property="og:url" content={metaUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:image" content={metaPreviewImage} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content={metaDomain} />
                <meta property="twitter:url" content={metaUrl} />
                <meta name="twitter:title" content={metaTitle} />
                <meta name="twitter:description" content={metaDescription} />
                <meta name="twitter:image" content={metaPreviewImage} />+
            </Helmet>
            <Header />

            <article className="mb-4 tos">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">

                            <h2 className="section-heading mb-5">Kebijakan Layanan</h2>

                            <div className="mb-2"><b>Privasi</b></div>
                            <p className="text-justify">
                                Kami sangat mengedepankan privasi data anda.<br /><br />
                                Kami tidak menyimpan
                                data personal apapun dalam situs ini, semua data sensitif disimpan
                                dalam server QRIS dan Xendit dan kami tidak bisa mengakses data tersebut.
                                Sebagai tambahan keamanan, akun Xendit sudah diaktifkan
                                kemanan ganda 2FA.
                            </p>

                            <div className="mb-2"><b>Resiko Transaksi Gagal</b></div>
                            <p className="text-justify">

                                Transaksi gagal dapat terjadi dikarenakan banyak faktor,
                                seringkali terjadi karena layanan pihak
                                ketiga <Link to="/status">sedang mengalami gangguan</Link> atau
                                perangkat belum didukung.
                                <br />
                                <br />

                                Kami menyarankan untuk membuka ATM (Mainan) ini di browser komputer, dikarenakan
                                kami belum dapat menjamin mesin dapat bekerja dalam tampilan ponsel.


                                <br /><br />
                                Sehubungan hal tersebut, kami sarankan menunggu
                                dan mencoba kembali beberapa menit kemudian.
                                <br />
                                <br />
                                Jika masih gagal, kami menyediakan jaminan uang kembali hanya dalam bentuk Bitcoin melalui jaringan Lightning Network, dengan syarat
                                sebagai berikut:<br />
                                <ul className="mt-2">
                                    <li>Transaksi gagal dikarenakan kesalahan sistem, sebelum transaksi dinyatakan Selesai sesuai dengan <Link to="/wawasan-transaksi">Wawasan Transaksi</Link></li>
                                    <li>Maksimal pelaporan 2x24 jam dari waktu pembayaran QRIS</li>
                                    <li>Mengirimkan Kode <code>Trx ID</code>, tangkapan layar bukti pembayaran QRIS, dan tangkapan layar error melalui DM ke twitter @roaringstars</li>
                                </ul>

                            </p>


                            <div className="mb-2"><b>Larangan Transaksi Ilegal</b></div>
                            <p className="text-justify">
                                ATM (Mainan) ini ditujukan untuk tujuan edukasi,
                                kami tiak menyarankan menggunakan Bitcoin untuk melakukan pembayaran
                                yang melanggar hukum di Republik Indonesia.
                                <br />
                                <br />
                                Kami tidak bertanggun jawab atas pelanggaran tersebut.
                            </p>


                            <div className="mb-2"><b>Legalits dan Hukum</b></div>
                            <p className="text-justify">
                                ATM (Mainan) ini belum mendapat izin resmi untuk beroperasi, dikarenakan
                                keterbatasan hukum di Indonesia yang belum meregulasi
                                pembuatan ATM sebagai edukasi.
                            </p>

                            <div className="mb-2"><b>Transparasi Potongan Biaya</b></div>

                            <p className="text-justify">
                                <ExchangeFeeDetail /> </p>

                            <div className="mb-2"><b>Penggunaan Optimal</b></div>
                            <p className="text-justify">
                                Lightning ATM (Mainan) ini tidak ditujuan untuk pembelian berkala,
                                penggunaan yang optimal adalah kurang
                                dari 10 kali transaksi, jika melebihi jumlah tersebut
                                disarankan untuk menggunakan layanan penukaran kripto <Link to="/perbandingan">lainnya</Link>.

                            </p>

                            <p className="text-justify mt-5">
                                <i>Terakhir Diperbarui: 19 Mei 2022</i>

                            </p>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    )
}

export default TOS
