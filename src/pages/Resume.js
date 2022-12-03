import React from "react"

import Contact from "../components/Contact"

import remote from "../assets/logo-remote.png"

export default function Resume({ page }) {
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
        <div className="experience">
          <section className="experience-block">
            <div className="dates">June 2021 - November 2022</div>
            <h1 className="first-line">
              Software Engineer I <img src={remote} alt="remote logo" />
            </h1>
            <h2 className="second-line">Carvana</h2>
            <p className="description">
              <ul>
                <li>
                  For this e-commerce and fin-tech company, developed, tested,
                  and deployed complex web solutions using JavaScript (React),
                  Jest (Enzyme and React Testing Library). Deployed into Azure
                  cloud services.
                </li>
                <li>
                  One of three software engineers who performed support and
                  maintenance of applications from development, through build
                  pipeline, and after cloud deployment.
                </li>
                <li>
                  Participated in peer discussions on architecture and the
                  overall direction of Carvana platforms.
                </li>
                <li>
                  Received the Developer of Delight award for introducing the
                  company to the Functional-Usable-Delightful concept.
                </li>
                <li>
                  Participated in yearly and quarterly hackathons where I used
                  Python to build games.
                </li>
              </ul>
            </p>
          </section>

          <section className="experience-block">
            <div className="dates">October 2020 – December 2020</div>
            <h1 className="first-line">
              Front end Developer <img src={remote} alt="remote logo" />
            </h1>
            <h2 className="second-line">Strongmind</h2>
            <p className="description">
              <ul>
                <li>
                  Updated data layer for interactive interfaces on educational
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
          <section className="experience-block">
            <div className="dates">June 2015 – January 2020</div>
            <h1 className="first-line">Owner/Project Manager</h1>
            <h2 className="second-line">BOSS Entertainment Live</h2>
            <p className="description">
              <ul>
                <li>Hired and managed a team of +/- 20 performers</li>
                <li>
                  Fostered team engagement, allowing all team members to feel a
                  sense of ownership and pride
                </li>
                <li>
                  Established and maintained business relationships with clients
                  and partners both locally and out of state
                </li>
                <li>
                  Managed projects and events such as group costume builds,
                  choreographed shows, fundraisers.
                </li>
                <li>
                  Organized and planned multiple projects, delivering on ad hoc
                  client requests in parallel
                </li>
                <li>
                  Consistently met challenging deadlines with high quality
                  results
                </li>
              </ul>
            </p>
          </section>
        <section className="experience-block education">
          <h1 className="first-line">
            EDUCATION <img src={remote} alt="remote logo" />
          </h1>
          <div className="dates">December 2019 – June 2020</div>
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
          <div className="dates">August 2005 – December 2009</div>
          <h2 className="second-line">
            Global Business Leadership and Management, BS
          </h2>
          <h2 className="second-line">Arizona State University</h2>
        </section>
        </div>
      </div>
    </div>
  )
}
