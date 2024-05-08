import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="py-5 header-nav-container">
        <Row md={12} xl={12}>
          <Col
            xl={3}
            md={2}
            className="logo d-flex align-items-center cp pb-0 mb-0 pt-2 justify-content-center"
            as={"h3"}
            onClick={() => navigate("/")}
          >
            Amelie Restaurants
          </Col>
          <Col md={7} className="">
            <div className="header-nav-wapper main-menu-wapper">
              <div className="header-nav">
                <div className="container-wapper">
                  <ul
                    className="stelina-clone-mobile-menu d-flex justify-content-end stelina-nav main-menu "
                    id="menu-main-menu"
                  >
                    <li className="menu-item menu-item-has-children px-4">
                      <Link to={"/ourstory"} className="underline">
                        Our Story
                      </Link>

                      <span className="underline-animation"></span>
                      <span className="toggle-submenu "></span>
                      {/* <ul className="submenu">
                        <li className="menu-item">
                          <Link
                            to="index.html"
                            className="text-decoration-none"
                          >
                            Home 01
                          </Link>
                        </li>
                        <li className="menu-item">
                          <Link
                            to="home2.html"
                            className="text-decoration-none"
                          >
                            Home 02
                          </Link>
                        </li>
                        <li className="menu-item">
                          <Link
                            to="home3.html"
                            className="text-decoration-none"
                          >
                            Home 03
                          </Link>
                        </li>
                      </ul> */}
                    </li>

                    {/* <li className="menu-item menu-item-has-children px-4"> */}
                    {/* <Link to={"shop"} className="underline">
                        Shop
                      </Link> */}

                    {/* <span className="underline-animation"></span>
                      <span className="toggle-submenu"></span> */}
                    {/* <ul className="submenu">
                        <li className="menu-item">
                          <Link to="gridproducts.html">Grid Fullwidth</Link>
                        </li>
                        <li className="menu-item">
                          <Link to="gridproducts_leftsidebar.html">
                            Grid Left sidebar
                          </Link>
                        </li>
                        <li className="menu-item">
                          <Link to="gridproducts_bannerslider.html">
                            Grid Bannerslider
                          </Link>
                        </li>
                        <li className="menu-item">
                          <Link to="listproducts.html">List</Link>
                        </li>
                      </ul> */}
                    {/* </li> */}

                    <li className="menu-item  menu-item-has-children item-megamenu px-4">
                      <Link
                        to="book"
                        className="underline stelina-menu-item-title"
                        // title="Pagesj"
                      >
                        Book
                      </Link>
                      <span className="underline-animation"></span>
                      <span className="toggle-submenu"></span>
                      {/* Add submenu items for Book */}
                    </li>

                    <li className="menu-item  menu-item-has-children px-4">
                      <Link
                        to="menu"
                        className="underline stelina-menu-item-title"
                        // title="Blogs"
                      >
                        Menu
                      </Link>
                      <span className="underline-animation"></span>
                      <span className="toggle-submenu"></span>
                      <ul className="submenu">
                        {/* Add submenu items for Menu */}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col className="d-flex pt-1 justify-content-center">
            <Col className="text-center">
              <Link className="pe-3 navbar-icons">
                <IoIosSearch color="#191B4D" size={"1.3rem"} />
              </Link>
            </Col>
            {/* <Col>
              <Link
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                className="ps-4 navbar-icons"
              >
                <FiShoppingCart color="#191B4D" size={"1rem"} />
              </Link>
            </Col> */}
          </Col>
        </Row>
        {/* <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div
            className=""
            style={{ borderBottom: "1px solid black" }}
            class="offcanvas-header"
          >
            <h5 class="offcanvas-title" id="offcanvasRightLabel">
              Cart
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <Row className="d-flex flex-column mt-4">
              <Col className="text-center mt-5">Your Cart is Empty</Col>
              <Col className="mt-4 text-center">
                <button
                  className="returnToShoppingBtn px-4 py-2"
                  data-bs-dismiss="offcanvas"
                >
                  Return to shopping
                </button>
              </Col>
            </Row>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
