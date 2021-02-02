import React from "react"

import remote from "../assets/logo-remote.png"
import lightning from "../assets/icon-lightning-bolt.png"

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

      <div className="projects">
        <div className="experience-block">
          <div className="dates">Dec 2020-Jan 2021</div>
          <h1 className="first-line">ACNH Villager Picker</h1>
          <h2 className="second-line">React, LESS, API</h2>
          <div className="description">
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
          </div>
        </div>
        <div className="experience-block">
          <div className="dates">April-May 2020</div>
          <h1 className="first-line">Wellness Tracker</h1>
          <h2 className="second-line">
            React, Redux, Node, API, PostgreSQL, JSON Web Token
          </h2>
          <div className="description">
            This was designed for companies who want to monitor their employees’
            overall wellness. An employee can sign in and track their sleep,
            water intake, exercise, and breaks. A company admin can also sign in
            to see each of the employee’s scores within each of their
            departments. Contributed to a cross-functional team of 4 developers
            and 1 UX designer on an 8 week sprint with 3 canvas releases Applied
            JSON web token to develop user credential authentication Developed
            API calls and endpoints Implemented features and debugged code on
            the frontend and backend Organized pair programming sessions to
            increase efficiency
          </div>
        </div>
        <div className="experience-block">
          <div className="dates">December 2019</div>
          <h1 className="first-line">Opti</h1>
          <h2 className="second-line">HTML, LESS</h2>
          <div className="description">
            A website designed to find the best optimal price for an airbnb
            rental property. Participated as a UI developer in a
            cross-functional team of 3 developers and 4 data scientists on a
            weeklong project Designed and implemented the landing page using
            LESS
          </div>
        </div>
      </div>

      <div className="resume">
        <div className="education">
          <div className="experience-block">
            <div className="dates">December 2019 – June 2020</div>
            <h1 className="first-line">
              EDUCATION <img src={remote} alt="remote logo" />
            </h1>
            <h2 className="second-line">Full Stack Web Development Student</h2>
            <h2 className="second-line">Lambda School</h2>
            <div className="description">
              Learned several programming languages from the ground up in just 6
              months. Participated in three different build weeks, collaborating
              in groups of +/- 8 students to successfully develop websites.
              Built a fitness app in 3 release canvases in a team of 4, using
              GIT, Postgres, Node.js, and React.js.
            </div>
          </div>
        </div>
        <div className="experience">
          <div className="experience-block">
            <div className="dates">October 2020 – Present</div>
            <h1 className="first-line">
              Frontend Developer <img src={remote} alt="remote logo" />
            </h1>
            <h2 className="second-line">Strongmind</h2>
            <div className="description">
              Updates data layer for interactive interfaces on educational
              platforms. Front end web development of interactive interfaces
              using LESS, React, and Gatsby.
            </div>
          </div>
          <div className="experience-block">
            <div className="dates">July 2020 – October 2020</div>
            <h1 className="first-line">
              Team Lead <img src={remote} alt="remote logo" />
            </h1>
            <h2 className="second-line">Lambda School</h2>
            <div className="description">
              Mentored a team of 6 - 8 students to be self-sufficient when
              solving programming problems. Provided daily one-on-one feedback
              and weekly code reviews. Served as a project lead, keeping
              students organized and on task for multiple cross-functional build
              week projects. Facilitated daily standups to build camaraderie,
              share best practices, and provide guidance for the week's material
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
