import React from "react"


import LandingPage from "./landing-page"
import AboutMe from "./about-me"
import Resume from "./resume"

export default function Home() {
  return <div className="app-container">
    
    <LandingPage />
    <AboutMe />
    <Resume />
 
  </div>
}
