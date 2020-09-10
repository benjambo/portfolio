import React from 'react'
import profilepic from '../assets/profilepic.png'
import { Resume } from './Resume'
import { Projects } from './Projects'
import { Spring } from 'react-spring/renderprops'
//import video from '../assets/video.mp4'

export const Home = () => {
  return (
    <div>
      <div className="home-grid">
        <section id="home">
          <img className="profile-picture" alt="profile" src={profilepic} />
          <div className="banner-text">
            <h1>Full Stack Web Developer</h1>
            <hr />
            <p>
              Javascript | React | NodeJS | Express | MongoDB | HTML & CSS |
              Java
            </p>
            <div className="social-links-home">
              {/* Github */}
              <a
                target="_blank"
                href="https://github.com/benjambo"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github-square" aria-hidden="true" />
              </a>
              {/* LinkedIn */}
              <a
                target="_blank"
                href="https://linkedin.com/in/benschelling"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin" aria-hidden="true" />
              </a>
              {/* Instagram */}
              <a
                target="_blank"
                href="https://instagram.com/benjaminjoshin"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram" aria-hidden="true" />
              </a>
              {/* Facebook */}
              <a
                target="_blank"
                href="https://facebook.com/beni.schelling"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-square" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </div>

      <div className="home-second-grid">
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ duration: 800 }}
        >
          {(props) => (
            <div className="qoutes" style={props}>
              Welcome to my Portfolio. Feel free to browse through my projects
              beneath the tabs down below.
            </div>
          )}
        </Spring>
        <p className="qoutes"></p>
      </div>

      <section id="projects">
        <Projects />
      </section>
      <div className="home-second-grid">
        <br />
        <br />
        <p className="qoutes">
          Contact info and more about myself further below
        </p>
      </div>
      <section id="resume">
        <Resume />
      </section>
    </div>
  )
}

/*
<video autoPlay="autoplay" muted loop="loop" className="myVideo">
<source className="myVideo" src={video} type="video/mp4" />
</video>
*/
