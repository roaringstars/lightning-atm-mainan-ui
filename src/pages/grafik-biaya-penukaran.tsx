import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import metaPreviewImage from '../assets/images/meta/index.jpg';
import '../styles/kurs-bitcoin.css'
import MetaTags from "../components/MetaTags"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Link } from "gatsby";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const GrafikBiayaPenukaran = () => {
    /**
     * Endpoint 
     */
    const apiEndpoint = process.env.ATM_API_ENDPOINT;
    const endpoint = apiEndpoint + '/api_adjusted_fee.php'

    /**
     * Declare state
     */
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState({
        atm: undefined,
        lnpay: undefined,
    });
    const [isDataReady, setIsDataReady] = React.useState(false);
    const [isDataFailed, setIsDataFailed] = React.useState(false);
    const [chartData, setChartData] = React.useState(null);

    /**
     * Get status on page load
     */
    const load = () => {
        setIsLoading(true);
        fetch(endpoint, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        })
            .then(response => {
                setIsLoading(false);
                if (response.ok) {
                    setIsDataReady(true);
                } else {
                    setIsDataFailed(true);
                }
                return response.json();
            })
            .then(data => {
                // setData(data.data);
                const labels = data.data.label;
                setChartData({
                    labels,
                    datasets: [
                        {
                            label: 'Harga Bitcoin',
                            data: data.data.rate,
                            borderColor: 'rgba(100, 100, 100, 0.1)',
                            backgroundColor: 'rgba(100, 100, 100, 0.1)',
                            yAxisID: 'y',
                        },
                        {
                            label: 'Potongan Biaya (%)',
                            data: data.data.fee,
                            borderColor: 'rgb(53, 162, 235)',
                            backgroundColor: 'rgba(53, 162, 235, 0.5)',
                            yAxisID: 'y1',
                        },
                    ],
                });
            })
            .catch(error => {
                // TODO: Log
                // Log('error', 'Failed while sending post data', {
                //     endpoint: apiEndpoint,
                //     error: error
                // })
            })
    }

    React.useEffect(() => {
        load();
    }, [])


    const options = {
        responsive: true,
        interaction: {
            mode: 'index' as const,
            intersect: false,
        },
        stacked: false,
        scales: {
            y: {
                type: 'linear' as const,
                display: true,
                position: 'left' as const,
            },
            y1: {
                type: 'linear' as const,
                display: true,
                position: 'right' as const,
                grid: {
                    drawOnChartArea: false,
                },
            },
        },
    };

    return (
        <main>
            <MetaTags
                metaDescription="Chart Biaya Penukaran Lightning ATM (Mainana)"
                metaTitle="Biaya Penukaran"
                metaPath="/chart-biaya-penukaran"
                metaPreviewImage={metaPreviewImage}
            />

            <Header />

            <article className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">

                            <h2 className="section-heading text-center">Biaya Penukaran</h2>

                            <p className="text-center">Biaya Lightning ATM (Mainan)&nbsp;
                            <a target="_blank" href="https://twitter.com/roaringstars/status/1536655908834406400">per 14 Juni 2022 </a>
                             menggunakan 
                            algoritma untuk menyesuaikan dengan <Link to={'/kurs-bitcoin'}> Kurs Bitcoin</Link> saat ini. 
                            Semakin mendekati harga saat pengisian ulang (refill) semakin rendah biayanya.</p>
                        </div>  
                    </div>
                </div>
            </article>
            <div className="p-4 mb-4">
            {
                                chartData !== null && (
                                    <Line options={options} data={chartData} />
                                )
                            }

            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Footer />
        </main>
    )
}

export default GrafikBiayaPenukaran
