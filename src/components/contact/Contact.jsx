import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// emailjs.send(serviceId, templateId, publicKey);

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey
      })
     e.target.reset()
  };
  return (
    
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">
            <div className="container__content">
                <h3 className="contact__title">Talk to me</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">suryasubramaniyam19@gmail.com</span>

                        <a href="mailto:suryasubramaniyam19@gmail.com" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon "></i>
                        </a>

                    </div>
                    {/* second */}
                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>

                        <h3 className="contact__card-title">Whatsapp</h3>
                        <span className="contact__card-data">+91 9080995182</span>

                        <a href="https://api.whatsapp.com/send?phone=9080995182&text=Hello, more information!
" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon "></i>
                        </a>

                    </div>
                     {/*  third*/}
                    <div className="contact__card">
                        <i className="bx bxl-messenger contact__card-icon"></i>

                        <h3 className="contact__card-title">LinkedIn</h3>
                        <span className="contact__card-data">user.fb123</span>

                        <a href="www.linkedin.com/in/suryas19" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon "></i>
                        </a>

                    </div>
                </div>

            </div>
            <div className="container__content">
                <h3 className="contact__title">Write a Message</h3>

                  <form ref={form} onSubmit={sendEmail} className="contact__form">
                  <div className="contact__form-div">
                    <label  className="contact__form-tag">Name</label>
                    <input type="text" name="name" className="contact__form-input" placeholder="Insert Your Name" />
                  </div>
                  <div className="contact__form-div">
                    <label  className="contact__form-tag">Mail</label>
                    <input type="email" name="email" className="contact__form-input" placeholder="Insert Your email" />
                  </div>
                  <div className="contact__form-div contact__form-area">
                    <label  className="contact__form-tag">Message</label>
                    <textarea name="message"  cols="30" rows="10"
                    className="contact__form-input" placeholder="Write your message" ></textarea>
                  </div>
                    
                  <button  className="button button--flex">
    Send Message 

</button>
                  </form>    
            </div>
        </div>

    </section>
  )
}

export default Contact