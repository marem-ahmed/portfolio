// @ts-nocheck
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './navBar.css'
export default function navBar() {
   const [showModel,setshowModel]= useState(false)
  return (
    <header className=" flex">
      <button
        className="menu border-circle"
        onClick={() => {
          setshowModel(true);
        }}
      >
        <span className="icon-menu "></span>
      </button>

      <div />
      <nav>
        <ul className="flex ">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button className="border-circle">
        <span className="icon-sun"></span>
      </button>
      {showModel && (
        <div className=" fixed">
          <ul className="model ">
            <div className=" icon">
              <button
                onClick={() => {
                  setshowModel(false);
                }}
              >
                <span className="icon-close"></span>
              </button>
            </div>

            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
