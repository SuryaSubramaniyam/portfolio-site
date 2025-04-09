import React, { useState } from 'react'
import './qualification.css';


const Qualification = () => {
     const[toggleState ,setToggleState] = useState(1);
    
        const toggleTab = (index) => {
            setToggleState(index);
        }

    
  return (
<section className="qualification section">
<h2 className="section__title">Qualification</h2>
<span className="section__subtitle">My personal journey</span>

<div className="qualification__container container">
    <div className="qualification__tabs">
        <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
            
            <i className="uil uil-graduation-cap qualification__icon"></i>Education
        </div>
        <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
        
            <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
        </div>
        </div>
        
        

<div className="qualification__sections">
    <div className={toggleState === 1 ? "qualification__content qualification__content-active": "qualification__content "}>
        <div className="qualification__data">
            <div>
                <h3 className="qualification__title">
                Master of Computer Application(MCA)</h3>
                <span className="qualification__subtitle">Thiruvalluvar University, Adhiparasakthi College Of Arts & Science Vellore, India</span>
                <h3 className="qualification__title">CGPA: 8.4</h3>
                <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2022-2024
                </div>
            </div>

            <div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
            </div>
        </div>

        <div className="qualification__data">
            <div></div>

            <div>
            <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>

            </div>
            </div>
            <div>
            <h3 className="qualification__title">
            Bachelor of Computer Application(BCA)</h3>
            <span className="qualification__subtitle">Thiruvalluvar University, Arignar Anna Government Arts College Thiruvannamalai, India</span>
                 <h3 className="qualification__title">CGPA: 8</h3>
                <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>2019-2022
                </div>
            </div>
            
            
        </div>

        <div className="qualification__data">
            
            <div>
                <h3 className="qualification__title">Secondary School(SSLC)</h3>
                <span className="qualification__subtitle">Government High School, Vellore, India</span>
                <h3 className="qualification__title">CGPA: 8</h3>
                <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>2017
                </div>
            </div>

            <div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
            </div>
        </div>

        <div className="qualification__data">
        <div></div>

            <div>
            <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>

            </div>
            </div>
           

            
        </div>



    </div>
    

{/* Education */}

<div className={toggleState === 2 ? "qualification__content qualification__content-active": "qualification__content "}>
        <div className="qualification__data">
            <div>
                <h3 className="qualification__title">Internships | Software Engineer Trainee</h3>
                <span className="qualification__subtitle">Encycdata,(Remote) Bangalore</span>
                <span className="qualification__subtitle">Developed a responsive web app using PHP,MYsql,AJAX,HTML,CSS,JS.  
                </span>
                <span className="qualification__subtitle">Created dynamic UI components using EJS and Bootstrap.  
                 </span>
                <span className="qualification__subtitle">Worked with REST APIs and integrated backend services.
                 </span>
                <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>2023-2024
                </div>
            </div>

            <div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
            </div>
        </div>

        

        <div className="qualification__data">
        <div></div>

            <div>
            <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>

            </div>
            </div>
            <div>
                <h3 className="qualification__title"> Full Stack Developer | Personal Project</h3>
                <span className="qualification__subtitle">Portfolio Websit</span>
                <span className="qualification__subtitle">Designed and developed a personal portfolio using Node.js, React Js, HTML, CSS, JavaScript.  

</span>
                <span className="qualification__subtitle">Hosted on GitHub/ Netlify.</span>
                <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>2025
                </div>
            </div>


            
              
              

              {/* sdfjasdfslfkldsfkldfskldsf */}
            
            <div>
                <h3 className="qualification__title"> Full Stack Developer | Udemey</h3>
                <span className="qualification__subtitle">YelpCamp-Project</span>
                <span className="qualification__subtitle">Built a full stack application using MongoDB, Express.js, Node.js, React.  
  

</span>
                <span className="qualification__subtitle">Created dynamic UI components using EJS and Bootstrap.  
                </span>
                <span className="qualification__subtitle">Implemented user authentication,uploading a image using Cloudinary,Camp listings, and Book a place for Camping around the world using Geocoding,maps,Feedback & Rating System with full CRUD operations.
</span>
                <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>2025
                </div>
                
            </div>

            
        </div>

        
        

    </div>

  
</div>
</div>


</section>
  )
}

export default Qualification