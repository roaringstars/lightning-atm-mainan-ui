import * as React from "react"
import { Row, Col } from "react-bootstrap"
import ContentLoader, { Facebook } from 'react-content-loader'
import '../styles/tweet-box.css'
import TwitterLogo from '../assets/images/tweet-box/twitter.svg';
import VerifiedBadge from '../assets/images/tweet-box/verified.svg';

const TweetBox = (props: any) => {
    const tweetDatabase = [
        {
            "id": "1490360523535564800",
            "username": "roaringstars",
            "text": "Lightning ATM (Mainan) — Beta ⚡🏧<br/><br/>Eksperimen membuat ATM untk konversi Rupiah ke Satoshi dengan fee hanya (10%), minimal pembelian Rp1,500. Satoshi dikirim langsung ke wallet yg mendukung LNURL withdraw. 👇<br/><br/><span>roaringstars.com</span><br/><br/>Enjoy your Sats! 😎<br/>(for edu. purpose only)",
            "image": [
                "https://pbs.twimg.com/ext_tw_video_thumb/1490359872994816001/pu/img/TtczLFx9ebs-yA0p.jpg"
            ]
        },
        {
            "id": "1496527510284431361",
            "username": "orangkamar",
            "text": "Nyoba beli Bitcoin eceran pake Lightning ATM. Cuma Rp1.500. Bayarnya pake QRIS (aku pake iSaku).<br/><br/>Unyu banget, euy! <br/><span>@roaringstars</span>",
            "image": [
                "https://pbs.twimg.com/media/FMS7TsOaAAEOkIz?format=jpg&name=240x240",
                "https://pbs.twimg.com/media/FMS7WeqaMAE8_JC?format=jpg&name=240x240"
            ]
        },
        {
            "id": "1496929201185705997",
            "username": "nandaandryana",
            "text": "Baru aja nyoba beli bitcoin eceran lewat Lighting Atm ( Mainan ) cuman Rp1,500 aja di <span>@roaringstars</span> 🥶 yok langsung dicoba made in indonesia 🇲🇨",
            "image": [
                "https://pbs.twimg.com/ext_tw_video_thumb/1496929123968569356/pu/img/cWo96K6LYGlmrU0n.jpg"
            ]
        },
        {
            "id": "1498143245758767104",
            "username": "jevanjovandy",
            "text": "So cool <span>@roaringstars roaringstars.com</span> <br/>From this&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To this",
            "image": [
                "	https://pbs.twimg.com/media/FMp5VvBaMAIz3H_?format=jpg&name=240x240",
                "	https://pbs.twimg.com/media/FMp5VvNaIAI7_Ed?format=jpg&name=240x240",
            ]
        },
        {
            "id": "1534050411128459264",
            "username": "JefriNewbie",
            "text": "Top Up dengan nominal 15.000 sudah bisa di Smartphone kalian : <span>#Bitcoin <br/>labs.roaringstars.com/atm/ <br/>@roaringstars <br/>#LightningAtmMainan #BitcoinEceran</span>",
            "image": [
                "	https://pbs.twimg.com/media/FUoKtrQagAAYdKv?format=jpg&name=240x240",
                "	https://pbs.twimg.com/media/FUoKt4vakAIUcPH?format=jpg&name=240x240",
            ]
        },
        {
            "id": "1533939880371204096",
            "username": "bukan_rastaman",
            "text": "<span>#Day82</span> Stack Satoshi <br/><br/>Seneng banget bisa deposit 15rb di <span>@roaringstars</span>. Semoga lancar dan naik nominal 25k<br/><br/><span>#roaringstars #bitcoin #lightningatmmainan</span>",
            "image": [
                "	https://pbs.twimg.com/media/FUmmLvHVsAAw7SI?format=jpg&name=240x240",
                "	https://pbs.twimg.com/media/FUmmLvIUAAADK7X?format=jpg&name=240x240",
            ]
        },
        {
            "id": "1532877038738022400",
            "username": "kantongcrypto",
            "text": "<span>#Day4</span> RCA a.k.a Rupiah Cost Averaging <span>#Bitcoin</span>",
            "image": [
                "https://pbs.twimg.com/media/FUXfiv0VIAAI7qW?format=jpg&name=small",
            ]
        },
        {
            "id": "1533476330884411393",
            "username": "duluantigolput",
            "text": "Hari ini 2x deh pake <span>#lightningATMmainan</span> inih, saking pengen nyobain fitur 15K-nya 😍😍 Makasih kak <span> @roaringstars</span>, otw 25K! 🥳<br/><br/> Baru saja menukarkan Rupiah ke Bitcoin dengan Lightning ATM (Mainan) dan itu keren! <br/><br/><span>#LightningAtmMainan #BitcoinEceran</span>",
            "image": []
        },
        {
            "id": "1533435118991249408",
            "username": "ramadhantriyant",
            "text": "Woah 30 detik <span>@roaringstars</span>",
            "image": ["https://pbs.twimg.com/media/FUfa6UWUsAAJOSE?format=jpg&name=small"]
        },
        {
            "id": "1531623761358618624",
            "username": "alreadydown99",
            "text": "Nabung Fiat❌<br/>Nabung Bitcoin✅<br/> <span>#LightningAtmMainan #BitcoinEceran</span>",
            "image": ["https://pbs.twimg.com/media/FUFrsHLaQAANJFA?format=jpg&name=small"]
        },
        {
            "id": "1527124877857406977",
            "username": "cryptolayf",
            "text": "Yes berhasil!buat gw yg gaptek ini gampang dan menyenangkan..thank you semua 👍😍",
            "image": ["https://pbs.twimg.com/media/FTFv-staIAA_VzG?format=jpg&name=900x900"]
        },
        {
            "id": "1514083810052538372",
            "username": "cnbcindonesia",
            "text": "Netizen Indonesia Bikin ATM Bitcoin, Minimal Tukar Rp 1.500<br/><span>cnbcindonesia.com/tech/202204...",
            "image": ["https://pbs.twimg.com/card_img/1529828825344815105/yd9vrOde?format=jpg&name=small"]
        },
        {
            "id": "1530023874112262145",
            "username": "santridanalam",
            "text": "Mudahnya beli bitcoin eceran , dengan e-wallet dan wallet bitcoin yg support lightning network <br/><br/><span>#LightningAtmMainan #BitcoinEceran</span>",
            "image": []
        },
        {
            "id": "1514457432142979073",
            "username": "bwebbek",
            "text": "Great job, bro <span>@roaringstars</span>. Lumayan buat nabung harian, simple banget.<br/><br/>Just exchange Indonesian Rupiah to Bitcoin with Lightning ATM (Mainan) and it's frickin' awesome!<br/><span>#LightningAtmMainan #BitcoinEceran</span>",
            "image": []
        },
        {
            "id": "1513577186745364485",
            "username": "GlobalBTCFest",
            "text": "cool stuff! <br/><br/>article in Bahasa Indonesia about <span>#Bitcoin</span> and lightning ⚡️ also mentions us and the space we did with <span>@roaringstars</span> and a group of awesome Indonesia 🇮🇩 Bitcoiners<br/><br/>it was a great space with a very vibrant community, mos def worth a listen 👇 <br/><span>soundcloud.app.goo.gl/7uEGVK6Z..</span>",
            "image": []
        },
        {
            "id": "1510841968024190976",
            "username": "arya_rmdhn",
            "text": "Jajan siang di Toko Desentral Jaya <span>@roaringstars</span> 😎",
            "image": ["https://pbs.twimg.com/media/FPeWwfuVsAAB6TS?format=jpg&name=small"]
        },
    ]

    function formatText(input: String) {
        let output = input
        return output;
    }

    return (
        <>
            {
                tweetDatabase.map((item) => {
                    if (item.id == props.tweetId) {
                        return <>
                            <a href={"https://twitter.com/roaringstars/status/" + item.id} className="tweet-box" target="_blank">
                                <div>
                                    <div className="twitter-logo">
                                        <img src={TwitterLogo}></img>
                                    </div>
                                    <Row>
                                        <Col>
                                            <div className="twitter-avatar">
                                                <img src={'https://unavatar.io/twitter/@' + item.username} alt=".." />
                                            </div>
                                            <div className="twitter-name">@{item.username}
                                                {
                                                    props.hasOwnProperty('verified') && (
                                                        <div className="twitter-verified">
                                                            <img src={VerifiedBadge}></img>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                            
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="twitter-text" dangerouslySetInnerHTML={{ __html: formatText(item.text).toString() }}></div>
                                        </Col>
                                    </Row>
                                    {
                                        item.image.length > 0 && (
                                            <Row>
                                                <Col className="twitter-image">
                                                    {
                                                        item.image.length > 1 ? (
                                                            <>
                                                                {
                                                                    item.image.length == 3 ? (
                                                                        <>
                                                                            <div className={"multi-images count-" + item.image.length}>

                                                                                <div className="first-image" style={{ background: "url(" + item.image[0] + ")" }} />
                                                                                <div className="other-image">
                                                                                    <div style={{ background: "url(" + item.image[1] + ")" }} />
                                                                                    <div style={{ background: "url(" + item.image[2] + ")" }} />
                                                                                </div>
                                                                            </div>
                                                                        </>
                                                                    ) : (
                                                                        <div className={"multi-images count-" + item.image.length}>
                                                                            {
                                                                                item.image.map((itemImage) => {
                                                                                    return <>
                                                                                        <div style={{ background: "url(" + itemImage + ")" }} />
                                                                                    </>
                                                                                })
                                                                            }
                                                                        </div>
                                                                    )
                                                                }
                                                            </>
                                                        ) : (
                                                            <img src={item.image[0]} alt={'Tweet'} />
                                                        )
                                                    }
                                                </Col>
                                            </Row>
                                        )
                                    }
                                </div>
                            </a>
                        </>
                    }
                })
            }
        </>
    )
}

export default TweetBox
