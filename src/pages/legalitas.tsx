import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

import metaPreviewImage from '../assets/images/meta/index.jpg';
import { Helmet } from "react-helmet"
const Legalitas = () => {
    /**
     * Helmet
     */
    const metaDescription = "Bagaimana legalitas ATM Bitcoin untuk Pendidikan?";
    const metaTitle = "Legalitas";
    const metaDomain = "https://roaringstars.com";
    const metaUrl = "https://roaringstars.com/legalitas";

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


            <article className="mb-4 legality">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">

                            <div className="h1 text-center">Bagaimana Legalitas Lightning ATM (Mainan) ini?</div>

                            <div className="mb-2 h3"><b>TL;DR (Singkatnya)</b></div>
                            <p className="text-justify">
                                ATM (Mainan) belum mendapat izin resmi untuk beroperasi, dikarenakan keterbatasan hukum di Indonesia yang
                                belum meregulasi pembuatan ATM sebagai edukasi <i>(gray-area)</i>.
                                <br />
                                <br />
                                Namun ATM ini cukup aman, karena semua transaksi memiliki nominal kecil (minimal Rp1,500 dan maksimal Rp25,000) dan langsung masuk ke
                                dompet pengguna (tidak disimpan oleh ATM).
                                <br/>
                                <br/>
                                ATM ini juga berusaha untuk melawan penggunaan Bitcoin sebagai tidak kejahatan dan memberikan akses informasi seluas-luasnya kepada masyarakat umum sesuai dengan tujuan dasar yaitu mencerdaskan kehidupan bangsa.
                            </p>

                            <div className="dashed-line" />

                            <div className="mt-5 h2"><b>Pembahasan</b></div>
                            <div className="h3"><b>September 2014 — Bitcoin ATM di Indonesia</b></div>

                            <p className="text-justify mt-3">
                                ATM Bitcoin pertama di Indonesia muncul pada 2014 tepatnya berada di wilayah Legian, Bali.
                                <sup>
                                    [<a href="https://web.archive.org/web/20200520203744/https://inet.detik.com/cyberlife/d-2680784/atm-bitcoin-pertama-di-indonesia-hadir-di-bali" target="_blank">1</a>][<a href="https://webcache.googleusercontent.com/search?q=cache:KIj5hZSNJvwJ:https://www.liputan6.com/bisnis/read/822976/atm-bitcoin-akan-hadir-di-indonesia+&cd=24&hl=en&ct=clnk&gl=id" target="_blank">2</a>][<a href="https://coinlocations.com/bitcoin-atm-locations-map-find-your-nearest-bitcoin-atm-location/profile/a:bitcoin-atm-machine-in-kuta,-bali-at-bitcoin.co.id-information-center---lamassu" target="_blank">3</a>]
                                </sup>&nbsp;
                                Kemudian muncul ATM kedua di wilayah Ubud, Bali dan dioperasikan oleh Bitcoin.co.id (Sekarang Indodax).
                                <sup>
                                    [<a href="https://coinlocations.com/bitcoin-atm-locations-map-find-your-nearest-bitcoin-atm-location/profile/a:bitcoin-atm-machine-in-ubud-at-hubud---lamassu" target="_blank">4</a>]
                                </sup> Penggagas ATM Bitcoin tersebut mengutarakan kalau Bitcoin mempermudah turis yang datang ke Bali.
                            </p>
                            <p className="text-justify">
                                <blockquote className="blockquote">
                                    <p>"Banyak sekali orang Amerika, Prancis, Rusia yang tinggal di Bali. Mereka sudah biasa pakai Bitcoin di negara asalnya. Di sini mereka tinggal tukar jadi Rupiah."</p>

                                    <figcaption className="blockquote-footer">
                                        Oscar Darmawan
                                    </figcaption>
                                </blockquote>

                                Namun tak lama kemudian ATM tersebut dicopot tanpa alasan yang jelas, sebagian menyebutkan karena jarang digunakan atau Bank Indonesia (BI) salah paham terhadap penggunaan ATM Bitcoin yang diduga dapat membeli Bitcoin yang nyatanya hanya menukarkan ke dalam Rupiah.
                                <sup>
                                    [<a href="https://www.reddit.com/r/Bitcoin/comments/e2tn9r/bitcoin_atms_in_indonesia/">5</a>][<a href="https://finance.detik.com/moneter/d-2681445/bakal-ada-atm-bitcoin-di-bali-bi-tidak-ada-izin" target="_blank">6</a>][<a href="https://www.youtube.com/watch?v=QFD9DQtiivs" target="_blank">7</a>]
                                </sup>
                            </p>

                            <div className="h3 mt-4"><b>Desember 2017 — Kebijakan Bitcoin di Indonesia</b></div>
                            <p className="text-justify">
                                Bank Indonesia menegaskan bahwa tidak melarang penggunaan teknologi <i>blockchain</i> pada jasa keuangan, BI hanya melarang penggunaan mata uang virtual sebagai alat pembayaran yang sah.

                                <sup>
                                    [<a href="https://www.bi.go.id/id/publikasi/kajian/Documents/Buletin-16.01.01-06.19.pdf">8</a>]
                                </sup>

                                <blockquote className="blockquote">
                                    <p>"Bank Indonesia (BI) dan Otoritas Jasa Keuangan (OJK) hingga kini tidak melarang pemanfaatan teknologi blockchain di industri jasa keuangan. BI hanya melarang penggunaan mata uang digital sebagai alat pembayaran yang sah di wilayah Negara Kesatuan Republik Indonesia sebagaimana diatur dalam Pasal 21 UU 7/ 2011 tentang Mata Uang."</p>

                                    <figcaption className="blockquote-footer">
                                        Peraturan Bank Indonesia Nomor 18/40/PBI/2016
                                    </figcaption>
                                </blockquote>
                            </p>
                            <p className="text-justify">
                                Pada waktu yang sama, Kominfo mengusulkan untuk melakukan pemblokiran Bitcoin jika memang diperintahkan BI, namun hal tersebut sulit dipahami secara akal karena bahwasanya Bitcoin tidak bisa diblokir.
                                <sup>
                                    [<a href="https://kominfo.go.id/content/detail/12003/kominfo-siap-blokir-transaksi-bitcoin-atas-arahan-bi/0/sorotan_media">9</a>]
                                </sup>
                                <blockquote className="blockquote">
                                    <p>"Kalau dilarang (BI) saya blokir, kalau tidak dilarang, tidak diblokir."</p>

                                    <figcaption className="blockquote-footer">
                                        Rudiantara (Menteri Komunikasi dan Informatika)
                                    </figcaption>
                                </blockquote>
                            </p>

                            <p className="text-justify">
                                Pada Oktober 2018  Menteri Perdaganan mengeluarkan peraturan yang memperbolehkan jual-beli Aset Kripto namun tidak menyinggung perihal Kripto sebagai alat pembayaran.

                                <blockquote className="blockquote">
                                    <p>"Aset Kripto (Crypto Asset) ditetapkan sebagai Komoditi yang dapat dijadikan Subjek Kontrak Berjangka yang diperdagangkan di Bursa Berjangka."</p>

                                    <figcaption className="blockquote-footer">
                                        Peraturan Menteri Perdagangan Nomor 99 Tahun 2018 Pasal 1
                                    </figcaption>
                                </blockquote>
                            </p>

                            <p className="text-justify">
                                Kemudian pada Februari 2019 dikeluarkan Peraturan Nomor 5 Tahun 2019 oleh Bappebti (Badan Pengawas Perdagangan Berjangka Komoditi) yang mengatur tentang pihak yang dizinkan secara bisnis untuk melakukan jual-beli Aset Kripto.

                                <sup>
                                    [<a href="https://bappebti.go.id/resources/docs/peraturan/sk_kep_kepala_bappebti/sk_kep_kepala_bappebti_2019_02_01_w9i365pf_id.pdf">10</a>]
                                </sup>
                            </p>


                            <p className="text-justify">
                                Beberapa waktu kemudian, pakar dan publik menilai kebijakan Bitcoin di Indonesia dinilai tidak konsisten.

                                <sup>
                                    [<a href="https://www.liputan6.com/bisnis/read/4596001/ekonom-regulasi-aset-kripto-di-indonesia-tak-konsisten">11</a>]
                                </sup>
                            </p>

                            <div className="h3"><b>Januari 2022 — Scam Kripto Merebak</b></div>
                            <p className="text-justify mt-3">
                                I-coin dan Asix token sempat menjadi berita publik perihal pembuatan koin kripto yang kemudian harga aset tersebut jatuh dan membuat pemilik aset rugi besar. Hal tersebut diduga karena pengembang koin hanya mengajak pengguna untuk membeli aset tanpa memberikan edukasi perihal resiko aset kripto.
                                <sup>
                                    [<a href="https://kumparan.com/kumparantech/makin-anjlok-kabar-terkini-harga-token-asix-anang-dan-i-coin-wirda-mansur-1xmNBuLGi0f/1" target="_blank">12</a>]

                                </sup>
                            </p>


                            <div className="h3"><b>Tujuan Awal Bitcoin </b></div>
                            <p className="text-justify mt-3">
                                Mengutip dari artikel asli Bitcoin yang ditulis oleh Satoshi Nakamoto, bahwasanya Bitcoin diciptakan sebagai teknologi baru untuk mengirimkan uang melalui internet, dan bukan sebagai aset investasi. Hal ini tentu sangat berseberangan dengan pemahaman pemerintah tentang Aset Kripto.

                                <sup>
                                    [<a href="https://bitcoin.org/bitcoin.pdf" target="_blank">13</a>]

                                </sup>

                                <blockquote className="blockquote">
                                    <p>"A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution."</p>

                                    <figcaption className="blockquote-footer">
                                        Bitcoin: A Peer-to-Peer Electronic Cash System (oleh Satoshi Nakamoto)
                                    </figcaption>
                                </blockquote>
                            </p>

                            <p className="text-justify">
                                Dampaknya, kebanyakan masyarakat lebih memahami Bitcoin sebagai ajang untuk berinvestasi dan mencari uang instan, faktanya tidaklah demikian seperti yang digagas oleh Satoshi Nakamoto diawal terbentuknya Bitcoin. Hal ini tentu membingungkan karena, ternyata kebijakan yang dikeluarkan pemerintah tidak sejalan dengan tujuan awal Bitcoin untuk mengusulkan sebuah inovasi baru dalam hal mengirim uang dan cenderung mengacaukan pemahaman orang awam terhadap Bitcoin.

                            </p>


                            <div className="h3"><b>Salah Persepsi Masal dan Reaksi</b></div>
                            <p className="text-justify mt-3">
                                Semenjak Bappebti hanya memperbolehkan Bitcoin sebagai aset, mengakibatkan kebanyakan masyarakat umum mulai berpikir dan mengenal bahwa kripto mampu menjadikan individu mendapatkan untung besar seperti saham pada umumnya. Sehingga masyarakat awam berani memasukan jutaan rupiah kedalamnya, berharap dapat mendapatkan untung yang besar pula.

                            </p>

                            <p className="text-justify">
                                Padahal faktanya, Bitcoin dan kripto lain belum sepenuhnya teruji sebagai teknologi yang berhasil. Saya berani berkata kalau Bitcoin masih sebatas mata uang eksperimen yang baru berumur 13 tahun, dibandingakan E-mail yang sudah berumur 57 tahun. Sehingga alangkah baiknya jika tidak memasukan uang terlalu banyak kedalam teknologi ini kecuali sudah memahami bagaiman teknologi tersebut bekerja.
                            </p>
                            <p className="text-justify">
                                Melihat kondisi ini saya tidak bisa diam, saya perlu menyuarakan bahwasanya perlu untuk memahami Bitcoin secara teknis sebelum menaruh uang dalam jumlah yang besar. Namun, masalahnya belum terdapat sebuah alat peraga yang rendah biaya yang bisa digunakan orang awam untuk mencoba dan belajar Bitcoin.
                            </p>

                            <p className="text-justify">
                                Kemudian saya bereksperimen untuk membuat sebuah ATM Bitcoin (Mainan) yang berfungsi sebagai pintu gerbang untuk memahami teknis Bitcoin. Sehingga masyarakat dapat berdiskusi dan menimbang, apa saja manfaat dan resiko Bitcoin sebagai mata uang. Dimana hal ini saya rasa belum dilakukan pemerintah sebelum menetapkan sebuah peraturan, saya belum mendengar adanya pengambilan opini publik tentang manfaat Bitcoin ini.
                            </p>


                            <div className="h3"><b>Dilema Etika</b></div>
                            <p className="text-justify mt-3">
                                Pembuatan Lightning ATM (Mainan) tidak selalu berjalan mulus, ada beberapa hal yang dapat dikaitkan dengan pelanggaran hukum di-Indonesia. Meski begitu saya yakin kalau semua teknologi perlu untuk di demokratisasi, perlu lebih banyak orang yang memahami teknis teknologi tersebut. </p>

                            <p className="text-justify">
                                Hal ini sangat penting, karena mengikuti sifat alami teknologi baru yaitu selalu memiliki dua sisi (baik dan buruk). Ketika hanya sedikit orang yang mengetahui teknologi tersebut, bahaya dapat datang tak terduga, karena tidak ada manusia lain yang mencegah aktifitas tersebut terjadi. </p>
                            <p className="text-justify">
                                Selayaknya teknologi seperti Internet, E-mail, A.I., Drone, atau Nuklir, Bitcoin juga memerlukan adanya ruang untuk belajar dan bereksperimen untuk mengetahui manfaat dan bahaya. Tentu dengan membatasi resiko yang mungkin terjadi seperti pencucian uang, kehilangan uang, dan transaksi gelap.
                            </p>

                            <p className="text-justify">
                                Sebagai tambahan jika dilihat dari sisi pendidikan, Indonesia bisa dibilang tertinggal sangat jauh perihal kemajuan ilmu pengetahuan dan teknologi, hal inilah yang perlu untuk digaris bawahi terhadap penetapan peraturan dimasa mendatang.
                            </p>

                            <div className="h3"><b>Legalitas</b></div>
                            <p className="text-justify mt-3">
                                Sejauh yang saya pahami, hukum di Indonesia belum menyebutkan penggunaan Bitcoin sebagai media pembelajaran. Kebanyakan hanya mengatur untuk sebuah perusahaan, seperti pada Peraturan Bappebti Nomor 5 Tahun 2019 yang mengharuskan memiliki modal satu triliun lima ratus miliar rupiah. Hal tersebut tentu tidak masuk akal dengan perputaran uang yang kecil dalam proyek sederhana ini.
                            </p>

                            <p className="text-justify">
                                Sehingga dalam waktu dekat, ATM ini tidak dimungkinkan untuk mendapat izin resmi dari pemerintah karena keterbatasan hukum yang ada. Sehubungan dengan hal tersebut saya memutuskan untuk menimbang berdasarkan hukum dasar yang ada dan etika moral yang tidak berentangan dengan hukum di Indonesia. Hukum yang mendasari proyek ini berangkat dari UU ITE Nomor 11 Tahun 2008 Pasal 4 yang berbunyi:

                                <sup>
                                    [<a href="https://www.dpr.go.id/doksetjen/dokumen/-Regulasi-UU.-No.-11-Tahun-2008-Tentang-Informasi-dan-Transaksi-Elektronik-1552380483.pdf" target="_blank">14</a>]
                                </sup>

                                <blockquote className="blockquote">
                                    <p>"...Pemanfaatan Teknologi Informasi dan Transaksi Elektronik dilaksanakan dengan tujuan untuk: a. mencerdaskan kehidupan bangsa sebagai bagian dari masyarakat informasi dunia;..."</p>

                                    <figcaption className="blockquote-footer">
                                        UU ITE Nomor 11 Tahun 2008 Pasal 4
                                    </figcaption>
                                </blockquote>
                            </p>

                            <p className="text-justify mt-3">
                                Hal yang perlu digaris bawahi adalah Bitcoin merupakan bagian teknologi yang saya yakin akan populer beberapa tahun mendatang, dilihat dari banyaknya jumlah pengembang perangkat lunak yang terbanyak untuk saat ini.

                            </p>

                            <p className="text-justify mt-3">
                                Selain atas dasar tersebut, saya pribadi memiliki keyakinan bahwasanya dengan memberikan akses yang mudah dan sederhana untuk mencoba Bitcoin dengan batasan tertentu, niscaya akan menghindarkan seseorang dari malapetaka di kemudian hari seperti pencurian dan kehilangan uang.
                            </p>

                            <div className="h3"><b>Dampak Positif dan Pencegahan Pelanggaran</b></div>
                            <p className="text-justify mt-3">
                                Sejalan dengan peraturan BI dan OJK untuk mencegah penggunaan mata uang virtual sebagai tindak kejahatan, maka Lightning ATM (Mainan) ini melakukan beberapa hal berikut.
                                <ul>
                                    <li>
                                        Membatasi nominal transaksi maksimal Rp25rb, dengan asumsi menjadikan pencucian uang tidak efisien dan memakan banyak waktu.
                                    </li>
                                    <li>
                                        Mempercepat proses transaksi dan meningkatkan kualitas layanan, dengan tujuan agar pengguna merasa aman dalam melakukan transaksi. Saat ini transaksi hanya membutuhkan waktu kurang dari 2 menit.
                                    </li>
                                    <li>
                                        Mengharuskan menggunakan dompet pribadi, untuk mencegah kehilangan Bitcoin jika mesin ATM diretas.
                                    </li>
                                    <li>
                                        Melarang penggunaan Bitcoin untuk transaksi ilegal.
                                    </li>
                                    <li>
                                        Membatasi jumlah total transaksi harian maksimal 200.
                                    </li>
                                </ul>
                            </p>

                            <p className="text-justify">
                                Selain hal tersebut ada beberap poin yang perlu diperhatikan tentang adanya Lightning ATM (Mainan) ini:
                                <ul>
                                    <li>
                                        Kami terpaksa mengizinkan pembelian Bitcoin tanpa mengetahui identitas pembeli (non-kyc) dengan tujuan agar proses menjadi sangat sederhana untuk orang awam.

                                    </li>
                                    <li>
                                        Kami mengambil potongan 10% untuk setiap transaksi yang diperuntukan untuk menjaga ATM ini tetap berjalan (biaya operasional).

                                    </li>
                                    <li>
                                        Setiap 2 bulan, kami juga memberikan donasi 3 pohon mangrove yang diambil dari setiap potongan transaksi, dengan asumsi dapat mengimbangi dampak lingkungan akibat penggunaan energi.

                                    </li>
                                    <li>
                                        Setiap transaksi yang gagal karena kesalahan sistem, berhak mendapatkan ganti rugi (refund).

                                    </li>
                                    <li>
                                        Layanan ini memberikan akses bantuan jika megalami kendala, bantuan bisa datang dari komunitas atau saya secara pribadi.

                                    </li>
                                </ul>
                            </p>


                            <div className="h3"><b>Kesimpulan</b></div>
                            <p className="text-justify mt-3">
                                Jika disimpulkan, mesikupun belum mendapat izin resmi untuk beroperasi namun terdapat lebih banyak manfaat dari adanya mesin Lightning ATM (Mainan) ini. Kami juga berusaha untuk melawan penggunaan Bitcoin sebagai tidak kejahatan dan memberikan akses informasi seluas-luasnya kepada masyarakat umum sesuai dengan tujuan dasar yaitu mencerdaskan kehidupan bangsa.
                            </p>

                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    )
}

export default Legalitas
