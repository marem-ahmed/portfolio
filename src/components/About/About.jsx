import React from 'react'
import './About.css'
export default function hero() {
  return (
    <section className='flex '>
      <div className="start-section ">
        <div className="avatar  ">
          <img
            src="../../../public/assets/mariamAhmed.png"
            alt="Mariam Ahmed"
          />
        </div>
        <span className="icon-verified"></span>
        <div className="text-about">
          <h1>Front-End developer</h1>
          <p>
            I'm Mariam Ahmed, a Front-end developer, My collage is Computer
            <br />
            Science and Information Technology
          </p>
        </div>
        <div className="icons flex">
          <div className="icon-instagram icon"></div>
          <div className="icon-github icon"></div>
          <div className="icon-linkedin icon"></div>
        </div>
      </div>

      <div className="end-section "> nn</div>
    </section>
  );
}
