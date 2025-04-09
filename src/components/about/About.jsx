import React from 'react';
import './about.css';
import AboutImg from '../../assets/suryaimg1.jpg';
import Info from './Info';
import CV from '../../assets/Surya CV.pdf';

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>
      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data">
         <Info />
         <p className="about__description">I am a proficient Full-Stack Developer with expertise in HTML, CSS, JavaScript,BootStrap, Node.js, Express.js, React, and MongoDB, MySql. 
Skilled in developing scalable web applications, I work with RESTful APIs, 
templating engines, web frameworks, and cloud deployment on MongoDB Atlas.
 My focus is on writing clean, efficient, and optimized code to build seamless and high-performance applications.  
Passionate about problem-solving and continuous learning, I stay updated with the latest technologies to enhance user experiences and system efficiency. 
Eager to contribute to innovative projects and collaborate with teams to create impactful digital solutions.
         </p>
         <a download="" href={CV} className="button button--flex" >Download My CV   </a>
        </div>
      </div>


    </section>
  );
}

export default About