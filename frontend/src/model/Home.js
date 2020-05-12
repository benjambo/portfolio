import React from 'react'
import { Grid, Cell } from 'react-mdl'
import profilepic from '../assets/profilepic.png'

export const Home = () => {
  return (
    <div className="all-content" style={{ width: '100%', margin: 'auto' }}>
      <Grid className="home-grid">
        <Cell col={12}>
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

              <a
                target="_blank"
                href="https://facebook.com/benjamin.bowo"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook-square" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  )
}
