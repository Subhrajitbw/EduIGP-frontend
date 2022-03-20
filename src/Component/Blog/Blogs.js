import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import "./blog.css";
function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setcat] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const blogs = await axios.get(`http://127.0.0.1:8080/blog/get`);
      setBlogs(blogs.data)
    }
    const fetch2 = async () => {
      const catgeory = await axios.get(
        `http://127.0.0.1:8080/category/get/all`);
      setcat(catgeory.data)
    }
    fetch();
    fetch2();
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
  const useItems = blogs.map((item) => {
    return (
      <div className="col-lg-4 col-md-6 mt-5">
        <div className="card d-flex flex-column align-items-center">
          <div className="product-name mb-4"><Link to={`/blog/slug=${item.slug}`} params={{ slug: item.slug }}>{item.title}</Link></div>
          <div className="card-img">
            <img class="thumbnail" src={`data:image/png;charset=utf-8;base64,${item.featuredimage.data}`} alt="" />

          </div>
          <div className="card-body pt-5">
            <div class="info">
              <p>{item.creator}</p>
            </div>

            <div className="d-flex align-items-center justify-content-center colors my-2">
              <Link to={`/blog/slug=${item.slug}`} params={{ slug: item.slug }}>Read More</Link>
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
        {/* <nav className="navbar navbar-expand-lg navbar-light pl-lg-0 pl-auto">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mynav" aria-controls="mynav" aria-expanded="false" aria-label="Toggle navigation" onclick="chnageIcon()" id="icon">
                        <span className="navbar-toggler-icon" />
                    </button>
                    
                </nav> */}

      </div>
      <div id="content" className="my-5">
        <div id="filterbar" className="collapse">

          <div className="box border-bottom">
            {categories && useCat}
          </div>

        </div>
        <div id="products">
          <div className="row mx-0">
            {blogs && useItems}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Blogs
