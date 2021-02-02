import React from "react"

import remote from "../assets/logo-remote.png"

export default function Resume() {
  return (
    <>
      <div className="contact-info">
        <h2>Alexis Villaraza</h2>
        <h3>480.703.7967</h3>
        <h4>alexis.borja@gmail.com</h4>
      </div>
      <div className="tech-stack-list">
        HTML CSS Bootstrap JS React Redux Node SQL Python GIT Agile MS Office
      </div>
      <div className="education">
        <div className="dates">December 2019 – June 2020</div>
        <div className="first-line">
          EDUCATION <img src={remote} alt="remote logo" />
        </div>
        <div className="second-line">Full Stack Web Development Student</div>
        <div className="second-line">Lambda School</div>
        <div className="description">
          Learned several programming languages from the ground up in just 6
          months. 
          Participated in three different build weeks, collaborating in
          groups of +/- 8 students to successfully develop websites. 
          Built a
          fitness app in 3 release canvases in a team of 4, using GIT, Postgres,
          Node.js, and React.js.
        </div>
      </div>
      <div className="experience">
        <div className="dates">October 2020 – Present</div>
        <div className="first-line">
          Frontend Developer <img src={remote} alt="remote logo" />
        </div>
        <div className="second-line">Strongmind</div>
        <div className="description">
          Updates data layer for interactive interfaces on educational platforms.
          Front end web development of interactive interfaces using LESS, React,
          and Gatsby.
        </div>
        <div className="dates">July 2020 – October 2020</div>
        <div className="first-line">
          Team Lead <img src={remote} alt="remote logo" />
        </div>
        <div className="second-line">Lambda School</div>
        <div className="description">
          Mentored a team of 6 - 8 students to be self-sufficient when solving
          programming problems. 
          Provided daily one-on-one feedback and weekly code reviews. 
          Served as a project lead, keeping students organized and
          on task for multiple cross-functional build week projects. 
          Facilitated
          daily standups to build camaraderie, share best practices, and provide
          guidance for the week's material
        </div>
      </div>
    </>
  )
}
