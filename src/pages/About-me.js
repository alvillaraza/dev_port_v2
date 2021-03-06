import React from "react"

import Contact from "../components/Contact"

import portrait from "../assets/alexis-villaraza-portrait.jpg"

export default function AboutMe({ page }) {
  return (
    <div
      className={`about-me-container ${page === "about-me" ? "" : "hidden"}`}
    >
      <div className="portrait">
        <img className="portrait" src={portrait} alt="portrait of Alexis" />
      </div>
      <div className="about-me-text">
        <Contact />
        <div className="about-me-story">
          <p>
            Alexis is a Full Stack Web Developer with entrepreneurial and
            leadership experience. Her background in management taught her to be
            a well organized and tactical planner, with a proficiency in working
            with various types of people.
          </p>
          <p>
            Alexis studied at Lambda School, learning both hard and soft skills
            in a span of 9 months. She built multiple apps in cross-functional
            teams as a student, working with UX Designers, Data Scientists, and
            other Web Developers. She went on to become a Team Lead at the same
            school, solidifying her technical skills by teaching students and
            managing team projects.
          </p>
          <p>
            She is currently working full time as Engineer I at Carvana and is
            looking to supplement her income through freelance developing. If
            you, or someone you know needs a website, email her at{" "}
            <a href="mailto:alexis.borja@gmail.com">alexis.borja@gmail.com</a>{" "}
            for a quote.
          </p>
          {/* <p>
            She is currently looking for a full time job to gain more experience
            as a Full Stack Developer. With a passion in eco-solutions, she
            hopes to, one day, use her development skills to provide a positive
            impact to mother nature.
          </p> */}
          {/* <ul>
            <li>
              Currently taking:
              <a
                href="https://frontendmasters.com/learn/fullstack/"
                target="_blank"
              >
                Front End Masters Full Stack Course
              </a>
            </li>
            <li>
              Finished self-study materials:
              <a href="https://javascript30.com/" target="_blank">
                Wes Bos 30 Days of Vanilla Javascript
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  )
}
