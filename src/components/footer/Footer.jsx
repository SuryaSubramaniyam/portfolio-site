import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Surya S</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#testimonials" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#testimonials" className="footer__link">Certifications</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.instagram.com/" 
            className="footer__social-link" 
            target='_blank'>
            <i class="bx bxl-instagram"></i>
        </a>
            <a href="https://www.facebook.com/" 
            className="footer__social-link"
            target='_blank'>
            <i class="bx bxl-facebook"></i>
            </a>
            <a href="https://github.com/" 
            className="footer__social-link" 
            target='_blank'>
            <i class="bx bxl-twitter"></i>
            </a>
            </div>

            <span className='footer__copy'>
                &#169; Surya S. All rigths reserved
            </span>

        </div>
    </footer>
    
  )
}

export default Footer