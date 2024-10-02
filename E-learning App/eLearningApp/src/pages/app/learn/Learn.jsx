import React from "react";
import style from "./Learn.module.css";
import coursesData from "../../../data/courses.json";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
//  Import all the required elements from the react-router-dom

function Learn() {
  const navigate = useNavigate();
  const { id } = useParams();
  const course = coursesData.find(c => c.id == id);
  return (
    <div className={style.courses_container}>
      <div className={style.top_head}>
        {/* Link to go back to the Courses page */}

        <h2 className={style.back} onClick={() => { navigate(-1) }}>{"<<"}</h2>

        {/*Title of the Course */}
        <h1 className={style.heading}>{course.title}</h1>
      </div>
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <h1>Chapters</h1>
          <hr />
          <ul>{/* List of Chapters must be rendered here  */}
            {
              course.chapters.map(c => (
                <Link to={`/courses/${course.id}/learn/${c.chapter}`} style={{ textDecoration: 'none' }}> <li key={c.chapter} >{c.title}</li> </Link>
              ))
            }
          </ul>
        </div>

        <div className={style.courses}>
          {/** Chapter Details Must be rendered here */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Learn;
