import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import Course from "./Component/Course/Course";
import Webinar from "./Component/Webinar/Webinar";
import Quize from "./Component/Quize/Quize";
import Voting from "./Component/Voting/Voting";
import Nominate from "./Component/Nominate/Nominate";
import List from "./Component/Trainers/List/List";
import Individual from "./Component/Trainers/Individual/Individual";
import About from "./Component/About/About";
import Blog from "./Component/Blog/Blog";
import StudentProfile from "./Component/StudentProfile/StudentProfile";
import Login from "./Component/Authentication/Login/Login";
import Signup from "./Component/Authentication/SignUp/Signup";
import Logout from "./Component/Authentication/Logout/Logout";
import PartnerSlider from "./Component/Slider/PartnerSlider";
import ClientSlider from "./Component/Slider/ClientSlider";
import AccSlider from "./Component/Slider/AccSlider";
import Courses from "./Component/Course/Courses";
import Webinars from "./Component/Webinar/Webinars";
import TrainerProfile from "./Component/TrainerProfile/TrainerProfile";
import Quizes from "./Component/Quize/Quizes";
import QuizeSingle from "./Component/Quize/QuizeSingle";
import Summit from "./Component/Conference/Summits/Summit";
import Summits from "./Component/Conference/Summits/Summits";
import Blogs from "./Component/Blog/Blogs";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/blog/slug=:slug" element={<Blog />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/course/slug=:slug" element={<Course />} />
          <Route exact path="/quiz/slug=:slug" element={<QuizeSingle />} />
          <Route exact path="/webinar/slug=:slug" element={<Webinars />} />
          <Route exact path="/conference/slug=:slug" element={<Summits />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/webinars" element={<Webinar />} />
          <Route exact path="/conferences" element={<Summit />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/sign-up" element={<Signup />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/take/quiz/slug=:slug" element={<Quize />} />
          <Route exact path="/voting" element={<Voting />} />
          <Route exact path="/nominate" element={<Nominate />} />
          <Route exact path="/list" element={<List />} />
          <Route exact path="/individual" element={<Individual />} />
          <Route exact path="/studentprofile" element={<StudentProfile />} />
          <Route exact path="/trainerprofile" element={<TrainerProfile />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/quizes" element={<Quizes />} />
        </Routes>
        <ClientSlider className="c-slider" />
        <AccSlider />
        <PartnerSlider />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
