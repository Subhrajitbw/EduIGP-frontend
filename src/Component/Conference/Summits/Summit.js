import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import "./summit.css";
function Summit() {
    const [summit, setWeb] = useState([]);
    const [categories, setcat] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            const web = await axios.get(`http://127.0.0.1:8080/summit/get`);
            setWeb(web.data)
        }
        const fetch2 = async () => {
            const catgeory = await axios.get(
                `http://127.0.0.1:8080/category/get/all`);
            setcat(catgeory.data)
        }
        fetch()
        fetch2()
    }, [])
    const useCat = categories.map((item) => {
        return (
            <div className="form-check d-flex d-flex">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                    {item.name}
                </label>

            </div>
        )
    })
    const useItems = summit.map((item) => {
        return (
            <div className="col-lg-4 col-md-6 mt-5">
                <div className="card d-flex flex-column align-items-center">
                    <div className="product-name"><Link to={`/conference/slug=${item.slug}`} params={{ slug: item.slug }}>{item.title}</Link></div>
                    <div className="card-img">
                        <img src={`data:image/png;charset=utf-8;base64,${item.image.data}`} alt="" />

                    </div>
                    <div className="card-body pt-5">

                        <div className="d-flex align-items-center justify-content-center colors my-2">
                            <button className="btn btn-course">Enroll</button>
                            <button className="btn btn-course">Share</button>
                            <button className="btn btn-course">View</button>
                        </div>
                        <div className="caption">
                            <button className="btn btn-diff">{item.difficulty}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (


        <div className="container">
            <div className="bg-white rounded d-flex align-items-center justify-content-between" id="header">
                <button className="btn btn-hide text-uppercase" type="button" data-toggle="collapse" data-target="#filterbar" aria-expanded="false" aria-controls="filterbar" id="filter-btn" onclick="changeBtnTxt()">
                    <span id="btn-txt">Category filters</span>
                </button>
                <nav className="navbar navbar-expand-lg navbar-light pl-lg-0 pl-auto">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mynav" aria-controls="mynav" aria-expanded="false" aria-label="Toggle navigation" onclick="chnageIcon()" id="icon">
                        <span className="navbar-toggler-icon" />
                    </button>

                </nav>

            </div>
            <div id="content" className="my-5">
                <div id="filterbar" className="collapse">

                    <div className="box border-bottom">
                        {categories && useCat}
                    </div>

                </div>
                <div id="products">
                    <div className="row mx-0">
                        {summit && useItems}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summit
