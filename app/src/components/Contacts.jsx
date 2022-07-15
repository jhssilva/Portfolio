import React, { useState } from "react";
import MainTitle from "./MainTitle";
import emailjs from "@emailjs/browser";
import { useAlert } from "react-alert";

const Contacts = () => {
  const alert = useAlert();

  const emptyFormContent = () => {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  };

  const [formContent, setFormContent] = useState(emptyFormContent());
  const [sendingEmail, setSendingEmail] = useState(false);

  const sendEmail = () => {
    if (sendingEmail) return;
    setSendingEmail(true);

    const YOUR_SERVICE_ID = "service_k6hfvqg",
      YOUR_TEMPLATE_ID = "template_odopr42",
      YOUR_PUBLIC_KEY = "yrNijmJMiLOGQPg44";

    emailjs
      .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, formContent, YOUR_PUBLIC_KEY)
      .then(
        (response) => {
          handleOnEmailSuccess(response);
        },
        (err) => {
          handleOnEmailFailure(err);
        }
      );
  };

  const handleOnEmailSuccess = (response) => {
    alert.success("Thanks for taking the time to contact me!");
    setFormContent(emptyFormContent);
    setSendingEmail(false);
  };

  const handleOnEmailFailure = (err) => {
    alert.error("Ohhh Nooo! Could you please try once again?");
    console.log("Error: " + err);
    setSendingEmail(false);
  };

  const handleInputsChange = (event) => {
    const { name, value } = event.target;
    setFormContent((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    sendEmail();
  };

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
          <form onSubmit={handleFormSubmit} className="contact-form">
            <div className="input-control">
              <input
                name="name"
                type={"text"}
                value={formContent.name}
                onChange={handleInputsChange}
                required
                placeholder="Your Name"
              />
            </div>
            <div className="input-control">
              <input
                name="email"
                type={"email"}
                value={formContent.email}
                onChange={handleInputsChange}
                required
                placeholder="Your Email"
              />
            </div>
            <div className="input-control">
              <input
                name="subject"
                type={"text"}
                value={formContent.subject}
                onChange={handleInputsChange}
                required
                placeholder="Enter Subject"
              />
            </div>
            <div className="input-control">
              <textarea
                name="message"
                cols="15"
                rows="8"
                placeholder="Message here..."
                onChange={handleInputsChange}
                value={formContent.message}
              />
            </div>
            <div className="submit-btn">
              <input type="submit" disabled={sendingEmail} value="Send!" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
