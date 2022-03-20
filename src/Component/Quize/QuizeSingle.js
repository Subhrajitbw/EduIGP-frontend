import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import "./quize.css";
function QuizeSingle() {
    const { slug } = useParams();
    console.log(slug);
    const [quiz, setQuizes] = useState([]);
    const [categories, setcat] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            const quizs = await axios.get(`http://127.0.0.1:8080/quiz/get/single?slug=${slug}`);
            console.log(quizs.data);
            setQuizes(quizs.data)
        }
        fetch();
    }, [])

    const useImage = quiz.map((item) => {
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
                    <h6>Organizer: {item.organizer}</h6>
                    <h6>Categories: {item.title}</h6>
                    <div class="d-flex flex-row" dangerouslySetInnerHTML={{ __html: item.description }}>

                    </div>

                    <section>{item.benifits}</section>

                    <Link className="btn border enroll-button-free" to={`/quiz/enroll/slug=${item.slug}`} params={{ slug: item.slug }}> Enroll

                    </Link>

                </div>
            </div>
        )
    })

    return (
        <div>
            <div class="container mt-5">

                {quiz && useImage}
            </div>
        </div>
    )
}

export default QuizeSingle
