import React from 'react'
import contactpic from '../assets/profilepic.jpg'
import { Experiences } from '../components/Experiences'
import { Random } from 'react-animated-text'
import { FadeInSection } from '../components/FadeInSection'

export const Resume = () => {
  return (
    <FadeInSection>
      <div className="resume-grid">
        <div className="resume-column-left">
          <div>
            <img
              src={contactpic}
              alt="profile"
              style={{ height: '200px', borderRadius: '50px' }}
            />
          </div>
          <h2 style={{ fontFamily: 'Montserrat' }}>Benjamin Schelling</h2>
          <h4 style={{ fontFamily: 'Montserrat' }}>
            Software Engineer Student
          </h4>
          <hr style={{ borderTop: '1px solid black' }}></hr>
          <p>
            I’m a 23 year old software engineering student. I have a high
            interest in IT and love working among technology. During my studies,
            I have got to learn Java, JavaScript, ReactJS, SQL, HTML and CSS on
            strong bases and minor knowledge in C and C#. I want to start
            working in an IT company to promote my knowledge and experience. I’m
            determined on developing myself and on learning new skills.
          </p>
          <hr style={{ borderTop: '1px solid black' }}></hr>
          <h5>Phone</h5>
          <a target="_blank" rel="noopener noreferrer" href="tel:+358409656771">
            +358 40 9656771
          </a>
          <h5>Email</h5>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:beni.schelling@gmail.com"
          >
            beni.schelling@gmail.com
          </a>
          <h5>Address</h5>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/place/Uutiskatu+3,+00240+Helsinki/@60.2036909,24.9201223,19.55z/data=!4m5!3m4!1s0x469209ed15a1bbd7:0x56ba182486f5d7a!8m2!3d60.203713!4d24.920196"
          >
            Uutiskatu, Helsinki
          </a>
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
              href="https://linkedin.com/in/benschelling"
              rel="noopener noreferrer"
            >
              <i
                className="fab fa-linkedin"
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
              href="https://facebook.com/beni.schelling"
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
            description={'Corporal'}
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
            endYear={'08/2020'}
            place={'IT Support Group Leader, Metropolia Ammattikorkeakoulu Oy'}
            description={
              'Leading a group of trainees and managing Network configuration, Software managment, IT Installations and Customer Service'
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
              margin: '0',
            }}
          >
            Java • JavaScript • ReactJS • SQL • HTML & CSS
          </h5>
        </div>
      </div>
    </FadeInSection>
  )
}
