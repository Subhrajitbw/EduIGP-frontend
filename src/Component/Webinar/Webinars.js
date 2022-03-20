import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import "./webinar.css";
function Webinars() {
    const { slug } = useParams();
    console.log(slug);
    const [webinar, setWebinars] = useState([]);
    const [categories, setcat] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            const webinars = await axios.get(`http://127.0.0.1:8080/webinar/get/single?slug=${slug}`);
            console.log(webinars.data);
            setWebinars(webinars.data)
        }
        fetch();
    }, [])

    const useImage = webinar.map((item) => {
        return (
            <div class="row">
                <div class="col-md-5">
                    <img
                        alt=""
                        className="img-thumbnail img-fluid img-thumb"
                        src={`data:image/png;charset=utf-8;base64,${item.image.data}`}
                    />
                </div>
                <div class="col-md-7">
                    <h4>{item.title}</h4>

                    <div class="d-flex flex-row" dangerouslySetInnerHTML={{ __html: item.description }}>

                    </div>

                    <section>{item.benifits}</section>

                    <Link className="btn border enroll-button-free" to={`/webinar/enroll/slug=${item.slug}`} params={{ slug: item.slug }}> Enroll

                    </Link>

                </div>
            </div>
        )
    })

    return (
        <div>
            <div class="container mt-5">

                {webinar && useImage}
            </div>
        </div>
    )
}

export default Webinars
