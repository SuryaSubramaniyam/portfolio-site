import React, { useState } from 'react';
import './services.css';

const Services = () => {
    const[toggleState ,setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
<section className="services section" id="services">
<h2 className="section__title">Services</h2>
<span className="section__subtitle">What I Offer</span>

<div className="services__container container grid">
    <div className="services__content">
       
     <div>
        <i className="uil uil-arrow services__icon"></i>
        <h3 className="services__title"> Full-Stack <br /> Web Development </h3>
     </div>

    <span className="services__button" onClick={()=>toggleTab(1) }>View More 
        <i className="uil uil-arrow-right services__button-icon"></i>
    </span>

    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal" }>
        <div className="services__modal-content">
            <i onClick={ () => toggleTab(0)} className="uil uil-times services__modal-close"></i>

            <h3 className="services__modal-title">Full-Stack Web Development</h3>
            <p className="services__modal-description">
I build modern, responsive, and scalable web applications using HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.  
I focus on creating seamless frontend & backend integration, ensuring smooth user experiences and efficient database management.</p>

<ul className="services__modal-services grid">
    <li className="services__modal-service">
        <i className="uil uil-check-circle services__modal-icon"></i>
        <p className="services__modal-info"> Developing end-to-end web applications with React, Node.js, and MongoDB.  
 </p>
    </li>
    <li className="services__modal-service">
        <i className="uil uil-check-circle services__modal-icon"></i>
        <p className="services__modal-info">Creating dynamic and interactive user interfaces.  
 </p>
    </li>
    <li className="services__modal-service">
        <i className="uil uil-check-circle services__modal-icon"></i>
        <p className="services__modal-info">Integrating RESTful APIs and databases.  
       </p>
    </li>
    <li className="services__modal-service">
        <i className="uil uil-check-circle services__modal-icon"></i>
        <p className="services__modal-info">Ensuring performance, security, and responsiveness. 
       </p>
    </li>
</ul>
        </div>
    </div>

    </div>
    <div className="services__content">
       
       <div>
          <i className="uil uil-edit services__icon"></i>
          <h3 className="services__title">UI/UX Design <br /> Prototyping</h3>
       </div>
  
      <span onClick={()=>toggleTab(2) } className="services__button">View More 
          <i className="uil uil-arrow-right services__button-icon"></i>
      </span>
  
      <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal" }>
          <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
  
              <h3 className="services__modal-title">UI/UX  Designer </h3>
              <p className="services__modal-description">
              Crafting visually appealing and user-friendly designs to enhance the digital experience.</p>
  
  <ul className="services__modal-services grid">
      <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Creating wireframes, prototypes, and mockups using Canva, Bootstrap, and Figma.  
 </p>
      </li>
      <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info"> Designing intuitive and engaging user interfaces.  
</p>
      </li>
      <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info"> Enhancing user experience with interactive elements.  
  </p>
      </li>
      <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">         Developing consistent branding and visual identity. </p>
      </li>
  </ul>
          </div>
      </div>
  
      </div>
      <div className="services__content">
       
       <div>
          <i className="uil uil-edit services__icon"></i>
          <h3 className="services__title">Website Deployment,<br /> Optimization</h3>
       </div>
  
      <span onClick={()=>toggleTab(3) } className="services__button">View More 
          <i className="uil uil-arrow-right services__button-icon"></i>
      </span>
  
      <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal" }>
          <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
  
              <h3 className="services__modal-title">Website Deployment </h3>
              <p className="services__modal-description">
              Deploying, optimizing, and maintaining websites for seamless performance and accessibility.  
              </p>
  
  <ul className="services__modal-services grid">
      <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Deploying websites on Netlify, Vercel, and MongoDB Atlas.  
</p>
      </li>
      <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info"> Optimizing website speed, performance, and SEO.  
 </p>
      </li>
      <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Ensuring mobile responsiveness and cross-browser compatibility.  
        </p>
      </li>
      <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">   Managing cloud hosting and database integrations. </p>
      </li>
  </ul>
          </div>
      </div>
  
      </div>
</div>
</section>
  )
}

export default Services