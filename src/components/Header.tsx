import * as React from "react"
import { Link } from "gatsby"
import '../styles/global.css'
import { Navbar, Nav, Container } from "react-bootstrap"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <>
            <Navbar bg="light" expand="lg" className="mb-5">
                <Container>
                    <Navbar.Brand href="/">Lightning ATM <span>(Mainan)</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link href="/atm"><Link to="/atm">ATM</Link></Nav.Link>
                            <Nav.Link href="/bantuan"><Link to="/bantuan">Bantuan</Link></Nav.Link>
                            <Nav.Link href="https://twitter.com/roaringstars">
                                <Link to="https://twitter.com/roaringstars">
                                <FontAwesomeIcon icon={faTwitter} />
                                @roaringstars
                                </Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
