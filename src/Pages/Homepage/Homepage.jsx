import React from "react";
import amelie_cafe_BY from "../../assets/Images/Locations/Amelie_Cafe_Bens_Yard.webp";
import amelie_cafe_popup_cambridge_cookery_school from "../../assets/Images/Locations/Amelie_Cafe_Pop_Up_Cambridge_Cookery_School.jpeg";
import amelie_restraunt_BY from "../../assets/Images/Locations/Amelie_Restaurant_Bens_Yard.png";
import amelie_restraunt_the_grafton_center from "../../assets/Images/Locations/Amelie_Restaurant_The_Grafton_Centre.jpg";
import { Col, Row } from "react-bootstrap";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const locationsWithImages = [
    {
      src: amelie_cafe_BY,
      name: "Amelie Cafe",
      location: "Ben's Yard",
    },
    {
      src: amelie_cafe_popup_cambridge_cookery_school,
      name: "Amelie Cafe",
      location: "Pop Up at Cambridge Cookery School",
    },
    {
      src: amelie_restraunt_BY,
      name: "Amelie Restaurant",
      location: "Ben's Yard",
    },
    {
      src: amelie_restraunt_the_grafton_center,
      name: "Amelie Restaurant",
      location: "The Grafton Centre",
    },
  ];
  const handleRouteChange = (ele) => {
    console.log(ele);
    navigate(`/${ele?.name}`);
  };
  return (
    <div className="home-main">
      <Row className={""}>
        <Col md={6} className="mb-0 px-0">
          <img
            src={amelie_cafe_BY}
            className="img-fluid imageHeight"
            alt={`Location `}
          />
        </Col>
        <Col
          md={6}
          className="mb-0 px-0 d-flex align-items-center justify-content-center position-relative"
        >
          <div className="row position-relative">
            <div className="hover-container text-center text-md-start col-12 position-relative">
              <h3
                onClick={() => handleRouteChange(locationsWithImages[0])}
                className="mb-3 text-center cp winebarshop position-relative"
              >
                {locationsWithImages[0]?.name}
              </h3>
              <img
                src="https://cdn.shopify.com/s/files/1/0796/1051/1678/files/Lulus_Arrows-12.png?v=1691934613"
                className="arrow1home hover-image"
              />
            </div>
            <div className="hover-container-second hover-container  text-center text-md-start col-12 position-relative">
              <h3
                onClick={() => handleRouteChange(locationsWithImages[0])}
                className="text-center cp winebarshop position-relative mt-3"
              >
                {locationsWithImages[0]?.location}
              </h3>
              <img
                src="https://cdn.shopify.com/s/files/1/0796/1051/1678/files/Lulus_Arrows-14.png?v=1691934613"
                className="arrow1home hover-image-second hover-image"
              />
            </div>
          </div>
        </Col>
      </Row>
      <Row className={"flex-row-reverse"}>
        <Col md={6} className="mb-0 px-0">
          <img
            src={amelie_cafe_popup_cambridge_cookery_school}
            className="img-fluid imageHeight"
            alt={`Location `}
          />
        </Col>
        <Col
          md={6}
          className=" d-flex align-items-center justify-content-center position-relative"
        >
          <div className="row position-relative">
            <div className="hover-container-seventh hover-container  text-center text-md-start col-12 position-relative">
              <h3
                onClick={() => handleRouteChange(locationsWithImages[1])}
                className="mb-3 text-center cp winebarshop position-relative"
              >
                {locationsWithImages[1]?.name}
              </h3>
              <img
                src="https://cdn.shopify.com/s/files/1/0796/1051/1678/files/Lulus_Arrows-12.png?v=1691934613"
                className="arrow1home hover-image-seventh hover-image"
              />
            </div>
            <div className="hover-container-eight hover-container text-center text-md-start col-12 position-relative">
              <h3
                onClick={() => handleRouteChange(locationsWithImages[1])}
                className="text-center cp winebarshop position-relative mt-3"
              >
                {locationsWithImages[1]?.location}
              </h3>
              <img
                src="https://cdn.shopify.com/s/files/1/0796/1051/1678/files/Lulus_Arrows-14.png?v=1691934613"
                className="arrow1home hover-image-eight hover-image"
              />
            </div>
          </div>
        </Col>
      </Row>
      <Row className={""}>
        <Col md={6} className="mb-0 px-0">
          <img
            src={amelie_restraunt_BY}
            className="img-fluid imageHeight"
            alt={`Location `}
          />
        </Col>
        <Col
          md={6}
          className=" d-flex align-items-center justify-content-center position-relative"
        >
          <div className="row position-relative">
            <div className="hover-container-third  hover-container text-center text-md-start col-12 position-relative">
              <h3
                onClick={() => handleRouteChange(locationsWithImages[2])}
                className="mb-3 cp text-center winebarshop position-relative"
              >
                {locationsWithImages[2]?.name}
              </h3>
              <img
                src="https://cdn.shopify.com/s/files/1/0796/1051/1678/files/Lulus_Arrows-12.png?v=1691934613"
                className="arrow1home hover-image-third hover-image"
              />
            </div>
            <div className="hover-container-fourth hover-container text-center text-md-start col-12 position-relative">
              <h3
                onClick={() => handleRouteChange(locationsWithImages[2])}
                className="text-center cp winebarshop position-relative mt-3"
              >
                {locationsWithImages[2]?.location}
              </h3>
              <img
                src="https://cdn.shopify.com/s/files/1/0796/1051/1678/files/Lulus_Arrows-14.png?v=1691934613"
                className="arrow1home hover-image-fourth hover-image"
              />
            </div>
          </div>
        </Col>
      </Row>
      <Row className={"flex-row-reverse"}>
        <Col md={6} className="mb-0 px-0">
          <img
            src={amelie_restraunt_the_grafton_center}
            className="img-fluid imageHeight"
            alt={`Location `}
          />
        </Col>
        <Col
          md={6}
          className="mb-0 px-0 d-flex align-items-center justify-content-center position-relative"
        >
          <div className="row position-relative">
            <div className="hover-container-fifth hover-container  text-center text-md-start col-12 position-relative">
              <h3
                onClick={() => handleRouteChange(locationsWithImages[3])}
                className="mb-3 text-center cp winebarshop position-relative"
              >
                {locationsWithImages[3]?.name}
              </h3>
              <img
                src="https://cdn.shopify.com/s/files/1/0796/1051/1678/files/Lulus_Arrows-12.png?v=1691934613"
                className="arrow1home hover-image-fifth hover-image"
              />
            </div>
            <div className="hover-container-sixth hover-container text-center text-md-start col-12 position-relative">
              <h3
                onClick={() => handleRouteChange(locationsWithImages[3])}
                className="text-center cp winebarshop position-relative mt-3"
              >
                {locationsWithImages[3]?.location}
              </h3>
              <img
                src="https://cdn.shopify.com/s/files/1/0796/1051/1678/files/Lulus_Arrows-14.png?v=1691934613"
                className="arrow1home hover-image-sixth hover-image"
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Homepage;
