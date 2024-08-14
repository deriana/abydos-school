import "./course.css";
import { useState } from "react";

const Course = () => {
  // Initialize state with the initial course items
  const [courses, setCourses] = useState([
    {
      icon: "fa-solid fa-microscope",
      title: "Science",
      coursesAvailable: 35,
      tutors: 100,
      mode: "Online and Offline",
    },
    {
      icon: "fa-solid fa-money-bill",
      title: "Finance",
      coursesAvailable: 15,
      tutors: 50,
      mode: "Online and Offline",
    },
    {
      icon: "fa-solid fa-volleyball",
      title: "Sports",
      coursesAvailable: 10,
      tutors: 30,
      mode: "Online and Offline",
    },
    {
      icon: "fa-solid fa-bell-concierge",
      title: "Hotel Management",
      coursesAvailable: 5,
      tutors: 20,
      mode: "Online and Offline",
    },
  ]);

  // Function to toggle the last two course items
  const handleShow = () => {
    const newCourses = [
      {
        icon: "fa-solid fa-code", 
        title: "Programming",
        coursesAvailable: 20,
        tutors: 75,
        mode: "Online",
      },
      {
        icon: "fa-solid fa-palette", 
        title: "Art & Design",
        coursesAvailable: 12,
        tutors: 40,
        mode: "Online and Offline",
      },
      {
        icon: "fa-solid fa-burger", 
        title: "Cooking",
        coursesAvailable: 50,
        tutors: 70,
        mode: "Online and Offline",
      },
      {
        icon: "fa-solid fa-pen", 
        title: "Design",
        coursesAvailable: 10,
        tutors: 50,
        mode: "Online and Offline",
      },
    ];

    // Check if the last two courses are the ones we want to toggle
    const lastTwoCourses = courses.slice(-4);  

    if (
      lastTwoCourses.length === 4 &&
      lastTwoCourses[0].title === newCourses[0].title &&
      lastTwoCourses[1].title === newCourses[1].title
    ) {
      // Remove the last two course items if they match
      setCourses(courses.slice(0, -4));
    } else {
      // Add the new course items if they aren't already present
      setCourses([...courses, ...newCourses]);
    }
  };

  return (
    <div className="course" id="categories">
      <div className="course-title" data-aos="fade-up">
        <h1>
          Browse courses <br /> categorywise
        </h1>
        <p>
          Education began in prehistory, as adults trained the young in the
          knowledge and skills
        </p>
      </div>
      <div className="course-container" data-aos="fade-up">
        {courses.map((course, index) => (
          <div key={index} className="course-container-item">
            <i className={course.icon}></i>
            <div className="course-container-item-text">
              <h3>{course.title}</h3>
              <p>{course.coursesAvailable} Courses available</p>
              <div className="course-container-item-text-people">
                <div className="course-container-item-text-people-content">
                  <i className="fa-solid fa-user"></i>
                  <p>{course.tutors}+ Tutors</p>
                </div>
                <div className="course-container-item-text-people-content">
                  <i className="fa-solid fa-location-pin"></i>
                  <p>{course.mode}</p>
                </div>
              </div>
              <a href="#">View Details</a>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleShow} data-aos="fade-up">Explore All</button>
    </div>
  );
};

export default Course;
