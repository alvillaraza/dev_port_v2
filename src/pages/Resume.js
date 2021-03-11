import React from "react"

import Contact from "../components/Contact"

import remote from "../assets/logo-remote.png"
import lightning from "../assets/icon-lightning-bolt.png"

export default function Resume({ open, setOpen, page }) {
  return (
    <div className={`resume-container ${page === "resume" ? "" : "hidden"}`}>
      <div className="resume-basic-info">
        <Contact />
        <div className="tech-stack-list">
          HTML CSS Bootstrap JS React Redux Gatsby Node SQL Python GIT Agile MS
          Office
        </div>
      </div>

      <div className="resume-experience">
        <section className="experience-block education">
          <div className="dates">December 2019 – June 2020</div>
          <h1 className="first-line">
            EDUCATION <img src={remote} alt="remote logo" />
          </h1>
          <h2 className="second-line">Full Stack Web Development Student</h2>
          <h2 className="second-line">Lambda School</h2>
          <p className="description">
            <ul>
              <li>
                Learned several programming languages from the ground up in just
                6 months.
              </li>
              <li>
                Participated in three different build weeks, collaborating in
                groups of +/- 8 students to successfully develop websites.
              </li>
              <li>
                Built a fitness app in 3 release canvases in a team of 4, using
                GIT, Postgres, Node.js, and React.js.
              </li>
            </ul>
          </p>
        </section>{" "}
        <div className="experience">
          <section className="experience-block">
            <div className="dates">October 2020 – Present</div>
            <h1 className="first-line">
              Frontend Developer <img src={remote} alt="remote logo" />
            </h1>
            <h2 className="second-line">Strongmind</h2>
            <p className="description">
              <ul>
                <li>
                  Updates data layer for interactive interfaces on educational
                  platforms.
                </li>
                <li>
                  Front end web development of interactive interfaces using
                  LESS, React, and Gatsby.
                </li>
              </ul>
            </p>
          </section>

          <section className="experience-block">
            <div className="dates">July 2020 – October 2020</div>
            <h1 className="first-line">
              Team Lead <img src={remote} alt="remote logo" />
            </h1>
            <h2 className="second-line">Lambda School</h2>
            <p className="description">
              <ul>
                <li>
                  Mentored a team of 6 - 8 students to be self-sufficient when
                  solving programming problems.
                </li>
                <li>
                  Provided daily one-on-one feedback and weekly code reviews.
                </li>
                <li>
                  Served as a project lead, keeping students organized and on
                  task for multiple cross-functional build week projects.
                </li>
                <li>
                  Facilitated daily standups to build camaraderie, share best
                  practices, and provide guidance for the week's material.
                </li>
              </ul>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
