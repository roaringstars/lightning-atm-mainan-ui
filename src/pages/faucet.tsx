import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

import { Card } from "react-bootstrap"
import { Row, Col } from "react-bootstrap";

import { faCheckCircle, faTimesCircle, faCheck, faQuestionCircle, faTimes, faExclamation, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StatusLoading from "../components/StatusLoading"
import StatusComponent from "../components/StatusComponent"
import MetaTags from "../components/MetaTags";

const Faucet = () => {
    React.useEffect(() => {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    })

    return (
        <main>
            <MetaTags
                metaDescription="Not A Faucet"
                metaTitle="Not A Faucet"
                metaPath="/faucet"
            />
            <Header />

            <div>
                Loading...
            </div>

            <Footer />
        </main>
    )
}

export default Faucet
