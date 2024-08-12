// @ts-nocheck
import React, { useState } from "react";
import "./main.css";
import { motion, AnimatePresence } from "framer-motion";
export default function main() {
  const myProjects = [
    {
      projectTitle: "Mealfiy",
      category: ["html", "css"],
      imgpath: "/assets/fokir.png",
      liveServer: "https://marem-ahmed.github.io/_Resturant/",
      sourceCode: "https://github.com/marem-ahmed/_Resturant",
    },
    {
      projectTitle: "DevFolio",
      category: ["html", "css", "Bootstrap"],
      imgpath: "/assets/Devfolio.png",
      liveServer: "https://marem-ahmed.github.io/DevFolio/",
      sourceCode: "https://github.com/marem-ahmed/DevFolio",
    },
    {
      projectTitle: "Daniels",
      category: ["html", "css", "bootstrap"],
      imgpath: "/assets/daniels.png",
      liveServer: "https://marem-ahmed.github.io/Daniels/",
      sourceCode: "https://github.com/marem-ahmed/Daniels",
    },
    {
      projectTitle: "Quotes",
      category: ["html", "bootstrap", "js"],
      imgpath: "/assets/quotes.png",
      liveServer: "https://marem-ahmed.github.io/Quotes/",
      sourceCode: "https://github.com/marem-ahmed/Quotes",
    },
    {
      projectTitle: "BookMarker",
      category: ["html", "bootstrap", "js"],
      imgpath: "/assets/bookmarker.png",
      liveServer: "https://marem-ahmed.github.io/bookmarker/",
      sourceCode: "https://github.com/marem-ahmed/bookmarker",
    },
    {
      projectTitle: "To DO List",
      category: ["html", "bootstrap", "js"],
      imgpath: "/assets/toDoList.png",
      liveServer: "https://marem-ahmed.github.io/crud-to-do-list/",
      sourceCode: "https://github.com/marem-ahmed/crud-to-do-list",
    },
    {
      projectTitle: "Recipes",
      category: ["html", "bootstrap", "js"],
      imgpath: "/assets/recipes.png",
      liveServer: "https://marem-ahmed.github.io/recipes/signup.html",
      sourceCode: "https://github.com/marem-ahmed/recipes",
    },

    {
      projectTitle: "note-app",
      category: ["React", "bootstrap"],
      imgpath: "/assets/app-note.png",
      liveServer: "https://app-note-six.vercel.app/",
      sourceCode: "https://github.com/marem-ahmed/app-note",
    },
    {
      projectTitle: "E-commecre",
      category: ["React", "bootstrap"],
      imgpath: "/assets/Ecommerce.png",
      liveServer: "https://e-commerce-iota-teal.vercel.app/",
      sourceCode: "https://github.com/marem-ahmed/-E-commerce",
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
    <section className="main " id="main">
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
            handelFilter("React");
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
                className="item "
                key={item.imgpath}
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 7, stiffness: 40 }}
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
                  <div className=" icons d-flex  align-items-center g-2 ">
                    <a
                      href={item.liveServer}
                      className="icon-link text-decoration-none subtilite-color me-2 icon "
                      target="_blank"
                    ></a>
                    <a
                      href={item.sourceCode}
                      className="icon-github text-decoration-none subtilite-color icon "
                      target="_blank"
                    ></a>
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
