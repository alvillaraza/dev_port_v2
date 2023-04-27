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
            Alexis is a Front End Web Developer with entrepreneurial and
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
            She worked full time as Software Engineer I at Carvana. She worked on Carvana's landing page and search page using TypeScript, React, and Jest. She recently contracted at Integrate, gaining experience in a small start-up company. She worked at Integrate as a Full Stack Developer, adding Go and Tailwind to her repertoire. She is currently looking for a full time remote position.  If
            you or someone you know is hiring a Software Engineer, you can contact her at {' '}
            <a href="mailto:alexis.borja@gmail.com">alexis.borja@gmail.com</a>.
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
