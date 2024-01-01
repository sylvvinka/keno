import React from "react";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

import { useParams } from "react-router-dom";

import "./Gallery.css";

import foto1 from "./../images/Budowa bezodpływowych zbiorników dla wytypowanych budynków w Żarach i Niegosławicach woj. lubuskie/Niegosławice (1).jpg";
import foto2 from "./../images/Budowa bezodpływowych zbiorników dla wytypowanych budynków w Żarach i Niegosławicach woj. lubuskie/Niegosławice (2).jpg";
import foto3 from "./../images/Budowa bezodpływowych zbiorników dla wytypowanych budynków w Żarach i Niegosławicach woj. lubuskie/Niegosławice (3).jpg";
import foto4 from "./../images/Budowa bezodpływowych zbiorników dla wytypowanych budynków w Żarach i Niegosławicach woj. lubuskie/Niegosławice (4).jpg";
import foto5 from "./../images/Budowa bezodpływowych zbiorników dla wytypowanych budynków w Żarach i Niegosławicach woj. lubuskie/Niegosławice (5).jpg";
import foto6 from "./../images/Budowa bezodpływowych zbiorników dla wytypowanych budynków w Żarach i Niegosławicach woj. lubuskie/Niegosławice (6).jpg";
import foto7 from "./../images/Budowa bezodpływowych zbiorników dla wytypowanych budynków w Żarach i Niegosławicach woj. lubuskie/Żary (2).jpg";
import foto8 from "./../images/Budowa bezodpływowych zbiorników dla wytypowanych budynków w Żarach i Niegosławicach woj. lubuskie/Żary (3).jpg";
import foto9 from "./../images/Budowa bezodpływowych zbiorników dla wytypowanych budynków w Żarach i Niegosławicach woj. lubuskie/Żary (4).jpg";
import foto10 from "./../images/Budowa bezodpływowych zbiorników dla wytypowanych budynków w Żarach i Niegosławicach woj. lubuskie/Żary (5).jpg";
import foto11 from "./../images/Budowa bezodpływowych zbiorników dla wytypowanych budynków w Żarach i Niegosławicach woj. lubuskie/Żary (6).jpg";

import foto12 from "./../images/Budowa przyłączy wodociągowej w Sulechowie, MIędzyrzeczu i Zbąszynku woj. lubuskie/IMG20221116110711.jpg";
import foto13 from "./../images/Budowa przyłączy wodociągowej w Sulechowie, MIędzyrzeczu i Zbąszynku woj. lubuskie/IMG20221116110720.jpg";
import foto14 from "./../images/Budowa przyłączy wodociągowej w Sulechowie, MIędzyrzeczu i Zbąszynku woj. lubuskie/IMG20221118102126.jpg";
import foto15 from "./../images/Budowa przyłączy wodociągowej w Sulechowie, MIędzyrzeczu i Zbąszynku woj. lubuskie/IMG_20221107_104025.jpg";
import foto16 from "./../images/Budowa przyłączy wodociągowej w Sulechowie, MIędzyrzeczu i Zbąszynku woj. lubuskie/IMG_20221107_104033.jpg";
import foto17 from "./../images/Budowa przyłączy wodociągowej w Sulechowie, MIędzyrzeczu i Zbąszynku woj. lubuskie/IMG_20221107_104044.jpg";
import foto18 from "./../images/Budowa przyłączy wodociągowej w Sulechowie, MIędzyrzeczu i Zbąszynku woj. lubuskie/IMG_20221108_091504.jpg";
import foto19 from "./../images/Budowa przyłączy wodociągowej w Sulechowie, MIędzyrzeczu i Zbąszynku woj. lubuskie/IMG_20221109_112942.jpg";
import foto20 from "./../images/Budowa przyłączy wodociągowej w Sulechowie, MIędzyrzeczu i Zbąszynku woj. lubuskie/IMG_20221110_090627.jpg";
import foto21 from "./../images/Budowa przyłączy wodociągowej w Sulechowie, MIędzyrzeczu i Zbąszynku woj. lubuskie/IMG_20221115_141526.jpg";

import foto22 from "./../images/Budowa sieci kanalizacji deszczowej w Opalenicy, woj. wielkopolskie/CAM00494.jpg";
import foto23 from "./../images/Budowa sieci kanalizacji deszczowej w Opalenicy, woj. wielkopolskie/CAM00498.jpg";
import foto24 from "./../images/Budowa sieci kanalizacji deszczowej w Opalenicy, woj. wielkopolskie/CAM00506.jpg";
import foto25 from "./../images/Budowa sieci kanalizacji deszczowej w Opalenicy, woj. wielkopolskie/CAM00508.jpg";
import foto26 from "./../images/Budowa sieci kanalizacji deszczowej w Opalenicy, woj. wielkopolskie/CAM00522.jpg";
import foto27 from "./../images/Budowa sieci kanalizacji deszczowej w Opalenicy, woj. wielkopolskie/CAM00543.jpg";
import foto28 from "./../images/Budowa sieci kanalizacji deszczowej w Opalenicy, woj. wielkopolskie/CAM00589.jpg";

import foto29 from "./../images/Budowa sieci wodociągowej i kanalizacji santarnej w Świebodzinie woj. lubuskie/20201015_141253.jpg";
import foto30 from "./../images/Budowa sieci wodociągowej i kanalizacji santarnej w Świebodzinie woj. lubuskie/20201016_125527.jpg";
import foto31 from "./../images/Budowa sieci wodociągowej i kanalizacji santarnej w Świebodzinie woj. lubuskie/20201016_125553.jpg";
import foto32 from "./../images/Budowa sieci wodociągowej i kanalizacji santarnej w Świebodzinie woj. lubuskie/20201118_112159.jpg";
import foto33 from "./../images/Budowa sieci wodociągowej i kanalizacji santarnej w Świebodzinie woj. lubuskie/20201118_114617.jpg";

import foto34 from "./../images/Przebudowa dróg gminnych w Trzcielu woj. lubuskie/DSC00018.jpg";
import foto35 from "./../images/Przebudowa dróg gminnych w Trzcielu woj. lubuskie/DSC00021.jpg";
import foto36 from "./../images/Przebudowa dróg gminnych w Trzcielu woj. lubuskie/DSC00164.jpg";
import foto37 from "./../images/Przebudowa dróg gminnych w Trzcielu woj. lubuskie/DSC00165.jpg";
import foto38 from "./../images/Przebudowa dróg gminnych w Trzcielu woj. lubuskie/DSC00168.jpg";
import foto39 from "./../images/Przebudowa dróg gminnych w Trzcielu woj. lubuskie/DSC00170.jpg";
import foto40 from "./../images/Przebudowa dróg gminnych w Trzcielu woj. lubuskie/DSC00174.jpg";
import foto41 from "./../images/Przebudowa dróg gminnych w Trzcielu woj. lubuskie/DSC00189.jpg";
import foto42 from "./../images/Przebudowa dróg gminnych w Trzcielu woj. lubuskie/DSC00193.jpg";
import foto43 from "./../images/Przebudowa dróg gminnych w Trzcielu woj. lubuskie/DSC00195.jpg";
import foto44 from "./../images/Przebudowa dróg gminnych w Trzcielu woj. lubuskie/DSC00201.jpg";
import foto45 from "./../images/Przebudowa dróg gminnych w Trzcielu woj. lubuskie/DSC00203.jpg";
import foto46 from "./../images/Przebudowa dróg gminnych w Trzcielu woj. lubuskie/DSC00217.jpg";
import foto47 from "./../images/Przebudowa dróg gminnych w Trzcielu woj. lubuskie/DSC00225.jpg";
import foto48 from "./../images/Przebudowa dróg gminnych w Trzcielu woj. lubuskie/DSC00241.jpg";
import foto49 from "./../images/Przebudowa dróg gminnych w Trzcielu woj. lubuskie/DSC00251.jpg";
import foto50 from "./../images/Przebudowa dróg gminnych w Trzcielu woj. lubuskie/DSC00259.jpg";
import foto51 from "./../images/Przebudowa dróg gminnych w Trzcielu woj. lubuskie/DSC00270.jpg";
import foto52 from "./../images/Przebudowa dróg gminnych w Trzcielu woj. lubuskie/DSC00272.jpg";
import foto53 from "./../images/Przebudowa dróg gminnych w Trzcielu woj. lubuskie/DSC00274.jpg";
import foto54 from "./../images/Przebudowa dróg gminnych w Trzcielu woj. lubuskie/DSC00275.jpg";
import foto55 from "./../images/Przebudowa dróg gminnych w Trzcielu woj. lubuskie/DSC00285.jpg";
import foto56 from "./../images/Przebudowa dróg gminnych w Trzcielu woj. lubuskie/DSC00287.jpg";

import foto58 from "./../images/Przebudowa punktu ładunkowego na stacji Trzemeszno Lubuskie, woj. lubuskie/021.jpg";
import foto59 from "./../images/Przebudowa punktu ładunkowego na stacji Trzemeszno Lubuskie, woj. lubuskie/024.jpg";
import foto60 from "./../images/Przebudowa punktu ładunkowego na stacji Trzemeszno Lubuskie, woj. lubuskie/053.jpg";
import foto61 from "./../images/Przebudowa punktu ładunkowego na stacji Trzemeszno Lubuskie, woj. lubuskie/062.jpg";
import foto62 from "./../images/Przebudowa punktu ładunkowego na stacji Trzemeszno Lubuskie, woj. lubuskie/071.jpg";
import foto63 from "./../images/Przebudowa punktu ładunkowego na stacji Trzemeszno Lubuskie, woj. lubuskie/111.jpg";
import foto64 from "./../images/Przebudowa punktu ładunkowego na stacji Trzemeszno Lubuskie, woj. lubuskie/115.jpg";
import foto65 from "./../images/Przebudowa punktu ładunkowego na stacji Trzemeszno Lubuskie, woj. lubuskie/121.jpg";
import foto66 from "./../images/Przebudowa punktu ładunkowego na stacji Trzemeszno Lubuskie, woj. lubuskie/123.jpg";
import foto67 from "./../images/Przebudowa punktu ładunkowego na stacji Trzemeszno Lubuskie, woj. lubuskie/128.jpg";
import foto68 from "./../images/Przebudowa punktu ładunkowego na stacji Trzemeszno Lubuskie, woj. lubuskie/136.jpg";
import foto69 from "./../images/Przebudowa punktu ładunkowego na stacji Trzemeszno Lubuskie, woj. lubuskie/149.jpg";
import foto70 from "./../images/Przebudowa punktu ładunkowego na stacji Trzemeszno Lubuskie, woj. lubuskie/153.jpg";
import foto71 from "./../images/Przebudowa punktu ładunkowego na stacji Trzemeszno Lubuskie, woj. lubuskie/154.jpg";
import foto72 from "./../images/Przebudowa punktu ładunkowego na stacji Trzemeszno Lubuskie, woj. lubuskie/158.jpg";
import foto73 from "./../images/Przebudowa punktu ładunkowego na stacji Trzemeszno Lubuskie, woj. lubuskie/160.jpg";
import foto74 from "./../images/Przebudowa punktu ładunkowego na stacji Trzemeszno Lubuskie, woj. lubuskie/163.jpg";
import foto75 from "./../images/Przebudowa punktu ładunkowego na stacji Trzemeszno Lubuskie, woj. lubuskie/166.jpg";
import foto76 from "./../images/Przebudowa punktu ładunkowego na stacji Trzemeszno Lubuskie, woj. lubuskie/173.jpg";
import foto77 from "./../images/Przebudowa punktu ładunkowego na stacji Trzemeszno Lubuskie, woj. lubuskie/183.jpg";
import foto78 from "./../images/Przebudowa punktu ładunkowego na stacji Trzemeszno Lubuskie, woj. lubuskie/187.jpg";

import foto79 from "./../images/Wykonanie nawierzchni na peronie nr 2 w  Bieniowie woj. lubuskie/Bieniów (15).jpg";
import foto80 from "./../images/Wykonanie nawierzchni na peronie nr 2 w  Bieniowie woj. lubuskie/Bieniów (17).jpg";
import foto81 from "./../images/Wykonanie nawierzchni na peronie nr 2 w  Bieniowie woj. lubuskie/Bieniów (2).jpg";
import foto82 from "./../images/Wykonanie nawierzchni na peronie nr 2 w  Bieniowie woj. lubuskie/Bieniów (20).jpg";
import foto83 from "./../images/Wykonanie nawierzchni na peronie nr 2 w  Bieniowie woj. lubuskie/Bieniów (25).jpg";
import foto84 from "./../images/Wykonanie nawierzchni na peronie nr 2 w  Bieniowie woj. lubuskie/Bieniów (28).jpg";
import foto85 from "./../images/Wykonanie nawierzchni na peronie nr 2 w  Bieniowie woj. lubuskie/Bieniów (3).jpg";
import foto86 from "./../images/Wykonanie nawierzchni na peronie nr 2 w  Bieniowie woj. lubuskie/Bieniów (4).jpg";
import foto87 from "./../images/Wykonanie nawierzchni na peronie nr 2 w  Bieniowie woj. lubuskie/Bieniów (6).jpg";
import foto88 from "./../images/Wykonanie nawierzchni na peronie nr 2 w  Bieniowie woj. lubuskie/Bieniów (9).jpg";

import foto89 from "./../images/Wykonanie odwodnienia na linii kolejowej 282 Miłkowice-Żary/001.jpg";
import foto90 from "./../images/Wykonanie odwodnienia na linii kolejowej 282 Miłkowice-Żary/005.jpg";
import foto91 from "./../images/Wykonanie odwodnienia na linii kolejowej 282 Miłkowice-Żary/006.jpg";
import foto92 from "./../images/Wykonanie odwodnienia na linii kolejowej 282 Miłkowice-Żary/007.jpg";
import foto93 from "./../images/Wykonanie odwodnienia na linii kolejowej 282 Miłkowice-Żary/009.jpg";
import foto94 from "./../images/Wykonanie odwodnienia na linii kolejowej 282 Miłkowice-Żary/010.jpg";
import foto95 from "./../images/Wykonanie odwodnienia na linii kolejowej 282 Miłkowice-Żary/011.jpg";
import foto96 from "./../images/Wykonanie odwodnienia na linii kolejowej 282 Miłkowice-Żary/013.jpg";
import foto97 from "./../images/Wykonanie odwodnienia na linii kolejowej 282 Miłkowice-Żary/014.jpg";
import foto98 from "./../images/Wykonanie odwodnienia na linii kolejowej 282 Miłkowice-Żary/015.jpg";
import foto99 from "./../images/Wykonanie odwodnienia na linii kolejowej 282 Miłkowice-Żary/016.jpg";
import foto100 from "./../images/Wykonanie odwodnienia na linii kolejowej 282 Miłkowice-Żary/017.jpg";

import foto101 from "./../images/Wykonaniec placu w Jasieńcu, gmina Trzciel woj. lubuskie/jasieniec.jpg";

const images = [
  foto1,
  foto2,
  foto3,
  foto4,
  foto5,
  foto6,
  foto7,
  foto8,
  foto9,
  foto10,
  foto11,
];

const images2 = [
  foto12,
  foto13,
  foto14,
  foto15,
  foto16,
  foto17,
  foto18,
  foto19,
  foto20,
  foto21,
];

const images3 = [foto22, foto23, foto24, foto25, foto26, foto27, foto28];
const images4 = [foto29, foto30, foto31, foto32, foto33];
const images5 = [
  foto34,
  foto35,
  foto36,
  foto37,
  foto38,
  foto39,
  foto40,
  foto41,
  foto42,
  foto43,
  foto44,
  foto45,
  foto46,
  foto47,
  foto48,
  foto49,
  foto50,
  foto51,
  foto52,
  foto53,
  foto54,
  foto55,
  foto56,
];

const images6 = [
  foto58,
  foto59,
  foto60,
  foto61,
  foto62,
  foto63,
  foto64,
  foto65,
  foto66,
  foto67,
  foto68,
  foto69,
  foto70,
  foto71,
  foto72,
  foto73,
  foto74,
  foto75,
  foto76,
  foto77,
  foto78,
];

const images7 = [
  foto79,
  foto80,
  foto81,
  foto82,
  foto83,
  foto84,
  foto85,
  foto86,
  foto87,
  foto88,
];

const images8 = [
  foto89,
  foto90,
  foto91,
  foto92,
  foto93,
  foto94,
  foto95,
  foto96,
  foto97,
  foto98,
  foto99,
  foto100,
];

const images9 = [foto101];

function Gallery() {
  const [showModal, setShowModal] = React.useState(false);
  const [activeImage, setActiveImage] = React.useState("");

  const { galleryId } = useParams();

  let imagesToDisplay;

  switch (galleryId) {
    case "Żary-Niegosławice":
      imagesToDisplay = images;
      break;
    case "Sulechów-Międzyrzecz-Zbąszynek":
      imagesToDisplay = images2;
      break;
    case "Opalenica":
      imagesToDisplay = images3;
      break;
    case "Świebodzin":
      imagesToDisplay = images4;
      break;
    case "Trzciel":
      imagesToDisplay = images5;
      break;
    case "Trzemeszno":
      imagesToDisplay = images6;
      break;
    case "Bieniów":
      imagesToDisplay = images7;
      break;
    case "Miłkowice-Żary":
      imagesToDisplay = images8;
      break;
    case "Jasieniec":
      imagesToDisplay = images9;
      break;
    default:
      imagesToDisplay = [];
  }
  const openModal = (imageUrl) => {
    setActiveImage(imageUrl);
    setShowModal(true);
  };

  console.log(galleryId);
  console.log(imagesToDisplay);

  return (
    <>
      <div className="gallery-container">
        {imagesToDisplay &&
          imagesToDisplay.map((image, index) => (
            <img
              key={index}
              className="gallery-item"
              src={image}
              // alt={`Image ${index}`}
              alt=""
              onClick={() => openModal(image)}
              loading="lazy"
            />
          ))}
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={activeImage} alt="Powiększone zdjęcie" fluid />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Gallery;
