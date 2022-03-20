import React from "react";
import { Link } from "react-router-dom";
import "./studentprofile.css";
const StudentProfile = () => {
  return (
    <div>
      <div class="tab col-md-12">
        <button class="tablinks" onclick="openCity(event, 'Completed')">
          Completed
        </button>
        <button class="tablinks" onclick="openCity(event, 'Paris')">
          Paris
        </button>
        <button class="tablinks" onclick="openCity(event, 'Tokyo')">
          Tokyo
        </button>
      </div>

      <div id="Completed" class="tabcontent">
        <div class="container prgs-list text-center">
          <form>
            <label class="radio-inline progess-list" id="Course">
              <input
                type="radio"
                name="optradio"
                data-toggle-value="courses"
              />Course
            </label>
            <label class="radio-inline progess-list" id="Webinar">
              <input
                type="radio"
                name="optradio"
                onclick="openCity(event, 'webinar')"
              />Webinar
            </label>
            <label class="radio-inline progess-list">
              <input type="radio" name="optradio" />Quiz
            </label>
          </form>
        </div>
        <div id="Courses" data-toggle-group="courses">
          <div class="row justify-content-center align-items-center h-100 trainer-heading">
            <h2>Courses</h2>
          </div>
          <div class="col-12 course-card">
            <div class="container">
              <div class="row align-items-center h-100 mx-auto">
                <div class="col-sm-3 col-md-6">
                  <div class="card course-card-deck">
                    <img
                      class="card-img-top img-fluid"
                      src="course.png"
                      alt="Card image cap"
                    />
                    <div class="star-review d-flex">
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                    </div>
                    <div class="card-block">
                      <h5 class="card-title text-left title-card-deck-course">
                        Collaboration Extension &amp; Linakges
                      </h5>
                      <div class="icon-number d-flex">
                        <i class="fas fa-user" />
                        <h6>9</h6>
                        <i class="fas fa-clock" />
                        <h6>3</h6>
                      </div>
                      <div class="class-date">
                        <p>Class Date:11/12/2021</p>
                      </div>
                      <div class="enroll-button d-flex justify-content-center align-items-center">
                        <button
                          class="btn border border-left-0 text-left enroll-button-free"
                          type="button"
                        >
                          Download Certificate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3 col-md-6">
                  <div class="card course-card-deck">
                    <img
                      class="card-img-top img-fluid"
                      src="course.png"
                      alt="Card image cap"
                    />
                    <div class="star-review d-flex">
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                    </div>
                    <div class="card-block">
                      <h5 class="card-title text-left title-card-deck-course">
                        Collaboration Extension & Linakges
                      </h5>
                      <div class="icon-number d-flex">
                        <i class="fas fa-user" />
                        <h6>9</h6>
                        <i class="fas fa-clock" />
                        <h6>3</h6>
                      </div>
                      <div class="class-date">
                        <p>Class Date:11/12/2021</p>
                      </div>
                      <div class="enroll-button d-flex justify-content-center align-items-center">
                        <button
                          class="btn border border-left-0 text-left enroll-button-free"
                          type="button"
                        >
                          Download Certificate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="webinar">
          <div class="row justify-content-center align-items-center h-100 trainer-heading">
            <h2>Webinar</h2>
          </div>
          <div class="col-12 course-card">
            <div class="container">
              <div class="row align-items-center h-100 mx-auto">
                <div class="col-sm-3 col-md-6">
                  <div class="card course-card-deck">
                    <img
                      class="card-img-top img-fluid"
                      src="course.png"
                      alt="Card image cap"
                    />
                    <div class="star-review d-flex">
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                    </div>
                    <div class="card-block">
                      <h5 class="card-title text-left title-card-deck-course">
                        Collaboration Extension & Linakges
                      </h5>
                      <div class="icon-number d-flex">
                        <i class="fas fa-user" />
                        <h6>9</h6>
                        <i class="fas fa-clock" />
                        <h6>3</h6>
                      </div>
                      <div class="class-date">
                        <p>Class Date:11/12/2021</p>
                      </div>
                      <div class="enroll-button d-flex justify-content-center align-items-center">
                        <button
                          class="btn border border-left-0 text-left enroll-button-free"
                          type="button"
                        >
                          Download Certificate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3 col-md-6">
                  <div class="card course-card-deck">
                    <img
                      class="card-img-top img-fluid"
                      src="course.png"
                      alt="Card image cap"
                    />
                    <div class="star-review d-flex">
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                      <i class="fas fa-star" />
                    </div>
                    <div class="card-block">
                      <h5 class="card-title text-left title-card-deck-course">
                        Collaboration Extension & Linakges
                      </h5>
                      <div class="icon-number d-flex">
                        <i class="fas fa-user" />
                        <h6>9</h6>
                        <i class="fas fa-clock" />
                        <h6>3</h6>
                      </div>
                      <div class="class-date">
                        <p>Class Date:11/12/2021</p>
                      </div>
                      <div class="enroll-button d-flex justify-content-center align-items-center">
                        <button
                          class="btn border border-left-0 text-left enroll-button-free"
                          type="button"
                        >
                          Download Certificate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="Paris" class="tabcontent">
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>

      <div id="Tokyo" class="tabcontent">
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>

      <hr class="my-4 col-md-12" />
      <div class="row  justify-content-center align-items-center h-100 trainer-heading">
        <h1>Nominations/Voting</h1>
      </div>
      <div class="row  d-flex justify-content-center align-items-center h-100 trainer-heading nvtm">
        <div class="container justify-content-center align-items-center h-100 vote-nm">
          <p class="text-center nm-vt">Click The Button to Vote Or Nominate</p>
          <div class="enroll-button d-flex justify-content-center align-items-center">
            <button
              class="btn border border-left-0 text-left enroll-button-free vn-button"
              type="button"
            >
              Vote/Nominate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
