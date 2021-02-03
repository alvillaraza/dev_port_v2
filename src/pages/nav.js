import React from "react"

import buttonClose from "../assets/button-icon-close.png"
import buttonOpen from "../assets/button-icon-open.png"

export default function Nav({open, setOpen}) {

  return (
    <div className={`nav-container ${open ? "" : "hide"}`}>
      <div className="button-container">
       { open ?
        <button onClick={() => setOpen(false)}>
          <img src={buttonClose} alt="close menu" />
        </button> : <button onClick={() => setOpen(true)}>
          <img src={buttonOpen} alt="open menu" />
        </button>}
        
      </div>
      <nav>
        <ul>
          <li>Experience</li>
          <li>Projects</li>
          <li>About Me</li>
        </ul>
      </nav>
    </div>
  )
}
