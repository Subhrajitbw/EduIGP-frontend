import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Services from "./Services";
import BlogSlider from "../Slider/BlogSlider";
import img from "../world/trans.png"
import * as THREE from 'three';
import Offers from "./Offers";
import Notice from "./Notice";
import Count from "./Count";
import Tab from "./Tab";

function Home() {
  const [top, setTop] = useState("");
  const webgl = useRef(null)
  const col = useRef(null)
  useEffect(() => {

    const fetch = async () => {
      const tops = await axios.get(`http://127.0.0.1:8080/top/get`)
      setTop(tops.data[0])
      console.log(top);
      const scene = new THREE.Scene();
    }
    fetch();
  }, [])

  return (
    <div>
      <Count />
      {/*<!--Notice Section-->*/}
      <div class="container text-center mt-1">

        <div id="video-laptop" >
          <img class="img-fluid" src={require("../world/human.png")} alt="" />
          <iframe width="542" height="315" src="https://www.youtube.com/embed/29lK_8OHmx4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <Notice />
      <div class="wow fadeInUpBig">
        <Tab />
      </div>

      {/*<!--Our Services-->*/}
      <div id="service" class="wow fadeInLeftBig">
        <Services />
      </div>
      {/*<!--Our Offers-->*/}

      <div id="offers" class="wow fadeInRightBig">
        <Offers />
        <div className="container text-center our-services">
          <Link className="btn btn-primary services-button" to="#" role="button">
            Support Us
          </Link>
          <section className="vh-50">
            <div className="container-fluid h-custom">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-9 col-lg-6 col-xl-5">
                  <img
                    src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png"
                    className="img-fluid"
                    alt="Sample"
                  />
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                  <form class="mb-5">
                    <div className="divider d-flex text-center align-items-center my-4">
                      <p
                        className="text-left fw-bold mx-3 mb-0"
                        style={{ color: "#162374" }}
                      >
                        <b>Let's make education more interesting together</b>
                      </p>
                    </div>

                    {/*<!-- Email input -->*/}
                    <div className="form-outline d-flex justify-content-center mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control text-center col-md-12"
                        placeholder="Enter a valid email address"
                      />

                    </div>

                    <div className="form-outline d-flex justify-content-center mb-4">
                      <input
                        type="Text"
                        id="form3Example4"
                        className="form-control text-center col-md-12"
                        placeholder="Enter Name"
                      />

                    </div>

                    <div className="text-center text-lg-start mt-4 pt-2">
                      <button
                        type="button"
                        className="btn btn-lg"
                        style={{
                          paddingLeft: "2.5rem",
                          paddingRight: "2.5rem",
                          backgroundColor: "#487cc1",
                          color: "white"
                        }}
                      >
                        Donate
                      </button>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </section>
        </div>
      </div>
      <BlogSlider />
    </div>

  );

}

export default Home;
