import React from "react";

import { Container, Navbar, Nav, Col, Row } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "./../images/logo2.png";

import "./Navigation.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="main-container fixed-top">
      <Container fluid className="top-container">
        <Row className="logo-and-phone justify-content-between">
          <Col sm={6}>
            <Link to="/">
              <img className="logo-style" src={logo} alt="logo" />
            </Link>
          </Col>
          <Col sm={6} className="d-flex justify-content-end align-items-center">
            <button className="phone-button">
              <FaPhoneAlt
                style={{
                  color: "#4dc06f",
                  marginTop: "-1px",
                  marginRight: "5px",
                }}
              />
              <span className="phone-number">(68) 3847 543</span>
            </button>
          </Col>
        </Row>
        <Row>
          <Col className="mr-0">
            <Navbar.Toggle aria-controls="navbarNav" />

            <Navbar.Collapse id="navbarNav">
              <Nav className="ml-auto mr-0 nav-elements">
                <Nav.Link href="#" className="top-nav">
                  O nas
                </Nav.Link>
                <Nav.Link href="#" className="top-nav">
                  Usługi
                </Nav.Link>
                <Link to="/kontakt" className="nav-link top-nav">
                  Kontakt
                </Link>
                {/* <Link to="/galeria" className="nav-link top-nav">
                  Galeria
                </Link> */}
                <Nav.Link href="#galeria" className="top-nav">
                  Galeria
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Navigation;
