"use client";
import { link } from "fs";
import Link from "next/link";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { usePathname } from "next/navigation";
export default function NavBar() {
  const pathname = usePathname();
  return (
    // <Navbar bg="dark" variant="dark" sticky="top" expand="lg" collapseOnSelect>
    //   <Container>
    //     <Navbar.Brand href="/">Home</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="main-navbar" />
    //     <Navbar.Collapse id="main-navbar">
    //       <Nav className="m1-auto">
    //         <Nav.Link href="/hello">Hello</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} href="/">
          IMAGE GALLERYS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/static" active={pathname === "/static"}>
              STATIC
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/dynamic"
              active={pathname === "/dynamic"}
            >
              DYNAMIC
            </Nav.Link>
            <Nav.Link as={Link} href="/isr" active={pathname === "/isr"}>
              I S R
            </Nav.Link>
            <NavDropdown title="Topics" id="topics-dropdown">
              <NavDropdown.Item as={Link} href="/topics/health">
                Health
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/topics/coding">
                Coding
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/topics/phones">
                Phones
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
