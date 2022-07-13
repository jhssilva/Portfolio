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
          <span>Paris, France</span>
        </p>
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
          <h4>Hugo Silva</h4>
          <p>
            I'm a software engineer, always opening to new opportunities to
            grow!
          </p>
          <p>
            Please don't hesitate reaching out to me. I'm hoping to know a
            little bit more about you!
          </p>
          <div className="contact-info">
            <Contact />
          </div>
        </div>

        <ContactIcon />
        <div className="right-contact">
          <form action="" className="contact-form">
            <div className="input-control">
              <input type={"text"} required placeholder="Your Name" />
            </div>
            <div className="input-control">
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
              <a
                href="mailto:jhssilva96@gmail.com"
                method="GET"
                className="main-btn"
              >
                <span className="btn-text">Send Message!</span>
                <span className="btn-icon">
                  <i className="fas fa-message"></i>
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
