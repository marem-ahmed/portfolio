import { useState,useEffect } from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from "./components/About/About";
import Main from './components/main/main';
import Contact from './components/contact/contact';
import Footer from './components/Footer/Footer';
import '@fortawesome/fontawesome-free'

function App() {
  useEffect(() => {
        window.addEventListener("scroll", () => {
 if (window.scrollY > 250) {
        setScroll(true);
      } else {
        setScroll(false);
      }
      });
  }, []);
  const [scroll,setScroll]=useState(false)

  return (
    <>
      <div className='portfolio'>
        <div className="continer" id="up">
          <NavBar></NavBar>
          <Hero></Hero>
          <div className="liner"></div>
          <Main></Main>
          <div className="liner"></div>
          <Contact></Contact>
          <div className="liner"></div>
          <Footer></Footer>
   
           <a href="#up" className="scroll-top" style={{opacity:scroll? 1:0,transition:"1s"}}>
            <i className="fa-solid fa-angle-up"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default App
