import React from 'react'
import './About.css'
import Lottie from "lottie-react";
import progammeranimation from '../../../public/animations/programmer.json'
export default function hero() {
  return (
    <section className="flex justify-content-between ">
      <div className="start-section ">
        <div className="avatar  ">
          <img
            src="../../../public/assets/mariamAhmed.png"
            alt="Mariam"
          />
        </div>
        <span className="icon-verified"></span>
        <div className="text-about">
          <h1>Front- developer</h1>
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

      <div className="end-section ">
        <Lottie
          animationData={progammeranimation}
          style={{ height: 350 }}
          className="my-auto"
        />
      </div>
    </section>
  );
}
