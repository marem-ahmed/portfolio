// @ts-nocheck
import React, { useState } from "react";
import "./main.css";
import { motion, AnimatePresence } from "framer-motion";
export default function main() {
  const myProjects = [
    {
      projectTitle: "Fokir",
      category: ["html", "css"],
      imgpath: "../../../public/assets/fokir.png",
      liveServer: "",
      sourceCode: "",
    },
    {
      projectTitle: "DevFolio",
      category: ["html", "css", "Bootstrap"],
      imgpath: "../../../public/assets/Devfolio.png",
      liveServer: "",
      sourceCode: "",
    },
    {
      projectTitle: "Daniels",
      category: ["html", "css", "bootstrap"],
      imgpath: "../../../public/assets/daniels.png",
      liveServer: "",
      sourceCode: "",
    },
    {
      projectTitle: "Quotes",
      category: ["html", "bootstrap", "js"],
      imgpath: "../../../public/assets/quotes.png",
      liveServer: "",
      sourceCode: "",
    },
    {
      projectTitle: "BookMarker",
      category: ["html", "bootstrap", "js"],
      imgpath: "../../../public/assets/bookmarker.png",
      liveServer: "",
      sourceCode: "",
    },
    {
      projectTitle: "To DO List",
      category: ["html", "bootstrap", "js"],
      imgpath: "../../../public/assets/toDoList.png",
      liveServer: "",
      sourceCode: "",
    },
    {
      projectTitle: "Recipes",
      category: ["html", "bootstrap", "js"],
      imgpath: "../../../public/assets/recipes.png",
      liveServer: "",
      sourceCode: "",
    },
  ];
  const [activeBtn, setactiveBtn] = useState(false);
  const [arr, setArr] = useState(myProjects);

  function handelFilter(catg){
    
            const newArr = myProjects.filter((item) => {
              const newArr2 = item.category.filter((item) => {
                return item === catg;
              });
              return newArr2[0] === catg;
            });
            setArr(newArr);
  }
  return (
    <section className="main ">
      <div className="start-side ">
        <button
          onClick={() => {
            setactiveBtn("all");
            setArr(myProjects);
          }}
          className={activeBtn === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            setactiveBtn("css");
            handelFilter("css");
          }}
          className={activeBtn === "css" ? "active" : null}
        >
          {" "}
          HTML&CSS
        </button>

        <button
          onClick={() => {
            setactiveBtn("js");
            handelFilter("js");
          }}
          className={activeBtn === "js" ? "active" : null}
        >
          {" "}
          JavaScript
        </button>
        <button
          onClick={() => {
            setactiveBtn("bootstrap");
            handelFilter("bootstrap");
          }}
          className={activeBtn === "bootstrap" ? "active" : null}
        >
          Bootstrap
        </button>
        <button
          onClick={() => {
            setactiveBtn("React");
            handelFilter("js");
          }}
          className={activeBtn === "React" ? "active" : null}
        >
          React
        </button>
      </div>

      <div className=" ms-2 end-side  ">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.div
                className="item text-center"
                key={item.imgpath}
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{type:"spring",damping:7,stiffness:40}}
              >
                <div>
                  <img src={item.imgpath} alt="" />
                </div>
                <div className="item-content">
                  <h3>{item.projectTitle}</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam, quidem.
                  </p>
                  <div className="icons">
                    <div className="d-flex  align-items-center g-2 ">
                      <a
                        href=""
                        className="icon-link text-decoration-none subtilite-color me-2 icon fs-6"
                      ></a>
                      <a
                        href=""
                        className="icon-github text-decoration-none subtilite-color icon fs-6"
                      ></a>
                    </div>
                    <a
                      href=""
                      className=" text-decoration-none ms-auto d-flex align-items-center last-link "
                    >
                      more
                      <span className="icon-arrow-right2 "></span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
