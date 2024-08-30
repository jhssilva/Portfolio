import React, { useState, createRef } from "react";
import MainTitle from "./MainTitle";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";

const Contacts = (props) => {
  const { isDarkMode } = props;
  const layoutModeClass = useState(isDarkMode ? "dark" : "light");
  const recaptchaRef = createRef();

  const YOUR_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID,
    YOUR_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    YOUR_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
    SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

  const emptyFormContent = () => {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      "g-recaptcha-response": "",
    };
  };

  const [formContent, setFormContent] = useState(emptyFormContent());
  const [sendingEmail, setSendingEmail] = useState(false);

  const sendEmail = () => {
    if (sendingEmail) return;

    if (formContent["g-recaptcha-response"] === "") {
      toast.info("Please confirm that you're a person!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: layoutModeClass,
      });

      return;
    }

    setSendingEmail(true);
    recaptchaRef.current.reset();

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
    toast.success("Thanks for taking the time to contact me!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: layoutModeClass,
    });
    setFormContent(emptyFormContent);
    setSendingEmail(false);
  };

  const handleOnEmailFailure = (err) => {
    toast.error("Ohhh Nooo! Could you please try once again?", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: layoutModeClass,
    });

    console.log("Error: ", err);
    setSendingEmail(false);
  };

  const handleInputsChange = (event) => {
    const { name, value } = event.target;
    setFormContent((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleOnChangeReCAPTCHA = (captchaValue) => {
    setFormContent((prev) => {
      return { ...prev, "g-recaptcha-response": captchaValue };
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
            <div className="input-control">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={SITE_KEY}
                onChange={handleOnChangeReCAPTCHA}
              />
            </div>
            <div className="submit-btn">
              <div className="submit-btn-container">
                <input
                  type="submit"
                  disabled={sendingEmail}
                  value="Send Message"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
