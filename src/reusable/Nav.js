import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import coffeeCup from "../images/coffee-cup.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container>
        <Navbar.Brand style={{ color: "white" }}>
          <Link className="nav-links" to="/home">
            <img width={50} className="nav-logo" src={coffeeCup} alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="ms-auto my-1"
          style={{ color: "white", background: "#603809" }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto navs">
            <Nav.Item>
                <Link className="nav-links" to="/home">
                  Home
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link className="nav-links" to="/about">
                  About
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link className="nav-links" to="/locations">
                  Locations
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link className="nav-links" to="/recipes">
                  Recipes
                </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
