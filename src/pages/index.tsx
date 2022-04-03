import * as React from "react"
import { Link } from "gatsby"
import Header from "../components/Header"
import { Button } from 'react-bootstrap';

const IndexPage = () => {
  return (
    <main>
      <title>Index</title>

      <Header />



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

      Link Penting
      <ul>
        <li>
          <Link to="/atm">ATM (coming soon)</Link>
        </li>
        <li>
          <Link to="/bantuan">Pusat Bantuan</Link>
        </li>
        <li>
          <Link to="/tos">Perjanjian Penggunaan Layanan</Link>
        </li>
        <li>
          <Link to="/kontributor">Kontributor</Link>
        </li>
      </ul>

    </main>
  )
}

export default IndexPage
