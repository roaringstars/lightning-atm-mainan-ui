import * as React from "react"

const ExchangeFeeDetail = () => {
    return (
        <>
            Potongan biaya 10% sepenuhnya digunakan untuk menutup biaya
            operasional ATM (Mainan) ini, hal tersebut meliputi:
            <br />
            <ul className="mt-2">
                <li>Sewa Hosting</li>
                <li>Sewa Domain</li>
                <li>Biaya Potongan QRIS</li>
                <li>Biaya Transfer Antar Bank</li>
                <li>Biaya Pembelian Bitcoin Melalui Exchange Resmi</li>
                <li>Biaya Transaksi On-Chain Bitcoin</li>
                <li>Pajak</li>
                <li>Refund</li>
                <li>Donasi Mangrove</li>
            </ul>
        </>
    )
}

export default ExchangeFeeDetail
