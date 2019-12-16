import React from "react"
import "../App.css"
import {Link} from "react-router-dom"
import Signup from "../Atho/Signup_emp"

class SideNav extends React.Component {
  state = { state: {showNav: false} }

  openNavClick = e => {
    e.preventDefault()
    this.openNav()
  }

  closeNavClick = e => {
    e.preventDefault()
    this.closeNav()
  }

  openNav = () => {
    this.setState({
      showNav: true
    })

    document.addEventListener("keydown", this.handleEscKey)
  }
  closeNav = () => {
    this.setState({
      showNav: false
    })

    document.removeEventListener("keydown", this.handleEscKey)
  }

  handleEscKey = e => {
    if (e.key === "Escape") {
      this.closeNav()
    }
  }

  render() {
    const { showNav } = this.state
    let navCoverStyle = { width: showNav ? "100%" : "0" }
    let sideNavStyle = { width: showNav ? "250px" : "0" }

    return (
      <React.Fragment>
        <span onClick={this.openNavClick} class="open-nav"> &#9776; Menu </span>
        <div onClick={this.navCoverClick}
          class="nav-cover"
          style={navCoverStyle}
        />
        <div name="side-nav" class="side-nav" style={sideNavStyle}>
          <a href="#" onClick={this.closeNavClick} class="close-nav">
            &times;
          </a>
          <Link className="link" to = "/">home page </Link>
          <Link className="link" to = "/">employeer</Link>
          <Link className="link" to = "/">show job </Link>
          <Link className="link" to = "/Signup">sign up</Link>
          
        </div>
      </React.Fragment>
    )
  }
}

export default SideNav
