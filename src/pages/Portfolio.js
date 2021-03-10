import React from "react"

import Contact from "../components/Contact"

import lightning from "../assets/icon-lightning-bolt.png"
import link from "../assets/link.svg"

export default function Portfolio({ open, setOpen, page }) {
  return (
    <div className={`resume-container ${page === "portfolio" ? "" : "hidden"}`}>
      <div className="resume-basic-info">
        <Contact />
        <div className="tech-stack-list">
          HTML CSS Bootstrap JS React Redux Gatsby Node SQL Python GIT Agile MS
          Office
        </div>
      </div>

      <div className="resume-experience">
        <section className="experience-block">
          <div className="dates">December 2020 - January 2021</div>

          <a
            href="https://animal-crossing-git-main.alvillaraza.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="first-line">
              <img src={link} /> ACNH Villager Picker
            </h1>
          </a>

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
            Github:
            <a href="https://github.com/alvillaraza/animal-crossing" target="_blank">
              https://github.com/alvillaraza/animal-crossing
            </a>
          </p>
        </section>
        <section className="experience-block">
          <div className="dates">April - May 2020</div>
          <a
            href="https://refresh-fe-cyan.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="first-line">
              {" "}
              <img src={link} /> Wellness Tracker
            </h1>
          </a>
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
                exercise, and breaks.
              </li>
              <li>
                <img src={lightning} />A company admin can also sign in to see
                each of the employee’s scores within each of their departments.
              </li>
              <li>
                <img src={lightning} />
                Contributed to a cross-functional team of 4 developers and 1 UX
                designer on an 8 week sprint with 3 canvas releases.
              </li>
              <li>
                <img src={lightning} /> Applied JSON web token to develop user
                credential authentication.
              </li>
              <li>
                <img src={lightning} /> Developed API calls and endpoints.
              </li>
              <li>
                <img src={lightning} />
                Implemented features and debugged code on the frontend and
                backend.
              </li>
              <li>
                <img src={lightning} /> Organized pair programming sessions to
                increase efficiency.
              </li>
            </ul>
            <p>
              Github Frontend:{" "}
              <a href="https://github.com/alvillaraza/refresh-fe" target="_blank">
                https://github.com/Lambda-School-Labs/refresh-fe
              </a>
            </p>
            <p>
              Github Backend:{" "}
              <a href="https://github.com/Lambda-School-Labs/refresh-be" target="_blank">
                https://github.com/Lambda-School-Labs/refresh-be
              </a>
            </p>
          </p>
        </section>
        <section className="experience-block">
          <div className="dates">December 2019</div>
          <a
            href="https://user-interface-eight.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="first-line">
              <img src={link} /> Opti
            </h1>
          </a>
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
            Github:{" "}
            <a href="https://github.com/tryopti/user-interface" target="_blank">
              https://github.com/tryopti/user-interface
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}
