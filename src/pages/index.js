import React, {useState} from "react"


import LandingPage from "./landing-page"
import AboutMe from "./about-me"
import Resume from "./resume"
import Portfolio from "./portfolio"
import Nav from "./nav"

import '../Normalize.css'
import '../portfolio.css'

export default function Home() {
  const [open, setOpen] = useState(false);

  return <div className="app-container">
    
    {/* <LandingPage open={open} setOpen={setOpen} /> */}
    {/* <AboutMe /> */}
    <Resume />
    {/* <Portfolio /> */}
    <Nav open={open} setOpen={setOpen}/>
 
  </div>
}
