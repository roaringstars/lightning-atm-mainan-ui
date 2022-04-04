import * as React from "react"
import Header from "../components/Header"
import { VictoryBar, VictoryChart } from 'victory';
import { Row, Col } from 'react-bootstrap';
import { useEffect, useState } from "react";


export default function Statistik() {
    const [isDataReady, setIsDataReady] = useState(false);
    const [list, setList] = useState([]);
    const endpoint = 'https://roaringstars.com/api_stats.php';
    const tmpList = [];

    useEffect(() => {
        fetch(endpoint, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('failed while loading data')
                }
            })
            .then(data => {
                setIsDataReady(true);

                for (let date of Object.keys(data.data)) {
                    tmpList.push({count: data.data[date].count, date: date.substr(5,7)});
                }
                setList(tmpList.reverse());
            })
    }, [])


    return (
        <main>
            <title>Statistik</title>

            <Header />
            <Row>
                <Col>
                    <VictoryChart>
                        <VictoryBar
                            data={list}
                            x="date"
                            y="count"
                        />
                    </VictoryChart>
                </Col>
            </Row>
        </main>
    )
}