import React from "react"

import github from "../assets/logo-github.png"
import linkedin from "../assets/logo-linked-in.png"

export default function LandingPage() {
  return (
    <>
      <div className="links">
        <img src={github}></img>
        <img src={linkedin}></img>
      </div>
      <div className="name-title">
        <h1>Alexis Villaraza</h1>
        <h2>FULL-STACK WEB DEVELOPER</h2>
      </div>
    </>
  )
}
