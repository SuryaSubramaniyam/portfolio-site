import React from 'react'

const Info = () => {
  return (
<div className="about__info grid">
    <div className="about__box">
        <i class='bx bxs-award about__icon'></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">Fresher</span>
    </div>
    <div className="about__box">
    <i class='bx bxs-briefcase-alt-2 about__icon'></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">5+ Projects</span>
    </div>
    <div className="about__box">
    <i class='bx bxs-certification about__icon'></i>
        <h3 className="about__title">Certification</h3>
        <span className="about__subtitle">10+ Completed</span>
    </div>
</div>
  )
}

export default Info