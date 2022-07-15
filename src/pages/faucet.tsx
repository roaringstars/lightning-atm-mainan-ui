import * as React from "react"
import Footer from "../components/Footer"

const Faucet = () => {
    React.useEffect(() => {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    })

    return (
        <main>
            <div>
                Loading...
            </div>

            <Footer />
        </main>
    )
}

export default Faucet
