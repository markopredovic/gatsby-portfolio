import React from "react"
import { Link } from "gatsby"

// https://quote-garden.herokuapp.com/quotes/random

const AboutMe = () => {
  return (
    <div className="l-about-me">
      <div className="l-container">
        <h3 className="title-section">About me</h3>
        <div className="l-content">
          <p>
            8+ years of hands-on frontend development experience, working with
            many clients on a diverse set of projects, gaining valuable
            knowledge along the way. I understand the best client's uncertainty
            and the fear of failure, so I go an 'extra mile' to ensure success
            of each project and timely delivery. I value and invest into long
            term professional relationship. After things start to go in the
            right direction and friendly rapport is established, client and
            developer form a partnership. Through these partnerships many great
            projects have been delivered, as seen on the page{" "}
            <Link to="/portfolio">portfolio</Link>. Check out the{" "}
            <Link to="/services">services</Link> page for available offerings.{" "}
            <Link to="/contact">Contact me</Link> today and let's start a new
            project together!
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
