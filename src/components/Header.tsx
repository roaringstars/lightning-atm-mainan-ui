import * as React from "react"

const Header = () => {
    return (
        <>
            <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
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
                            <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="">Home</a></li>
                            <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="">About</a></li>
                            <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="">Sample Post</a></li>
                            <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <header className="masthead">
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="post-heading">
                                <h2 className="subheading">Membantu Lebih Banyak Orang Belajar Mengelola Bitcoin Mereka Sendiri</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <br />
        </>
    )
}

export default Header
