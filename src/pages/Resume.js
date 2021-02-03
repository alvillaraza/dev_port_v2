import React from "react"

import Contact from "../components/Contact"

import remote from "../assets/logo-remote.png"
import lightning from "../assets/icon-lightning-bolt.png"

export default function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-basic-info">
        <Contact />
        <div className="tech-stack-list">
          HTML CSS Bootstrap JS React Redux Node SQL Python GIT Agile MS Office
        </div>
      </div>

      <div className="resume-experience">
        <section className="experience-block">
          <div className="dates">Dec 2020-Jan 2021</div>
          <h1 className="first-line">ACNH Villager Picker</h1>
          <h2 className="second-line">React, LESS, API</h2>
          <p className="description">
            If Animal Crossing and Tinder had a baby, this would be it. This
            website allows a user to choose characters out of a list and keep
            track of their chosen or rejected animals.
            <ul>
              <li>
                <img src={lightning} />
                Used an ACNH API to display character information
              </li>
              <li>
                <img src={lightning} />
                Created a reusable interactive quiz complete with a scoreboard
                at the end
              </li>
              <li>
                <img src={lightning} />
                Implemented advanced design using LESS
              </li>
            </ul>
          </p>
        </section>
        <section className="experience-block">
          <div className="dates">April-May 2020</div>
          <h1 className="first-line">Wellness Tracker</h1>
          <h2 className="second-line">
            React, Redux, Node, API, PostgreSQL, JSON Web Token
          </h2>
          <p className="description">
            This was designed for companies who want to monitor their employees’
            overall wellness.
            <ul>
              <li>
                <img src={lightning} />
                An employee can sign in and track their sleep, water intake,
                exercise, and breaks.{" "}
              </li>
              <li>
                <img src={lightning} />A company admin can also sign in to see
                each of the employee’s scores within each of their departments.{" "}
              </li>{" "}
              <li>
                <img src={lightning} />
                Contributed to a cross-functional team of 4 developers and 1 UX
                designer on an 8 week sprint with 3 canvas releases.
              </li>{" "}
              <li>
                <img src={lightning} /> Applied JSON web token to develop user
                credential authentication.
              </li>{" "}
              <li>
                <img src={lightning} /> Developed API calls and endpoints.
              </li>{" "}
              <li>
                <img src={lightning} />
                Implemented features and debugged code on the frontend and
                backend.
              </li>{" "}
              <li>
                <img src={lightning} /> Organized pair programming sessions to
                increase efficiency.
              </li>
            </ul>
          </p>
        </section>
        <section className="experience-block">
          <div className="dates">December 2019</div>
          <h1 className="first-line">Opti</h1>
          <h2 className="second-line">HTML, LESS</h2>
          <p className="description">
            <ul>
              A website designed to find the best optimal price for an airbnb
              rental property.
              <li>
                <img src={lightning} />
                Participated as a UI developer in a cross-functional team of 3
                developers and 4 data scientists on a weeklong project.
              </li>
              <li>
                <img src={lightning} /> Designed and implemented the landing
                page using LESS.
              </li>
            </ul>
          </p>
        </section>
      </div>

      {/* <div className="resume-experience">
        <div className="education">
          <section className="experience-block">
            <div className="dates">December 2019 – June 2020</div>
            <h1 className="first-line">
              EDUCATION <img src={remote} alt="remote logo" />
            </h1>
            <h2 className="second-line">Full Stack Web Development Student</h2>
            <h2 className="second-line">Lambda School</h2>
            <p className="description">
              <ul>
                <li>
                  Learned several programming languages from the ground up in
                  just 6 months.
                </li>
                <li>
                  Participated in three different build weeks, collaborating in
                  groups of +/- 8 students to successfully develop websites.
                </li>
                <li>
                  Built a fitness app in 3 release canvases in a team of 4,
                  using GIT, Postgres, Node.js, and React.js.
                </li>
              </ul>
            </p>
          </section>
        </div>
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
      </div> */}
    </div>
  )
}
