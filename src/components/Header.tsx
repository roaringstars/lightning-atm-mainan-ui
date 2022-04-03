import * as React from "react"
import { Link } from "gatsby"
import '../styles/global.css'

const Header = () => {
    return (
        <>
            <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js"></script>
            <link href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800" rel="stylesheet" type="text/css" />

            <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
                <div className="container px-4 px-lg-5">
                    <h1 className="navbar-brand">Lightning ATM (Mainan)</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto py-4 py-lg-0">
                            <li className="nav-item"><div className="nav-link px-lg-3 py-3 py-lg-4"><Link to="/">Beranda</Link></div></li>
                            <li className="nav-item"><div className="nav-link px-lg-3 py-3 py-lg-4"><Link to="/atm">ATM</Link></div></li>
                            <li className="nav-item"><div className="nav-link px-lg-3 py-3 py-lg-4"><Link to="/bantuan">Bantuan</Link></div></li>
                            <li className="nav-item"><div className="nav-link px-lg-3 py-3 py-lg-4"><Link to="/tos">TOS</Link></div></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <br />
        </>
    )
}

export default Header
