import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavBootstrap from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function Nav() {
  const [expanded, setExpanded] = React.useState(false);

  const handleSelect = () => setExpanded(false);

  return (
    <Navbar
      expanded={expanded}
      onToggle={setExpanded}
      expand="md"
      fixed="top"
      className="portfolio-nav"
    >
      <Container>
        <Navbar.Brand href="#home" className="nav-brand">EX</Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-navbar" />
        <Navbar.Collapse id="portfolio-navbar">
          <NavBootstrap className="ms-auto" onSelect={handleSelect}>
            <NavBootstrap.Link href="#home" onClick={handleSelect}>Home</NavBootstrap.Link>
            <NavBootstrap.Link href="#about" onClick={handleSelect}>About</NavBootstrap.Link>
            <NavBootstrap.Link href="#portfolio" onClick={handleSelect}>Projects</NavBootstrap.Link>
            <NavBootstrap.Link href="#skills" onClick={handleSelect}>Skills</NavBootstrap.Link>
            <NavBootstrap.Link href="#contact" onClick={handleSelect}>Contact</NavBootstrap.Link>
          </NavBootstrap>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
