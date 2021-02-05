import React, { useState } from "react"

import LandingPage from "./Landing-page"
import AboutMe from "./About-me"
import Resume from "./Resume"
import Portfolio from "./Portfolio"
import Nav from "./Nav"

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
