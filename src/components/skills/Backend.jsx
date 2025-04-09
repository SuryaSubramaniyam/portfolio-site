import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Backend Developer</h3>
    <div className="skills__box">
        <div className="skills__group">

        <div className="skills__data">
        <i class='bx bxs-badge-check' ></i>  
        <div>
           <h3 className="skills__name">Node JS</h3>
           <span className="skills__level">Runtime Environment</span> 
        </div> 
        </div>
        
        <div className="skills__data">
        <i class='bx bxs-badge-check' ></i>  
        <div>
           <h3 className="skills__name">Mongo DB</h3>
           <span className="skills__level">NoSQL Database</span> 
        </div> 
        </div>
        <div className="skills__data">
        <i class='bx bxs-badge-check' ></i>  
        <div>
           <h3 className="skills__name">Express</h3>
           <span className="skills__level">Backend Framework</span> 
        </div> 
        </div>
        <div className="skills__data">
        <i class='bx bxs-badge-check' ></i>  
        <div>
           <h3 className="skills__name">My Sql</h3>
           <span className="skills__level">Relational Database</span> 
        </div> 
        </div>
        <div className="skills__data">
        <i class='bx bxs-badge-check' ></i>  
        <div>
           <h3 className="skills__name">PHP</h3>
           <span className="skills__level">Server-Side Scripting</span> 
        </div> 
        </div>
        </div>
    </div>
  </div>
  )
}

export default Backend