import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./footer.css";
function Footer() {
  const [logo, setLogo] = useState("");
  useEffect(() => {
    const fetch = async () => {
      const logo = await axios.get(`http://127.0.0.1:8080/logo/get?slug=slug`)
      setLogo(logo.data[0].logo)

    }
    fetch();
  }, [])
  return (
    <div>
      <div className="footer container-fluid">
        <div className="row">
          <div className="col-md-4 text-center">
            <p>
              <b>User Links</b>
            </p>
            <p>Disclaimer</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>
          <div className="col-md-4 text-center">
            <img
              alt=""
              className="img-fluid img-thumb"
              src={`data:image/png;charset=utf-8;base64,${logo.data}`}
            />
          </div>
          <div className="col-md-4 text-center">
            <p>
              <b>Get in Touch</b>
            </p>
            <p>Disclaimer</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
