import React from 'react'
//import resume from '../assets/resume.png'
import contactpic from '../assets/contactpic.jpeg'
import { Experiences } from '../components/Experiences'
import { Random } from 'react-animated-text'

//<img className='resume-img' src={resume} />

export const Resume = () => {
  return (
    <div className="resume-grid">
      <div className="resume-column-left">
        <div>
          <img
            src={contactpic}
            alt="profile"
            style={{ height: '200px', borderRadius: '10px' }}
          />
        </div>
        <h2 style={{ fontFamily: 'Montserrat' }}>Benjamin Bowo</h2>
        <h4 style={{ fontFamily: 'Montserrat' }}>Software Engineer Student</h4>
        <hr style={{ borderTop: '1px solid black' }}></hr>
        <p>
          I’m a 23 year old software engineering student. I have a high interest
          in IT and love working among technology. During my studies, I have got
          to learn Java, JavaScript, ReactJS, SQL, HTML and CSS on strong bases
          and minor knowledge in C and C#. I want to start working in an IT
          company to promote my knowledge and experience. I’m determined on
          developing myself and on learning new skills.
        </p>
        <hr style={{ borderTop: '1px solid black' }}></hr>
        <h5>Phone</h5>
        <p>+358 40 9656771</p>
        <h5>Email</h5>
        <p>ben.bowo@gmail.com</p>
        <h5>Address</h5>
        <p>Uutiskatu 3 C 136, Helsinki</p>
        <hr style={{ borderTop: '1px solid black' }}></hr>
        <div className="social-links-resume">
          {/* Github */}
          <a
            target="_blank"
            href="https://github.com/benjambo"
            rel="noopener noreferrer"
          >
            <i
              className="fab fa-github-square"
              aria-hidden="true"
              style={{ color: 'black' }}
            />
          </a>
          {/* LinkedIn */}
          <a
            target="_blank"
            href="https://linkedin.com/in/benjaminbowo"
            rel="noopener noreferrer"
          >
            <i
              className="fab fa-linkedin-square"
              aria-hidden="true"
              style={{ color: 'black' }}
            />
          </a>
          {/* Instagram */}
          <a
            target="_blank"
            href="https://instagram.com/benjaminjoshin"
            rel="noopener noreferrer"
          >
            <i
              className="fab fa-instagram"
              aria-hidden="true"
              style={{ color: 'black' }}
            />
          </a>
          {/* Facebook */}
          <a
            target="_blank"
            href="https://facebook.com/benjamin.bowo"
            rel="noopener noreferrer"
          >
            <i
              className="fab fa-facebook-square"
              aria-hidden="true"
              style={{ color: 'black' }}
            />
          </a>
        </div>
      </div>
      <div className="resume-column-right">
        <h3 style={{ fontFamily: 'Montserrat' }}>Education</h3>
        <Experiences
          startYear={'08/2018'}
          endYear={'present'}
          place={'Metropolia University Of Applied Sciences'}
          description={"Bachelor's Degree in Information Technology"}
        />
        <br />
        <Experiences
          startYear={'07/2016'}
          endYear={'06/2017'}
          place={'The Finnish Defence Forces'}
          description={'Corpral'}
        />
        <br />
        <Experiences
          startYear={'08/2013'}
          endYear={'06/2016'}
          place={'Lauttasaaren Yhteiskoulun Lukio'}
          description={'Finnish Marticulation Examination'}
        />
        <br />
        <hr style={{ borderTop: '1px solid white' }}></hr>
        <h3 style={{ fontFamily: 'Montserrat' }}>Work Experience</h3>
        <Experiences
          startYear={'10/2019'}
          endYear={'present'}
          place={'IT Support, Metropolia Ammattikorkeakoulu Oy'}
          description={
            'Network configuration, IT Installations and Customer Service'
          }
        />
        <br />
        <Experiences
          startYear={'06/2019'}
          endYear={'08/2019'}
          place={'IT Support Intern, Metropolia Ammattikorkeakoulu Oy'}
          description={
            'Learning to work as part of an IT Support team and installing technology'
          }
        />
        <br />
        <Experiences
          startYear={'10/2015'}
          endYear={'present'}
          place={'Customer Service / Lifeguard, Urheiluhallit Oy'}
          description={'Customer service and security'}
        />
        <br />
        <hr style={{ borderTop: '1px solid white' }}></hr>
        <h3 style={{ fontFamily: 'Montserrat' }}>Skills</h3>
        <h5
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            letterSpacing: '0.3em',
            lineHeight: '200%',
            margin: '0'
          }}
        >
          <Random
            text="Java • JavaScript • ReactJS • SQL • HTML & CSS"
            effect="jump"
            effectChange={0.2}
            effectDuration={0.5}
          />
        </h5>
      </div>
    </div>
  )
}
