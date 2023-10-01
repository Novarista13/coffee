import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import coffeeCup from "../images/coffee-cup.svg";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home" style={{ color: "white" }}>
          <img width={50} className="nav-logo" src={coffeeCup} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="ms-auto my-1"
          style={{ color: "white", background: "#603809" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navs">
            <Nav.Item>
              <Nav.Link className=" nav-links" href="#home">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className=" nav-links" href="#link">
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className=" nav-links" href="#link">
                Locations
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className=" nav-links" href="#link">
                Recipes
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className=" nav-links" href="#link">
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
