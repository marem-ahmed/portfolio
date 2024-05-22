import React from 'react'
import '../skills/skills.css'
export default function skills() {
  return (
    <div className="skills subtilite-color d-flex flex-wrap justify-content-center">
      <div className=" skill  col-md-3 col text-center py-3 ">
        <i className="fa-brands fa-html5 fs-2"></i>
        <h3>HTML</h3>
      </div>
      <div className="  skill  col-md-3 col text-center py-3 ">
        <i className="fa-brands fa-css3-alt fs-2"></i>
        <h3>CSS</h3>
      </div>
      <div className="skill  col-md-3 col text-center py-3  ">
        <i className="fa-brands fa-square-js fs-2"></i>
        <h3>Javascript</h3>
      </div>
      <div className="skill  col-md-3 col text-center py-3 ">
        <i className="fa-brands fa-bootstrap fs-2"></i>
        <h3>Bootstrap</h3>
      </div>
      <div className=" skill  col-md-3 col text-center py-3 ">
        <i className="fa-solid fa-mug-hot fs-2"></i>
        <h3>JQuery</h3>
      </div>
      <div className="skill  col-md-3 col text-center py-3 ">
        <i className="fa-solid fa-t fs-2"></i>
        <h3>tailwind</h3>
      </div>
      <div className=" skill  col-md-3 col text-center py-3 ">
        <i className="fa-brands fa-react fs-2"></i>
        <h3>React</h3>
      </div>
      <div className=" skill c col-md-3 col text-center py-3 ">
        <i className="fa-brands fa-sass fs-2"></i>
        <h3>Sass</h3>
      </div>
      <div className=" skill  col-md-3 col text-center py-3 ">
        <i className="fa-brands fa-figma fs-2"></i>
        <h3>figma</h3>
      </div>
    </div>
  );
}
