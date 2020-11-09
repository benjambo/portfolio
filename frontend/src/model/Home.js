import React from 'react'
import profilepic from '../assets/profilepic2.jpg'
import { Resume } from './Resume'
import { Projects } from './Projects'
import { Spring } from 'react-spring/renderprops'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import video from '../assets/coding.mp4'

export const Home = () => {
  return (
    <div>
      <div className="home">
        <section className="showcase">
          <div className="video-container">
            <video autoPlay="autoplay" muted loop="loop" className="myVideo">
              <source className="myVideo" src={video} type="video/mp4" />
            </video>
          </div>
          <div className="video-content">
            <div className="banner-text">
              <img className="profile-picture" alt="profile" src={profilepic} />
              <h1>Full Stack Web & Software Developer</h1>
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
            <AnchorLink
              className="btn"
              style={{
                textDecoration: 'none',
              }}
              offset={() => 100}
              href="#start"
            >
              <i className="fas fa-arrow-circle-down"></i>
            </AnchorLink>
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
            <div id="start" className="qoutes" style={props}>
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

<section id="home">
          <img className="profile-picture" alt="profile" src={profilepic} />
          <div className="banner-text">
            <h1>Full Stack Web & Software Developer</h1>
            <hr />
            <p>
              Javascript | React | NodeJS | Express | MongoDB | HTML & CSS |
              Java
            </p>
            <div className="social-links-home">
              <a
                target="_blank"
                href="https://github.com/benjambo"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github-square" aria-hidden="true" />
              </a>
              <a
                target="_blank"
                href="https://linkedin.com/in/benschelling"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin" aria-hidden="true" />
              </a>
              <a
                target="_blank"
                href="https://instagram.com/benjaminjoshin"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram" aria-hidden="true" />
              </a>
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
*/
