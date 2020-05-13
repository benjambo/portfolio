import React from 'react'
import { Grid, Cell } from 'react-mdl'
import profilepic from '../assets/profilepic.png'

export const Home = () => {
  return (
    <div className="all-content">
      <div className="home-grid">
        <div>
          <img className="profile-picture" alt="profile" src={profilepic} />
          <div className="banner-text">
            <h1>Full Stack Web Developer</h1>
            <hr />
            <p>
              Javascript | React | NodeJS | Express | MongoDB | HTML & CSS |
              Java
            </p>
            <div className="social-links">
              {/* Github */}
              <a
                target="_blank"
                href="https://github.com/benjambo"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
              {/* LinkedIn */}
              <a
                target="_blank"
                href="https://linkedin.com/in/benjaminbowo"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
              {/* Instagram */}
              <a
                target="_blank"
                href="https://instagram.com/benjaminjoshin"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
              {/* Facebook */}
              <a
                target="_blank"
                href="https://facebook.com/benjamin.bowo"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook-square" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-second-grid">
        <p>This is</p>
        <h2>Hello there my king</h2>
      </div>
    </div>
  )
}
