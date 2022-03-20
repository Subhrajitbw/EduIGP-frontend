import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import "./blog.css";
function Blog() {
  const { slug } = useParams();
  console.log(slug);
  const [blog, setBlogs] = useState([]);
  const [blogs, setBlog] = useState([]);
  const [categories, setcat] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const blogs = await axios.get(`http://127.0.0.1:8080/blog/get/single?slug=${slug}`);
      console.log(blogs.data);
      setBlogs(blogs.data)
    }
    const fetch2 = async () => {
      const blogs = await axios.get(`http://127.0.0.1:8080/blog/get`)
      setBlog(blog.data)
    }
    fetch();
    fetch2();
  }, [])



  const useImage = blog.map((item) => {
    return (
      <>
        <div class="col-md-9">
          <h4>{item.title}</h4>
          <h6>By: </h6>
          <img
            alt=""
            className="img-fluid img-thumb"
            src={`data:image/png;charset=utf-8;base64,${item.featuredimage.data}`}
          />
        </div>
        <div class="col-md-7">

          <div class="d-flex flex-row" dangerouslySetInnerHTML={{ __html: item.content }}>

          </div>

        </div>
      </>
    )
  })


  return (
    <div>
      <div class="container mt-5">
        <div class="row">
          {blog && useImage}
        </div>
      </div>
    </div>
  )
}

export default Blog
