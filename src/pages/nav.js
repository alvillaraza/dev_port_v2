import React from "react"

import buttonClose from "../assets/button-icon-close.png"
import buttonOpen from "../assets/button-icon-open.png"

export default function Nav() {
  return (
    <nav>
      {" "}
      <button>
        <img src={buttonClose} alt="close menu" />
      </button>
      <button>
        <img src={buttonOpen} alt="open menu" />
      </button>
      <ul>
        <li>Experience</li>
        <li>Projects</li>
        <li>About Me</li>
      </ul>
    </nav>
  )
}
