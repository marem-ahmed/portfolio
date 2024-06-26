import React, { useEffect, useState } from "react";
import './navBar.css'
import { Link } from "react-router-dom";
export default function navBar() {
   const [showModel,setshowModel]= useState(false)
   const [theme, setTheme] = useState(localStorage.getItem("currentTheme")??"dark");
   const [iconTheme, setIconTheme] = useState([]);



useEffect(()=>{
  if (theme === "light") {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    setIconTheme("icon-moon-o");
   
  }else{
document.body.classList.add("dark");
document.body.classList.remove("light");
setIconTheme("icon-sun");
  }
  


},[theme]);


  return (
    <header className=" flex">
      <button
        className="menu border-circle"
        onClick={() => {
          setshowModel(true);
        }}
      >
        <span className="icon-menu"></span>
      </button>

      <div />
      <nav>
        <ul className="flex ">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#main">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        className="border-circle"
        onClick={() => {
          localStorage.setItem(
            "currentTheme",
            theme === "dark" ? "light" : "dark"
          );
          setTheme(localStorage.getItem("currentTheme"));
        }}
      >
        <span className={iconTheme}></span>
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
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#main">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
