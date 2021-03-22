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
            She is contracting as a Front End Developer at Strongmind,
            building interactive educational platforms for an online high
            school. Fueled by continuous learning, she enjoys developing games
            designed to engage students to study different subject materials.
            She learns scientific and psychological facts along the way!
          </p>
          <p>
            She is currently looking for a full time job to gain more experience
            as a Full Stack Developer. With a passion in eco-solutions, she
            hopes to, one day, use her development skills to provide a positive impact to
            mother nature.
          </p>
          <ul>
            <li>Currently learning: Vue.js </li>
            <li>Finished self-study materials: Wes Bos 30 Days of Vanilla Javascript</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
