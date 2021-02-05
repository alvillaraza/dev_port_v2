import React from "react"

import github from "../assets/logo-github.png"
import linkedin from "../assets/logo-linked-in.png"

export default function Contact() {
  return (
  
      <div className="contact-info">
        <h2>Alexis Villaraza</h2> <div className="links">
        </div>
        <h3>480.703.7967</h3>
        <a href="mailto:alexis.borja@gmail.com"><h4>alexis.borja@gmail.com</h4></a>
        <div className="links">
          <a
            href="https://github.com/alvillaraza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/alvillaraza/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linked in icon" />
          </a>
        </div>
      </div>
  )
}
