import React from "react";
import styles from "./Chapter.module.css";
import { useNavigate, useParams } from "react-router-dom";

import coursesData from '../../../data/courses.json'

function Chapter() {
  const { id, chapterId } = useParams();
  const course = coursesData.find(c => c.id == id);
  const chapter = course.chapters.find(c => c.chapter == chapterId);
  const navigate = useNavigate();
  return (
    <div>

      <h1>{chapter.title}</h1>
      <h2>{chapter.description}</h2>
      <p className={styles.para}>{chapter.details}</p>
      <br />
      <br />
      <div className={styles.videos}>
        {/*TASK:5 CHAPTER VIDEO SRC SHOULD BE GIVEN IN THE SOURCE */}
        <iframe
          width="800"
          height="560"
          src={chapter.video}
          title="React Video"
          // frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      {/* <h1 onClick={() => { navigate(-1) }}> Prev Page</h1> */}
    </div>
  );
}

export default Chapter;
