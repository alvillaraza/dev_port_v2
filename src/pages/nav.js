import React from "react"

import buttonClose from "../assets/button-icon-close.png"
import buttonOpen from "../assets/button-icon-open.png"

export default function Nav({ open, setOpen, setPage }) {
  return (
    <div className={`nav-container ${open ? "" : "hide"}`}>
      <div className="button-container">
        {open ? (
          <button onClick={() => setOpen(false)}>
            <img src={buttonClose} alt="close menu" />
          </button>
        ) : (
          <button onClick={() => setOpen(true)}>
            <img src={buttonOpen} alt="open menu" />
          </button>
        )}
      </div>
      <nav>
        <ul>
          <li>
            <button
              onClick={() => {
                setPage("resume")
                setOpen(false)
              }}
            >
              Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setPage("portfolio")
                setOpen(false)
              }}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setPage("about-me")
                setOpen(false)
              }}
            >
              About Me
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setPage("landing-page")
                setOpen(false)
              }}
            >
              Home
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
