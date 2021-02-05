import React, { useState } from "react"

import LandingPage from "./landing-page"
import AboutMe from "./about-me"
import Resume from "./resume"
import Portfolio from "./portfolio"
import Nav from "./nav"

import "../Normalize.css"
import "../portfolio.css"

export default function Home() {
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState("landing-page")

  return (
    <main>
      <div className="app-container">
        <LandingPage open={open} setOpen={setOpen} page={page}  />
        <AboutMe open={open} setOpen={setOpen} page={page} />
        <Resume open={open} setOpen={setOpen} page={page} />
        <Portfolio open={open} setOpen={setOpen} page={page} />
      </div>
      <Nav open={open} setOpen={setOpen} setPage={setPage} />
    </main>
  )
}
