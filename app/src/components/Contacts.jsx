import React from "react";
import MainTitle from "./MainTitle";

const Contacts = () => {
  const Contact = (props) => {
    return (
      <div className="contact-item">
        <div className="icon">
          <i className="fas fa-map-marker-alt"></i>
          <span>Location</span>
        </div>
        <p>
          <span>: London, United Kingdom</span>
        </p>
      </div>
    );
  };

  const ContactIcons = () => {
    return (
      <div className="contact-icons">
        <ContactIcon />
      </div>
    );
  };

  const ContactIcon = (props) => {
    const { ref, classValue } = props;
    return (
      <div className="contact-icon">
        <a href={ref} target={"_blank"} rel="noreferrer">
          <i className={classValue}></i>
        </a>
      </div>
    );
  };

  return (
    <div>
      <MainTitle headerBegin="Contact" headerEnd="Me" text="Contact Me" />
      <div className="contact-content-con">
        <div className="left-contact">
          <h4>Contact me here</h4>
          <p>Dadadadada</p>
        </div>
        <div className="contact-info">
          <Contact />
        </div>
        <ContactIcons />
        <div className="right-contact">
          <form action="" className="contact-form">
            <div className="input-control">
              <input type={"text"} required placeholder="Your Name" />
              <input type={"email"} required placeholder="Your Email" />
            </div>
            <div className="input-control">
              <input type={"text"} required placeholder="Enter Subject" />
            </div>
            <div className="input-control">
              <textarea
                name=""
                id=""
                cols="15"
                rows="8"
                placeholder="Message here..."
              />
            </div>
            <div className="submit-btn">
              <a href="#" className="main-btn">
                <span className="btn-text">Download CV</span>
                <span className="btn-icon">
                  <i className="fas fa-download"></i>
                </span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
