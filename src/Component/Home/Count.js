import React, {useEffect, useState, useRef} from 'react'
import $ from 'jquery'
import CountUp from 'react-countup';
function Count() {
    const [trainers, setTrainers] = useState(1000);
    const [students, setStudents] = useState(1000);
    const [courses, setCourses] = useState(1000);
    const [countries, setCountries] = useState(100);
    
    
  return (
    <div class="counts d-flex justify-content-center text-center mt-5">
    <ul class="nav text-center justify-content-center">
      <li class="nav-item me-2 px-4 count"><span id="trainers"></span><span><CountUp end={1000} />+ Trainers</span>
      </li>
      <li class="nav-item me-2 px-4 count"><span id="countries"></span><span><CountUp end={100} />+ Countries</span>
      </li>
      <li class="nav-item me-2 px-4 count"><span id="students"></span><span><CountUp end={1000} /> + Students</span>
      </li>
      <li class="nav-item me-2 px-4 count"><span id="courses"></span><span><CountUp end={1000} />+ Courses</span>
      </li>
    </ul>
  </div>
  )
}

export default Count