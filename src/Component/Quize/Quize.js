import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom"
import "./quize.css";
function Quize() {
    let index = 0;
    let question = []
    const { slug } = useParams();
    console.log(slug)
    const [quest, setQues] = useState(null);
    let [currentQuestion, setCurrentQuestion] = useState(0);
    const [answer, setAnswer] = useState("");
    const [length, setLength] = useState(0);
    let score = 0;
    useEffect(() => {
        const fetch = async () => {
            const ques = await axios.get(`http://127.0.0.1:8080/quiz/get/single?slug=${slug}`)
            setQues(ques.data[0].questions);
            
        }
        fetch();
        
    }, [currentQuestion])

    
    function validate() {
        if (quest[currentQuestion].correct === answer) {
            score++;
            setCurrentQuestion(currentQuestion + 1)            

        }
        else {

            setCurrentQuestion(currentQuestion + 1)
        }
    }
    return (
        <div class="container">
            <div>
                {quest && (quest.length-1)>=currentQuestion  &&
                    <div>
                        <h1>Question: {quest[currentQuestion].question}</h1>
                        <h4>Answer</h4>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" onChange={(e) => setAnswer(e.target.value)} />
                            <label class="form-check-label" for="exampleRadios1">
                                {quest[currentQuestion].option1}
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" onChange={(e) => setAnswer(e.target.value)} />
                            <label class="form-check-label" for="exampleRadios2">
                                {quest[currentQuestion].option2}
                            </label>
                        </div>
                        <button className='btn btn-course justify-content-end' onClick={validate}>Next</button>
                    </div>
                }
                {quest && (quest.length-1) < currentQuestion &&
                    <div>
                        <h1>Thank you For Taking The Quiz</h1>
                        {score >= ((length * 60) / 100) &&
                            <h4><a>Get Your Certificate Here</a></h4>
                        }
                        {score < ((length * 60) / 100) &&
                            <h4>Sorry, you have not obtained the minimum marks to get a certificate</h4>
                        }
                    </div>
                }

            </div>
        </div>
    )
}

export default Quize;
