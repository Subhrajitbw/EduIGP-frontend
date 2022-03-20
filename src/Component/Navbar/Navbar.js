import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./navbar.css";
import img from "../world/2223185.webp"
import bump from "../world/2223185.png"
import spec from "../world/spec.png"
import cloud from "../world/cloud.jpg"
import * as THREE from 'three';
function Navbar() {
  const [logo, setLogo] = useState("");
  const [top, setTop] = useState("");

  const divw = 0, divh = 0;
  var x, y;
  const col = useRef(null)
  const webgl = useRef(null)
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      //renderer.setSize(divw, divh);
      //camera.aspect = divw / divh;
      //camera.updateProjectionMatrix();
      setSize([window.innerWidth, window.innerHeight]);
      
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [])
  useEffect(() => {

    const fetch = async () => {
      const logo = await axios.get(`http://127.0.0.1:8080/logo/get?slug=slug`)
      setLogo(logo.data[0].logo)
    }
    const fetch2 = async () => {
      const tops = await axios.get(`http://127.0.0.1:8080/top/get`)
      setTop(tops.data[0])
      console.log(top);
      const scene = new THREE.Scene();
    }
    fetch();
    fetch2();
    const divh = col.current.clientHeight;
    console.log(divh);
    const divw = col.current.clientWidth;
    console.log(divw);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(39, divw / divh, 0.1, 1500);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, canvas: webgl.current });
    renderer.setSize(divw, divh);
    //document.body.appendChild(renderer.domElement);

    var geometry = new THREE.SphereGeometry(1, 100, 100);
    var material = new THREE.MeshPhysicalMaterial({
      reflectivity: 0.2,
      roughness: 0,
      metalness: 0.2,
      clearcoat: 0.6,
      clearcoatRoughness: 0.25,
      ior: 1.5,
    });

    const texture = new THREE.TextureLoader().load(img);
    material.map = texture;

    const bumpTexture = new THREE.TextureLoader().load(
      bump
    );

    const specTexture = new THREE.TextureLoader().load(
      spec
    );

    const cloudTexture = new THREE.TextureLoader().load(
      cloud
    );
    material.cloudMap = cloudTexture;
    material.bumpMap = bumpTexture;
    material.bumpScale = 0.3;
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube)

    var light = new THREE.DirectionalLight(0x232047, 0.6);
    light.castShadow = true;
    new THREE.CameraHelper(light.shadow.camera)
    light.shadow.camera.near = 100;
    light.shadow.camera.far = 200;
    light.shadow.camera.left = -20; // CHANGED
    light.shadow.camera.right = 20; // CHANGED
    light.shadow.camera.top = 20; // CHANGED
    light.shadow.camera.bottom = -20; // CHANGED

    light.position.set(20, 20, 60); // CHANGED
    scene.add(light);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0.6);
    scene.add(hemiLight);

    const alight = new THREE.AmbientLight(0x232047); // soft white light
    scene.add(alight);
    camera.position.z = 3;


    function animate() {
      requestAnimationFrame(animate);

      cube.rotation.y += 0.001;
      cube.rotation.x += 0.0001;
      renderer.render(scene, camera);
    };

    animate();

  }, [])

  return (
    <>
      <div class="top-section container-fluid">
        <div className="container-fluid top">
          <nav className="navbar navbar-expand-lg navbar-custom sticky-top">
            <div className="container text-center">
              <a className="navbar-brand navbar-brand-small" href="#"><img className="img" src={require("../world/logo.png")} /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul className="nav navbar-nav mx-auto">
                  <li className="nav-item me-2">
                    <a className="nav-link nav-menu" href="#">HOME</a>
                  </li>
                  <li className="nav-item me-2">
                    <a className="nav-link nav-menu" href="#">SERVICES</a>
                  </li>
                  <li className="nav-item me-2">
                    <a className="nav-link nav-menu" href="#">OFFERS</a>
                  </li>
                  <li className="nav-item me-2">
                    <a className="nav-link nav-menu" href="#">BLOGS</a>
                  </li>
                  <li className="nav-item me-2">
                    <a className="nav-link  nav-menu" href="#">ABOUT</a>
                  </li>
                  <li className="nav-item me-2">
                    <a className="nav-link nav-menu" href="#">Disabled</a>
                  </li>
                </ul>
              </div>
              <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto d-flex">
                  <li className="nav-item mt-2">
                    <a className="nav-menu-3" href="#"><img src={require("../world/searchVector.png")} /></a>
                  </li>
                  <li className="nav-item mt-2 mx-4">
                    <a className="nav-link nav-menu-2" href="#">Active</a>
                  </li>
                </ul>
              </div>
            </div></nav>
          <div class="container hero text-center">
            <div class="row">
              <div class="col-md-6 hero-text">
                <div dangerouslySetInnerHTML={{ __html: top.content }}>
                </div>
                <Link
                  className="btn btn-primary webiner-button"
                  to="#"
                  role="button"
                >
                  Check Our Webinars
                </Link>
              </div>
              <div class="col-md-6 text-center mt-4 py-2" ref={col}>
                <canvas class="webgl" ref={webgl}></canvas>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
