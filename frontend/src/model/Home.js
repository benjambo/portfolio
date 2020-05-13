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
        <p>
          "On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire, that they cannot foresee the pain
          and trouble that are bound to ensue; and equal blame belongs to those
          who fail in their duty through weakness of will, which is the same as
          saying through shrinking from toil and pain. These cases are perfectly
          simple and easy to distinguish. In a free hour, when our power of
          choice is untrammelled and when nothing prevents our being able to do
          what we like best, every pleasure is to be welcomed and every pain
          avoided. But in certain circumstances and owing to the claims of duty
          or the obligations of business it will frequently occur that pleasures
          have to be repudiated and annoyances accepted. The wise man therefore
          always holds in these matters to this principle of selection: he
          rejects pleasures to secure other greater pleasures, or else he
          endures pains to avoid worse pains."
        </p>
      </div>
    </div>
  )
}
