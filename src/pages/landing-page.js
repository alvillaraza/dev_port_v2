import React from "react"

import Nav from "./nav"

import github from "../assets/logo-github.png"
import linkedin from "../assets/logo-linked-in.png"
import html from "../assets/logo-html-5.png"
import css from "../assets/logo-css.png"
import sass from "../assets/logo-sass.png"
import less from "../assets/logo-less.png"
import bootstrap from "../assets/logo-bootstrap.png"
import js from "../assets/logo-js.png"
import react from "../assets/logo-react.png"
import redux from "../assets/logo-redux.png"
import python from "../assets/logo-python.png"
import git from "../assets/logo-git.png"

export default function LandingPage({open, setOpen, page}) {
  return (
    <>
      <div className={`landing-page-container ${page === "landing-page" ? "" : "hidden"}`}>
        <div className="links">
          <a
            href="https://github.com/alvillaraza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/alvillaraza/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linked in icon" />
          </a>
        </div>
        <header className={`name-title ${open ? "faded" : ""}`}>
          <h1>Alexis Villaraza</h1>
          <h2>FULL-STACK WEB DEVELOPER</h2>
        </header>
        <footer className={`tech-stack-icons ${open ? "faded" : ""}`}>
          <img src={html} alt="html icon" />
          <img src={css} alt="css icon" />
          <img src={sass} alt="sass icon" />
          <img src={less} alt="less icon" />
          <img src={bootstrap} alt="bootstrap icon" />
          <img src={js} alt="js icon" />
          <img src={react} alt="react icon" />
          <img src={redux} alt="redux icon" />
          <img src={python} alt="python icon" />
          <img src={git} alt="git icon" />
        </footer>
      </div>
  
      
    </>
  )
}
