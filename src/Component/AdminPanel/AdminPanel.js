import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import "./adminpanel.css";
import { Link } from "react-router-dom";
const AdminPanel = (props) => {
  const user = JSON.parse(localStorage.getItem('userInfo'))
  const history = useHistory();

  const logout = async (e) => {
    localStorage.clear();
    window.location.href="/";
  };
  return (
    <div>
      <div>
        <nav className="navbar main-nav navbar-expand-md bg-custom navbar-dark navbar-sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img alt="logo" src={require("./logo 1.png").default} />
            </Link>
            <h3 class="headText text-center"> Admin Panel </h3>
          </div>
        </nav>
        <nav className="navbar navbar-expand-md secondary-nav bg-custom-2 navbar-dark">
          <div className="container-fluid">
            <ul className="navbar-nav nav-bottom">
              <li className="nav-item bottom-nav-item">
                <img
                  alt=""
                  className="img-fluid"
                  src="../img/check-square-1@2x.svg"
                />
              </li>
              <li className="nav-item bottom-nav-item">
                <img
                  alt=""
                  className="img-fluid"
                  src="../img/message-square@2x.svg"
                />
              </li>
              <li className="nav-item bottom-nav-item">
                <img alt="" className="img-fluid" src="../img/mail-1@2x.svg" />
              </li>
              <li className="nav-item bottom-nav-item">
                <img alt="" className="img-fluid" src="../img/calendar.svg" />
              </li>
              <li className="nav-item bottom-nav-item">
                <img
                  alt=""
                  className="img-fluid"
                  src="../../dist/img/bell@2x.svg"
                />
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item bottom-nav-item">
                <img
                  alt=""
                  className="img-fluid"
                  src="../../dist/img/bell@2x.svg"
                />
              </li>
              <li className="nav-item bottom-nav-item">
                <img alt="" className="img-fluid" src="./search-icon.svg" />
              </li>
              <li className="nav-item bottom-nav-item">
                <span className="font-weight-normal">Camilla Perez</span>
                <img
                  alt=""
                  className="rounded float-right"
                  src="./dashboard_icon.svg"
                />
              </li>
            </ul>
          </div>
        </nav>
        {/*<!-- Sidebar -->*/}
        {user.roles == "Admin" && (
          <nav
            id="sidebarMenu navbarSupportedContent"
            className=" d-lg-block sidebar bg-white navbar-collapse collapse"
          >
            <div className="position-sticky">
              <div className="list-group list-group-flush mx-3 mt-4">
                <p className="dashboard-item-name">
                  <img
                    alt=""
                    className="img-fluid"
                    src="./dashboard_icon.svg"
                  />
                  <Link to="/" style={{ color: "black" }}>
                    Dashboard
                  </Link>
                </p>
                <div className="dashboard-item row">
                  <Link
                    className="item1 list-group-item list-group-item-action py-2 ripple subitem"
                    to="/user/edit"
                  >
                    User management
                  </Link>
                  <button
                    className="item2 list-group-item list-group-item-action py-2 ripple subitem"
                    data-target="#collapseExample"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    onClick={show}
                  >
                    Manage Master Pages
                  </button>
                  <div className="master-sub" id="sub">
                    <Link
                      className="item1 list-group-item list-group-item-action py-2 ripple subitem"
                      to="/master-page"
                    >
                      Landing Page
                    </Link>
                    <Link
                      className="item2 list-group-item list-group-item-action py-2 ripple subitem"
                      to="/stores"
                    >
                      Shop
                    </Link>
                    <Link
                      className="item3 list-group-item list-group-item-action py-2 ripple subitem"
                      to="/category"
                    >
                      Categories
                    </Link>
                    <Link
                      className="item4 list-group-item list-group-item-action py-2 ripple subitem"
                      to="#"
                    >
                      Best Deals
                    </Link>
                    <Link
                      className="item5 list-group-item list-group-item-action py-2 ripple subitem"
                      to="#"
                    >
                      Surveys
                    </Link>
                    <Link
                      className="item6 list-group-item list-group-item-action py-2 ripple subitem"
                      to="#"
                    >
                      Refer and Earn
                    </Link>
                    <Link
                      className="item7 list-group-item list-group-item-action py-2 ripple subitem"
                      to="/blog"
                    >
                      Blogs
                    </Link>
                    <Link
                      className="item8 list-group-item list-group-item-action py-2 ripple subitem"
                      to="#"
                    >
                      FAQ
                    </Link>
                    <Link
                      className="item9 list-group-item list-group-item-action py-2 ripple subitem"
                      to="/how-it-works"
                    >
                      How It Works
                    </Link>
                    <Link
                      className="item10 list-group-item list-group-item-action py-2 ripple subitem"
                      to="/terms"
                    >
                      Terms and Conditions
                    </Link>
                    <Link
                      className="item10 list-group-item list-group-item-action py-2 ripple subitem"
                      to="/privacy"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      className="item10 list-group-item list-group-item-action py-2 ripple subitem"
                      to="/sitemap"
                    >
                      Site Map
                    </Link>
                    <Link
                      className="item10 list-group-item list-group-item-action py-2 ripple subitem"
                      to="#"
                    >
                      Advertise With Us
                    </Link>
                    <Link
                      className="item10 list-group-item list-group-item-action py-2 ripple subitem"
                      to="/about-page"
                    >
                      About Us
                    </Link>
                    <Link
                      className="item10 list-group-item list-group-item-action py-2 ripple subitem"
                      to="/contact"
                    >
                      Contact Us
                    </Link>
                  </div>
                  <Link
                    className="item3 list-group-item list-group-item-action py-2 ripple subitem"
                    to="/coupon"
                  >
                    Manage Coupons
                  </Link>
                  <Link
                    className="item4 list-group-item list-group-item-action py-2 ripple subitem"
                    to="/cashback"
                  >
                    Cashback Management
                  </Link>
                  <Link
                    className="item4 list-group-item list-group-item-action py-2 ripple subitem"
                    to="/search"
                  >
                    Search
                  </Link>
                  <Link
                    className="item5 list-group-item list-group-item-action py-2 ripple subitem"
                    to="#"
                  >
                    Deep link Generator
                  </Link>
                  <Link
                    className="item6 list-group-item list-group-item-action py-2 ripple subitem"
                    to="#"
                  >
                    Rewards Management
                  </Link>
                  <Link
                    className="item7 list-group-item list-group-item-action py-2 ripple subitem"
                    to="/metatags"
                  >
                    Meta Tags
                  </Link>
                  <Link
                    className="item8 list-group-item list-group-item-action py-2 ripple subitem"
                    to="/operations"
                  >
                    Operations
                  </Link>
                  <Link
                    className="item9 list-group-item list-group-item-action py-2 ripple subitem"
                    to="/reports"
                  >
                    Reports
                  </Link>
                  <Link
                    className="item10 list-group-item list-group-item-action py-2 ripple subitem"
                    to="#"
                  >
                    Email Marketing
                  </Link>
                  <button
                    className="item10 list-group-item list-group-item-action py-2 ripple subitem"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </nav>
        )}
        {user.roles == "Editor" && (
          <nav
            id="sidebarMenu navbarSupportedContent"
            className=" d-lg-block sidebar bg-white navbar-collapse collapse"
          >
            <div className="position-sticky">
              <div className="list-group list-group-flush mx-3 mt-4">
                <p className="dashboard-item-name">
                  <img
                    alt=""
                    className="img-fluid"
                    src="./dashboard_icon.svg"
                  />
                  <Link to="/" style={{ color: "black" }}>
                    Dashboard
                  </Link>
                </p>
                <div className="dashboard-item row">
                  <button
                    className="item2 list-group-item list-group-item-action py-2 ripple subitem"
                    data-target="#collapseExample"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    onClick={show}
                  >
                    Manage Master Pages
                  </button>
                  <div className="master-sub" id="sub">
                    <Link
                      className="item1 list-group-item list-group-item-action py-2 ripple subitem"
                      to="/master-page"
                    >
                      Landing Page
                    </Link>
                    <Link
                      className="item2 list-group-item list-group-item-action py-2 ripple subitem"
                      to="/stores"
                    >
                      Shop
                    </Link>
                    <Link
                      className="item3 list-group-item list-group-item-action py-2 ripple subitem"
                      to="/category"
                    >
                      Categories
                    </Link>
                    <Link
                      className="item4 list-group-item list-group-item-action py-2 ripple subitem"
                      to="#"
                    >
                      Best Deals
                    </Link>
                    <Link
                      className="item5 list-group-item list-group-item-action py-2 ripple subitem"
                      to="#"
                    >
                      Surveys
                    </Link>
                    <Link
                      className="item6 list-group-item list-group-item-action py-2 ripple subitem"
                      to="#"
                    >
                      Refer and Earn
                    </Link>
                    <Link
                      className="item7 list-group-item list-group-item-action py-2 ripple subitem"
                      to="/blog"
                    >
                      Blogs
                    </Link>
                    <Link
                      className="item8 list-group-item list-group-item-action py-2 ripple subitem"
                      to="#"
                    >
                      FAQ
                    </Link>
                    <Link
                      className="item9 list-group-item list-group-item-action py-2 ripple subitem"
                      to="/how-it-works"
                    >
                      How It Works
                    </Link>
                    <Link
                      className="item10 list-group-item list-group-item-action py-2 ripple subitem"
                      to="/terms"
                    >
                      Terms and Conditions
                    </Link>
                    <Link
                      className="item10 list-group-item list-group-item-action py-2 ripple subitem"
                      to="/privacy"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      className="item10 list-group-item list-group-item-action py-2 ripple subitem"
                      to="/sitemap"
                    >
                      Site Map
                    </Link>
                    <Link
                      className="item10 list-group-item list-group-item-action py-2 ripple subitem"
                      to="#"
                    >
                      Advertise With Us
                    </Link>
                    <Link
                      className="item10 list-group-item list-group-item-action py-2 ripple subitem"
                      to="/about-page"
                    >
                      About Us
                    </Link>
                    <Link
                      className="item10 list-group-item list-group-item-action py-2 ripple subitem"
                      to="/contact"
                    >
                      Contact Us
                    </Link>
                  </div>

                  <button
                    className="item10 list-group-item list-group-item-action py-2 ripple subitem"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </div>
  );

  function show() {
    var x = document.getElementById("sub");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
};

export default AdminPanel;
