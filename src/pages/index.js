import React from "react"


import LandingPage from "./LandingPage"
import AboutMe from "./AboutMe"
import Resume from "./Resume"

export default function Home() {
  return <div className="app-container">
    
    <LandingPage />
    <AboutMe />
    <Resume />
 
  </div>
}
