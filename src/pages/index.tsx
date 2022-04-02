import * as React from "react"
import { Link } from "gatsby"
import Header from "../components/Header"
import { Button } from 'react-bootstrap';

const IndexPage = () => {
  return (
    <main>
      <title>Index</title>

      <Header />

      Link Penting
      <ul>
        <li>
          <Link to="/">ATM (coming soon)</Link>
        </li>
        <li>
          <Link to="/bantuan">Pusat Bantuan</Link>
        </li>
        <li>
          <Link to="/tos">Perjanjian Penggunaan Layanan</Link>
        </li>
      </ul>

    </main>
  )
}

export default IndexPage
