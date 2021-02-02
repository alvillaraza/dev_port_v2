import React from "react"

import portrait from "../assets/alexis-villaraza-portrait.jpg"

export default function AboutMe() {
  return (
    <>
      <div className="portrait">
        <img src={portrait} />
      </div>
      <div className="contact-info">
        <h2>Alexis Villaraza</h2>
        <h3>480.703.7967</h3>
        <h4>alexis.borja@gmail.com</h4>
      </div>
      <div className="about-me-text">
        <p>
          I studied Full Stack Web Development through Lambda School where I
          learned plenty of hard and soft skills in a span of 9 months. I worked
          with groups to build multiple apps. It was a challenging journey, and
          I gave back by becoming a Team Lead at the school to help current
          students learn to code. My technical skills were solidified as a Team
          Lead by learning to read and debug multiple students’ codes. Seeing my
          students grow so fast has made me proud, and I am rooting for each and
          every one of them.
        </p>

        <p>
          I began contractual work at Strongmind, helping build interactive
          educational platforms. I enjoyed working for education as I got to
          learn scientific facts while I work!
        </p>

        <p>
          I am currently looking for more experience in Web Development. I have
          been schooling and working remotely, so I am all set and ready to work
          remotely or in office.With a passion in eco-solutions, I hope to, one
          day, use my development skills to provide a positive impact to mother
          nature.
        </p>
      </div>
    </>
  )
}
