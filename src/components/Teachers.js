import React from 'react';
import TeacherList from '../data/teachers';
import { Link } from 'react-router-dom';

const Teachers = () => {
  let teachers = TeacherList.map((teacher, index) => {
    return (
      <li className="teacher" key={teacher.id} >
        <img className="teacher-img" src={teacher.img_src} alt="teacher" />
        
        <Link to={`/teachers/html/${teacher.name}/${index}`}>
          <h3>{teacher.name}</h3>
        </Link>
        
        <p>{teacher.bio}</p>
      </li>
    );
  });

  return (
    <div className="main-content">
      <h2>Teachers</h2>
      <ul className="group">
        {teachers}
      </ul>
    </div>
  );
}

export default Teachers;