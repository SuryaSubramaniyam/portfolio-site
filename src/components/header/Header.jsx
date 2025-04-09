import React, { useState } from 'react';
import './header.css';

const Header = () => {
    
/*=============== Change background header ===============*/
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        // when the scroll is higher than 560 viewport height,add the shwo-scroll class to a tag with the scroll-top class
        if (this.scrollY >= 80) header.classList.add("show-header");
        else header.classList.remove("show-header")
        
    });

/*=============== Toggle Menu ===============*/
    const[Toggle, showMenu] = useState(false);
    const[activeNav, setActiveNav] = useState("#home");
  return (
    // <div>Header</div>
    <header className='header'>
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Surya S</a>
            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" onClick={ () => setActiveNav('#home')} 
                        className={activeNav === "#home" ? "nav__link active-link" : "nav__link" }>
                            <i className="uil uil-home nav__icon"></i>Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" onClick={ () => setActiveNav('#about')} 
                        className={activeNav === "#about" ? "nav__link active-link" : "nav__link" } >
                            <i className="uil uil-user nav__icon"></i>About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills" onClick={ () => setActiveNav('#skills')} 
                        className={activeNav === "#skills" ? "nav__link active-link" : "nav__link" }>
                            <i className="uil uil-file-alt nav__icon"></i>skills
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#services" onClick={ () => setActiveNav('#services')} 
                        className={activeNav === "#services" ? "nav__link active-link" : "nav__link" }>
                            <i className="uil uil-briefcase-alt nav__icon"></i>Services
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#testimonials" onClick={ () => setActiveNav('#testimonials')} 
                        className={activeNav === "#testimonials" ? "nav__link active-link" : "nav__link" }>
                            <i className="uil uil-briefcase-alt nav__icon"></i>Certifications
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" onClick={ () => setActiveNav('#contact')} 
                        className={activeNav === "#contact" ? "nav__link active-link" : "nav__link" } >
                            <i className="uil uil-message nav__icon"></i>Contact
                        </a>
                    </li>
                </ul>

                <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>

            </div>

            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i class="uil uil-apps"></i>
            </div>

        </nav>
    </header>
  )
}

export default Header