import React from "react";
import Card from "react-bootstrap/Card";

import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

import "./MainPage.css";

import zary2 from "./../images/Budowa bezodpływowych zbiorników dla wytypowanych budynków w Żarach i Niegosławicach woj. lubuskie/Żary (2).jpg";
import sulechow from "./../images/Budowa przyłączy wodociągowej w Sulechowie, MIędzyrzeczu i Zbąszynku woj. lubuskie/IMG20221116110711.jpg";
import opalenica from "./../images/Budowa sieci kanalizacji deszczowej w Opalenicy, woj. wielkopolskie/CAM00589.jpg";
import swiebodzin from "./../images/Budowa sieci wodociągowej i kanalizacji santarnej w Świebodzinie woj. lubuskie/20201015_141253.jpg";
import trzciel from "./../images/Przebudowa dróg gminnych w Trzcielu woj. lubuskie/DSC00274.jpg";
import trzemeszno from "./../images/Przebudowa punktu ładunkowego na stacji Trzemeszno Lubuskie, woj. lubuskie/128.jpg";
import bieniow from "./../images/Wykonanie nawierzchni na peronie nr 2 w  Bieniowie woj. lubuskie/Bieniów (6).jpg";
import milkowice from "./../images/Wykonanie odwodnienia na linii kolejowej 282 Miłkowice-Żary/013.jpg";
import jasieniec from "./../images/Wykonaniec placu w Jasieńcu, gmina Trzciel woj. lubuskie/jasieniec.jpg";

const MainPage = () => {
  const navigate = useNavigate();

  const goToGallery = (id) => {
    navigate(`/galeria/${id}`);
  };

  return (
    <div className="main-div">
      <div>
        <Container
          fluid
          className="class-for-fit-picture-mobile p-0"
          style={{ marginTop: "160px" }}
        >
          <Container
            fluid
            className="fullscreen-image
          mb-3
          mb-md-5
          mb-lg-5
          mb-xl-5
          mb-xxl-5"
          >
            <Container>
              <Row className="first-row" style={{ justifyContent: "center" }}>
                <Col
                  xl={6}
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  className="data-container"
                >
                  <div className="just-text">
                    Usługi brukarskie i wodno-kanalizacyjne
                  </div>
                </Col>
              </Row>
            </Container>
          </Container>
          <Container>
            <header>
              <h1 className="style-for-text">
                Jakość i doświadczenie poparte licznymi realizacjami
              </h1>
            </header>
            <div id="galeria">
              <Row>
                <Col xl={3} lg={4} md={6} sm={12} className="class-for-card">
                  <Card
                    style={{ height: "450px" }}
                    onClick={() => goToGallery("Żary-Niegosławice")}
                    className="shadow-lg"
                  >
                    <Card.Img
                      variant="top"
                      src={zary2}
                      className="card-image"
                      loading="lazy"
                    />
                    <Card.Body>
                      <Card.Title>Niegosławice i Żary woj.lubuskie</Card.Title>
                      <Card.Text>
                        Budowa bezodpływowych zbiorników dla wytypowanych
                        budynków.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xl={3} lg={4} md={6} sm={12} className="class-for-card">
                  <Card
                    style={{ height: "450px" }}
                    onClick={() =>
                      goToGallery("Sulechów-Międzyrzecz-Zbąszynek")
                    }
                    className="shadow-lg"
                  >
                    <Card.Img
                      variant="top"
                      src={sulechow}
                      className="card-image"
                      loading="lazy"
                    />
                    <Card.Body>
                      <Card.Title>
                        Sulechów, Międzyrzecz i Zbąszynek woj. lubuskie
                      </Card.Title>
                      <Card.Text>Budowa przyłączy wodociągowej.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xl={3} lg={4} md={6} sm={12} className="class-for-card">
                  <Card
                    style={{ height: "450px" }}
                    onClick={() => goToGallery("Opalenica")}
                    className="shadow-lg"
                  >
                    <Card.Img
                      variant="top"
                      src={opalenica}
                      className="card-image"
                      loading="lazy"
                    />
                    <Card.Body>
                      <Card.Title>Opalenica woj. wielkopolskie</Card.Title>
                      <Card.Text>
                        Budowa sieci kanalizacji deszczowej.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xl={3} lg={4} md={6} sm={12} className="class-for-card">
                  <Card
                    style={{ height: "450px" }}
                    onClick={() => goToGallery("Świebodzin")}
                    className="shadow-lg"
                  >
                    <Card.Img
                      variant="top"
                      src={swiebodzin}
                      className="card-image"
                      loading="lazy"
                    />
                    <Card.Body>
                      <Card.Title>Świebodzin woj. lubuskie</Card.Title>
                      <Card.Text>
                        Budowa sieci wodociągowej i kanalizacji santarnej.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xl={3} lg={4} md={6} sm={12} className="class-for-card">
                  <Card
                    style={{ height: "450px" }}
                    onClick={() => goToGallery("Trzciel")}
                    className="shadow-lg"
                  >
                    <Card.Img
                      variant="top"
                      src={trzciel}
                      className="card-image"
                      loading="lazy"
                    />
                    <Card.Body>
                      <Card.Title>Trzciel woj. lubuskie</Card.Title>
                      <Card.Text>Przebudowa dróg gminnych.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xl={3} lg={4} md={6} sm={12} className="class-for-card">
                  <Card
                    style={{ height: "450px" }}
                    onClick={() => goToGallery("Trzemeszno")}
                    className="shadow-lg"
                  >
                    <Card.Img
                      variant="top"
                      src={trzemeszno}
                      className="card-image"
                      loading="lazy"
                    />
                    <Card.Body>
                      <Card.Title>Trzemeszno Lubuskie woj. lubuskie</Card.Title>
                      <Card.Text>
                        Przebudowa punktu ładunkowego na stacji.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xl={3} lg={4} md={6} sm={12} className="class-for-card">
                  <Card
                    style={{ height: "450px" }}
                    onClick={() => goToGallery("Bieniów")}
                    className="shadow-lg"
                  >
                    <Card.Img
                      variant="top"
                      src={bieniow}
                      className="card-image"
                      loading="lazy"
                    />
                    <Card.Body>
                      <Card.Title>Bieniów woj. lubuskie</Card.Title>
                      <Card.Text>
                        Wykonanie nawierzchni na peronie nr2.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xl={3} lg={4} md={6} sm={12} className="class-for-card">
                  <Card
                    style={{ height: "450px" }}
                    onClick={() => goToGallery("Miłkowice-Żary")}
                    className="shadow-lg"
                  >
                    <Card.Img
                      variant="top"
                      src={milkowice}
                      className="card-image"
                      loading="lazy"
                    />
                    <Card.Body>
                      <Card.Title>Miłkowice-Żary woj. lubuskie</Card.Title>
                      <Card.Text>
                        Wykonanie odwodnienia na linii kolejowej 282.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xl={3} lg={4} md={6} sm={12} className="class-for-card">
                  <Card
                    style={{ height: "450px" }}
                    onClick={() => goToGallery("Jasieniec")}
                    className="shadow-lg"
                  >
                    <Card.Img
                      variant="top"
                      src={jasieniec}
                      className="card-image"
                      loading="lazy"
                    />
                    <Card.Body>
                      <Card.Title>Jasieniec woj. lubuskie</Card.Title>
                      <Card.Text>Wykonanie placu w Jasieńcu.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </Container>
      </div>
    </div>
  );
};

export default MainPage;
